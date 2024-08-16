import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        {/* Top area: Blocks */}
        <div className="grid gap-10 py-8 border-t border-gray-700 sm:grid-cols-2 grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
          {/* 1st block */}
          <div className="space-y-4">
            <div className="text-xl font-semibold">Company Logo</div>
            <p className="text-sm text-gray-400">
              Your tagline or description here.
            </p>
            <div className="text-sm text-gray-400">@kemenkop</div>
          </div>

          {/* 2nd block */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Product</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link className="hover:text-gray-300" href="#0">
                  Product 1
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-300" href="#0">
                  Product 2
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-300" href="#0">
                  Product 3
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-300" href="#0">
                  Product 4
                </Link>
              </li>
            </ul>
          </div>

          {/* 3rd block */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Company</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link className="hover:text-gray-300" href="#0">
                  About Us
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-300" href="#0">
                  Careers
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-300" href="#0">
                  Press
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-300" href="#0">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* 4th block */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Resources</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link className="hover:text-gray-300" href="#0">
                  Community
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-300" href="#0">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-300" href="#0">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* 5th block */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Follow Us</h3>
            <ul className="flex space-x-4 text-gray-400">
              <li>
                <Link
                  className="hover:text-gray-300"
                  href="#0"
                  aria-label="Twitter"
                >
                  <svg
                    className="h-6 w-6 fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M23 3a10.5 10.5 0 0 1-3 1.4A4.3 4.3 0 0 0 22.4 2a10.6 10.6 0 0 1-3.3 1.3A4.3 4.3 0 0 0 16 6.8a12.3 12.3 0 0 1-8.9-4.5A4.2 4.2 0 0 0 7 9a4.2 4.2 0 0 1-1.9-.5v.1A4.3 4.3 0 0 0 7.6 13a4.3 4.3 0 0 1-1.9.1A4.3 4.3 0 0 0 8 18a8.7 8.7 0 0 1-5.4 1.9A12.4 12.4 0 0 0 12 22a12.2 12.2 0 0 0 12-12c0-.2 0-.3-.1-.5A8.6 8.6 0 0 0 23 3z"></path>
                  </svg>
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-gray-300"
                  href="#0"
                  aria-label="Medium"
                >
                  <svg
                    className="h-6 w-6 fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M18 4.5v15A2.5 2.5 0 0 1 15.5 22H8.5A2.5 2.5 0 0 1 6 19.5V4.5A2.5 2.5 0 0 1 8.5 2H15.5A2.5 2.5 0 0 1 18 4.5zm-2.5-.75H8.5v16h7v-16zm-7 0v-2h7v2h-7z"></path>
                  </svg>
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-gray-300"
                  href="#0"
                  aria-label="Github"
                >
                  <svg
                    className="h-6 w-6 fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12c0 4.418 2.865 8.165 6.84 9.5.5.092.68-.22.68-.487 0-.242-.01-.975-.014-1.728-2.788.604-3.373-1.343-3.373-1.343-.454-1.15-1.109-1.458-1.109-1.458-.906-.639.069-.627.069-.627 1.002.071 1.595 1.032 1.595 1.032.891 1.53 2.336 1.089 2.9.832.092-.645.349-1.089.635-1.338-2.266-.26-4.64-1.133-4.64-5.042 0-1.112.398-2.019 1.051-2.732-.106-.26-.456-1.304.1-2.711 0 0 .85-.273 2.782 1.036a9.657 9.657 0 0 1 2.542-.343c.86.004 1.73.116 2.542.343 1.933-1.309 2.782-1.036 2.782-1.036.556 1.407.207 2.451.1 2.711.653.713 1.051 1.62 1.051 2.732 0 3.923-2.377 4.78-4.651 5.037.36.309.682.921.682 1.854 0 1.335-.013 2.411-.013 2.737 0 .27.177.58.683.484C21.138 20.165 24 16.418 24 12 24 6.48 19.52 2 12 2z"></path>
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center text-gray-500 text-sm py-4 border-t border-gray-700">
          <div className="relative mt-5">
            <span className="absolute inset-x-0 bottom-0 text-center text-xs text-gray-400">
              @kemenkop
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
