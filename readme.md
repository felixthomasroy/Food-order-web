# 🍽️ Violet House — Online Food Ordering Web App

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-purple.svg?style=for-the-badge)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=for-the-badge)](https://github.com/)

A modern, responsive, zero-dependency restaurant web application designed for seamless food ordering. Built with pure **HTML5, CSS3, and Vanilla JavaScript**, featuring instant live search, dietary filters, interactive cart management, promo discounts, checkout validation, and a simulated real-time order tracker.

---

## ✨ Features

- **🍔 Interactive & Dynamic Menu**
  - Category-based filtering (*Starters, Burgers & Wraps, Pizza, Rice & Biryani, Desserts, Beverages*).
  - Dietary preference filter (*Pure Veg* / *Non-Veg* / *All*).
  - Real-time instant search across dish names, descriptions, and categories.
  - Keyboard shortcut: Press <kbd>/</kbd> to quickly focus the search bar.
  - Dish cards with chef badges (*Bestseller*, *Chef's Special*, *Must Try*), ratings, prep time, and price.

- **🛒 Smart Shopping Cart & Floating Action Bar**
  - Slide-in side drawer with quantity increment/decrement controls.
  - Persistent cart state saved via `localStorage` (persists on page refresh).
  - Dynamic Free Delivery progress indicator with real-time remaining amount calculation.
  - Floating bottom bar for quick cart access on mobile/tablet viewports.

- **🎟️ Discount & Promo Code Engine**
  - Supports percentage discounts, flat discounts, and free shipping codes.
  - Instant validation with min-order checks and user-friendly error/success messages.

- **🛵 Delivery & Pickup Toggle**
  - Switch between home delivery and restaurant pickup modes.
  - Automatically updates delivery fees and form requirements.

- **📋 Interactive Checkout & Order Tracker**
  - Step-by-step modal checkout with client-side form validation.
  - Order confirmation screen displaying unique order IDs, itemized receipts, and customer details.
  - **Simulated real-time order status tracker** (*Order Placed* ➔ *Kitchen Prep* ➔ *Out for Delivery* ➔ *Delivered*).

- **🎨 Modern UI & Responsive Design**
  - Editorial typography (*Fraunces* + *Work Sans*).
  - Elegant violet and culinary accent palette with smooth CSS transitions and micro-animations.
  - Toast notification system for intuitive user feedback.
  - Fallback icon protection in case dish images fail to load.

---

## 🏷️ Test Promo Codes

Try these promo codes during checkout:

| Promo Code | Discount / Benefit | Conditions |
| :--- | :--- | :--- |
| `VIOLET20` | **20% OFF** entire order | No minimum order |
| `WELCOME10` | **10% OFF** entire order | No minimum order |
| `FREESHIP` | **Free Delivery** | Waives ₹40 delivery fee |
| `TASTY50` | **₹50 OFF** flat discount | Minimum order ₹300 |

---

## 📁 Project Structure

```text
food_order_web/
├── images/                  # High-quality dish and hero photographs
│   ├── hero.jpg
│   ├── cheeseburger.jpg
│   ├── chicken-biryani.jpg
│   ├── margherita.jpg
│   └── ... (21 dish images)
├── index.html               # Main semantic HTML structure & modals
├── style.css                # Custom CSS3 styling, responsive grid & animations
├── script.js                # Application state, menu data, cart logic & order tracker
└── README.md                # Project documentation
```

---

## 🚀 Getting Started

No build tools, package managers, or backend setups are required! You can run this project locally in seconds.

### 1. Clone the repository
```bash
git clone https://github.com/felixthomasroy/Food-order-web.git
cd Food-order-web
```

### 2. Run the application

#### Option A: Direct Open
Simply double-click `index.html` or open it with your favorite web browser (Chrome, Edge, Firefox, Safari).

#### Option B: VS Code Live Server
1. Open the project in [Visual Studio Code](https://code.visualstudio.com/).
2. Install the **Live Server** extension.
3. Right-click `index.html` and select **"Open with Live Server"**.

#### Option C: Python Simple Server
If you have Python installed, start a local HTTP server:
```bash
# Python 3.x
python -m http.server 8000
```
Then visit `http://localhost:8000` in your browser.

---

## 🌐 Deploying to GitHub Pages

To make your food ordering web app accessible online for free:

1. Go to your repository's **Settings** tab: [Food-order-web Settings](https://github.com/felixthomasroy/Food-order-web/settings/pages).
2. Click on **Pages** in the left sidebar.
3. Under **Build and deployment** > **Branch**, select `main` and folder `/ (root)`.
4. Click **Save**. Your site will be live at `https://felixthomasroy.github.io/Food-order-web/` in a few minutes!

---

## 🛠️ Customization & Extensibility

### Adding or Modifying Menu Items
Open [`script.js`](script.js) and update the `foodItems` array:

```javascript
{
  id: 21,
  name: "Garlic Butter Naan",
  category: "Starters",
  price: 60,
  img: "images/garlic-naan.jpg",
  icon: "🫓",
  isVeg: true,
  rating: 4.9,
  reviews: 88,
  prep: "10-15m",
  badge: "Chef's Special",
  desc: "Soft leavened tandoor bread brushed with melted garlic butter."
}
```

### Adding New Promo Codes
In [`script.js`](script.js), add a new entry to the `PROMO_CODES` object:

```javascript
"SUMMER30": {
  type: "percent",
  value: 0.30,
  label: "30% OFF",
  desc: "30% off summer special"
}
```

---

## 💻 Tech Stack

- **HTML5**: Semantic tags, accessible form controls, ARIA attributes.
- **CSS3**: CSS Custom Properties (variables), Flexbox, CSS Grid, custom keyframe animations, media queries for all device sizes.
- **Vanilla JavaScript (ES6+)**: Pure JS with DOM manipulation, `localStorage` APIs, event delegation, and timer-based tracker simulation.
- **Google Fonts**: *Fraunces* (display serif) & *Work Sans* (clean sans-serif).

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
Feel free to check the [issues page](https://github.com/felixthomasroy/Food-order-web/issues) if you want to contribute.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

<p align="center">Made with ❤️ for food lovers and developers.</p>