import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center px-6">
        <span className="magenta-label">404</span>
        <h1 className="font-heading text-5xl md:text-7xl font-bold mt-6 mb-4">
          Page Not Found
        </h1>
        <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center bg-magenta text-white px-8 py-3 font-semibold text-sm uppercase tracking-wider hover:bg-magenta-dark transition-colors min-h-[44px] rounded-lg"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
