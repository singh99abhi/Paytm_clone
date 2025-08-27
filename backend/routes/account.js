import express from "express";
import { account, User } from "../db.js";
import authmiddleware from "../middleware.js";

const accrouter = express.Router();

accrouter.get("/balance", authmiddleware, async (req, res) => {
  const userAccount = await account.findOne({ userId: req.userId });
  res.status(200).json({ balance: userAccount?.balance ?? 0 });
});

accrouter.post("/transfer", authmiddleware, async (req, res) => {
  let { ammount, to } = req.body;

  // Convert amount to number
  ammount = Number(ammount);
  if (isNaN(ammount) || ammount <= 0) {
    return res.status(400).json({ message: "Invalid amount" });
  }

  try {
    const senderAccount = await account.findOne({ userId: req.userId });
    if (!senderAccount || senderAccount.balance < ammount) {
      return res.status(400).json({ message: "Insufficient balance" });
    }

    const receiverUser = await User.findOne({ username: to });
    if (!receiverUser) {
      return res.status(400).json({ message: "Invalid account to send to" });
    }

    // Update balances
    senderAccount.balance -= ammount;
    await senderAccount.save();

    const receiverAccount = await account.findOne({ userId: receiverUser._id });
    receiverAccount.balance += ammount;
    await receiverAccount.save();

    return res.status(200).json({ message: "Transaction successful" });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

export { accrouter };
