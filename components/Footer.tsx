"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#e0e0e0]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          {/* Left: Copyright */}
          <div className="flex items-center gap-3">
            <span className="text-[#777777] text-xs">
              © 2026 Zorman d.o.o. Mojstrana
            </span>
          </div>

          {/* Center: Privacy policy link */}
          <Link
            href="/politika-zasebnosti"
            className="text-[#777777] text-xs hover:text-[#0a0a0a] transition-colors duration-200"
          >
            Politika zasebnosti
          </Link>

          {/* Right: Address */}
          <span className="text-[#777777] text-xs">
            Ulica Alojza Rabiča 36, 4281 Mojstrana
          </span>
        </div>
      </div>
    </footer>
  );
}
