"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center px-6">
        <span className="magenta-label">Error</span>
        <h1 className="font-heading text-5xl md:text-7xl font-bold mt-6 mb-4">
          Something Went Wrong
        </h1>
        <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
          An unexpected error occurred. Please try again.
        </p>
        <button
          onClick={reset}
          className="inline-flex items-center bg-magenta text-white px-8 py-3 font-semibold text-sm uppercase tracking-wider hover:bg-magenta-dark transition-colors min-h-[44px]"
        >
          Try Again
        </button>
      </div>
    </section>
  );
}
