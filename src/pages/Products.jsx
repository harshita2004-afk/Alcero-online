import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import SectionDivider from "../components/SectionDivider";
import { products } from "../data/products";

const tabs = [
  { label: "All", value: "all" },
  { label: "Women's Nightwear", value: "womens-nightwear" },
  { label: "Home Furnishing", value: "home-furnishing" },
];

const subcategories = {
  all: [],
  "womens-nightwear": ["Cotton Nighties", "Printed Nightwear", "Lounge Wear"],
  "home-furnishing": ["Bedsheets", "Cushion Covers", "Curtains", "Home Decor"],
};

export default function Products() {
  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState("all");
  const [activeSubcat, setActiveSubcat] = useState(null);

  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat && (cat === "womens-nightwear" || cat === "home-furnishing")) {
      setActiveTab(cat);
    }
  }, [searchParams]);

  const filtered = products.filter((p) => {
    if (activeTab !== "all" && p.category !== activeTab) return false;
    if (activeSubcat && p.subcategory !== activeSubcat) return false;
    return true;
  });

  return (
    <div className="pt-20">
      {/* Banner */}
      <div className="bg-blush/40 py-20 text-center">
        <p className="text-xs uppercase tracking-[0.25em] text-rose font-medium mb-3">Our Collection</p>
        <h1 className="font-display text-4xl md:text-5xl font-semibold text-charcoal">Products</h1>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Tab filter */}
        <div className="flex justify-center gap-3 mb-8 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => { setActiveTab(tab.value); setActiveSubcat(null); }}
              className={`text-sm font-medium px-6 py-2 rounded-full border transition-all duration-200 ${
                activeTab === tab.value
                  ? "bg-rose text-ivory border-rose"
                  : "border-charcoal/20 text-charcoal hover:border-rose hover:text-rose"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Subcategory pills */}
        {activeTab !== "all" && (
          <div className="flex justify-center gap-2 mb-10 flex-wrap">
            <button
              onClick={() => setActiveSubcat(null)}
              className={`text-xs font-medium px-4 py-1.5 rounded-full border transition-all duration-200 ${
                !activeSubcat
                  ? "bg-charcoal text-ivory border-charcoal"
                  : "border-charcoal/20 text-muted hover:border-charcoal/40"
              }`}
            >
              All
            </button>
            {subcategories[activeTab].map((s) => (
              <button
                key={s}
                onClick={() => setActiveSubcat(s)}
                className={`text-xs font-medium px-4 py-1.5 rounded-full border transition-all duration-200 ${
                  activeSubcat === s
                    ? "bg-charcoal text-ivory border-charcoal"
                    : "border-charcoal/20 text-muted hover:border-charcoal/40"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        )}

        {/* Section heading */}
        {activeTab === "all" && (
          <>
            {/* Women's Nightwear section */}
            <div className="mb-12">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-rose font-medium mb-1">Collection</p>
                  <h2 className="font-display text-2xl font-semibold text-charcoal">Women's Nightwear</h2>
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-[10px] uppercase tracking-wider text-muted">Cotton Nighties</span>
                  <span className="text-[10px] uppercase tracking-wider text-muted">Printed Nightwear</span>
                  <span className="text-[10px] uppercase tracking-wider text-muted">Lounge Wear</span>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                {products.filter(p => p.category === "womens-nightwear").map(p => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>

            <SectionDivider />

            {/* Home Furnishing section */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-rose font-medium mb-1">Collection</p>
                  <h2 className="font-display text-2xl font-semibold text-charcoal">Home Furnishing</h2>
                </div>
                <div className="flex flex-col gap-0.5 text-right">
                  <span className="text-[10px] uppercase tracking-wider text-muted">Bedsheets</span>
                  <span className="text-[10px] uppercase tracking-wider text-muted">Cushion Covers</span>
                  <span className="text-[10px] uppercase tracking-wider text-muted">Curtains · Decor</span>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                {products.filter(p => p.category === "home-furnishing").map(p => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>
          </>
        )}

        {/* Filtered grid */}
        {activeTab !== "all" && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {filtered.length > 0 ? filtered.map(p => (
              <ProductCard key={p.id} product={p} />
            )) : (
              <div className="col-span-4 text-center py-16 text-muted">
                <p className="font-display text-xl text-charcoal mb-2">No products found</p>
                <p className="text-sm">Try selecting a different category.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
