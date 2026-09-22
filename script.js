/* =====================================================
   VIOLET HOUSE — Interactive Food Ordering App Logic
===================================================== */

const foodItems = [
  { id: 1,  name: "Crispy Spring Rolls",    category: "Starters",        price: 140,  img: "images/spring-rolls.jpg",     icon: "🥟", isVeg: true,  rating: 4.8, reviews: 142, prep: "15-20m", badge: "Bestseller", desc: "Vegetable-stuffed rolls fried golden crisp, served with sweet chili dip." },
  { id: 2,  name: "Loaded Nachos",          category: "Starters",        price: 160,  img: "images/nachos.jpg",           icon: "🧀", isVeg: true,  rating: 4.7, reviews: 98,  prep: "15-20m", badge: "Popular",    desc: "Tortilla chips under melted cheddar cheese, sliced jalapeños and fresh salsa." },
  { id: 3,  name: "Smoky Chicken Wings",    category: "Starters",        price: 220,  img: "images/chicken-wings.jpg",    icon: "🍗", isVeg: false, rating: 4.9, reviews: 210, prep: "20-25m", badge: "Chef's Special", desc: "Tender grilled wings tossed in a spicy house barbecue glaze, 6 pcs." },
  { id: 4,  name: "Paneer Tikka Skewers",   category: "Starters",        price: 190,  img: "images/paneer-skewers.jpg",   icon: "🍢", isVeg: true,  rating: 4.8, reviews: 124, prep: "20-25m", badge: "Popular",    desc: "Fresh spiced cottage cheese cubes & bell peppers char-grilled over tandoor." },

  { id: 5,  name: "Classic Cheeseburger",   category: "Burgers & Wraps", price: 180,  img: "images/cheeseburger.jpg",     icon: "🍔", isVeg: false, rating: 4.9, reviews: 312, prep: "20-25m", badge: "Bestseller", desc: "Juicy beef patty, melted cheddar cheese, crisp lettuce and house dressing." },
  { id: 6,  name: "Grilled Chicken Wrap",   category: "Burgers & Wraps", price: 160,  img: "images/chicken-wrap.jpg",     icon: "🌯", isVeg: false, rating: 4.7, reviews: 175, prep: "15-20m", badge: "",           desc: "Grilled tandoori chicken chunks, greens and garlic mayo rolled in a warm wrap." },
  { id: 7,  name: "Garden Veggie Burger",   category: "Burgers & Wraps", price: 140,  img: "images/veggie-burger.jpg",    icon: "🥬", isVeg: true,  rating: 4.6, reviews: 89,  prep: "15-20m", badge: "",           desc: "Hearty spiced potato and beetroot patty with garden veggies and mint mayo." },
  { id: 8,  name: "BBQ Chicken Burger",     category: "Burgers & Wraps", price: 210,  img: "images/bbq-burger.jpg",       icon: "🍔", isVeg: false, rating: 4.8, reviews: 195, prep: "20-25m", badge: "Must Try",   desc: "Crispy fried chicken fillet glazed in smoky sweet barbecue sauce." },

  { id: 9,  name: "Margherita Pizza",       category: "Pizza",           price: 240,  img: "images/margherita.jpg",       icon: "🍕", isVeg: true,  rating: 4.8, reviews: 260, prep: "25-30m", badge: "Classic",    desc: "San Marzano tomato sauce, fresh mozzarella cheese and basil on thin crust." },
  { id: 10, name: "Pepperoni Pizza",        category: "Pizza",           price: 320,  img: "images/pepperoni.jpg",        icon: "🍕", isVeg: false, rating: 4.9, reviews: 340, prep: "25-30m", badge: "Bestseller", desc: "Generously loaded spicy pepperoni slices with extra mozzarella cheese." },
  { id: 11, name: "Farmhouse Veg Pizza",    category: "Pizza",           price: 280,  img: "images/farmhouse-pizza.jpg",  icon: "🫑", isVeg: true,  rating: 4.7, reviews: 165, prep: "25-30m", badge: "Chef's Special", desc: "Bell peppers, onions, sweetcorn, mushrooms and olives on a herbed base." },

  { id: 12, name: "Thalassery Chicken Biryani", category: "Rice & Biryani", price: 220, img: "images/chicken-biryani.jpg", icon: "🍛", isVeg: false, rating: 4.9, reviews: 420, prep: "30-35m", badge: "Bestseller", desc: "Authentic Malabar Kaima rice layered with masala chicken, ghee & fried cashews." },
  { id: 13, name: "Veg Fried Rice",         category: "Rice & Biryani",  price: 160,  img: "images/fried-rice.jpg",       icon: "🍚", isVeg: true,  rating: 4.6, reviews: 110, prep: "20-25m", badge: "",           desc: "Wok-tossed basmati rice with crunchy vegetables, soy sauce and spring onions." },
  { id: 14, name: "Malabar Mutton Biryani", category: "Rice & Biryani",  price: 320,  img: "images/mutton-biryani.jpg",   icon: "🥘", isVeg: false, rating: 4.9, reviews: 290, prep: "35-40m", badge: "Royal Special", desc: "Slow-cooked tender Kerala mutton dum biryani sealed with ghee and aroma." },

  { id: 15, name: "Chocolate Brownie",      category: "Desserts",        price: 120,  img: "images/brownie.jpg",          icon: "🍫", isVeg: true,  rating: 4.9, reviews: 310, prep: "10-15m", badge: "Must Try",   desc: "Warm fudgy dark chocolate brownie with a rich molten center." },
  { id: 16, name: "Vanilla Bean Ice Cream", category: "Desserts",        price: 80,   img: "images/ice-cream.jpg",        icon: "🍨", isVeg: true,  rating: 4.7, reviews: 140, prep: "5-10m",  badge: "",           desc: "Two scoops of rich, creamy real vanilla bean ice cream." },
  { id: 17, name: "Gulab Jamun (2 Pcs)",    category: "Desserts",        price: 70,   img: "images/gulab-jamun.jpg",      icon: "🍮", isVeg: true,  rating: 4.8, reviews: 230, prep: "10-15m", badge: "Sweet Tooth", desc: "Soft melt-in-mouth milk dumplings soaked in warm rose cardamom syrup." },

  { id: 18, name: "Fresh Lime Soda",        category: "Beverages",       price: 50,   img: "images/lime-soda.jpg",        icon: "🥤", isVeg: true,  rating: 4.7, reviews: 95,  prep: "5-10m",  badge: "Refreshing", desc: "Sparkling soda with freshly squeezed lime, mint leaves and rock salt." },
  { id: 19, name: "Cold Coffee",            category: "Beverages",       price: 90,   img: "images/cold-coffee.jpg",      icon: "☕", isVeg: true,  rating: 4.8, reviews: 180, prep: "5-10m",  badge: "Popular",    desc: "Creamy iced brew blended with espresso, chilled milk and chocolate drizzle." },
  { id: 20, name: "Mango Lassi",            category: "Beverages",       price: 80,   img: "images/mango-lassi.jpg",      icon: "🥭", isVeg: true,  rating: 4.9, reviews: 275, prep: "5-10m",  badge: "Bestseller", desc: "Thick sweet yogurt smoothie blended with ripe Alphonso mango pulp." },
];

const DELIVERY_FEE = 40;
const FREE_DELIVERY_OVER = 499;

// Valid Promo Codes
const PROMO_CODES = {
  "VIOLET20": { type: "percent", value: 0.20, label: "20% OFF", desc: "20% off entire order" },
  "WELCOME10": { type: "percent", value: 0.10, label: "10% OFF", desc: "10% off welcome discount" },
  "FREESHIP":  { type: "delivery", value: 1.0, label: "FREE DELIVERY", desc: "Free delivery unlocked" },
  "TASTY50":   { type: "flat", value: 50.00, minOrder: 300, label: "₹50 OFF", desc: "₹50 off on orders over ₹300" }
};

/* =====================================================
   STATE MANAGEMENT
===================================================== */
let cart = loadCart();              // { itemId: quantity }
let activeCategory = "All";
let activeDiet = "all";             // "all" | "veg" | "nonveg"
let searchTerm = "";
let appliedPromo = null;           // { code, details }
let currentOrderType = "Delivery";  // "Delivery" | "Pickup"
let trackerInterval = null;

function loadCart() {
  try {
    const saved = localStorage.getItem("vh_cart");
    return saved ? JSON.parse(saved) : {};
  } catch (e) {
    return {};
  }
}

function saveCart() {
  try {
    localStorage.setItem("vh_cart", JSON.stringify(cart));
  } catch (e) {}
}

/* =====================================================
   DOM REFERENCES
==================================================== */
const categoryList        = document.getElementById("categoryList");
const dietaryFilter       = document.getElementById("dietaryFilter");
const foodGrid            = document.getElementById("foodGrid");
const emptyState          = document.getElementById("emptyState");
const resetFilterBtn      = document.getElementById("resetFilterBtn");
const menuTitle           = document.getElementById("menuTitle");
const menuSubtitle        = document.getElementById("menuSubtitle");
const resultCount         = document.getElementById("resultCount");
const searchInput         = document.getElementById("searchInput");
const searchClearBtn      = document.getElementById("searchClearBtn");

const cartBtn             = document.getElementById("cartBtn");
const cartCountEl         = document.getElementById("cartCount");
const cartSubtitle        = document.getElementById("cartSubtitle");
const cartDrawer          = document.getElementById("cartDrawer");
const closeCartBtn        = document.getElementById("closeCart");
const clearCartBtn        = document.getElementById("clearCartBtn");
const overlay             = document.getElementById("overlay");
const cartItemsEl         = document.getElementById("cartItems");
const cartEmptyMsg        = document.getElementById("cartEmptyMsg");
const cartSummary         = document.getElementById("cartSummary");

const deliveryProgressWrap= document.getElementById("deliveryProgressWrap");
const deliveryProgressText= document.getElementById("deliveryProgressText");
const deliveryProgressBar = document.getElementById("deliveryProgressBar");

const promoInput          = document.getElementById("promoInput");
const applyPromoBtn       = document.getElementById("applyPromoBtn");
const promoMessage        = document.getElementById("promoMessage");
const discountRow         = document.getElementById("discountRow");
const discountTag         = document.getElementById("discountTag");
const discountAmount      = document.getElementById("discountAmount");

const subtotalAmount      = document.getElementById("subtotalAmount");
const deliveryAmount      = document.getElementById("deliveryAmount");
const totalAmount         = document.getElementById("totalAmount");
const checkoutBtn         = document.getElementById("checkoutBtn");

const floatingCartBar     = document.getElementById("floatingCartBar");
const floatCartCount      = document.getElementById("floatCartCount");
const floatCartTotal      = document.getElementById("floatCartTotal");
const floatCartBtn        = document.getElementById("floatCartBtn");

const checkoutOverlay     = document.getElementById("checkoutOverlay");
const closeCheckoutBtn    = document.getElementById("closeCheckout");
const checkoutForm        = document.getElementById("checkoutForm");
const checkoutTotal       = document.getElementById("checkoutTotal");
const checkoutItemCount   = document.getElementById("checkoutItemCount");
const checkoutItemsList   = document.getElementById("checkoutItemsList");
const addressFieldWrap    = document.getElementById("addressFieldWrap");
const formError           = document.getElementById("formError");

const confirmOverlay      = document.getElementById("confirmOverlay");
const confirmName         = document.getElementById("confirmName");
const confirmOrderId      = document.getElementById("confirmOrderId");
const confirmType         = document.getElementById("confirmType");
const confirmAddress      = document.getElementById("confirmAddress");
const confirmPayment      = document.getElementById("confirmPayment");
const confirmNotesRow     = document.getElementById("confirmNotesRow");
const confirmNotes        = document.getElementById("confirmNotes");
const confirmItemsList    = document.getElementById("confirmItemsList");
const confirmTotal        = document.getElementById("confirmTotal");
const closeConfirmBtn     = document.getElementById("closeConfirm");

const toastContainer      = document.getElementById("toastContainer");

/* =====================================================
   HELPERS & TOASTS
===================================================== */
const money = (n) => `₹${Math.round(Math.max(0, n))}`;

function esc(str) {
  return String(str || "").replace(/[&<>"']/g, ch => (
    { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch]
  ));
}

const FALLBACK = `onerror="this.closest('.food-card-media, .cart-item-media').classList.add('img-missing')"`;

function showToast(message, type = "info") {
  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <span class="toast-text">${message}</span>
    <button class="toast-close" aria-label="Close notification">&times;</button>
  `;

  toast.querySelector(".toast-close").addEventListener("click", () => {
    toast.remove();
  });

  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("show");
  }, 10);

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

/* =====================================================
   CATEGORIES & DIETARY FILTER
===================================================== */
function renderCategories() {
  const categories = ["All", ...new Set(foodItems.map(i => i.category))];

  categoryList.innerHTML = categories.map(cat => {
    const count = cat === "All"
      ? foodItems.length
      : foodItems.filter(i => i.category === cat).length;
    return `
      <button class="category-pill ${cat === activeCategory ? "active" : ""}" data-category="${esc(cat)}">
        ${esc(cat)} <span class="pill-count">${count}</span>
      </button>
    `;
  }).join("");

  categoryList.querySelectorAll(".category-pill").forEach(btn => {
    btn.addEventListener("click", () => {
      activeCategory = btn.dataset.category;
      renderCategories();
      renderFoodGrid();
    });
  });
}

function bindDietaryFilter() {
  dietaryFilter.querySelectorAll(".diet-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      dietaryFilter.querySelectorAll(".diet-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeDiet = btn.dataset.diet;
      renderFoodGrid();
    });
  });
}

/* =====================================================
   SEARCH & FILTER LOGIC
===================================================== */
function getFilteredItems() {
  const term = searchTerm.trim().toLowerCase();
  return foodItems.filter(item => {
    const matchesCategory = activeCategory === "All" || item.category === activeCategory;
    const matchesDiet =
      activeDiet === "all" ||
      (activeDiet === "veg" && item.isVeg) ||
      (activeDiet === "nonveg" && !item.isVeg);
    const matchesSearch =
      !term ||
      item.name.toLowerCase().includes(term) ||
      item.desc.toLowerCase().includes(term) ||
      item.category.toLowerCase().includes(term);

    return matchesCategory && matchesDiet && matchesSearch;
  });
}

function renderFoodGrid() {
  const items = getFilteredItems();

  menuTitle.textContent = activeCategory === "All" ? "All Dishes" : activeCategory;
  const dietLabel = activeDiet === "veg" ? " • Pure Veg" : activeDiet === "nonveg" ? " • Non-Veg" : "";
  menuSubtitle.textContent = `Showing ${items.length} chef-crafted dishes${dietLabel}`;
  resultCount.textContent = `${items.length} dish${items.length === 1 ? "" : "es"}`;

  emptyState.hidden = items.length !== 0;
  foodGrid.hidden = items.length === 0;

  foodGrid.innerHTML = items.map(item => {
    const qty = cart[item.id] || 0;
    const dietBadgeClass = item.isVeg ? "badge-veg" : "badge-nonveg";
    const dietTitle = item.isVeg ? "Pure Vegetarian" : "Non-Vegetarian";

    return `
      <article class="food-card ${qty > 0 ? "in-cart" : ""}">
        <div class="food-card-media">
          <img src="${esc(item.img)}" alt="${esc(item.name)}" loading="lazy" ${FALLBACK}>
          <span class="media-fallback" aria-hidden="true">${item.icon}</span>
          
          <div class="card-badges">
            <span class="diet-symbol ${dietBadgeClass}" title="${dietTitle}">
              <span class="diet-dot"></span>
            </span>
            ${item.badge ? `<span class="ribbon-badge">${esc(item.badge)}</span>` : ""}
          </div>

          <div class="card-meta-overlay">
            <span class="rating-badge">★ ${item.rating} <span class="rating-count">(${item.reviews})</span></span>
            <span class="prep-badge">⏱ ${item.prep}</span>
          </div>
        </div>

        <div class="food-card-body">
          <div class="food-card-head">
            <h3 class="food-card-name">${esc(item.name)}</h3>
          </div>
          <p class="food-card-desc">${esc(item.desc)}</p>
          <div class="food-card-footer">
            <div class="price-wrap">
              <span class="food-card-price">${money(item.price)}</span>
            </div>
            ${qty === 0
              ? `<button class="add-btn" data-add="${item.id}">
                   <span>+ Add</span>
                 </button>`
              : `<div class="qty-stepper">
                   <button data-decrease="${item.id}" aria-label="Remove one ${esc(item.name)}">−</button>
                   <span class="qty-value">${qty}</span>
                   <button data-increase="${item.id}" aria-label="Add one ${esc(item.name)}">+</button>
                 </div>`}
          </div>
        </div>
      </article>
    `;
  }).join("");

  bindQtyControls(foodGrid);
}

/* =====================================================
   CART & PROMO CALCULATIONS
===================================================== */
function addToCart(id) {
  const item = foodItems.find(f => f.id === id);
  cart[id] = (cart[id] || 0) + 1;
  saveCart();
  renderFoodGrid();
  renderCart();
  animateCartButton();
  if (item) {
    showToast(`Added <strong>${esc(item.name)}</strong> to cart!`, "success");
  }
}

function changeQty(id, delta) {
  if (!cart[id]) return;
  cart[id] += delta;
  if (cart[id] <= 0) {
    delete cart[id];
  }
  saveCart();
  renderFoodGrid();
  renderCart();
}

function removeFromCart(id) {
  const item = foodItems.find(f => f.id === id);
  delete cart[id];
  saveCart();
  renderFoodGrid();
  renderCart();
  if (item) {
    showToast(`Removed <strong>${esc(item.name)}</strong> from cart.`, "info");
  }
}

function clearCart() {
  if (getTotalItemCount() === 0) return;
  if (confirm("Are you sure you want to clear your cart?")) {
    cart = {};
    appliedPromo = null;
    promoInput.value = "";
    promoMessage.hidden = true;
    saveCart();
    renderFoodGrid();
    renderCart();
    showToast("Cart has been cleared", "info");
  }
}

function getCartEntries() {
  return Object.entries(cart).map(([id, qty]) => ({
    ...foodItems.find(f => f.id === Number(id)),
    qty,
  })).filter(Boolean);
}

function getSubtotal() {
  return getCartEntries().reduce((sum, i) => sum + i.price * i.qty, 0);
}

function getTotalItemCount() {
  return Object.values(cart).reduce((sum, q) => sum + q, 0);
}

function getDiscount(subtotal, deliveryFee) {
  if (!appliedPromo || subtotal === 0) return 0;
  const promo = appliedPromo.details;

  if (promo.type === "percent") {
    return subtotal * promo.value;
  }
  if (promo.type === "delivery") {
    return deliveryFee;
  }
  if (promo.type === "flat") {
    if (promo.minOrder && subtotal < promo.minOrder) return 0;
    return Math.min(promo.value, subtotal);
  }
  return 0;
}

function getDeliveryFee() {
  const subtotal = getSubtotal();
  if (subtotal === 0 || currentOrderType === "Pickup") return 0;
  if (subtotal >= FREE_DELIVERY_OVER) return 0;
  return DELIVERY_FEE;
}

function applyPromoCode() {
  const code = promoInput.value.trim().toUpperCase();
  if (!code) {
    promoMessage.textContent = "Please enter a coupon code.";
    promoMessage.className = "promo-message error";
    promoMessage.hidden = false;
    return;
  }

  const promo = PROMO_CODES[code];
  if (!promo) {
    promoMessage.textContent = "Invalid coupon code. Try 'VIOLET20' or 'FREESHIP'.";
    promoMessage.className = "promo-message error";
    promoMessage.hidden = false;
    appliedPromo = null;
    renderCart();
    return;
  }

  const subtotal = getSubtotal();
  if (promo.minOrder && subtotal < promo.minOrder) {
    promoMessage.textContent = `Coupon requires a minimum order of ₹${promo.minOrder}.`;
    promoMessage.className = "promo-message error";
    promoMessage.hidden = false;
    appliedPromo = null;
    renderCart();
    return;
  }

  appliedPromo = { code, details: promo };
  promoMessage.textContent = `🎉 Coupon applied: ${promo.desc}!`;
  promoMessage.className = "promo-message success";
  promoMessage.hidden = false;
  showToast(`Promo code <strong>${code}</strong> applied!`, "success");
  renderCart();
}

function renderCart() {
  const entries = getCartEntries();
  const totalCount = getTotalItemCount();
  cartCountEl.textContent = totalCount;
  cartSubtitle.textContent = `${totalCount} item${totalCount === 1 ? "" : "s"} added`;

  cartEmptyMsg.hidden = entries.length !== 0;
  cartSummary.hidden = entries.length === 0;

  // Floating Bar Update
  if (totalCount > 0) {
    floatingCartBar.hidden = false;
    floatCartCount.textContent = totalCount;
  } else {
    floatingCartBar.hidden = true;
  }

  // Delivery Progress Bar
  const subtotal = getSubtotal();
  if (subtotal >= FREE_DELIVERY_OVER || subtotal === 0) {
    deliveryProgressText.innerHTML = `🎉 <strong>FREE Delivery unlocked!</strong>`;
    deliveryProgressBar.style.width = "100%";
  } else {
    const remaining = FREE_DELIVERY_OVER - subtotal;
    const pct = Math.min(100, Math.round((subtotal / FREE_DELIVERY_OVER) * 100));
    deliveryProgressText.innerHTML = `Add <strong>${money(remaining)}</strong> more for <strong>FREE Delivery</strong>`;
    deliveryProgressBar.style.width = `${pct}%`;
  }

  cartItemsEl.innerHTML = entries.map(item => {
    const dietBadgeClass = item.isVeg ? "badge-veg" : "badge-nonveg";
    return `
      <div class="cart-item">
        <div class="cart-item-media">
          <img src="${esc(item.img)}" alt="${esc(item.name)}" loading="lazy" ${FALLBACK}>
          <span class="media-fallback" aria-hidden="true">${item.icon}</span>
        </div>
        <div class="cart-item-info">
          <div class="cart-item-name-row">
            <span class="diet-symbol ${dietBadgeClass}">
              <span class="diet-dot"></span>
            </span>
            <span class="cart-item-name">${esc(item.name)}</span>
          </div>
          <div class="cart-item-price">${money(item.price * item.qty)} <span class="unit-price">(${money(item.price)} each)</span></div>
          <button class="cart-item-remove" data-remove="${item.id}">Remove</button>
        </div>
        <div class="qty-stepper">
          <button data-decrease="${item.id}" aria-label="Remove one ${esc(item.name)}">−</button>
          <span class="qty-value">${item.qty}</span>
          <button data-increase="${item.id}" aria-label="Add one ${esc(item.name)}">+</button>
        </div>
      </div>
    `;
  }).join("");

  bindQtyControls(cartItemsEl);

  const baseDelivery = getDeliveryFee();
  let discount = getDiscount(subtotal, baseDelivery);
  const finalDelivery = (appliedPromo && appliedPromo.details.type === "delivery") ? 0 : baseDelivery;
  const total = Math.max(0, subtotal - discount + finalDelivery);

  subtotalAmount.textContent = money(subtotal);

  if (discount > 0) {
    discountRow.hidden = false;
    discountTag.textContent = appliedPromo.details.label;
    discountAmount.textContent = `-${money(discount)}`;
  } else {
    discountRow.hidden = true;
  }

  if (currentOrderType === "Pickup") {
    deliveryAmount.textContent = "Self Pickup (Free)";
  } else if (finalDelivery === 0 && subtotal > 0) {
    deliveryAmount.textContent = "Free";
  } else {
    deliveryAmount.textContent = money(finalDelivery);
  }

  totalAmount.textContent = money(total);
  checkoutTotal.textContent = money(total);
  floatCartTotal.textContent = money(total);
}

function bindQtyControls(root) {
  root.querySelectorAll("[data-add]").forEach(btn =>
    btn.addEventListener("click", () => addToCart(Number(btn.dataset.add))));
  root.querySelectorAll("[data-increase]").forEach(btn =>
    btn.addEventListener("click", () => changeQty(Number(btn.dataset.increase), 1)));
  root.querySelectorAll("[data-decrease]").forEach(btn =>
    btn.addEventListener("click", () => changeQty(Number(btn.dataset.decrease), -1)));
  root.querySelectorAll("[data-remove]").forEach(btn =>
    btn.addEventListener("click", () => removeFromCart(Number(btn.dataset.remove))));
}

function animateCartButton() {
  cartBtn.classList.remove("bump");
  void cartBtn.offsetWidth; // trigger reflow
  cartBtn.classList.add("bump");
}

/* =====================================================
   DRAWER + MODALS
===================================================== */
function openCart() {
  cartDrawer.classList.add("open");
  overlay.classList.add("visible");
}

function closeCart() {
  cartDrawer.classList.remove("open");
  overlay.classList.remove("visible");
}

function openCheckout() {
  const entries = getCartEntries();
  if (entries.length === 0) return;
  closeCart();
  formError.hidden = true;

  checkoutItemCount.textContent = getTotalItemCount();
  checkoutItemsList.innerHTML = entries.map(item => `
    <div class="checkout-item-row">
      <span class="checkout-item-title">${item.qty}x ${esc(item.name)}</span>
      <span class="checkout-item-cost">${money(item.price * item.qty)}</span>
    </div>
  `).join("");

  checkoutOverlay.classList.add("visible");
  document.getElementById("custName").focus();
}

function closeCheckout() {
  checkoutOverlay.classList.remove("visible");
}

function startOrderTracker() {
  if (trackerInterval) clearInterval(trackerInterval);
  const steps = [
    document.getElementById("step1"),
    document.getElementById("step2"),
    document.getElementById("step3"),
    document.getElementById("step4")
  ];

  let currentStep = 1;
  trackerInterval = setInterval(() => {
    if (currentStep < 3) {
      steps[currentStep].classList.remove("in-progress");
      steps[currentStep].classList.add("active");
      currentStep++;
      steps[currentStep].classList.add("in-progress");
    }
  }, 10000);
}

function openConfirmation(order) {
  confirmName.textContent = order.name;
  confirmOrderId.textContent = `#${order.orderId}`;
  confirmType.textContent = order.type;
  confirmAddress.textContent = order.address;
  confirmPayment.textContent = order.payment;
  confirmTotal.textContent = order.total;

  if (order.notes) {
    confirmNotesRow.hidden = false;
    confirmNotes.textContent = `"${order.notes}"`;
  } else {
    confirmNotesRow.hidden = true;
  }

  // Render items summary in confirmation
  confirmItemsList.innerHTML = order.items.map(i => `
    <div class="confirm-item-line">
      <span>${i.qty} × ${esc(i.name)}</span>
      <span>${money(i.price * i.qty)}</span>
    </div>
  `).join("");

  startOrderTracker();
  confirmOverlay.classList.add("visible");
}

function closeConfirmation() {
  if (trackerInterval) clearInterval(trackerInterval);
  confirmOverlay.classList.remove("visible");
}

/* =====================================================
   CHECKOUT SUBMISSION & VALIDATION
===================================================== */
function generateOrderId() {
  return `VH-${Math.floor(100000 + Math.random() * 900000)}`;
}

function validateForm() {
  const nameEl = document.getElementById("custName");
  const phoneEl = document.getElementById("custPhone");
  const addressEl = document.getElementById("custAddress");

  const fields = [
    { el: nameEl, msg: "Please enter your full name." },
    { el: phoneEl, msg: "Please enter a valid phone number (7 to 15 digits)." },
  ];

  if (currentOrderType === "Delivery") {
    fields.push({ el: addressEl, msg: "Please enter your delivery street address." });
  }

  fields.forEach(f => f.el.classList.remove("invalid"));

  for (const f of fields) {
    const value = f.el.value.trim();
    const isPhone = f.el.type === "tel";
    const valid = isPhone ? /^[0-9+\s-]{7,15}$/.test(value) : value.length > 0;

    if (!valid) {
      f.el.classList.add("invalid");
      formError.textContent = f.msg;
      formError.hidden = false;
      f.el.focus();
      return false;
    }
  }

  formError.hidden = true;
  return true;
}

function handleCheckoutSubmit(e) {
  e.preventDefault();
  if (!validateForm()) return;

  const entries = getCartEntries();
  const name = document.getElementById("custName").value.trim();
  const address = currentOrderType === "Delivery"
    ? document.getElementById("custAddress").value.trim()
    : "Violet House Main Kitchen counter (Pickup)";
  const payment = document.querySelector('input[name="payment"]:checked').value;
  const notes = document.getElementById("custNotes").value.trim();

  const order = {
    orderId: generateOrderId(),
    name,
    address,
    type: currentOrderType,
    payment,
    notes,
    total: totalAmount.textContent,
    items: entries,
    date: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  };

  closeCheckout();
  checkoutForm.reset();

  // Reset cart state
  cart = {};
  appliedPromo = null;
  promoInput.value = "";
  promoMessage.hidden = true;
  saveCart();
  renderFoodGrid();
  renderCart();

  openConfirmation(order);
  showToast("Order placed successfully! 🚀", "success");
}

/* =====================================================
   EVENT LISTENERS
===================================================== */
function bindEvents() {
  // Search
  searchInput.addEventListener("input", e => {
    searchTerm = e.target.value;
    searchClearBtn.hidden = !searchTerm;
    renderFoodGrid();
  });

  searchClearBtn.addEventListener("click", () => {
    searchInput.value = "";
    searchTerm = "";
    searchClearBtn.hidden = true;
    searchInput.focus();
    renderFoodGrid();
  });

  resetFilterBtn.addEventListener("click", () => {
    searchInput.value = "";
    searchTerm = "";
    searchClearBtn.hidden = true;
    activeCategory = "All";
    activeDiet = "all";
    dietaryFilter.querySelectorAll(".diet-btn").forEach(b => b.classList.toggle("active", b.dataset.diet === "all"));
    renderCategories();
    renderFoodGrid();
  });

  // Cart open/close
  cartBtn.addEventListener("click", openCart);
  floatCartBtn.addEventListener("click", openCart);
  closeCartBtn.addEventListener("click", closeCart);
  clearCartBtn.addEventListener("click", clearCart);
  overlay.addEventListener("click", closeCart);

  // Promo code
  applyPromoBtn.addEventListener("click", applyPromoCode);
  promoInput.addEventListener("keydown", e => {
    if (e.key === "Enter") {
      e.preventDefault();
      applyPromoCode();
    }
  });

  // Order Mode toggle (Delivery vs Pickup)
  document.querySelectorAll('input[name="orderType"]').forEach(radio => {
    radio.addEventListener("change", e => {
      currentOrderType = e.target.value;
      document.querySelectorAll(".order-mode-toggle .mode-pill").forEach(p => p.classList.remove("active"));
      e.target.closest(".mode-pill").classList.add("active");
      addressFieldWrap.style.display = currentOrderType === "Pickup" ? "none" : "block";
      renderCart();
    });
  });

  // Checkout open/close
  checkoutBtn.addEventListener("click", openCheckout);
  closeCheckoutBtn.addEventListener("click", closeCheckout);
  checkoutOverlay.addEventListener("click", e => {
    if (e.target === checkoutOverlay) closeCheckout();
  });

  checkoutForm.addEventListener("submit", handleCheckoutSubmit);

  // Confirmation
  closeConfirmBtn.addEventListener("click", closeConfirmation);
  confirmOverlay.addEventListener("click", e => {
    if (e.target === confirmOverlay) closeConfirmation();
  });

  // Keyboard Shortcuts ('/' for search, 'Esc' to close dialogs)
  document.addEventListener("keydown", e => {
    if (e.key === "/" && document.activeElement !== searchInput && document.activeElement.tagName !== "INPUT" && document.activeElement.tagName !== "TEXTAREA") {
      e.preventDefault();
      searchInput.focus();
    } else if (e.key === "Escape") {
      closeCart();
      closeCheckout();
      closeConfirmation();
    }
  });
}

/* =====================================================
   INITIALIZATION
===================================================== */
function init() {
  renderCategories();
  bindDietaryFilter();
  renderFoodGrid();
  renderCart();
  bindEvents();
}

init();