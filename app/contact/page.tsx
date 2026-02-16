import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Mark Sutcliffe for UX strategy, experience design, and branding projects.",
};

export default function ContactPage() {
  return <ContactSection />;
}
