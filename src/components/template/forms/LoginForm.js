"use client";
import { useProviderContext } from "@/context/Provider";
import { useRouter } from "next/navigation";
import React, { useReducer, useState } from "react";

function LoginForm() {
  const { setUser, setIsUserLogined } = useProviderContext();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const APIURL = process.env.NEXT_PUBLIC_API;
  const handleLogin = async () => {
    try {
      const response = await fetch(`${APIURL}/auth/signin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      console.log("🚀 ~ handleLogin ~ data:", data);
      if (data.success) {
        setUser(data.data);
        setIsUserLogined(true);
        router.push("/");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log("🚀 ~ handleLogin ~ error:", error);
    } finally {
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
    // setUser({ email: email, name: userName });
    // setIsUserLogined(true);
    // router.push("/");
  };
  const goToSignup = () => {
    router.push("/");
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block mb-1 font-medium text-gray-700">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium text-gray-700">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
        />
      </div>

      <button
        type="submit"
        className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        Login
      </button>

      <p className="text-center">
        Don&apos;t have an account?{" "}
        <button
          type="button"
          className="text-blue-600 hover:underline"
          onClick={goToSignup}
        >
          Sign Up
        </button>
      </p>
    </form>
  );
}

export default LoginForm;