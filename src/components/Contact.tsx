"use client";

import { useState } from "react";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData); // ← bisa diganti kirim ke API
    alert("Pesan berhasil dikirim (simulasi)");
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100"
    >
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-6">Hubungi Saya</h2>
        <p className="text-lg mb-6">Kirim pesan langsung melalui form berikut:</p>

        <form onSubmit={handleSubmit} className="text-left space-y-4">
          <div>
            <label className="block mb-1" htmlFor="name">Nama</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              onChange={handleChange}
              className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100"
            />
          </div>
          <div>
            <label className="block mb-1" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              onChange={handleChange}
              className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100"
            />
          </div>
          <div>
            <label className="block mb-1" htmlFor="message">Pesan</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              onChange={handleChange}
              className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100"
            />
          </div>
          <button
            type="submit"
            className="w-full mt-4 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Kirim
          </button>
        </form>

        <div className="mt-8 flex justify-center gap-6 text-blue-600 dark:text-blue-400 text-2xl">
          <a href="mailto:afif@example.com"><Mail size={28} /></a>
          <a href="https://github.com/username" target="_blank"><Github size={28} /></a>
          <a href="https://linkedin.com/in/username" target="_blank"><Linkedin size={28} /></a>
        </div>
      </div>
    </section>
  );
}
