"use client";

import Image from "next/image";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section className="bg-dark-gray text-white py-20 md:py-28" aria-labelledby="contact-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center">
          <div className="w-full md:w-2/5">
            <div className="relative aspect-[3/4] max-w-sm mx-auto md:mx-0 overflow-hidden rounded-2xl">
              <Image
                src="/images/contact-hands.jpg"
                alt="Mark Sutcliffe adjusting cufflinks"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 80vw, 30vw"
              />
            </div>
          </div>

          <div className="w-full md:w-3/5">
            <span className="magenta-label">Get In Touch</span>
            <h2 id="contact-heading" className="font-heading text-3xl md:text-5xl font-bold mt-4 mb-2">
              Let&apos;s Work Together
            </h2>
            <div className="w-16 h-1 bg-magenta rounded mb-8" />
            <p className="text-gray-300 mb-8 leading-relaxed max-w-lg">
              Have a project in mind? I&apos;d love to hear about it. Drop me a message
              and let&apos;s discuss how I can help bring your vision to life.
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
