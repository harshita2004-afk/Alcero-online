# Alcero

**Comfort for Every Home, Style for Every Woman**

A modern e-commerce showcase website for **Alcero** — a lifestyle brand offering women's nightwear and home furnishing (bedsheets, cushion covers, curtains & décor). Built as a marketplace onboarding website (e.g. for Myntra seller registration) and as a standalone brand presence.

---

## ✨ Features

- **Home** — Hero section, shop-by-category grid, brand story preview, featured products, trust indicators
- **About Us** — Brand story, mission, and quality promise
- **Products** — Full catalog with category & subcategory filters, including a **colour swatch selector** for nightwear with multiple colour variants
- **Contact Us** — Business contact details + working enquiry form (front-end only, no backend)
- **Policies** — Privacy Policy, Shipping Policy, Return Policy, Terms & Conditions

---

## 🛠 Tech Stack

- **React** — UI library
- **Vite** — build tool & dev server
- **Tailwind CSS** — styling
- **React Router DOM** — page navigation

---

## 📁 Project Structure

```
src/
 ├── components/
 │    ├── Navbar.jsx
 │    ├── Footer.jsx
 │    ├── Hero.jsx
 │    ├── ProductCard.jsx
 │    └── SectionDivider.jsx
 │
 ├── pages/
 │    ├── Home.jsx
 │    ├── About.jsx
 │    ├── Products.jsx
 │    ├── Contact.jsx
 │    └── Policies.jsx
 │
 ├── data/
 │    └── products.js      ← all product & category data lives here
 │
 └── assets/
```

---

## 🚀 Getting Started

### Run locally

```bash
npm install
npm run dev
```

Visit `http://localhost:5173`

### Build for production

```bash
npm run build
```

Output goes to the `dist/` folder.

---

## ✏️ How to Update the Site

| What you want to change | File to edit |
|---|---|
| Add / edit / remove a product | `src/data/products.js` |
| Add a new colour variant to a product | `src/data/products.js` → that product's `variants` array |
| Change brand name or tagline | `src/components/Navbar.jsx`, `src/components/Hero.jsx`, `src/components/Footer.jsx` |
| Edit contact details | `src/components/Footer.jsx`, `src/pages/Contact.jsx` |
| Edit policies | `src/pages/Policies.jsx` |
| Change brand colours / fonts | `tailwind.config.js`, `src/index.css` |

### Adding a product with colour variants

```js
{
  id: 10,
  name: "Product Name",
  category: "womens-nightwear",       // or "home-furnishing"
  subcategory: "Cotton Nighties",
  description: "Short product description.",
  price: 1499,
  size: "Free Size",
  tag: "New Arrival",                 // or null
  hasVariants: true,
  variants: [
    { color: "Pink", hex: "#E8799B", images: ["url1", "url2"] },
    { color: "Blue", hex: "#4A7AB5", images: ["url1", "url2"] },
  ],
},
```

### Adding a product without variants (e.g. bedsheets)

```js
{
  id: 11,
  name: "Bedsheet Design Name",
  category: "home-furnishing",
  subcategory: "Bedsheets",
  description: "Short product description.",
  price: 1499,
  hasVariants: false,
  tag: null,
  image: "https://your-image-url.jpg",
},
```

---

## 🌐 Deployment

This site is deployed via **GitHub → Netlify**:

1. Push changes to the connected GitHub repository
2. Netlify automatically rebuilds and redeploys
3. Live in under a minute — no manual steps needed

**Build settings on Netlify:**
- Build command: `npm run build`
- Publish directory: `dist`

---

## 📬 Contact

For business inquiries, reach out via the contact details listed on the [Contact page](src/pages/Contact.jsx).

---

© 2024–2026 Alcero. All rights reserved.
