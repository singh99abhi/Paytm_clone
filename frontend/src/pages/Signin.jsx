import { Heading } from "../components/Heading";
import { Inputbox } from "../components/inputbox";
import { Subheading } from "../components/Subheading";
import { Buttonwaring } from "../components/Buttonwarning";
import { Button } from "../components/Button";
import axios from "axios";
import { useState } from "react";

export const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="bg-gradient-to-r from-blue-100 via-white to-blue-100 h-screen flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-xl w-96 p-6">
        {/* Debug (remove later if you don’t need) */}
        {/* <p className="text-xs text-gray-400">{username} | {password}</p> */}

        {/* Title */}
        <Heading label="Sign In" />

        {/* Subheading */}
        <Subheading label="Enter your credentials to access your account" />

        {/* Form Inputs */}
        <div className="space-y-4 mt-4">
          <Inputbox
            onChange={(e) => setUsername(e.target.value)}
            placeholder="abhi@gmail.com"
            label="Email"
            value={username}
          />
          <Inputbox
            onChange={(e) => setPassword(e.target.value)}
            placeholder="******"
            label="Password"
            type="password"
            value={password}
          />
        </div>

        {/* Buttons */}
        <div className="pt-6">
          <Button
            onclick={async () => {
              try {
                const response = await axios.post(
                  "http://localhost:3000/api/v1/user/signin",
                  {
                    username,
                    password,
                  }
                );
                localStorage.setItem("token", response.data.token);
                alert("Signin successful ✅");
              } catch (error) {
                alert("Invalid credentials ❌");
              }
            }}
            label="Sign In"
          />
        </div>

        <div className="pt-4">
          <Buttonwaring
            label="Don't have an account?"
            buttonText="Go to Sign Up"
            to="/signup"
          />
        </div>
      </div>
    </div>
  );
};
