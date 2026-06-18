import { useState } from "react";

const policies = [
  {
    id: "privacy",
    title: "Privacy Policy",
    icon: "🔒",
    content: [
      {
        heading: "Information We Collect",
        body: "We collect information you provide when placing an order or contacting us — including your name, email address, phone number, and shipping address. We also collect basic usage data (device type, browser, pages visited) to improve our website experience.",
      },
      {
        heading: "How We Use Your Information",
        body: "Your information is used solely to process orders, deliver products, and respond to inquiries. We do not sell or share your personal data with third parties for marketing purposes. Payment processing is handled by secure, PCI-compliant third-party gateways.",
      },
      {
        heading: "Data Retention",
        body: "We retain your order and contact information for up to 3 years as required for tax and legal compliance. You may request deletion of your data at any time by writing to us at hello@kashmiraliving.in.",
      },
      {
        heading: "Cookies",
        body: "Our website uses essential cookies to maintain session state and analytics cookies (such as Google Analytics) to understand traffic. You may disable cookies in your browser settings, though some site functionality may be affected.",
      },
      {
        heading: "Contact for Privacy",
        body: "For any privacy-related concerns, write to us at privacy@kashmiraliving.in or call +91 98765 43210 during business hours.",
      },
    ],
  },
  {
    id: "shipping",
    title: "Shipping Policy",
    icon: "🚚",
    content: [
      {
        heading: "Processing Time",
        body: "All orders are processed within 1–3 business days of confirmation. Orders placed on Sundays or public holidays are processed the next business day.",
      },
      {
        heading: "Delivery Timeline",
        body: "Standard delivery across India takes 5–8 business days. Metro cities (Mumbai, Delhi, Bangalore, Chennai, Hyderabad, Kolkata, Pune, Ahmedabad) typically receive orders within 3–5 business days.",
      },
      {
        heading: "Shipping Charges",
        body: "Shipping is free on all orders above ₹599. Orders below ₹599 incur a flat shipping fee of ₹49.",
      },
      {
        heading: "Tracking Your Order",
        body: "Once dispatched, you will receive a tracking link via SMS and email. You can also reach out to us with your order ID for a status update.",
      },
      {
        heading: "Delayed or Lost Shipments",
        body: "If your order has not arrived within the estimated timeline, please contact us at hello@kashmiraliving.in. We will investigate with our logistics partner and resolve the issue within 3 business days.",
      },
    ],
  },
  {
    id: "returns",
    title: "Return Policy",
    icon: "🔄",
    content: [
      {
        heading: "Return Window",
        body: "We accept return requests within 7 days of delivery. The product must be unused, unwashed, and in its original packaging with all tags intact.",
      },
      {
        heading: "Eligible Items",
        body: "Bedsheets, cushion covers, curtains, and home décor items are fully returnable. Nightwear is eligible for return only if the product is received in a damaged or defective condition.",
      },
      {
        heading: "How to Initiate a Return",
        body: "Email us at returns@kashmiraliving.in with your order ID, a brief reason for the return, and photographs of the product. Our team will respond within 48 hours with pickup arrangements.",
      },
      {
        heading: "Refunds",
        body: "Once the returned item is received and inspected, refunds are processed within 5–7 business days to the original payment method. For Cash on Delivery orders, refunds are issued via bank transfer.",
      },
      {
        heading: "Exchange",
        body: "We offer free size or colour exchanges (subject to availability) if raised within 7 days of delivery. Reach out to us with your order ID and preferred exchange details.",
      },
    ],
  },
  {
    id: "terms",
    title: "Terms & Conditions",
    icon: "📋",
    content: [
      {
        heading: "Acceptance of Terms",
        body: "By accessing or purchasing from KashmiraLiving (kashmiraliving.in), you agree to these Terms & Conditions. If you do not agree, please refrain from using our website or services.",
      },
      {
        heading: "Product Information",
        body: "We make every effort to display product colours and textures accurately. However, the actual colour may vary slightly due to your device's display settings. Product images are for illustrative purposes.",
      },
      {
        heading: "Pricing & Availability",
        body: "All prices are listed in Indian Rupees (INR) inclusive of applicable taxes. We reserve the right to modify prices or discontinue products at any time without prior notice. Orders are subject to product availability.",
      },
      {
        heading: "Intellectual Property",
        body: "All content on this website — including text, images, product descriptions, logos, and design — is the exclusive property of KashmiraLiving and may not be reproduced or reused without written permission.",
      },
      {
        heading: "Limitation of Liability",
        body: "KashmiraLiving is not liable for indirect, incidental, or consequential damages arising from the use of our products or website. Our total liability is limited to the value of the order in question.",
      },
      {
        heading: "Governing Law",
        body: "These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in Surat, Gujarat.",
      },
    ],
  },
];

export default function Policies() {
  const [active, setActive] = useState("privacy");
  const current = policies.find((p) => p.id === active);

  return (
    <div className="pt-20">
      {/* Banner */}
      <div className="bg-blush/40 py-20 text-center">
        <p className="text-xs uppercase tracking-[0.25em] text-rose font-medium mb-3">Legal</p>
        <h1 className="font-display text-4xl md:text-5xl font-semibold text-charcoal">Policies</h1>
        <p className="text-muted text-sm mt-3 max-w-sm mx-auto">
          Transparency and trust are the foundation of everything we do.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
        {/* Sidebar */}
        <aside className="md:col-span-1">
          <div className="sticky top-28 flex flex-col gap-2">
            {policies.map((p) => (
              <button
                key={p.id}
                onClick={() => setActive(p.id)}
                className={`flex items-center gap-3 text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                  active === p.id
                    ? "bg-rose text-ivory shadow-sm"
                    : "text-charcoal hover:bg-blush"
                }`}
              >
                <span>{p.icon}</span>
                <span className="leading-snug">{p.title}</span>
              </button>
            ))}
          </div>
        </aside>

        {/* Content */}
        <main className="md:col-span-3">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">{current.icon}</span>
            <h2 className="font-display text-2xl font-semibold text-charcoal">{current.title}</h2>
          </div>
          <p className="text-xs text-muted mb-8 uppercase tracking-wider">Last updated: December 2024</p>

          <div className="space-y-8">
            {current.content.map((section, i) => (
              <div key={i} className="border-l-2 border-blush pl-5">
                <h3 className="font-display text-base font-semibold text-charcoal mb-2">
                  {section.heading}
                </h3>
                <p className="text-sm text-muted leading-relaxed">{section.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-5 bg-blush/30 rounded-2xl border border-rose/10">
            <p className="text-sm text-muted">
              Questions about our policies? Write to us at{" "}
              <a href="mailto:hello@kashmiraliving.in" className="text-rose hover:underline">
                hello@kashmiraliving.in
              </a>{" "}
              and we'll get back to you within 2 business days.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
