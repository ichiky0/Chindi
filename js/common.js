/* ==========================================
   E-COMMERCE PRO - COMMON JS
   Auth | Cart | Wishlist | Orders | UI Utils
   ========================================== */

const STORAGE = {
  users: 'ec_pro_users',
  auth: 'ec_pro_auth',
  cart: 'ec_pro_cart',
  wishlist: 'ec_pro_wishlist',
  orders: 'ec_pro_orders',
  addresses: 'ec_pro_addresses',
};

/* ============================
   AUTH
   ============================ */

function getUsers() {
  try { return JSON.parse(localStorage.getItem(STORAGE.users)) || []; } catch { return []; }
}

function saveUsers(users) { localStorage.setItem(STORAGE.users, JSON.stringify(users)); }

function getAuth() {
  try { return JSON.parse(localStorage.getItem(STORAGE.auth)); } catch { return null; }
}

function setAuth(user) { localStorage.setItem(STORAGE.auth, JSON.stringify(user)); }

function clearAuth() { localStorage.removeItem(STORAGE.auth); }

function isLoggedIn() { return !!getAuth(); }

function getCurrentUser() { return getAuth(); }

function registerUser(name, email, phone, password) {
  const users = getUsers();
  if (users.find(u => u.email === email)) return { ok: false, error: 'Email already registered.' };
  if (users.find(u => u.phone === phone)) return { ok: false, error: 'Phone number already registered.' };
  const user = { id: Date.now(), name, email, phone, password, created: new Date().toISOString() };
  users.push(user);
  saveUsers(users);
  setAuth(user);
  return { ok: true, user };
}

function loginUser(email, password) {
  const users = getUsers();
  const user = users.find(u => u.email === email && u.password === password);
  if (!user) return { ok: false, error: 'Invalid email or password.' };
  setAuth(user);
  return { ok: true, user };
}

function updateUserProfile(updates) {
  const user = getAuth();
  if (!user) return false;
  const users = getUsers();
  const idx = users.findIndex(u => u.id === user.id);
  if (idx === -1) return false;
  const updated = { ...users[idx], ...updates };
  users[idx] = updated;
  saveUsers(users);
  setAuth(updated);
  return true;
}

/* ============================
   CART
   ============================ */

function getCart() {
  try { return JSON.parse(localStorage.getItem(STORAGE.cart)) || []; } catch { return []; }
}

function saveCart(cart) { localStorage.setItem(STORAGE.cart, JSON.stringify(cart)); }

function addToCart(productId, qty = 1) {
  const cart = getCart();
  const existing = cart.find(item => item.productId === productId);
  if (existing) existing.qty += qty;
  else cart.push({ productId, qty });
  saveCart(cart);
  updateCartBadge();
  showToast('Added to cart!', 'success');
}

function removeFromCart(productId) {
  let cart = getCart();
  cart = cart.filter(item => item.productId !== productId);
  saveCart(cart);
  updateCartBadge();
}

function updateCartQty(productId, qty) {
  if (qty < 1) { removeFromCart(productId); return; }
  const cart = getCart();
  const item = cart.find(item => item.productId === productId);
  if (item) item.qty = qty;
  saveCart(cart);
  updateCartBadge();
}

function getCartTotal() {
  const cart = getCart();
  let total = 0, mrpTotal = 0, items = 0;
  cart.forEach(item => {
    const p = PRODUCTS.find(prod => prod.id === item.productId);
    if (p) { total += p.price * item.qty; mrpTotal += p.mrp * item.qty; items += item.qty; }
  });
  return { total, mrpTotal, savings: mrpTotal - total, items, count: cart.length };
}

function clearCart() { saveCart([]); updateCartBadge(); }

/* ============================
   WISHLIST
   ============================ */

function getWishlist() {
  try { return JSON.parse(localStorage.getItem(STORAGE.wishlist)) || []; } catch { return []; }
}

function saveWishlist(list) { localStorage.setItem(STORAGE.wishlist, JSON.stringify(list)); }

function toggleWishlist(productId) {
  const list = getWishlist();
  const idx = list.indexOf(productId);
  if (idx > -1) { list.splice(idx, 1); saveWishlist(list); showToast('Removed from wishlist'); return false; }
  else { list.push(productId); saveWishlist(list); showToast('Added to wishlist!', 'success'); return true; }
}

function isInWishlist(productId) { return getWishlist().includes(productId); }

/* ============================
   ORDERS
   ============================ */

function getOrders() {
  try { return JSON.parse(localStorage.getItem(STORAGE.orders)) || []; } catch { return []; }
}

function saveOrders(orders) { localStorage.setItem(STORAGE.orders, JSON.stringify(orders)); }

function placeOrder(address, paymentMethod) {
  const cart = getCart();
  if (!cart.length) return null;
  const { total, mrpTotal } = getCartTotal();
  const order = {
    id: 'ORD-' + Date.now(),
    items: cart.map(c => ({ productId: c.productId, qty: c.qty })),
    total, mrpTotal,
    address, paymentMethod,
    status: 'Placed',
    date: new Date().toISOString(),
  };
  const orders = getOrders();
  orders.unshift(order);
  saveOrders(orders);
  clearCart();
  return order;
}

/* ============================
   ADDRESSES
   ============================ */

function getAddresses() {
  try { return JSON.parse(localStorage.getItem(STORAGE.addresses)) || []; } catch { return []; }
}

function saveAddresses(list) { localStorage.setItem(STORAGE.addresses, JSON.stringify(list)); }

/* ============================
   UI UTILS
   ============================ */

function updateCartBadge() {
  const badge = document.getElementById('cartBadge');
  if (badge) { const { count } = getCartTotal(); badge.textContent = count; badge.style.display = count ? 'flex' : 'none'; }
}

function updateNavUser() {
  const user = getAuth();
  const loginArea = document.getElementById('loginArea');
  const userArea = document.getElementById('userArea');
  const userName = document.getElementById('userName');
  const userMenu = document.getElementById('userMenu');
  if (!loginArea || !userArea) return;

  if (user) {
    loginArea.classList.add('hidden');
    userArea.classList.remove('hidden');
    if (userName) userName.textContent = user.name.split(' ')[0];
  } else {
    loginArea.classList.remove('hidden');
    userArea.classList.add('hidden');
  }
}

function toggleUserMenu() {
  const menu = document.getElementById('userMenu');
  if (menu) menu.classList.toggle('show');
}

function closeUserMenuOnClick(e) {
  const menu = document.getElementById('userMenu');
  const btn = document.getElementById('userArea');
  if (menu && btn && !menu.contains(e.target) && !btn.contains(e.target)) {
    menu.classList.remove('show');
  }
}

function logout() {
  clearAuth();
  window.location.href = 'index.html';
}

function renderStars(rating) {
  let html = '';
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) html += '&#9733;';
    else if (i - 0.5 <= rating) html += '&#9733;';
    else html += '&#9734;';
  }
  return html;
}

function getDiscountPercent(mrp, price) {
  return Math.round((1 - price / mrp) * 100);
}

function formatCurrency(amount) {
  return '₹' + Number(amount).toLocaleString('en-IN');
}
function formatDate(iso) {
  return new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

function renderProductCard(product) {
  const wishlisted = isInWishlist(product.id);
const mrp = product.mrp || product.price;
const discount = getDiscountPercent(mrp, product.price);
  const deal = DEALS.find(d => d.id === product.id);
  const tag = deal ? `<span class="tag">${deal.tag}</span>` : '';
  return `
    <div class="product-card" onclick="location.href='product.html?id=${product.id}'">
      <button class="wishlist-btn ${wishlisted ? 'active' : ''}" onclick="event.stopPropagation(); toggleWishlistBtn(${product.id}, this)" title="Add to wishlist">
        ${wishlisted ? '&#10084;' : '&#9825;'}
      </button>
      <div class="img-wrap">
        <img src="${product.images?.[0] || product.image}" alt="${product.name}" loading="lazy" onerror="this.src='https://via.placeholder.com/400x400/f1f3f6/878787?text=${encodeURIComponent(product.name)}'" />
      </div>
      <div class="info">
        <div class="name">${product.name}</div>
        <div class="rating">
          <span class="stars">${product.rating} <span class="star-icon">&#9733;</span></span>
          <span class="reviews">(${product.reviews.toLocaleString()})</span>
        </div>
        <div class="price-row">
          <span class="price">${formatCurrency(product.price)}</span>
          <span class="mrp">${formatCurrency(mrp)}</span>
          <span class="discount">${discount}% off</span>
        </div>
        ${tag}
      </div>
    </div>
  `;
}

function toggleWishlistBtn(productId, btn) {
  const added = toggleWishlist(productId);
  btn.classList.toggle('active', added);
  btn.innerHTML = added ? '&#10084;' : '&#9825;';
  updateWishlistBadge?.();
}

function showToast(message, type = 'info') {
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }
  const toast = document.createElement('div');
  toast.className = 'toast ' + type;
  toast.innerHTML = `<span>${type === 'success' ? '&#10003;' : type === 'error' ? '&#10007;' : '&#8505;'}</span> ${message}`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.classList.add('fade-out');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

function requireLogin(redirectUrl) {
  if (!isLoggedIn()) {
    sessionStorage.setItem('redirectAfterLogin', redirectUrl || window.location.href);
    window.location.href = 'login.html';
    return false;
  }
  return true;
}

function handleRedirectAfterLogin() {
  const redirect = sessionStorage.getItem('redirectAfterLogin');
  if (redirect) {
    sessionStorage.removeItem('redirectAfterLogin');
    window.location.href = redirect;
    return true;
  }
  return false;
}

/* ============================
   SEARCH
   ============================ */

function initSearch() {
  const input = document.getElementById('searchInput');
  const dropdown = document.getElementById('searchDropdown');
  if (!input || !dropdown) return;

  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    if (!q) { dropdown.classList.remove('show'); return; }
    const matches = PRODUCTS.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q)
    ).slice(0, 8);

    if (!matches.length) { dropdown.classList.remove('show'); return; }
    dropdown.innerHTML = matches.map(p => `
      <div class="search-dropdown-item" onclick="location.href='product.html?id=${p.id}'">
        <img src="${p.images[0]}" alt="${p.name}" onerror="this.style.display='none'" />
        <span>${p.name} - <strong>${formatCurrency(p.price)}</strong></span>
      </div>
    `).join('');
    dropdown.classList.add('show');
  });

  document.addEventListener('click', (e) => {
    if (!input.contains(e.target) && !dropdown.contains(e.target)) dropdown.classList.remove('show');
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const q = input.value.trim();
      if (q) { dropdown.classList.remove('show'); window.location.href = `search.html?q=${encodeURIComponent(q)}`; }
    }
  });
}

/* ============================
   NAVBAR RENDER
   ============================ */

function renderNavbar() {
  const nav = document.getElementById('navbar');
  if (!nav) return;
  const auth = getAuth();
  const { count } = getCartTotal();
  nav.innerHTML = `
    <div class="nav-inner">
      <a href="index.html" class="logo-area">
        <div>
          <div class="logo-text">ShopPro</div>
          <div class="logo-tag">Explore <span>Plus</span></div>
        </div>
      </a>
      <div class="search-bar">
        <input type="text" id="searchInput" placeholder="Search for products, brands and more" />
        <button class="search-btn" onclick="doSearch()">&#128269;</button>
        <div class="search-dropdown" id="searchDropdown"></div>
      </div>
      <div class="nav-right">
        <a href="login.html" class="nav-btn" id="loginArea" ${auth ? 'style="display:none;"' : ''}>
          <span class="icon">&#128100;</span>
          <span class="label">Login</span>
        </a>
        <div class="user-dropdown" id="userArea" ${auth ? '' : 'style="display:none;"'}>
          <button class="nav-btn" onclick="toggleUserMenu()">
            <span class="icon">&#128100;</span>
            <span class="label" id="userName">${auth ? auth.name.split(' ')[0] : 'User'}</span>
            <span style="font-size:10px;">&#9662;</span>
          </button>
          <div class="user-menu" id="userMenu">
            <div class="menu-header">Hello, ${auth ? auth.name : 'User'}</div>
            <a href="profile.html">My Profile</a>
            <a href="orders.html">My Orders</a>
            <a href="wishlist.html">My Wishlist</a>
            <a href="cart.html">My Cart</a>
            <a href="#" onclick="logout(); return false;">Logout</a>
          </div>
        </div>
        <a href="cart.html" class="nav-btn">
          <span class="icon">&#128722;</span>
          <span class="label">Cart</span>
          <span class="badge" id="cartBadge" ${count ? '' : 'style="display:none;"'}>${count}</span>
        </a>
      </div>
    </div>
  `;
  initSearch();
  updateCartBadge();
  document.addEventListener('click', closeUserMenuOnClick);
}

function doSearch() {
  const q = document.getElementById('searchInput')?.value.trim();
  if (q) window.location.href = `search.html?q=${encodeURIComponent(q)}`;
}

function renderSubnav() {
  const nav = document.getElementById('subnav');
  if (!nav) return;
  nav.innerHTML = `
    <div class="sub-nav-inner">
      <a href="index.html" class="cat-link">Home</a>
      ${CATEGORIES.map(c => `<a href="category.html?cat=${c.id}" class="cat-link">${c.name}</a>`).join('')}
      <a href="search.html?q=deals" class="cat-link">Deals</a>
    </div>
  `;
}

function renderFooter() {
  const footer = document.getElementById('footer');
  if (!footer) return;
  footer.innerHTML = `
    <div class="footer-top">
      <div>
        <h4>About</h4>
        <a href="#">Contact Us</a>
        <a href="#">About Us</a>
        <a href="#">Careers</a>
        <a href="#">Press</a>
      </div>
      <div>
        <h4>Help</h4>
        <a href="#">Payments</a>
        <a href="#">Shipping</a>
        <a href="#">Cancellation</a>
        <a href="#">FAQ</a>
      </div>
      <div>
        <h4>Policy</h4>
        <a href="#">Return Policy</a>
        <a href="#">Terms of Use</a>
        <a href="#">Security</a>
        <a href="#">Privacy</a>
      </div>
      <div>
        <h4>Social</h4>
        <a href="#">Facebook</a>
        <a href="#">Twitter</a>
        <a href="#">YouTube</a>
        <a href="#">Instagram</a>
      </div>
      <div>
        <h4>Mail Us</h4>
        <p>ShopPro Internet Pvt Ltd,<br>Building 42, Tech Park,<br>San Francisco, CA 94102<br>help@shoppro.com</p>
      </div>
    </div>
    <div class="footer-bottom">&copy; ${new Date().getFullYear()} ShopPro. All rights reserved. Made with precision.</div>
  `;
}

function initPage() {
  renderNavbar();
  renderSubnav();
  renderFooter();
}

/* ============================
   DEMO DATA (Optional seed)
   ============================ */

function seedDemoData() {
  if (!localStorage.getItem('ec_pro_seeded')) {
    const addresses = [
      { id: 1, name: 'Home', line1: '123 Main Street', line2: 'Apt 4B', city: 'San Francisco', state: 'CA', pin: '94102', phone: '415-555-0123', isDefault: true },
    ];
    saveAddresses(addresses);
    localStorage.setItem('ec_pro_seeded', '1');
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => { initPage(); seedDemoData(); });
} else { initPage(); seedDemoData(); }
