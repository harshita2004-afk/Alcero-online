import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-ivory/80">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <p className="font-display text-2xl font-semibold text-ivory mb-1">KashmiraLiving</p>
            <p className="text-xs uppercase tracking-[0.2em] text-rose mb-4 font-body">Comfort · Style · Home</p>
            <p className="text-sm leading-relaxed text-ivory/60 mb-6 max-w-xs">
              A growing lifestyle brand offering quality nightwear and home furnishing products that combine comfort, style, and affordability — rooted in India, made for every home.
            </p>
            {/* Social */}
            <div className="flex gap-4">
              {["Instagram", "Facebook", "Pinterest"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="text-xs uppercase tracking-wider text-ivory/40 hover:text-rose transition-colors duration-200"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-xs uppercase tracking-[0.15em] text-rose font-medium mb-4">Explore</p>
            <ul className="space-y-2">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/products", label: "Products" },
                { to: "/contact", label: "Contact" },
                { to: "/policies", label: "Policies" },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-sm text-ivory/60 hover:text-rose transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs uppercase tracking-[0.15em] text-rose font-medium mb-4">Get in Touch</p>
            <ul className="space-y-3 text-sm text-ivory/60">
              <li className="flex gap-2">
                <span className="text-rose mt-0.5">✉</span>
                <a href="mailto:hello@kashmiraliving.in" className="hover:text-rose transition-colors">
                  hello@kashmiraliving.in
                </a>
              </li>
              <li className="flex gap-2">
                <span className="text-rose mt-0.5">☎</span>
                <a href="tel:+919876543210" className="hover:text-rose transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex gap-2">
                <span className="text-rose mt-0.5">📍</span>
                <span>42, Textile Market, Surat, Gujarat – 395003</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-ivory/10 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-ivory/30">
          <p>© 2024 KashmiraLiving. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/policies" className="hover:text-rose/70 transition-colors">Privacy Policy</Link>
            <Link to="/policies" className="hover:text-rose/70 transition-colors">Shipping Policy</Link>
            <Link to="/policies" className="hover:text-rose/70 transition-colors">Returns</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
