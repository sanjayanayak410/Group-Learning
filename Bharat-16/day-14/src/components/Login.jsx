import React, { useState } from "react";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "test@example.com" && password === "password123") {
      onLogin({ email });
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <form onSubmit={handleSubmit} data-testid="login-form">
      <h2>Login</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <input
        data-testid="email-input"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        data-testid="password-input"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit" data-testid="login-btn">
        Login
      </button>
    </form>
  );
}
