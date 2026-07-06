# ShopPro E-Commerce Platform

A professional, fully functional e-commerce website inspired by Amazon and Flipkart. Built with vanilla HTML, CSS, and JavaScript. All data is stored locally in the browser (localStorage), so no backend server is required.

## Live Demo

Upload all files to GitHub Pages to go live at:
`https://yourusername.github.io/shoppro-ecommerce`

## Features

### Customer-Facing
- **Homepage** with hero banner, category navigation, deal countdown, and curated product sections (Best Sellers, Electronics, Fashion, Home, Books)
- **Product Search** with live dropdown suggestions and full results page with sorting
- **Category Browsing** with sidebar filters (subcategory, brand, price range) and sorting
- **Product Detail Page** with image gallery, specs, ratings, reviews count, delivery info, and "Buy Now / Add to Cart" buttons
- **Shopping Cart** with quantity controls, remove/save-for-later actions, and price summary
- **Wishlist** with add-to-cart and remove options
- **Checkout Flow** with delivery address selection, payment method selection (COD, Card, UPI), and order confirmation
- **Order History** with order details, status tracking, and success confirmation page
- **User Profile** with personal info editing and saved address management
- **Toast Notifications** for all user actions (add to cart, login, errors, etc.)
- **Responsive Design** for mobile, tablet, and desktop

### User Authentication
- **Registration** with validation (name, email, phone, password)
- **Login** with session persistence
- **Logout** from anywhere
- **Redirect after login** (if user was redirected to login from a protected page, they go back after signing in)
- **Protected pages** (checkout, orders, profile require login)

### Data Management (localStorage)
- `ec_pro_users` — registered user accounts
- `ec_pro_auth` — current logged-in session
- `ec_pro_cart` — shopping cart items
- `ec_pro_wishlist` — wishlist product IDs
- `ec_pro_orders` — placed orders with history
- `ec_pro_addresses` — saved delivery addresses
- `ec_pro_seeded` — flag for demo data initialization

## File Structure

```
ecommerce-pro/
├── index.html          # Homepage
├── login.html          # Login page
├── register.html       # Sign-up page
├── product.html        # Product detail page
├── cart.html           # Shopping cart
├── wishlist.html       # Wishlist page
├── checkout.html       # Checkout flow
├── orders.html         # Order history
├── profile.html        # User profile & addresses
├── search.html         # Search results
├── category.html       # Category listing with filters
├── css/
│   └── style.css       # All shared styles (36KB)
├── js/
│   ├── products.js     # Product database (40 products, 8 categories, deals)
│   └── common.js       # Auth, cart, wishlist, orders, UI utilities
└── README.md           # This file
```

## How to Use

1. **Open `index.html`** in any modern browser to browse the store.
2. **Register** an account via `register.html` or click Login.
3. **Add products** to cart or wishlist using the product cards or detail page.
4. **Go to cart** and click "Place Order" to proceed to checkout.
5. **Select an address** and payment method, then confirm.
6. **View orders** on `orders.html` to track your purchases.
7. **Manage your profile** and addresses on `profile.html`.

## How to Add/Edit Products

Products are stored in `js/products.js`. Each product follows this structure:

```javascript
{
  id: 101,
  name: "Product Name",
  price: 1299,        // selling price
  mrp: 1399,          // original MRP
  category: "Electronics",
  subcategory: "Mobiles",
  brand: "Apple",
  rating: 4.8,
  reviews: 2340,
  stock: 45,
  images: ["url1", "url2"],
  description: "Product description...",
  specs: { "Key": "Value", "Key2": "Value2" }
}
```

Simply edit `js/products.js` to add, remove, or change products. Categories and deals are also defined in that file.

## Tech Stack
- **HTML5** semantic markup
- **CSS3** with custom properties, Grid, Flexbox, responsive breakpoints
- **Vanilla JavaScript** (no frameworks, no build step)
- **localStorage** for all data persistence
- **Google Fonts** (Nunito, Quicksand for the cute store; system fonts for e-commerce)

## Deployment

### GitHub Pages (Free)
1. Create a new public repository on GitHub.
2. Upload all files (maintain the folder structure: `css/`, `js/`).
3. Go to **Settings > Pages**.
4. Select **Deploy from a branch** → **main** branch → **root** folder.
5. Wait 1 minute, then visit your URL.

### Any Static Host
Since there is no backend, this works on:
- Netlify Drop (drag & drop)
- Vercel
- Firebase Hosting
- Surge.sh
- Any standard web server (Apache, Nginx, etc.)

## Notes
- All user data is stored in the browser's localStorage. Clearing browser data will reset accounts, cart, wishlist, and orders.
- Image URLs use Unsplash placeholder images. Replace with your own product images for production use.
- No backend or payment processing is included — this is a frontend demo/prototype.

## License
Open source for personal and educational use.
