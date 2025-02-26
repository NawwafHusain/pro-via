"use client";
import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { cn } from "@/lib/utils";

export default function EmailCollect({
  className,
  classNameInput,
  classNameButton,
}) {
  const [email, setEmail] = useState();
  const [submitting, setSubmitting] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    toast.loading("Saving email...");
    const res = await fetch("/api/emailList", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    console.log("got a response", res.status, res.body);
    const data = await res.json();
    if (data.error) {
      toast.dismiss();
      toast.error(data.error);
      setSubmitting(false);
    } else {
      toast.dismiss();
      toast.success(data.message);
      setSubmitting(false);
    }
    console.log("data in client", data);
  };

  return (
    <form className={cn("flex gap-4", className)} onSubmit={handleSubmit}>
      <input
        name="email"
        type="email"
        placeholder="Email"
        className={cn("px-4 lg:w-[20vw] text-black", classNameInput)}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button
        type="submit"
        disabled={submitting}
        className={cn(
          `py-3 px-3 lg:px-8 font-ethn bg-white font-light text-black lg:text-xl hover:scale-105 transition-all duration-300  disabled:opacity-50 disabled:cursor-not-allowed`,
          classNameButton
        )}
      >
        submit
      </button>
    </form>
  );
}
