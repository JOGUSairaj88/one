const products = [
  // Mobiles
  {id:1,cat:"mobiles",name:"Apple iPhone 15",price:69999,old:79999,rating:4.7,img:"https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=700&q=80",search:"Apple iPhone 15"},
  {id:2,cat:"mobiles",name:"Samsung Galaxy S24",price:74999,old:84999,rating:4.8,img:"https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=700&q=80",search:"Samsung Galaxy S24"},
  {id:3,cat:"mobiles",name:"Google Pixel 9",price:79999,old:89999,rating:4.6,img:"https://images.unsplash.com/photo-1511709268805-1e9f3f2f9b5f?auto=format&fit=crop&w=700&q=80",search:"Google Pixel 9"},
  {id:4,cat:"mobiles",name:"OnePlus 13",price:69999,old:74999,rating:4.7,img:"https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&w=700&q=80",search:"OnePlus 13"},
  {id:5,cat:"mobiles",name:"Xiaomi 14",price:49999,old:59999,rating:4.5,img:"https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=700&q=80",search:"Xiaomi 14"},
  {id:6,cat:"mobiles",name:"Nothing Phone 3",price:44999,old:49999,rating:4.4,img:"https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=700&q=80",search:"Nothing Phone 3"},
  {id:7,cat:"mobiles",name:"Motorola Edge 60",price:34999,old:39999,rating:4.4,img:"https://images.unsplash.com/photo-1607936854279-55e8e7f3e8c5?auto=format&fit=crop&w=700&q=80",search:"Motorola Edge 60"},
  {id:8,cat:"mobiles",name:"Vivo X200",price:65999,old:72999,rating:4.6,img:"https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?auto=format&fit=crop&w=700&q=80",search:"Vivo X200"},
  {id:9,cat:"mobiles",name:"OPPO Find X8",price:61999,old:67999,rating:4.5,img:"https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=700&q=80",search:"OPPO Find X8"},
  {id:10,cat:"mobiles",name:"Realme GT 7",price:42999,old:46999,rating:4.3,img:"https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=700&q=80",search:"Realme GT 7"},

  // Laptops
  {id:11,cat:"laptops",name:"Apple MacBook Air M3",price:104999,old:114999,rating:4.9,img:"https://images.unsplash.com/photo-1517336714739-489689fd1ca8?auto=format&fit=crop&w=700&q=80",search:"Apple MacBook Air M3"},
  {id:12,cat:"laptops",name:"Dell XPS 14",price:129999,old:139999,rating:4.7,img:"https://images.unsplash.com/photo-1593642702749-b7d2a804fbcf?auto=format&fit=crop&w=700&q=80",search:"Dell XPS 14"},
  {id:13,cat:"laptops",name:"HP Spectre x360",price:119999,old:129999,rating:4.6,img:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=700&q=80",search:"HP Spectre x360"},
  {id:14,cat:"laptops",name:"Lenovo ThinkPad X1",price:139999,old:149999,rating:4.8,img:"https://images.unsplash.com/photo-1484788984921-03950022c9ef?auto=format&fit=crop&w=700&q=80",search:"Lenovo ThinkPad X1"},
  {id:15,cat:"laptops",name:"ASUS ROG Strix",price:149999,old:169999,rating:4.8,img:"https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=700&q=80",search:"ASUS ROG Strix"},
  {id:16,cat:"laptops",name:"Acer Swift Go",price:74999,old:84999,rating:4.5,img:"https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=700&q=80",search:"Acer Swift Go"},
  {id:17,cat:"laptops",name:"MSI Modern 14",price:67999,old:74999,rating:4.4,img:"https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=700&q=80",search:"MSI Modern 14"},
  {id:18,cat:"laptops",name:"Microsoft Surface Laptop",price:109999,old:119999,rating:4.6,img:"https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=700&q=80",search:"Microsoft Surface Laptop"},
  {id:19,cat:"laptops",name:"Samsung Galaxy Book",price:89999,old:99999,rating:4.5,img:"https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=700&q=80",search:"Samsung Galaxy Book"},
  {id:20,cat:"laptops",name:"Lenovo IdeaPad Slim",price:57999,old:64999,rating:4.3,img:"https://images.unsplash.com/photo-1602080858428-57174f9431cf?auto=format&fit=crop&w=700&q=80",search:"Lenovo IdeaPad Slim"},

  // Clothes
  {id:21,cat:"clothes",name:"Classic Cotton T-Shirt",price:799,old:1299,rating:4.5,img:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=80",search:"men cotton t shirt"},
  {id:22,cat:"clothes",name:"Premium Polo T-Shirt",price:1199,old:1799,rating:4.6,img:"https://images.unsplash.com/photo-1625910513413-5fc45c5f8e9f?auto=format&fit=crop&w=700&q=80",search:"polo t shirt"},
  {id:23,cat:"clothes",name:"Slim Fit Denim Jeans",price:1899,old:2499,rating:4.5,img:"https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=700&q=80",search:"denim jeans"},
  {id:24,cat:"clothes",name:"Oversized Hoodie",price:1699,old:2299,rating:4.7,img:"https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=700&q=80",search:"hoodie"},
  {id:25,cat:"clothes",name:"Casual Linen Shirt",price:1499,old:1999,rating:4.4,img:"https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=700&q=80",search:"linen shirt"},
  {id:26,cat:"clothes",name:"Women's Summer Dress",price:1999,old:2999,rating:4.6,img:"https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=700&q=80",search:"women summer dress"},
  {id:27,cat:"clothes",name:"Casual Bomber Jacket",price:2499,old:3499,rating:4.5,img:"https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=700&q=80",search:"bomber jacket"},
  {id:28,cat:"clothes",name:"Women Casual Top",price:999,old:1499,rating:4.4,img:"https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=700&q=80",search:"women casual top"},
  {id:29,cat:"clothes",name:"Running Track Pants",price:1299,old:1799,rating:4.5,img:"https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&w=700&q=80",search:"track pants"},
  {id:30,cat:"clothes",name:"Premium Casual Sneakers",price:2299,old:2999,rating:4.7,img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=80",search:"casual sneakers"}
];

let currentCategory = "all";
let cart = JSON.parse(localStorage.getItem("shopkart-cart") || "[]");

const grid = document.getElementById("products");
const cartPanel = document.getElementById("cartPanel");
const overlay = document.getElementById("overlay");

const money = n => new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR",maximumFractionDigits:0}).format(n);

function filteredProducts(){
  let list = products.filter(p => currentCategory === "all" || p.cat === currentCategory);
  const q = document.getElementById("searchInput").value.trim().toLowerCase();
  if(q) list = list.filter(p => `${p.name} ${p.cat}`.toLowerCase().includes(q));
  const sort = document.getElementById("sortSelect").value;
  if(sort==="low") list.sort((a,b)=>a.price-b.price);
  if(sort==="high") list.sort((a,b)=>b.price-a.price);
  if(sort==="name") list.sort((a,b)=>a.name.localeCompare(b.name));
  return list;
}

function renderProducts(){
  const list = filteredProducts();
  document.getElementById("sectionTitle").textContent =
    currentCategory === "all" ? "Featured Products" :
    currentCategory[0].toUpperCase()+currentCategory.slice(1);
  grid.innerHTML = list.length ? list.map(p => `
    <article class="product-card">
      <img class="product-img" src="${p.img}" alt="${p.name}" loading="lazy">
      <div class="product-info">
        <span class="tag">${p.cat.toUpperCase()}</span>
        <div class="product-name">${p.name}</div>
        <div class="rating">★★★★★ <span style="color:#64748b">${p.rating}</span></div>
        <div class="price">${money(p.price)} <span class="old-price">${money(p.old)}</span></div>
        <div class="card-actions">
          <button class="add-btn" onclick="addToCart(${p.id})">Add to Cart</button>
          <button class="buy-btn" onclick="buyOnline('${encodeURIComponent(p.search)}')">Buy Online</button>
        </div>
      </div>
    </article>
  `).join("") : `<div class="empty" style="grid-column:1/-1">No products found. Try another search.</div>`;
}

function addToCart(id){
  const item = products.find(p=>p.id===id);
  const existing = cart.find(p=>p.id===id);
  if(existing) existing.qty++;
  else cart.push({...item,qty:1});
  saveCart();
  openCart();
}

function removeFromCart(id){
  cart = cart.filter(p=>p.id!==id);
  saveCart();
}

function saveCart(){
  localStorage.setItem("shopkart-cart",JSON.stringify(cart));
  renderCart();
}

function renderCart(){
  document.getElementById("cartCount").textContent = cart.reduce((s,p)=>s+p.qty,0);
  document.getElementById("cartItems").innerHTML = cart.length ? cart.map(p=>`
    <div class="cart-row">
      <img src="${p.img}" alt="${p.name}">
      <div><h4>${p.name}</h4><small>${p.qty} × ${money(p.price)}</small></div>
      <button class="remove" onclick="removeFromCart(${p.id})">✕</button>
    </div>
  `).join("") : `<div class="empty">Your cart is empty.</div>`;
  document.getElementById("cartTotal").textContent = money(cart.reduce((s,p)=>s+p.price*p.qty,0));
}

function openCart(){cartPanel.classList.add("open");overlay.classList.add("open")}
function closeCart(){cartPanel.classList.remove("open");overlay.classList.remove("open")}
function buyOnline(query){
  window.open(`https://www.amazon.in/s?k=${query}`,"_blank","noopener");
}

document.querySelectorAll(".nav-link").forEach(btn=>{
  btn.addEventListener("click",()=>{
    document.querySelectorAll(".nav-link").forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");
    currentCategory = btn.dataset.category;
    document.getElementById("searchInput").value="";
    renderProducts();
    document.getElementById("products").scrollIntoView({behavior:"smooth"});
  });
});

document.querySelectorAll("[data-footer-category]").forEach(a=>{
  a.addEventListener("click",e=>{
    e.preventDefault();
    document.querySelector(`[data-category="${a.dataset.footerCategory}"]`).click();
  });
});

document.getElementById("searchInput").addEventListener("input",renderProducts);
document.getElementById("searchBtn").addEventListener("click",renderProducts);
document.getElementById("sortSelect").addEventListener("change",renderProducts);
document.getElementById("cartBtn").addEventListener("click",openCart);
document.getElementById("closeCart").addEventListener("click",closeCart);
overlay.addEventListener("click",closeCart);
document.getElementById("checkoutBtn").addEventListener("click",()=>{
  if(!cart.length) return alert("Your cart is empty.");
  alert("Demo checkout: connect this button to your payment gateway/backend.");
});

renderProducts();
renderCart();
