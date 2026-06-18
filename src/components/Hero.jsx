import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-ivory">
      {/* Background image + overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1600&q=80"
          alt="Home interior with soft textiles"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ivory/95 via-ivory/80 to-ivory/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16">
        <div className="max-w-xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6 animate-fade-up">
            <span className="w-8 h-px bg-rose" />
            <span className="text-xs uppercase tracking-[0.25em] text-rose font-medium">
              Lifestyle · Comfort · Home
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-5xl md:text-6xl font-semibold text-charcoal leading-tight mb-6 animate-fade-up-delay">
            Comfort for Every{" "}
            <span className="italic text-rose">Home,</span>
            <br />
            Style for Every{" "}
            <span className="italic text-rose">Woman.</span>
          </h1>

          {/* Sub */}
          <p className="text-base text-muted leading-relaxed mb-10 animate-fade-up-delay-2 max-w-md">
            Thoughtfully crafted nightwear and home furnishings that bring softness, warmth, and beauty into your everyday life.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 animate-fade-up-delay-2">
            <Link
              to="/products"
              className="inline-block bg-rose text-ivory text-sm font-medium tracking-wide px-8 py-3.5 rounded-full hover:bg-rose-deep transition-colors duration-200"
            >
              Explore Products
            </Link>
            <Link
              to="/contact"
              className="inline-block border border-charcoal/30 text-charcoal text-sm font-medium tracking-wide px-8 py-3.5 rounded-full hover:border-rose hover:text-rose transition-colors duration-200"
            >
              Contact Us
            </Link>
          </div>

          {/* Trust signals */}
          <div className="mt-14 flex gap-8 text-xs text-muted tracking-wide">
            {["100% Cotton", "Pan India Delivery", "Easy Returns"].map((tag) => (
              <div key={tag} className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-rose" />
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
