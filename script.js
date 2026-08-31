// ============================================
// DATA - Products with images and links
// ============================================
const products = {
    mobiles: [
        { 
            name: 'iPhone 15 Pro', 
            price: 129900, 
            img: 'https://images.unsplash.com/photo-1695048133142-1a20484a7c8e?w=400&h=400&fit=crop', 
            link: 'https://www.apple.com/in/iphone-15-pro/' 
        },
        { 
            name: 'Samsung Galaxy S24', 
            price: 99999, 
            img: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=400&fit=crop', 
            link: 'https://www.samsung.com/in/smartphones/galaxy-s24/' 
        },
        { 
            name: 'OnePlus 12', 
            price: 74999, 
            img: 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=400&h=400&fit=crop', 
            link: 'https://www.oneplus.in/oneplus-12' 
        },
        { 
            name: 'Xiaomi 14 Pro', 
            price: 69999, 
            img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop', 
            link: 'https://www.mi.com/in/' 
        },
        { 
            name: 'Google Pixel 8', 
            price: 75999, 
            img: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=400&fit=crop', 
            link: 'https://store.google.com/in/product/pixel_8' 
        },
        { 
            name: 'Nothing Phone (2)', 
            price: 44999, 
            img: 'https://images.unsplash.com/photo-1616348436168-de43ad0db179?w=400&h=400&fit=crop', 
            link: 'https://nothing.tech/pages/phone-2' 
        },
        { 
            name: 'Vivo X100 Pro', 
            price: 89999, 
            img: 'https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?w=400&h=400&fit=crop', 
            link: 'https://www.vivo.com/in' 
        },
        { 
            name: 'Realme GT 5 Pro', 
            price: 42999, 
            img: 'https://images.unsplash.com/photo-1464380573004-8ca85a08751a?w=400&h=400&fit=crop', 
            link: 'https://www.realme.com/in/' 
        },
        { 
            name: 'Motorola Edge 40', 
            price: 39999, 
            img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop', 
            link: 'https://www.motorola.in/' 
        },
        { 
            name: 'Oppo Find X7', 
            price: 81999, 
            img: 'https://images.unsplash.com/photo-1567581935884-3349723552ca?w=400&h=400&fit=crop', 
            link: 'https://www.oppo.com/in/' 
        }
    ],
    laptops: [
        { 
            name: 'MacBook Pro 16"', 
            price: 249900, 
            img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop', 
            link: 'https://www.apple.com/in/macbook-pro/' 
        },
        { 
            name: 'Dell XPS 16', 
            price: 189900, 
            img: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=400&fit=crop', 
            link: 'https://www.dell.com/en-in/shop/dell-laptops/xps-laptops' 
        },
        { 
            name: 'HP Spectre x360', 
            price: 159900, 
            img: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=400&fit=crop', 
            link: 'https://www.hp.com/in-en/shop/laptops/spectre' 
        },
        { 
            name: 'Lenovo ThinkPad X1', 
            price: 169900, 
            img: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=400&fit=crop', 
            link: 'https://www.lenovo.com/in/en/laptops/thinkpad/' 
        },
        { 
            name: 'Asus ROG Zephyrus', 
            price: 219900, 
            img: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=400&h=400&fit=crop', 
            link: 'https://rog.asus.com/in/laptops/' 
        },
        { 
            name: 'Acer Swift Edge', 
            price: 109900, 
            img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop', 
            link: 'https://www.acer.com/in-en/laptops' 
        },
        { 
            name: 'MSI Stealth 16', 
            price: 199900, 
            img: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=400&fit=crop', 
            link: 'https://www.msi.com/Laptop' 
        },
        { 
            name: 'Razer Blade 16', 
            price: 279900, 
            img: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=400&h=400&fit=crop', 
            link: 'https://www.razer.com/gaming-laptops' 
        },
        { 
            name: 'LG Gram 17', 
            price: 149900, 
            img: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=400&fit=crop', 
            link: 'https://www.lg.com/in/laptops' 
        },
        { 
            name: 'Samsung Book 4', 
            price: 119900, 
            img: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=400&fit=crop', 
            link: 'https://www.samsung.com/in/laptops/' 
        }
    ],
    clothes: [
        { 
            name: "Men's Cotton T-shirt", 
            price: 999, 
            img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop', 
            link: 'https://www.myntra.com/tshirts' 
        },
        { 
            name: "Women's Silk Blouse", 
            price: 2499, 
            img: 'https://images.unsplash.com/photo-1559557742-68117f1db7fb?w=400&h=400&fit=crop', 
            link: 'https://www.myntra.com/blouses' 
        },
        { 
            name: 'Leather Jacket', 
            price: 6499, 
            img: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop', 
            link: 'https://www.myntra.com/jackets' 
        },
        { 
            name: 'Denim Jeans', 
            price: 2999, 
            img: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&h=400&fit=crop', 
            link: 'https://www.myntra.com/jeans' 
        },
        { 
            name: 'Sport Shoes', 
            price: 4999, 
            img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop', 
            link: 'https://www.myntra.com/sports-shoes' 
        },
        { 
            name: 'Summer Dress', 
            price: 3999, 
            img: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=400&fit=crop', 
            link: 'https://www.myntra.com/dresses' 
        },
        { 
            name: 'Wool Sweater', 
            price: 3299, 
            img: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=400&h=400&fit=crop', 
            link: 'https://www.myntra.com/sweaters' 
        },
        { 
            name: 'Formal Shirt', 
            price: 1899, 
            img: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=400&fit=crop', 
            link: 'https://www.myntra.com/shirts' 
        },
        { 
            name: 'Casual Hoodie', 
            price: 2799, 
            img: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop', 
            link: 'https://www.myntra.com/hoodies' 
        },
        { 
            name: 'Jogger Pants', 
            price: 2199, 
            img: 'https://images.unsplash.com/photo-1584865288642-420a9d9b9f9b?w=400&h=400&fit=crop', 
            link: 'https://www.myntra.com/joggers' 
        }
    ]
};

// ============================================
// STATE
// ============================================
let cartCount = 0;
let activeSection = 'mobiles';

// ============================================
// DOM REFS
// ============================================
const container = document.getElementById('productContainer');
const toast = document.getElementById('toast');
const toastText = document.getElementById('toastText');
const cartCounter = document.getElementById('cartCounter');

// ============================================
// HELPER FUNCTIONS
// ============================================
function formatPrice(price) {
    return '₹' + Number(price).toLocaleString('en-IN');
}

function showToast(msg) {
    toastText.textContent = msg || 'Added to cart';
    toast.classList.add('show');
    clearTimeout(window.toastTimer);
    window.toastTimer = setTimeout(() => {
        toast.classList.remove('show');
    }, 2200);
}

function updateCartBadge() {
    cartCounter.textContent = cartCount;
}

function handleAddToCart(productName, price) {
    cartCount += 1;
    updateCartBadge();
    showToast(`${productName} · ${formatPrice(price)}`);
}

// ============================================
// RENDER PRODUCTS
// ============================================
function renderProducts(sectionKey) {
    const productList = products[sectionKey];
    if (!productList) return;

    activeSection = sectionKey;

    const cards = productList.map((p) => {
        const priceNum = p.price;
        return `
            <div class="product-card" data-product="${p.name}">
                <div class="product-img">
                    <img src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.src='https://placehold.co/400x400/1a2a3a/fff?text=${encodeURIComponent(p.name)}'">
                </div>
                <div class="product-name">${p.name}</div>
                <div class="product-price"><i class="fas fa-rupee-sign"></i> ${priceNum.toLocaleString('en-IN')}</div>
                <button class="add-btn" data-name="${p.name}" data-price="${priceNum}">
                    <i class="fas fa-plus-circle"></i> Add
                </button>
                <a href="${p.link}" target="_blank" class="buy-link">
                    <i class="fas fa-external-link-alt"></i> View on store
                </a>
            </div>
        `;
    }).join('');

    const titles = {
        mobiles: '<i class="fas fa-mobile-alt"></i> Mobiles',
        laptops: '<i class="fas fa-laptop"></i> Laptops',
        clothes: '<i class="fas fa-tshirt"></i> Clothes'
    };

    const html = `
        <div class="section-title">${titles[sectionKey] || sectionKey}</div>
        <hr class="section-divider">
        <div class="product-grid" id="productGrid">
            ${cards}
        </div>
    `;

    container.innerHTML = html;

    // Attach event listeners to Add buttons
    document.querySelectorAll('.add-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const name = this.getAttribute('data-name');
            const price = parseInt(this.getAttribute('data-price'), 10);
            handleAddToCart(name, price);
        });
    });

    // Update active tab
    document.querySelectorAll('.tab-btn').forEach(tab => {
        tab.classList.toggle('active', tab.dataset.section === sectionKey);
    });
}

// ============================================
// TAB SETUP
// ============================================
function setupTabs() {
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const section = this.dataset.section;
            if (section && section !== activeSection) {
                renderProducts(section);
            }
        });
    });
}

// ============================================
// INITIALIZATION
// ============================================
function init() {
    renderProducts('mobiles');
    setupTabs();
    updateCartBadge();
}

// Run when DOM is ready
document.addEventListener('DOMContentLoaded', init);
