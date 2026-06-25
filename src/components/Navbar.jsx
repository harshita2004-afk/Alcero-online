import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { cart } = useCart();

  
  console.log("Cart:", cart);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/products", label: "Products" },
    { to: "/contact", label: "Contact" },
    { to: "/policies", label: "Policies" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-ivory/95 backdrop-blur shadow-sm" : "bg-ivory/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex flex-col leading-none">
          <span className="font-display text-2xl font-semibold text-charcoal tracking-wide">
            ALCERO
          </span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-muted font-body">
            Comfort · Style · Home
          </span>
        </Link>

        
       {/* Desktop Nav */}
<nav className="hidden md:flex items-center gap-8">
  {navItems.map(({ to, label }) => (
    <NavLink
      key={to}
      to={to}
      end={to === "/"}
      className={({ isActive }) =>
        `nav-link text-sm font-body font-medium tracking-wide transition-colors duration-200 ${
          isActive ? "text-rose active" : "text-charcoal hover:text-rose"
        }`
      }
    >
      {label}
    </NavLink>
  ))}

  <Link
    to="/cart"
    className="relative text-charcoal hover:text-rose transition"
  >
    🛒

    {cart.reduce((total, item) => total + item.quantity, 0) > 0 && (
      <span className="absolute -top-2 -right-3 bg-rose text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
        {cart.reduce((total, item) => total + item.quantity, 0)}
      </span>
    )}
  </Link>
</nav>

        {/* Mobile Hamburger */}
       <div className="md:hidden flex items-center gap-4">
  <Link
    to="/cart"
    className="relative text-charcoal"
  >
    🛒

    {cart.reduce((total, item) => total + item.quantity, 0) > 0 && (
      <span className="absolute -top-2 -right-3 bg-rose text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
        {cart.reduce((total, item) => total + item.quantity, 0)}
      </span>
    )}
  </Link>

  <button
    className="flex flex-col gap-1.5 p-2"
    onClick={() => setMenuOpen(!menuOpen)}
    aria-label="Toggle menu"
  >
    <span className={`block w-5 h-0.5 bg-charcoal transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
    <span className={`block w-5 h-0.5 bg-charcoal transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
    <span className={`block w-5 h-0.5 bg-charcoal transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
  </button>
</div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-ivory border-t border-blush px-6 py-4 flex flex-col gap-4">
          {navItems.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `text-sm font-medium tracking-wide py-1 ${
                  isActive ? "text-rose" : "text-charcoal"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}
