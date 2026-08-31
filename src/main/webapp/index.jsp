<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ShopKart - E-Commerce Store</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header class="topbar">
    <div class="logo">Shop<span>Kart</span></div>
    <div class="search-wrap">
      <input id="searchInput" type="search" placeholder="Search mobiles, laptops, clothes...">
      <button id="searchBtn">Search</button>
    </div>
    <button class="cart-btn" id="cartBtn">🛒 Cart <span id="cartCount">0</span></button>
  </header>

  <nav class="nav">
    <button class="nav-link active" data-category="all">All</button>
    <button class="nav-link" data-category="mobiles">Mobiles</button>
    <button class="nav-link" data-category="laptops">Laptops</button>
    <button class="nav-link" data-category="clothes">Clothes</button>
  </nav>

  <main>
    <section class="hero">
      <div>
        <p class="eyebrow">WELCOME TO SHOPKART</p>
        <h1>Everything you need,<br><span>all in one place.</span></h1>
        <p>Explore mobiles, laptops and fashion at great prices.</p>
        <button class="hero-btn" onclick="document.getElementById('products').scrollIntoView({behavior:'smooth'})">
          Shop Now →
        </button>
      </div>
      <div class="hero-art">
        <div class="hero-card">📱</div>
        <div class="hero-card">💻</div>
        <div class="hero-card">👕</div>
      </div>
    </section>

    <section class="section-head">
      <div>
        <p class="eyebrow">OUR COLLECTION</p>
        <h2 id="sectionTitle">Featured Products</h2>
      </div>
      <select id="sortSelect">
        <option value="default">Sort: Featured</option>
        <option value="low">Price: Low to High</option>
        <option value="high">Price: High to Low</option>
        <option value="name">Name: A-Z</option>
      </select>
    </section>

    <section id="products" class="product-grid"></section>

    <section class="info-strip">
      <div>🚚 <strong>Fast Delivery</strong><small>Across India</small></div>
      <div>🔒 <strong>Secure Payments</strong><small>100% protected</small></div>
      <div>↩️ <strong>Easy Returns</strong><small>Hassle-free returns</small></div>
      <div>⭐ <strong>Quality Products</strong><small>Trusted selection</small></div>
    </section>
  </main>

  <footer>
    <div>
      <div class="logo">Shop<span>Kart</span></div>
      <p>Demo e-commerce website built with HTML, CSS and JavaScript.</p>
    </div>
    <div>
      <h4>Categories</h4>
      <a href="#" data-footer-category="mobiles">Mobiles</a>
      <a href="#" data-footer-category="laptops">Laptops</a>
      <a href="#" data-footer-category="clothes">Clothes</a>
    </div>
    <div>
      <h4>Useful Links</h4>
      <a href="https://www.amazon.in/" target="_blank" rel="noopener">Amazon India</a>
      <a href="https://www.flipkart.com/" target="_blank" rel="noopener">Flipkart</a>
      <a href="https://www.unsplash.com/" target="_blank" rel="noopener">Image source: Unsplash</a>
    </div>
  </footer>

  <div id="cartPanel" class="cart-panel">
    <div class="cart-header">
      <h3>Your Cart</h3>
      <button id="closeCart">✕</button>
    </div>
    <div id="cartItems"></div>
    <div class="cart-total">
      <span>Total</span><strong id="cartTotal">₹0</strong>
    </div>
    <button class="checkout-btn" id="checkoutBtn">Proceed to Checkout</button>
  </div>
  <div id="overlay"></div>

  <script src="script.js"></script>
</body>
</html>
