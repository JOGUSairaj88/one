<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ShopVerse · mobiles · laptops · clothes</title>
    <!-- FontAwesome for icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <!-- External CSS -->
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">

        <!-- Header -->
        <header class="shop-header">
            <div class="logo">
                <h1><i class="fas fa-store-alt"></i> ShopVerse</h1>
            </div>
            <div class="header-links">
                <a href="#"><i class="fas fa-tag"></i> Deals</a>
                <a href="#"><i class="fas fa-heart"></i> Wishlist</a>
                <a href="#"><i class="fas fa-user"></i> Account</a>
                <div class="cart-icon">
                    <i class="fas fa-shopping-bag"></i> 
                    <span id="cartCounter">0</span>
                </div>
            </div>
        </header>

        <!-- Section Tabs -->
        <div class="section-tabs" id="sectionTabs">
            <button class="tab-btn active" data-section="mobiles">
                <i class="fas fa-mobile-alt"></i> Mobiles
            </button>
            <button class="tab-btn" data-section="laptops">
                <i class="fas fa-laptop"></i> Laptops
            </button>
            <button class="tab-btn" data-section="clothes">
                <i class="fas fa-tshirt"></i> Clothes
            </button>
        </div>

        <!-- Quick Links -->
        <div class="quick-links">
            <h3><i class="fas fa-link"></i> Useful Links</h3>
            <div class="link-group">
                <a href="https://www.amazon.in" target="_blank"><i class="fab fa-amazon"></i> Amazon</a>
                <a href="https://www.flipkart.com" target="_blank"><i class="fas fa-shopping-cart"></i> Flipkart</a>
                <a href="https://www.myntra.com" target="_blank"><i class="fas fa-tshirt"></i> Myntra</a>
                <a href="https://www.apple.com/in" target="_blank"><i class="fab fa-apple"></i> Apple</a>
                <a href="https://www.samsung.com/in" target="_blank"><i class="fas fa-mobile-alt"></i> Samsung</a>
                <a href="https://www.dell.com/en-in" target="_blank"><i class="fas fa-laptop"></i> Dell</a>
            </div>
        </div>

        <!-- Product Container -->
        <div id="productContainer"></div>

        <!-- Toast Notification -->
        <div id="toast" class="toast-msg">
            <i class="fas fa-check-circle"></i> 
            <span id="toastText">Added to cart</span>
        </div>

        <!-- Footer -->
        <footer>
            <span class="attribution">
                <i class="fas fa-tag"></i> 30 products · prices in INR 
                <i class="fas fa-circle" style="font-size: 4px; vertical-align: middle; margin: 0 6px;"></i>
                <a href="https://www.amazon.in" target="_blank">Shop now on Amazon</a> · 
                <a href="https://www.flipkart.com" target="_blank">Flipkart</a> · 
                <a href="https://www.myntra.com" target="_blank">Myntra</a>
            </span>
        </footer>
    </div>

    <!-- External JavaScript -->
    <script src="script.js"></script>
</body>
</html>
