import Link from "next/link";

const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com/in/marksutcliffe", icon: "linkedin" },
  { label: "Dribbble", href: "https://dribbble.com/marksutcliffe", icon: "dribbble" },
  { label: "Behance", href: "https://behance.net/marksutcliffe", icon: "behance" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <p className="font-heading text-lg font-bold">MARK SUTCLIFFE</p>
            <p className="text-sm text-gray-400 mt-1">UX Strategy & Design</p>
          </div>

          <div className="flex items-center gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-magenta transition-colors text-sm font-medium uppercase tracking-wide"
                aria-label={`${link.label} (opens in new tab)`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <a
              href="/Mark_Sutcliffe_Resume.pdf"
              download
              className="text-sm font-medium uppercase tracking-wide text-gray-400 hover:text-magenta transition-colors"
              aria-label="Download resume as PDF"
            >
              Resume
            </a>
            <Link
              href="/work"
              className="text-sm font-medium uppercase tracking-wide text-gray-400 hover:text-magenta transition-colors"
            >
              Projects
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} Mark Sutcliffe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
