import { useState } from "react";
import Input from "./ui/Input";
import Button from "./ui/Button";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent Successfully!");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md bg-white p-8 rounded-2xl shadow-2xl space-y-5"
    >
      <h2 className="text-2xl font-bold text-center text-indigo-600">
        Contact Me
      </h2>

      <Input
        label="Full Name"
        id="name"
        name="name"
        placeholder="Enter your name"
        value={formData.name}
        onChange={handleChange}
      />

      <Input
        label="Email"
        id="email"
        name="email"
        type="email"
        placeholder="Enter your email"
        value={formData.email}
        onChange={handleChange}
      />

      <textarea
        name="message"
        placeholder="Write your message..."
        value={formData.message}
        onChange={handleChange}
        className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-indigo-400 outline-none"
        rows="4"
      />

      <Button type="submit">Send Message</Button>
    </form>
  );
}
