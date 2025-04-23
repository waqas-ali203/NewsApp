"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function SignupForm({}) {
  const router = useRouter();
  const apiUrl = process.env.NEXT_PUBLIC_API;
  console.log("🚀 ~ SignupForm ~ apiUrl:", apiUrl);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSignup = async () => {
    try {
      console.log("email", email);
      console.log("password", password);
      setLoading(true);
      const response = await fetch(`${apiUrl}/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      // const response = await fetch(,{
      //   method: "POST",
      //   url: `https://api-assessment-task.vercel.app/auth/signup`,
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({ email, password }),
      // });
      const data = await response.json();
      console.log("🚀 ~ handleSignup ~ data:", data);
      if (data.success) {
        router.push("/login");
        setEmail("")
        setPassword("")
        setConfirmPassword("")
      } else {
        alert(data.message);
      }

      
    } catch (error) {
      console.log("🚀 ~ handleSignup ~ error:", error);
    } finally {
      setLoading(false);
    }
  };
  const goToLogin = () => {};

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignup();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-8">
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

      <div>
        <label className="block mb-1 font-medium text-gray-700">
          Confirm Password
        </label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
        />
      </div>

      <button
        type="submit"
        className="w-full py-2 px-4 bg-green-600 text-white rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-300"
      >
        Sign Up
      </button>

      <p className="text-center">
        Already have an account?{" "}
        <button
          type="button"
          className="text-blue-600 hover:underline"
          onClick={goToLogin}
        >
          Login
        </button>
      </p>
    </form>
  );
}

export default SignupForm;