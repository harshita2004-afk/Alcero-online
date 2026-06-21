import { useState } from "react";

export default function ProductCard({ product }) {
  const [activeVariant, setActiveVariant] = useState(0);
  const [activeImage, setActiveImage] = useState(0);

  const currentImage = product.hasVariants
    ? product.variants[activeVariant].images[activeImage]
    : product.image;

  return (
    <div className="product-card bg-white rounded-2xl overflow-hidden border border-blush/60 group">

      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/5]">
        <img
          src={currentImage}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {product.tag && (
          <span className="absolute top-3 left-3 bg-rose text-ivory text-[10px] uppercase tracking-[0.15em] font-medium px-3 py-1 rounded-full">
            {product.tag}
          </span>
        )}
        {product.price && (
          <span className="absolute top-3 right-3 bg-charcoal/80 text-ivory text-[11px] font-medium px-2.5 py-1 rounded-full">
            ₹{product.price.toLocaleString("en-IN")}
          </span>
        )}

        {/* Small thumbnails at bottom of image */}
        {product.hasVariants && (
          <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5">
            {product.variants[activeVariant].images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImage(idx)}
                className={`w-7 h-7 rounded-md overflow-hidden border-2 transition-all ${
                  activeImage === idx ? "border-ivory" : "border-transparent opacity-60"
                }`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-4">
        <p className="text-[10px] uppercase tracking-[0.2em] text-muted mb-1">{product.subcategory}</p>
        <h3 className="font-display text-base font-medium text-charcoal mb-1.5">{product.name}</h3>
        <p className="text-xs text-muted/80 leading-relaxed line-clamp-2">{product.description}</p>

        {/* Colour swatches */}
        {product.hasVariants && (
          <div className="mt-3">
            <div className="flex justify-between mb-1.5">
              <span className="text-[10px] uppercase tracking-wider text-muted">Colour</span>
              <span className="text-[11px] text-charcoal font-medium">
                {product.variants[activeVariant].color}
              </span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {product.variants.map((variant, idx) => (
               <button
  key={idx}
  onClick={() => {
    setActiveVariant(idx);
    setActiveImage(0);
  }}
  title={variant.color}
  className={`w-8 h-8 rounded-full p-[3px] transition-all ${
    activeVariant === idx
      ? "bg-charcoal scale-110"
      : "bg-gray-300"
  }`}
>
  <div
    className="w-full h-full rounded-full"
    style={{
      background: variant.hex2
        ? `linear-gradient(135deg, ${variant.hex} 50%, ${variant.hex2} 50%)`
        : variant.hex,
    }}
  />
</button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}