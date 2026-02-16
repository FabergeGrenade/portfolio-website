"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  email: z.string().min(1, "Email is required").email("Please enter a valid email"),
  subject: z.string().max(200).optional(),
  message: z.string().min(1, "Message is required").max(5000),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to send");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  const inputClasses =
    "w-full bg-transparent border border-gray-600 px-4 py-3 text-white placeholder:text-gray-500 focus:border-magenta focus:outline-none transition-colors";

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div aria-live="polite" className="sr-only">
        {status === "success" && "Your message has been sent successfully."}
        {status === "error" && "There was an error sending your message. Please try again."}
      </div>

      <div>
        <label htmlFor="contact-name" className="sr-only">
          Name
        </label>
        <input
          id="contact-name"
          type="text"
          placeholder="Name *"
          className={inputClasses}
          aria-required="true"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
          {...register("name")}
        />
        {errors.name && (
          <p id="name-error" className="text-magenta text-sm mt-1" role="alert">
            {errors.name.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="contact-email" className="sr-only">
          Email
        </label>
        <input
          id="contact-email"
          type="email"
          placeholder="Email *"
          className={inputClasses}
          aria-required="true"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          {...register("email")}
        />
        {errors.email && (
          <p id="email-error" className="text-magenta text-sm mt-1" role="alert">
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="contact-subject" className="sr-only">
          Subject
        </label>
        <input
          id="contact-subject"
          type="text"
          placeholder="Subject"
          className={inputClasses}
          {...register("subject")}
        />
      </div>

      <div>
        <label htmlFor="contact-message" className="sr-only">
          Message
        </label>
        <textarea
          id="contact-message"
          placeholder="Message *"
          rows={5}
          className={`${inputClasses} resize-vertical`}
          aria-required="true"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          {...register("message")}
        />
        {errors.message && (
          <p id="message-error" className="text-magenta text-sm mt-1" role="alert">
            {errors.message.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center gap-2 bg-magenta text-white px-8 py-3 font-semibold text-sm uppercase tracking-wider hover:bg-magenta-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed min-h-[44px] min-w-[44px]"
      >
        {status === "loading" ? (
          <>
            <svg
              className="animate-spin h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </button>

      {status === "success" && (
        <p className="text-green-400 text-sm font-medium">
          Thank you! Your message has been sent successfully.
        </p>
      )}
      {status === "error" && (
        <p className="text-magenta text-sm font-medium">
          Something went wrong. Please try again later.
        </p>
      )}
    </form>
  );
}
