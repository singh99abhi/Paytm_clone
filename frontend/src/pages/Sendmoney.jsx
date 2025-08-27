import { useSearchParams } from "react-router-dom";
import { Button } from "../components/Button";
import { Inputbox } from "../components/inputbox";
import { Profile } from "../components/Profile";
import axios from "axios";
import { useState } from "react";

export function Send() {
  const [search] = useSearchParams();
  const username = search.get("id");
  const first = username ? username[0].toUpperCase() : "?";
  const [amount, setAmount] = useState(0);

  const handleSend = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/accounts/transfer",
        {
          to: username,
          ammount:Number(amount), // ✅ fixed spelling
        },
        {
          headers: {
            authentication:localStorage.getItem("token"), // ✅ fixed header
          },
        }
      );
      alert("Transfer successful ✅");
      console.log(response.data);
    } catch (error) {
      alert("Transfer failed ❌");
      console.error(error);
    }
  };

  return (
    <div className="w-screen h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-[400px]">
        {/* Title */}
        <h1 className="text-2xl font-bold text-center mb-6">💸 Send Money</h1>

        {/* User Info */}
        <div className="flex items-center space-x-4 mb-6">
          <Profile label={first} />
          <div className="text-lg font-medium">{username}</div>
        </div>

        {/* Amount Input */}
        <label className="block text-gray-700 mb-2">Amount (₹)</label>
        <Inputbox
          onChange={(e) => setAmount(Number(e.target.value))}
          label={"Enter amount to send"}
          placeholder={"1000"}
          value={amount}
        />

        {/* Send Button */}
        <div className="mt-6">
          <Button onclick={handleSend} label={"Send Money"} />
        </div>
      </div>
    </div>
  );
}
