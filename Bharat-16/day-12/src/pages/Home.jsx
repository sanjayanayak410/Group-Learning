import { useState } from "react";

export default function Home() {
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setError("Email is required");
  }

  return (
    <>
      <h1>Home</h1>

      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="email">Email address</label>
        <input id="email" type="email" aria-describedby="email-error" />

        {error && (
          <p id="email-error" role="alert">
            {error}
          </p>
        )}

        <button type="submit">Submit</button>
      </form>
    </>
  );
}
