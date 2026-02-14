// --- 45 PRODUCTS (With Smart Size Flag) ---
// hasSize: true -> Show S,M,L,XL
// hasSize: false -> Hide Size Options (Accessories)
const products = [
  // --- MEN ---
  {id:101, cat:"Men", name:"Denim Shirt", price:899, old:1499, img:"https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&q=80", hasSize:true},
  {id:102, cat:"Men", name:"Olive Jacket", price:1299, old:2499, img:"https://images.unsplash.com/photo-1516257984-b1b4d8c9230c?w=500&q=80", hasSize:true},
  {id:103, cat:"Men", name:"Black Hoodie", price:699, old:1299, img:"https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=500&q=80", hasSize:true},
  {id:104, cat:"Men", name:"Formal Trousers", price:799, old:1599, img:"https://images.unsplash.com/photo-1473966968600-1a2b356f9519?w=500&q=80", hasSize:true},
  {id:105, cat:"Men", name:"White Sneakers", price:999, old:1999, img:"https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&q=80", hasSize:true},
  {id:106, cat:"Men", name:"Blue Tee", price:399, old:799, img:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80", hasSize:true},
  {id:107, cat:"Men", name:"Leather Watch", price:1499, old:2999, img:"https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500&q=80", hasSize:false},
  {id:108, cat:"Men", name:"Sunglasses", price:499, old:999, img:"https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&q=80", hasSize:false},
  {id:109, cat:"Men", name:"Checkered Shirt", price:599, old:1199, img:"https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&q=80", hasSize:true},
  {id:110, cat:"Men", name:"Running Shoes", price:1199, old:2299, img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80", hasSize:true},
  {id:111, cat:"Men", name:"Blue Blazer", price:2499, old:4999, img:"https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=500&q=80", hasSize:true},
  {id:112, cat:"Men", name:"Leather Boots", price:1899, old:3500, img:"https://images.unsplash.com/photo-1638247025967-b4e38f787b76?w=500&q=80", hasSize:true},
  {id:113, cat:"Men", name:"Gym Tank", price:299, old:599, img:"https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=500&q=80", hasSize:true},
  {id:114, cat:"Men", name:"Beige Chinos", price:699, old:1399, img:"https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=500&q=80", hasSize:true},
  {id:115, cat:"Men", name:"Striped Polo", price:450, old:899, img:"https://images.unsplash.com/photo-1626557981101-aae6f84aa6ff?w=500&q=80", hasSize:true},

  // --- WOMEN ---
  {id:201, cat:"Women", name:"Floral Dress", price:799, old:1599, img:"https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500&q=80", hasSize:true},
  {id:202, cat:"Women", name:"Crop Top", price:349, old:699, img:"https://images.unsplash.com/photo-1503342394128-c104d54dba01?w=500&q=80", hasSize:true},
  {id:203, cat:"Women", name:"Silk Saree", price:1599, old:3299, img:"https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=500&q=80", hasSize:true},
  {id:204, cat:"Women", name:"Yellow Kurti", price:499, old:999, img:"https://images.unsplash.com/photo-1583391733958-84b2e15b5039?w=500&q=80", hasSize:true},
  {id:205, cat:"Women", name:"Handbag", price:899, old:1799, img:"https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500&q=80", hasSize:false},
  {id:206, cat:"Women", name:"Denim Jacket", price:999, old:1999, img:"https://images.unsplash.com/photo-1554568218-0f1715e72254?w=500&q=80", hasSize:true},
  {id:207, cat:"Women", name:"High Heels", price:1299, old:2599, img:"https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500&q=80", hasSize:true},
  {id:208, cat:"Women", name:"Jewelry Set", price:499, old:1499, img:"https://images.unsplash.com/photo-1599643478518-17488fbbcd75?w=500&q=80", hasSize:false},
  {id:209, cat:"Women", name:"Pleated Skirt", price:599, old:1199, img:"https://images.unsplash.com/photo-1582142327269-82388a4137f8?w=500&q=80", hasSize:true},
  {id:210, cat:"Women", name:"White Blouse", price:449, old:899, img:"https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=500&q=80", hasSize:true},
  {id:211, cat:"Women", name:"Pink Scarf", price:199, old:499, img:"https://images.unsplash.com/photo-1601323326759-19c211105c3c?w=500&q=80", hasSize:false},
  {id:212, cat:"Women", name:"Boho Dress", price:899, old:1899, img:"https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=500&q=80", hasSize:true},
  {id:213, cat:"Women", name:"Skinny Jeans", price:799, old:1599, img:"https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&q=80", hasSize:true},
  {id:214, cat:"Women", name:"Winter Coat", price:1899, old:3999, img:"https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=500&q=80", hasSize:true},
  {id:215, cat:"Women", name:"Sun Hat", price:299, old:599, img:"https://images.unsplash.com/photo-1565622818960-9f5e1f021f64?w=500&q=80", hasSize:false},

  // --- KIDS ---
  {id:301, cat:"Kids", name:"Princess Dress", price:599, old:1299, img:"https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=500&q=80", hasSize:true},
  {id:302, cat:"Kids", name:"Boy's Denim", price:499, old:999, img:"https://images.unsplash.com/photo-1519457431-44ccd64a579b?w=500&q=80", hasSize:true},
  {id:303, cat:"Kids", name:"Puffer Jacket", price:899, old:1799, img:"https://images.unsplash.com/photo-1519238263496-6361932a3348?w=500&q=80", hasSize:true},
  {id:304, cat:"Kids", name:"Teddy Bear", price:299, old:599, img:"https://images.unsplash.com/photo-1559454403-b8fb87521bc7?w=500&q=80", hasSize:false},
  {id:305, cat:"Kids", name:"Sneakers", price:599, old:1199, img:"https://images.unsplash.com/photo-1514989940723-e887532d5588?w=500&q=80", hasSize:true},
  {id:306, cat:"Kids", name:"School Bag", price:450, old:899, img:"https://images.unsplash.com/photo-1588058365815-c96ac30ee309?w=500&q=80", hasSize:false},
  {id:307, cat:"Kids", name:"Boy's Suit", price:999, old:1999, img:"https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=500&q=80", hasSize:true},
  {id:308, cat:"Kids", name:"Girl's Hat", price:199, old:399, img:"https://images.unsplash.com/photo-1556306535-0f09a537f0a3?w=500&q=80", hasSize:false},
  {id:309, cat:"Kids", name:"Baby Romper", price:349, old:699, img:"https://images.unsplash.com/photo-1522771753035-1a5b6519b6b1?w=500&q=80", hasSize:true},
  {id:310, cat:"Kids", name:"Graphic Tee", price:249, old:499, img:"https://images.unsplash.com/photo-1519241047957-be31d7379a5d?w=500&q=80", hasSize:true},
  {id:311, cat:"Kids", name:"Raincoat", price:599, old:1199, img:"https://images.unsplash.com/photo-1621452773781-0f992fd0f5d0?w=500&q=80", hasSize:true},
  {id:312, cat:"Kids", name:"Toy Car", price:149, old:299, img:"https://images.unsplash.com/photo-1594787318286-3d835c1d207f?w=500&q=80", hasSize:false},
  {id:313, cat:"Kids", name:"Kids Sunglasses", price:199, old:399, img:"https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=500&q=80", hasSize:false},
  {id:314, cat:"Kids", name:"Pajamas", price:399, old:799, img:"https://images.unsplash.com/photo-1514331405072-a7448839d37d?w=500&q=80", hasSize:true},
  {id:315, cat:"Kids", name:"Party Frock", price:699, old:1399, img:"https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?w=500&q=80", hasSize:true}
];

// --- STATE VARIABLES ---
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let selectedSize = "";
let currentProduct = null;

// --- 1. RENDER HOME (Horizontal Sections) ---
function renderHome() {
  const container = document.getElementById("main-content");
  container.innerHTML = "";
  
  // Activate "All" Pill
  document.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
  document.getElementById('pill-all').classList.add('active');

  const categories = ['Women', 'Men', 'Kids']; // Strategic Order

  categories.forEach(cat => {
    // Section Header
    const section = document.createElement("div");
    section.className = "category-block";
    section.innerHTML = `
      <div class="section-header" onclick="renderGrid('${cat}')">
        <div class="section-title">${cat} Collection</div>
        <div class="view-all">View All ></div>
      </div>
    `;

    // Horizontal Scroller
    const scroll = document.createElement("div");
    scroll.className = "horizontal-scroll";

    const items = products.filter(p => p.cat === cat);
    items.forEach(p => {
      const isWished = wishlist.includes(p.id) ? 'active' : '';
      scroll.innerHTML += `
        <div class="h-card">
          <div class="heart-btn ${isWished}" onclick="toggleWishlist(event, ${p.id})">♥</div>
          <img src="${p.img}" onclick="openProduct(${p.id})">
          <div class="h-details" onclick="openProduct(${p.id})">
            <div class="h-title">${p.name}</div>
            <div style="margin-top:2px;">
              <span class="h-price">₹${p.price}</span>
              <span class="h-off">50% OFF</span>
            </div>
          </div>
        </div>
      `;
    });

    section.appendChild(scroll);
    container.appendChild(section);
  });
}

// --- 2. RENDER GRID (Full Category View) ---
function renderGrid(cat) {
  const container = document.getElementById("main-content");
  container.innerHTML = `<div class="page-title" onclick="renderHome()">← Back to Home</div>`;
  
  // Update Pills
  document.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
  document.getElementById(`pill-${cat}`).classList.add('active');

  const grid = document.createElement("div");
  grid.className = "full-grid";

  const items = products.filter(p => p.cat === cat);
  items.forEach(p => {
    const isWished = wishlist.includes(p.id) ? 'active' : '';
    grid.innerHTML += `
      <div class="grid-card">
        <div class="heart-btn ${isWished}" onclick="toggleWishlist(event, ${p.id})">♥</div>
        <img src="${p.img}" onclick="openProduct(${p.id})">
        <div class="grid-info" onclick="openProduct(${p.id})">
          <div class="h-title">${p.name}</div>
          <div style="margin-top:5px;">
            <span class="h-price">₹${p.price}</span>
            <span class="h-off">50% OFF</span>
          </div>
        </div>
      </div>
    `;
  });
  container.appendChild(grid);
  window.scrollTo(0,0);
}

// --- 3. PRODUCT DETAILS POPUP ---
function openProduct(id) {
  currentProduct = products.find(x => x.id === id);
  selectedSize = ""; // Reset size
  
  const modal = document.getElementById("product-modal");
  
  // Logic: Show Size Buttons ONLY if hasSize is true
  let sizeHTML = "";
  if(currentProduct.hasSize) {
    sizeHTML = `
      <h4 style="margin-bottom:10px;">Select Size</h4>
      <div class="size-box">
        <div class="size-opt" onclick="selectSize(this, 'S')">S</div>
        <div class="size-opt" onclick="selectSize(this, 'M')">M</div>
        <div class="size-opt" onclick="selectSize(this, 'L')">L</div>
        <div class="size-opt" onclick="selectSize(this, 'XL')">XL</div>
      </div>
      <p id="size-error" style="color:red; display:none; font-size:12px; margin-top:5px;">Please select a size</p>
    `;
  } else {
    selectedSize = "Free Size"; // Auto-select for accessories
  }

  modal.innerHTML = `
    <div style="position:relative;">
      <button onclick="closeModal('product-modal')" style="position:absolute; top:10px; left:10px; background:white; border:none; border-radius:50%; width:40px; height:40px; font-size:20px; box-shadow:0 2px 5px rgba(0,0,0,0.2); cursor:pointer;">←</button>
      <img src="${currentProduct.img}" class="pp-img">
    </div>
    <div class="pp-content">
      <h2 style="margin:0;">${currentProduct.name}</h2>
      <div style="margin:5px 0 15px;">
        <span class="pp-price">₹${currentProduct.price}</span>
        <span class="pp-old">₹${currentProduct.old}</span>
        <span style="color:#00b894; font-weight:700; margin-left:10px;">50% OFF</span>
      </div>
      
      ${sizeHTML}

      <div style="margin-top:20px; color:#666; font-size:13px; line-height:1.5;">
        Premium quality product. 7-day easy return policy. 
        Fast delivery within 3-5 days.
      </div>
    </div>

    <div class="bottom-bar">
      <button class="btn-action btn-cart" onclick="addToCart(${currentProduct.id})">Add to Cart</button>
      <button class="btn-action btn-buy" onclick="openCheckoutForm()">Buy Now</button>
    </div>
  `;
  modal.style.display = "block";
  document.body.style.overflow = "hidden"; // Lock Background Scroll
}

function selectSize(btn, size) {
  document.querySelectorAll(".size-opt").forEach(b => b.classList.remove("selected"));
  btn.classList.add("selected");
  selectedSize = size;
  const err = document.getElementById("size-error");
  if(err) err.style.display = "none";
}

// --- 4. CHECKOUT FORM ---
function openCheckoutForm() {
  if(currentProduct.hasSize && !selectedSize) {
    document.getElementById("size-error").style.display = "block";
    return;
  }

  const modal = document.getElementById("checkout-modal");
  modal.innerHTML = `
    <div style="display:flex; align-items:center; margin-bottom:20px;">
      <button onclick="closeModal('checkout-modal')" style="border:none; background:none; font-size:24px; cursor:pointer;">←</button>
      <h2 style="margin-left:10px;">Delivery Details</h2>
    </div>

    <div class="form-group"><label class="form-label">Name</label><input type="text" id="c-name" class="form-input" placeholder="Full Name"></div>
    <div class="form-group"><label class="form-label">Phone</label><input type="tel" id="c-phone" class="form-input" placeholder="Mobile Number"></div>
    <div class="form-group"><label class="form-label">Address</label><input type="text" id="c-address" class="form-input" placeholder="House No, Area"></div>
    <div class="form-group"><label class="form-label">City</label><input type="text" id="c-city" class="form-input" placeholder="City - Pincode"></div>

    <div class="order-summary">
      <img src="${currentProduct.img}" class="summary-img">
      <div class="summary-info">
        <div style="font-weight:bold;">${currentProduct.name}</div>
        <div style="color:#666;">Size: ${selectedSize}</div>
        <div style="color:#e91e63; font-weight:bold;">₹${currentProduct.price}</div>
      </div>
    </div>

    <button class="btn-confirm" onclick="sendWhatsapp()">Confirm Order via WhatsApp</button>
  `;
  modal.style.display = "block";
}

function sendWhatsapp() {
  const name = document.getElementById("c-name").value;
  const phone = document.getElementById("c-phone").value;
  const address = document.getElementById("c-address").value;
  const city = document.getElementById("c-city").value;

  if(!name || !phone || !address) { alert("Please fill details"); return; }

  const sellerNumber = "919361034037"; // YOUR NUMBER
  const msg = `*NEW ORDER* %0A%0A` +
              `*Customer:* ${name}%0A` +
              `*Phone:* ${phone}%0A` +
              `*Address:* ${address}, ${city}%0A%0A` +
              `*Item:* ${currentProduct.name}%0A` +
              `*Price:* ₹${currentProduct.price}%0A` +
              `*Size:* ${selectedSize}%0A` +
              `*Ref ID:* #${currentProduct.id}%0A` +
              `*Image:* ${currentProduct.img}`;
  
  window.open(`https://wa.me/${sellerNumber}?text=${msg}`, "_blank");
}

// --- 5. CART & WISHLIST LOGIC ---
function toggleWishlist(e, id) {
  e.stopPropagation();
  const btn = e.currentTarget;
  if(wishlist.includes(id)) {
    wishlist = wishlist.filter(i => i !== id);
    btn.classList.remove('active');
  } else {
    wishlist.push(id);
    btn.classList.add('active');
  }
  localStorage.setItem('wishlist', JSON.stringify(wishlist));
  updateBadges();
}

function addToCart(id) {
  if(currentProduct.hasSize && !selectedSize) {
    document.getElementById("size-error").style.display = "block";
    return;
  }
  cart.push({id: id, size: selectedSize});
  localStorage.setItem('cart', JSON.stringify(cart));
  updateBadges();
  closeModal('product-modal');
  alert("Added to Cart!");
}

function renderWishlistPage() {
  const container = document.getElementById("main-content");
  container.innerHTML = `<div class="page-title">My Wishlist (${wishlist.length})</div>`;
  const grid = document.createElement("div");
  grid.className = "full-grid";
  
  wishlist.forEach(id => {
    const p = products.find(x => x.id === id);
    if(p) {
      grid.innerHTML += `
        <div class="grid-card">
          <div class="heart-btn active" onclick="toggleWishlist(event, ${p.id}); renderWishlistPage()">♥</div>
          <img src="${p.img}" onclick="openProduct(${p.id})">
          <div class="grid-info">
            <div class="h-title">${p.name}</div>
            <span class="h-price">₹${p.price}</span>
          </div>
        </div>
      `;
    }
  });
  if(wishlist.length === 0) container.innerHTML += "<div style='text-align:center; padding:50px; color:#888;'>Empty Wishlist</div>";
  container.appendChild(grid);
}

function renderCartPage() {
  const container = document.getElementById("main-content");
  container.innerHTML = `<div class="page-title">My Cart (${cart.length})</div>`;
  let total = 0;
  
  cart.forEach(item => {
    const p = products.find(x => x.id === item.id);
    if(p) {
      total += p.price;
      container.innerHTML += `
        <div class="cart-item">
          <img src="${p.img}" class="cart-img">
          <div class="cart-info">
            <div class="cart-name">${p.name}</div>
            <div class="cart-meta">Size: ${item.size}</div>
            <div class="cart-price">₹${p.price}</div>
          </div>
        </div>
      `;
    }
  });
  
  container.innerHTML += `
    <div style="position:fixed; bottom:0; left:0; width:100%; background:white; padding:15px; box-shadow:0 -5px 15px rgba(0,0,0,0.05); display:flex; justify-content:space-between; align-items:center;">
      <div>Total: <span style="font-weight:bold; font-size:18px;">₹${total}</span></div>
      <button onclick="alert('Checkout Feature uses WhatsApp for individual items. Please buy items individually.')" style="background:#e91e63; color:white; padding:10px 20px; border:none; border-radius:6px; font-weight:bold;">Checkout All</button>
    </div>
  `;
}

// --- UTILS ---
function closeModal(id) {
  document.getElementById(id).style.display = "none";
  document.body.style.overflow = "auto";
}

function updateBadges() {
  document.getElementById("wishlist-badge").innerText = wishlist.length;
  document.getElementById("cart-badge").innerText = cart.length;
}

// --- INITIALIZE ---
renderHome();
updateBadges();
