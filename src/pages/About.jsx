import SectionDivider from "../components/SectionDivider";

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero banner */}
      <div className="relative bg-blush/40 py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1600&q=80"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-rose font-medium mb-4">Who We Are</p>
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-charcoal">
            Our Story
          </h1>
        </div>
      </div>

      {/* Our Story */}
      <section className="py-20 bg-ivory">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <SectionDivider label="How We Started" />
            <h2 className="font-display text-3xl font-semibold text-charcoal mb-5">
              Born from a love of<br />
              <span className="italic text-rose">everyday comfort</span>
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              KashmiraLiving was founded in 2021 in Surat, Gujarat — the textile capital of India. What began as a small family venture sourcing premium cotton fabrics has grown into a brand trusted by thousands of women across the country.
            </p>
            <p className="text-muted leading-relaxed">
              Our founder, inspired by her grandmother's handwoven cotton sarees, set out to recreate that feeling of home — soft, familiar, and beautifully simple — in nightwear and home furnishings that suit the modern Indian woman.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=500&q=80"
              alt="Soft bedding"
              className="rounded-xl w-full aspect-square object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1594938298603-c8148c4b4ae4?w=500&q=80"
              alt="Cotton nightwear"
              className="rounded-xl w-full aspect-square object-cover mt-6"
            />
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-blush/30">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <SectionDivider label="Our Mission" />
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-charcoal mb-6">
            Making comfort accessible to every woman
          </h2>
          <p className="text-muted leading-relaxed max-w-2xl mx-auto mb-14">
            We are a growing lifestyle brand focused on providing comfortable nightwear and quality home furnishing products that combine style, comfort, and affordability. We believe every woman deserves to feel at ease in her own home — without spending a fortune.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🌸",
                title: "Thoughtful Design",
                body: "Every print, silhouette and fabric is chosen with real women in mind — comfortable for sleep, easy to care for, and genuinely pretty.",
              },
              {
                icon: "🧵",
                title: "Quality First",
                body: "We work directly with weaving mills in Surat to ensure our fabrics meet strict standards for softness, colour-fastness and durability.",
              },
              {
                icon: "🤝",
                title: "Affordable Always",
                body: "Premium quality shouldn't carry a premium price. We keep our margins lean so more households can experience true comfort.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-ivory rounded-2xl p-8 text-left shadow-sm">
                <span className="text-3xl block mb-4">{item.icon}</span>
                <h3 className="font-display text-lg font-semibold text-charcoal mb-2">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Promise */}
      <section className="py-20 bg-ivory">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <SectionDivider label="Our Promise" />
            <h2 className="font-display text-3xl font-semibold text-charcoal">
              The KashmiraLiving Quality Promise
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { num: "01", title: "Natural, breathable fabrics", body: "We use 100% cotton and high-quality cotton blends. No synthetic compromises." },
              { num: "02", title: "Wash-resistant prints", body: "Our prints are tested to retain colour after 30+ machine washes. What you buy is what you keep." },
              { num: "03", title: "Consistent sizing", body: "Our size charts are built on real body measurements. No guesswork, no disappointment." },
              { num: "04", title: "Careful packaging", body: "Every order is packed neatly, ready to gift. Your first impression of us is our packaging." },
            ].map((item) => (
              <div key={item.num} className="flex gap-5 p-6 border border-blush rounded-2xl">
                <span className="font-display text-3xl font-semibold text-rose/30 flex-shrink-0">{item.num}</span>
                <div>
                  <h3 className="font-display text-base font-semibold text-charcoal mb-1">{item.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
