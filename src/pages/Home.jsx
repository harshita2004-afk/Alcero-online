import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import SectionDivider from "../components/SectionDivider";
import { featuredProducts, categories } from "../data/products";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Categories */}
      <section className="py-20 bg-blush/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <SectionDivider label="Shop by Category" />
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-charcoal">
              What We Offer
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.name}
                to={`/products?category=${cat.slug}`}
                className="group relative overflow-hidden rounded-2xl aspect-square bg-blush"
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="font-display text-ivory font-medium text-base leading-snug">
                    {cat.name}
                  </p>
                  <p className="text-ivory/60 text-[11px] mt-0.5 leading-snug hidden md:block">
                    {cat.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-ivory">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <SectionDivider label="Our Story" />
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-charcoal mb-5">
              Made with Care,<br />
              <span className="italic text-rose">Worn with Love</span>
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Alcero was born from a simple belief: that comfort at home shouldn't be a compromise. We are a growing lifestyle brand focused on providing breathable nightwear and quality home furnishing products that combine style, comfort, and everyday affordability.
            </p>
            <p className="text-muted leading-relaxed mb-8">
              Rooted in India's rich textile heritage and guided by modern sensibility, every product we make is chosen with care — for fabric, for fit, and for the woman who wears it.
            </p>
            <Link
              to="/about"
              className="inline-block text-sm font-medium text-rose border-b border-rose pb-0.5 hover:text-rose-deep hover:border-rose-deep transition-colors duration-200"
            >
              Read our story →
            </Link>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80"
              alt="Soft home interior"
              className="rounded-2xl w-full aspect-[4/5] object-cover shadow-lg"
            />
            <div className="absolute -bottom-6 -left-6 bg-rose/10 border border-rose/20 rounded-2xl p-5 backdrop-blur hidden md:block">
              <p className="font-display text-3xl font-semibold text-charcoal">3+</p>
              <p className="text-xs text-muted uppercase tracking-wider mt-1">Years of Craftsmanship</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-blush/20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <SectionDivider label="Featured" />
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-charcoal mb-3">
              Our Favourites
            </h2>
            <p className="text-muted text-sm max-w-md mx-auto">
              Handpicked products loved by our customers for their quality, comfort, and lasting style.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/products"
              className="inline-block border border-rose text-rose text-sm font-medium tracking-wide px-8 py-3 rounded-full hover:bg-rose hover:text-ivory transition-colors duration-200"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="py-10 bg-charcoal">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { icon: "🌿", title: "Natural Fabrics", sub: "100% cotton & blends" },
            { icon: "🚚", title: "Pan India Delivery", sub: "Fast & reliable shipping" },
            { icon: "🔄", title: "Easy Returns", sub: "Hassle-free 7-day returns" },
            { icon: "💬", title: "Dedicated Support", sub: "Mon–Sat, 9am–7pm" },
          ].map((item) => (
            <div key={item.title} className="flex flex-col items-center gap-2">
              <span className="text-2xl">{item.icon}</span>
              <p className="font-display text-ivory font-medium text-sm">{item.title}</p>
              <p className="text-ivory/40 text-xs">{item.sub}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
