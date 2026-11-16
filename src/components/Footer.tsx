
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-20 bg-[#071426] text-slate-300">

      {/* Newsletter */}
      <div className="border-b border-blue-400/15">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-12 md:flex-row">

          <div>
            <h2 className="text-2xl font-black text-white">
              Stay Connected with{" "}
              <span className="text-blue-400">ElectroShop</span>
            </h2>
            <p className="mt-2 text-sm text-slate-400">
              Get the latest tech news and exclusive offers.
            </p>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex w-full max-w-md rounded-xl border border-blue-400/20 bg-[#10233b] p-1"
          >
            <input
              type="email"
              required
              placeholder="Enter your email address"
              className="min-w-0 flex-1 bg-transparent px-4 text-sm text-white outline-none placeholder:text-slate-500"
            />
            <button
              type="submit"
              className="rounded-lg bg-blue-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-400"
            >
              Subscribe
            </button>
          </form>

        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">

        {/* Brand */}
        <div>
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/15 text-blue-400 ring-1 ring-blue-400/30">
              <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M3 13v-2a9 9 0 0 1 18 0v2" />
                <rect x="2" y="11" width="4" height="7" rx="2" />
                <rect x="18" y="11" width="4" height="7" rx="2" />
                <path d="M20 18a4 4 0 0 1-4 4h-2" />
              </svg>
            </div>
            <h2 className="text-2xl font-black text-white">
              Electro<span className="text-blue-400">Shop</span>
            </h2>
          </Link>

          <p className="mt-5 max-w-xs text-sm leading-7 text-slate-400">
            Discover the latest technology and upgrade your digital lifestyle
            with quality electronic products.
          </p>

          <div className="mt-6 flex gap-3">
            {["Instagram", "Telegram", "YouTube"].map((social) => (
              <a
                key={social}
                href="#"
                aria-label={social}
                className="rounded-lg border border-blue-400/20 bg-[#10233b] px-3 py-2 text-xs transition hover:border-blue-400 hover:bg-blue-500 hover:text-white"
              >
                {social}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-6 text-lg font-bold text-white">
            Quick Links
          </h3>
          <ul className="space-y-4 text-sm">
            <li><Link to="/" className="transition hover:text-blue-400">Home</Link></li>
            <li><Link to="/categorys" className="transition hover:text-blue-400">All Categories</Link></li>
            <li><Link to="/about" className="transition hover:text-blue-400">About Us</Link></li>
            <li><Link to="/contact" className="transition hover:text-blue-400">Contact Us</Link></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="mb-6 text-lg font-bold text-white">
            Categories
          </h3>
          <ul className="space-y-4 text-sm">
            <li><Link to="/categorys/Headphones" className="transition hover:text-blue-400">Headphones</Link></li>
            <li><Link to="/categorys/Accessories" className="transition hover:text-blue-400">Accessories</Link></li>
            <li><Link to="/categorys/Speackers" className="transition hover:text-blue-400">Speakers</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-6 text-lg font-bold text-white">
            Contact Information
          </h3>

          <div className="space-y-5 text-sm">

            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M4 5h16v14H4z" />
                  <path d="m4 7 8 6 8-6" />
                </svg>
              </span>
              <span>support@electroshop.com</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z" />
                </svg>
              </span>
              <span>+1 234 567 890</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
              </span>
              <span>Online Store - Worldwide</span>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-400/15">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-center text-xs text-slate-500 sm:flex-row">
          <p>
            © {new Date().getFullYear()} ElectroShop. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link to="/privacy" className="transition hover:text-blue-400">
              Privacy Policy
            </Link>
            <Link to="/terms" className="transition hover:text-blue-400">
              Terms & Conditions
            </Link>
          </div>

          <p>
            Designed with <span className="text-blue-400">♥</span> for tech lovers
          </p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
