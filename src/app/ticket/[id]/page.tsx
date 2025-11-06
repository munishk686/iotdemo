// File: src/app/create-ticket-basic/page.tsx
"use client";

import React, { useState } from "react";

const CreateTicketBasic = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (!email || !subject || !message) {
      setError("All fields are required.");
      return;
    }

    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isValidEmail) {
      setError("Please enter a valid email address.");
      return;
    }

    console.log({ email, subject, message });
    setSuccess(true);
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-6">
        <h1 className="text-2xl font-bold text-center text-blue-600 mb-4">
          Create Ticket
        </h1>
        <p className="text-center text-gray-500 mb-6 text-sm">
          Submit a quick issue report for your IoT device.
        </p>

        {error && <p className="text-red-500 text-sm mb-3 text-center">{error}</p>}
        {success && (
          <p className="text-green-600 text-sm mb-3 text-center">
            ✅ Ticket submitted successfully!
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Subject</label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Short issue title"
              className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Describe the issue..."
              className="w-full border rounded-lg px-3 py-2 text-sm h-24 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-colors"
          >
            Submit Ticket
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateTicketBasic;
