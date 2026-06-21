import { useState } from "react";
import SectionDivider from "../components/SectionDivider";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-20">
      {/* Banner */}
      <div className="bg-blush/40 py-20 text-center">
        <p className="text-xs uppercase tracking-[0.25em] text-rose font-medium mb-3">We're here</p>
        <h1 className="font-display text-4xl md:text-5xl font-semibold text-charcoal">Contact Us</h1>
        <p className="text-muted text-sm mt-3 max-w-sm mx-auto">
          Have a question? We'd love to hear from you.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16">
        {/* Info */}
        <div>
          <SectionDivider label="Reach Us" />
          <h2 className="font-display text-2xl font-semibold text-charcoal mb-6">
            Let's talk about your order, query, or partnership.
          </h2>

          <div className="space-y-6">
            {[
              {
                icon: "✉️",
                label: "Email",
                value: "shrijihome01@gmail.com",
                href: "mailto:shrijihome01@gmail.com",
              },
              {
                icon: "📞",
                label: "Phone",
                value: "+91 94571 00114",
                href: "tel:+919457100114",
              },
              {
                icon: "📍",
                label: "Address",
                value: "2-1/1516, New Shivpuri Hapur, UP - 245101",
                href: null,
              },
              {
                icon: "🕐",
                label: "Business Hours",
                value: "Monday – Saturday, 9:00 AM to 7:00 PM IST",
                href: null,
              },
            ].map((item) => (
              <div key={item.label} className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-blush flex items-center justify-center text-lg flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted mb-0.5">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="text-charcoal text-sm hover:text-rose transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-charcoal text-sm">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Social */}
          <div className="mt-10 pt-8 border-t border-blush">
            <p className="text-xs uppercase tracking-[0.2em] text-muted mb-4">Follow us</p>
            <div className="flex gap-4">
              {["Instagram", "Facebook", "Pinterest"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="text-sm font-medium text-charcoal hover:text-rose transition-colors border-b border-transparent hover:border-rose pb-0.5"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Form */}
        <div>
          <SectionDivider label="Send a Message" />
          {submitted ? (
            <div className="bg-blush/40 rounded-2xl p-10 text-center border border-rose/20">
              <span className="text-4xl block mb-4">🌸</span>
              <h3 className="font-display text-xl font-semibold text-charcoal mb-2">Thank you!</h3>
              <p className="text-muted text-sm">
                We've received your message and will get back to you within 1–2 business days.
              </p>
              <button
                onClick={() => { setSubmitted(false); setForm({ name: "", email: "", message: "" }); }}
                className="mt-6 text-sm text-rose border-b border-rose pb-0.5 hover:text-rose-deep hover:border-rose-deep transition-colors"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs uppercase tracking-[0.15em] text-muted mb-2" htmlFor="name">
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Priya Sharma"
                  className="w-full border border-blush rounded-xl px-4 py-3 text-sm text-charcoal bg-white focus:outline-none focus:border-rose transition-colors placeholder:text-muted/40"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-[0.15em] text-muted mb-2" htmlFor="email">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="priya@example.com"
                  className="w-full border border-blush rounded-xl px-4 py-3 text-sm text-charcoal bg-white focus:outline-none focus:border-rose transition-colors placeholder:text-muted/40"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-[0.15em] text-muted mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell us how we can help…"
                  className="w-full border border-blush rounded-xl px-4 py-3 text-sm text-charcoal bg-white focus:outline-none focus:border-rose transition-colors placeholder:text-muted/40 resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-rose text-ivory font-medium text-sm tracking-wide py-3.5 rounded-full hover:bg-rose-deep transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
