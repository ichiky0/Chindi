/* ==========================================
   E-COMMERCE PRODUCT DATABASE
   ========================================== */

const PRODUCTS = [
  // ELECTRONICS
  {
    id: 101, name: "Apple iPhone 15 Pro", price: 1299, mrp: 1399, category: "Electronics", subcategory: "Mobiles",
    brand: "Apple", rating: 4.8, reviews: 2340, stock: 45,
    images: ["https://images.unsplash.com/photo-1696446701796-da61225697cc?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1696446701796-da61225697cc?w=500&h=500&fit=crop"],
    description: "Titanium design. A17 Pro chip. 48MP Main camera. 5x Telephoto zoom. Super Retina XDR display.",
    specs: { "Display": "6.1-inch OLED", "Processor": "A17 Pro", "Storage": "256GB", "Battery": "3274 mAh", "OS": "iOS 17" }
  },
  {
    id: 102, name: "Samsung Galaxy S24 Ultra", price: 1199, mrp: 1299, category: "Electronics", subcategory: "Mobiles",
    brand: "Samsung", rating: 4.7, reviews: 1850, stock: 32,
    images: ["https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=500&h=500&fit=crop"],
    description: "200MP camera. AI-powered features. S Pen included. 5000 mAh battery. Snapdragon 8 Gen 3.",
    specs: { "Display": "6.8-inch QHD+", "Processor": "Snapdragon 8 Gen 3", "Storage": "256GB", "Battery": "5000 mAh", "OS": "Android 14" }
  },
  {
    id: 103, name: "Sony WH-1000XM5 Headphones", price: 348, mrp: 399, category: "Electronics", subcategory: "Audio",
    brand: "Sony", rating: 4.6, reviews: 4200, stock: 120,
    images: ["https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=500&h=500&fit=crop"],
    description: "Industry-leading noise cancellation. 30-hour battery. Crystal clear hands-free calling. Lightweight design.",
    specs: { "Type": "Over-ear", "Driver": "30mm", "Battery": "30 hours", "Weight": "250g", "Connectivity": "Bluetooth 5.2" }
  },
  {
    id: 104, name: "MacBook Pro 14 M3", price: 1599, mrp: 1799, category: "Electronics", subcategory: "Laptops",
    brand: "Apple", rating: 4.9, reviews: 890, stock: 18,
    images: ["https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&h=500&fit=crop"],
    description: "M3 chip with 8-core CPU and 10-core GPU. 14-inch Liquid Retina XDR display. 18-hour battery.",
    specs: { "Display": "14.2-inch XDR", "Processor": "Apple M3", "RAM": "16GB", "Storage": "512GB SSD", "Battery": "18 hours" }
  },
  {
    id: 105, name: "iPad Air 5th Gen", price: 599, mrp: 699, category: "Electronics", subcategory: "Tablets",
    brand: "Apple", rating: 4.7, reviews: 3100, stock: 55,
    images: ["https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&h=500&fit=crop"],
    description: "M1 chip. 10.9-inch Liquid Retina display. Touch ID. Works with Apple Pencil 2. All-day battery.",
    specs: { "Display": "10.9-inch LCD", "Processor": "Apple M1", "RAM": "8GB", "Storage": "256GB", "Battery": "10 hours" }
  },
  {
    id: 106, name: "Dell XPS 15 9530", price: 1499, mrp: 1699, category: "Electronics", subcategory: "Laptops",
    brand: "Dell", rating: 4.5, reviews: 620, stock: 22,
    images: ["https://images.unsplash.com/photo-1593642632823-8f78536788c6?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1593642632823-8f78536788c6?w=500&h=500&fit=crop"],
    description: "13th Gen Intel Core i7. NVIDIA RTX 4050. 15.6-inch 3.5K OLED. InfinityEdge display. Premium build.",
    specs: { "Display": "15.6-inch OLED", "Processor": "Intel Core i7", "RAM": "16GB", "Storage": "512GB SSD", "GPU": "RTX 4050" }
  },
  {
    id: 107, name: "JBL Flip 6 Bluetooth Speaker", price: 129, mrp: 149, category: "Electronics", subcategory: "Audio",
    brand: "JBL", rating: 4.5, reviews: 5600, stock: 200,
    images: ["https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=500&fit=crop"],
    description: "Bold JBL Pro Sound. 12 hours of playtime. IP67 waterproof. PartyBoost for stereo pairing.",
    specs: { "Output": "30W", "Battery": "12 hours", "Waterproof": "IP67", "Weight": "550g", "Connectivity": "Bluetooth 5.1" }
  },
  {
    id: 108, name: "Canon EOS R50 Mirrorless", price: 649, mrp: 749, category: "Electronics", subcategory: "Cameras",
    brand: "Canon", rating: 4.6, reviews: 340, stock: 15,
    images: ["https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&h=500&fit=crop"],
    description: "24.2MP APS-C sensor. 4K 30p video. Dual Pixel CMOS AF II. Compact and lightweight.",
    specs: { "Sensor": "24.2MP APS-C", "Video": "4K 30p", "AF": "Dual Pixel CMOS AF II", "Weight": "375g", "Screen": "3.0-inch vari-angle" }
  },
  {
    id: 109, name: "PlayStation 5 Console", price: 499, mrp: 549, category: "Electronics", subcategory: "Gaming",
    brand: "Sony", rating: 4.9, reviews: 12000, stock: 8,
    images: ["https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=500&h=500&fit=crop"],
    description: "Ultra-high speed SSD. Ray tracing. 4K gaming. DualSense controller with haptic feedback.",
    specs: { "Storage": "825GB SSD", "Resolution": "4K 120Hz", "CPU": "AMD Zen 2", "GPU": "AMD RDNA 2", "RAM": "16GB GDDR6" }
  },
  {
    id: 110, name: "Nintendo Switch OLED", price: 349, mrp: 379, category: "Electronics", subcategory: "Gaming",
    brand: "Nintendo", rating: 4.7, reviews: 8500, stock: 60,
    images: ["https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=500&h=500&fit=crop"],
    description: "7-inch OLED screen. Enhanced audio. Built-in LAN port. 64GB internal storage. Versatile play modes.",
    specs: { "Display": "7-inch OLED", "Storage": "64GB", "Battery": "4.5-9 hours", "Weight": "420g", "Connectivity": "Wi-Fi + LAN" }
  },

  // FASHION
  {
    id: 201, name: "Nike Air Force 1 '07", price: 115, mrp: 130, category: "Fashion", subcategory: "Shoes",
    brand: "Nike", rating: 4.8, reviews: 18000, stock: 250,
    images: ["https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&h=500&fit=crop"],
    description: "Iconic design. Perforated leather upper. Classic white-on-white. Padded collar. Durable rubber sole.",
    specs: { "Upper": "Leather", "Sole": "Rubber", "Weight": "450g", "Closure": "Lace-up", "Color": "White" }
  },
  {
    id: 202, name: "Adidas Ultraboost 23", price: 190, mrp: 210, category: "Fashion", subcategory: "Shoes",
    brand: "Adidas", rating: 4.6, reviews: 7200, stock: 180,
    images: ["https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?w=500&h=500&fit=crop"],
    description: "Boost midsole for incredible energy return. Primeknit upper. Continental rubber outsole. Tailored Fiber Placement.",
    specs: { "Upper": "Primeknit", "Midsole": "Boost", "Outsole": "Continental rubber", "Weight": "310g", "Drop": "10mm" }
  },
  {
    id: 203, name: "Levi's 501 Original Jeans", price: 89, mrp: 110, category: "Fashion", subcategory: "Men's Clothing",
    brand: "Levi's", rating: 4.5, reviews: 9500, stock: 300,
    images: ["https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&h=500&fit=crop"],
    description: "The original blue jean. Button fly. Straight leg. Classic five-pocket styling. Non-stretch denim. Timeless fit.",
    specs: { "Material": "100% Cotton", "Fit": "Straight", "Rise": "Mid", "Closure": "Button fly", "Care": "Machine wash" }
  },
  {
    id: 204, name: "Zara Floral Maxi Dress", price: 49, mrp: 69, category: "Fashion", subcategory: "Women's Clothing",
    brand: "Zara", rating: 4.3, reviews: 2100, stock: 150,
    images: ["https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&h=500&fit=crop"],
    description: "Flowing floral maxi dress. V-neckline. Elastic waist. Light and breathable fabric. Perfect for summer occasions.",
    specs: { "Material": "Viscose", "Length": "Maxi", "Neckline": "V-neck", "Sleeves": "Short", "Pattern": "Floral" }
  },
  {
    id: 205, name: "Ray-Ban Aviator Classic", price: 163, mrp: 185, category: "Fashion", subcategory: "Accessories",
    brand: "Ray-Ban", rating: 4.7, reviews: 6400, stock: 95,
    images: ["https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop"],
    description: "Iconic aviator shape. Gold metal frame. G-15 green lenses. UV protection. Adjustable nose pads. Timeless style.",
    specs: { "Frame": "Metal", "Lens": "G-15", "UV": "100%", "Weight": "30g", "Shape": "Aviator" }
  },
  {
    id: 206, name: "Tommy Hilfiger Polo Shirt", price: 55, mrp: 70, category: "Fashion", subcategory: "Men's Clothing",
    brand: "Tommy Hilfiger", rating: 4.4, reviews: 3800, stock: 200,
    images: ["https://images.unsplash.com/photo-1625910513413-5fc77a3e0f30?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1625910513413-5fc77a3e0f30?w=500&h=500&fit=crop"],
    description: "Classic fit polo. 100% cotton pique. Two-button placket. Embroidered logo. Breathable and comfortable.",
    specs: { "Material": "100% Cotton", "Fit": "Classic", "Collar": "Polo", "Care": "Machine wash", "Sleeves": "Short" }
  },
  {
    id: 207, name: "H&M Oversized Hoodie", price: 34, mrp: 45, category: "Fashion", subcategory: "Women's Clothing",
    brand: "H&M", rating: 4.5, reviews: 5200, stock: 400,
    images: ["https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=500&h=500&fit=crop"],
    description: "Oversized fit hoodie. Soft brushed inside. Kangaroo pocket. Drawstring hood. Unisex style. Cozy and stylish.",
    specs: { "Material": "Cotton blend", "Fit": "Oversized", "Pockets": "Kangaroo", "Hood": "Drawstring", "Care": "Machine wash" }
  },
  {
    id: 208, name: "Fossil Gen 6 Smartwatch", price: 229, mrp: 299, category: "Fashion", subcategory: "Watches",
    brand: "Fossil", rating: 4.2, reviews: 1200, stock: 75,
    images: ["https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop"],
    description: "Wear OS by Google. Snapdragon Wear 4100+. SpO2 sensor. Heart rate tracking. 24-hour battery. Customizable dials.",
    specs: { "OS": "Wear OS", "Processor": "Snapdragon 4100+", "Sensors": "HR, SpO2", "Battery": "24 hours", "Water": "3ATM" }
  },

  // HOME & LIVING
  {
    id: 301, name: "Dyson V15 Detect Vacuum", price: 749, mrp: 899, category: "Home", subcategory: "Appliances",
    brand: "Dyson", rating: 4.8, reviews: 3200, stock: 40,
    images: ["https://images.unsplash.com/photo-1558317374-067fb5f30001?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=500&h=500&fit=crop"],
    description: "Laser dust detection. Piezo sensor counts particles. 60 minutes run time. HEPA filtration. LCD display.",
    specs: { "Suction": "230 AW", "Battery": "60 min", "Bin": "0.77L", "Weight": "3.1kg", "Filter": "HEPA" }
  },
  {
    id: 302, name: "IKEA BILLY Bookcase", price: 79, mrp: 99, category: "Home", subcategory: "Furniture",
    brand: "IKEA", rating: 4.6, reviews: 15000, stock: 500,
    images: ["https://images.unsplash.com/photo-1594620302200-9a762244a156?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1594620302200-9a762244a156?w=500&h=500&fit=crop"],
    description: "Classic adjustable shelving. 5 shelves. 80x28x202 cm. White finish. Easy to assemble. Holds 30 kg per shelf.",
    specs: { "Dimensions": "80x28x202 cm", "Shelves": "5", "Capacity": "30 kg/shelf", "Material": "Particleboard", "Color": "White" }
  },
  {
    id: 303, name: "Philips Hue Starter Kit", price: 199, mrp: 249, category: "Home", subcategory: "Lighting",
    brand: "Philips", rating: 4.7, reviews: 7800, stock: 110,
    images: ["https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=500&h=500&fit=crop"],
    description: "3 smart bulbs + bridge. 16 million colors. App and voice control. Works with Alexa, Google, Siri. Schedule routines.",
    specs: { "Bulbs": "3 (A19)", "Wattage": "9.5W", "Lumens": "800", "Lifespan": "25,000 hours", "Connectivity": "Zigbee + Wi-Fi" }
  },
  {
    id: 304, name: "Nespresso Vertuo Plus", price: 159, mrp: 199, category: "Home", subcategory: "Kitchen",
    brand: "Nespresso", rating: 4.5, reviews: 5600, stock: 85,
    images: ["https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=500&h=500&fit=crop"],
    description: "Centrifusion technology. 5 coffee sizes. One-touch brewing. Automatic capsule ejection. 40 oz water tank.",
    specs: { "Pressure": "Centrifusion", "Sizes": "5 (Espresso to Mug)", "Tank": "40 oz", "Heat-up": "20 sec", "Color": "Black" }
  },
  {
    id: 305, name: "Casper Original Pillow", price: 65, mrp: 85, category: "Home", subcategory: "Bedding",
    brand: "Casper", rating: 4.4, reviews: 3400, stock: 200,
    images: ["https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=500&h=500&fit=crop"],
    description: "100% cotton cover. Microfiber fill. Breathable and supportive. Machine washable. Standard/Queen size. Hypoallergenic.",
    specs: { "Cover": "100% Cotton", "Fill": "Microfiber", "Size": "Standard", "Care": "Machine wash", "Allergen": "Hypoallergenic" }
  },
  {
    id: 306, name: "Candle Warmers Set of 3", price: 29, mrp: 45, category: "Home", subcategory: "Decor",
    brand: "Yankee Candle", rating: 4.3, reviews: 2800, stock: 350,
    images: ["https://images.unsplash.com/photo-1602825389660-3f9749873e20?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1602825389660-3f9749873e20?w=500&h=500&fit=crop"],
    description: "Vanilla, Lavender, and Ocean Breeze scents. 40-hour burn time each. Soy wax blend. Glass jar with lid. Gift-ready.",
    specs: { "Scents": "3", "Burn Time": "40 hours each", "Wax": "Soy blend", "Size": "7 oz each", "Jar": "Glass" }
  },

  // BEAUTY
  {
    id: 401, name: "La Mer Crème de la Mer", price: 380, mrp: 420, category: "Beauty", subcategory: "Skincare",
    brand: "La Mer", rating: 4.7, reviews: 2100, stock: 60,
    images: ["https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500&h=500&fit=crop"],
    description: "Miracle Broth formula. Deeply moisturizes. Soothes dryness. Rich cream texture. For all skin types. Iconic luxury.",
    specs: { "Size": "60ml", "Texture": "Rich cream", "Skin": "All types", "Key": "Miracle Broth", "Use": "Morning & night" }
  },
  {
    id: 402, name: "Dior Sauvage Eau de Parfum", price: 125, mrp: 145, category: "Beauty", subcategory: "Fragrance",
    brand: "Dior", rating: 4.8, reviews: 8900, stock: 140,
    images: ["https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=500&h=500&fit=crop"],
    description: "Reggio di Calabria bergamot. Amber wood. Sichuan pepper. Magnetic and fresh. Iconic masculine fragrance. 100ml.",
    specs: { "Size": "100ml", "Concentration": "Eau de Parfum", "Notes": "Bergamot, Amber, Pepper", "Longevity": "8+ hours", "Gender": "Men" }
  },
  {
    id: 403, name: "MAC Matte Lipstick - Ruby Woo", price: 22, mrp: 28, category: "Beauty", subcategory: "Makeup",
    brand: "MAC", rating: 4.6, reviews: 15000, stock: 400,
    images: ["https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=500&h=500&fit=crop"],
    description: "Retro matte finish. Universally flattering red. Long-lasting. Bold color payoff. Iconic best-seller. Cruelty-free.",
    specs: { "Finish": "Retro Matte", "Color": "Ruby Red", "Longevity": "8 hours", "Weight": "3g", "Cruelty-Free": "Yes" }
  },
  {
    id: 404, name: "Clinique Moisture Surge", price: 39, mrp: 50, category: "Beauty", subcategory: "Skincare",
    brand: "Clinique", rating: 4.5, reviews: 6700, stock: 250,
    images: ["https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=500&h=500&fit=crop"],
    description: "100-hour auto-replenishing hydration. Gel-cream texture. Oil-free. For all skin types. Aloe bio-ferment. Lightweight.",
    specs: { "Size": "50ml", "Texture": "Gel-cream", "Skin": "All types", "Oil-Free": "Yes", "Hydration": "100 hours" }
  },

  // SPORTS
  {
    id: 501, name: "Wilson Tennis Racket Pro Staff", price: 249, mrp: 299, category: "Sports", subcategory: "Rackets",
    brand: "Wilson", rating: 4.8, reviews: 1200, stock: 45,
    images: ["https://images.unsplash.com/photo-1622279457486-62dcc076a884?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1622279457486-62dcc076a884?w=500&h=500&fit=crop"],
    description: "Braid 45 construction. FeelFlex technology. Precise control. Head size 97 sq in. 315g unstrung. Pro-player choice.",
    specs: { "Head": "97 sq in", "Weight": "315g", "Balance": "7 pts HL", "String": "16x19", "Grip": "4 3/8" }
  },
  {
    id: 502, name: "Yoga Mat Premium 6mm", price: 35, mrp: 50, category: "Sports", subcategory: "Fitness",
    brand: "Liforme", rating: 4.6, reviews: 4200, stock: 300,
    images: ["https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500&h=500&fit=crop"],
    description: "Eco-friendly natural rubber. Alignment markers. Non-slip grip. 6mm cushioning. Biodegradable. 185cm x 68cm.",
    specs: { "Material": "Natural rubber", "Thickness": "6mm", "Dimensions": "185x68cm", "Weight": "2.5kg", "Eco": "Biodegradable" }
  },
  {
    id: 503, name: "Fitbit Charge 6", price: 159, mrp: 199, category: "Sports", subcategory: "Wearables",
    brand: "Fitbit", rating: 4.4, reviews: 3400, stock: 90,
    images: ["https://images.unsplash.com/photo-1434494878577-86c23b18b7f8?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1434494878577-86c23b18b7f8?w=500&h=500&fit=crop"],
    description: "Heart rate, GPS, sleep tracking. 7-day battery. Google apps integration. Color touchscreen. Stress management. Water resistant.",
    specs: { "Battery": "7 days", "GPS": "Built-in", "Sensors": "HR, SpO2, Temp", "Water": "50m", "Screen": "Color AMOLED" }
  },
  {
    id: 504, name: "Under Armour HOVR Phantom 3", price: 150, mrp: 180, category: "Sports", subcategory: "Shoes",
    brand: "Under Armour", rating: 4.5, reviews: 1800, stock: 120,
    images: ["https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&h=500&fit=crop"],
    description: "HOVR cushioning. Energy return. UA IntelliKnit upper. SpeedForm 2.0 sockliner. Connected to MapMyRun. Breathable mesh.",
    specs: { "Cushioning": "HOVR", "Upper": "IntelliKnit", "Weight": "300g", "Drop": "8mm", "Lacing": "SpeedForm" }
  },

  // GROCERIES
  {
    id: 601, name: "Organic Almonds 1kg", price: 24, mrp: 32, category: "Groceries", subcategory: "Nuts & Dry Fruits",
    brand: "Kirkland", rating: 4.7, reviews: 5600, stock: 500,
    images: ["https://images.unsplash.com/photo-1508061253366-f7da158b6d46?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1508061253366-f7da158b6d46?w=500&h=500&fit=crop"],
    description: "Premium California almonds. Raw and unsalted. Non-GMO. High in protein and vitamin E. Resealable bag. 1kg pack.",
    specs: { "Weight": "1kg", "Type": "Raw", "Origin": "California", "Organic": "Yes", "Storage": "Cool dry place" }
  },
  {
    id: 602, name: "Starbucks Pike Place Roast", price: 18, mrp: 24, category: "Groceries", subcategory: "Coffee & Tea",
    brand: "Starbucks", rating: 4.6, reviews: 12000, stock: 600,
    images: ["https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=500&h=500&fit=crop"],
    description: "Medium roast whole bean coffee. Smooth and balanced. Notes of cocoa and toasted nuts. 1kg bag. Ethically sourced.",
    specs: { "Weight": "1kg", "Roast": "Medium", "Form": "Whole bean", "Origin": "Latin America", "Certification": "Ethically sourced" }
  },
  {
    id: 603, name: "Nutella Hazelnut Spread 750g", price: 12, mrp: 16, category: "Groceries", subcategory: "Pantry",
    brand: "Nutella", rating: 4.9, reviews: 22000, stock: 800,
    images: ["https://images.unsplash.com/photo-1587132137056-bfbf0166836e?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1587132137056-bfbf0166836e?w=500&h=500&fit=crop"],
    description: "Creamy hazelnut spread with cocoa. 750g jar. Perfect on toast, pancakes, or baking. World-famous Italian recipe.",
    specs: { "Weight": "750g", "Flavor": "Hazelnut & Cocoa", "Origin": "Italy", "Shelf Life": "12 months", "Uses": "Spread & Baking" }
  },
  {
    id: 604, name: "Quaker Oats Old Fashioned 1.2kg", price: 9, mrp: 12, category: "Groceries", subcategory: "Breakfast",
    brand: "Quaker", rating: 4.5, reviews: 15000, stock: 700,
    images: ["https://images.unsplash.com/photo-1517646331032-9e8563c520a1?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1517646331032-9e8563c520a1?w=500&h=500&fit=crop"],
    description: "100% whole grain oats. Heart healthy. Good source of fiber. Versatile for oatmeal, cookies, smoothies. 1.2kg container.",
    specs: { "Weight": "1.2kg", "Type": "Old Fashioned", "Whole Grain": "100%", "Fiber": "High", "Prep": "3 minutes" }
  },

  // TOYS
  {
    id: 701, name: "LEGO Star Wars Millennium Falcon", price: 169, mrp: 199, category: "Toys", subcategory: "Building Sets",
    brand: "LEGO", rating: 4.9, reviews: 4200, stock: 35,
    images: ["https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?w=500&h=500&fit=crop"],
    description: "1,351 pieces. Iconic starship with detailed interior. Minifigures included. Ages 9+. Display stand. Collector's item.",
    specs: { "Pieces": "1351", "Minifigures": "7", "Age": "9+", "Dimensions": "39x26x13 cm", "Theme": "Star Wars" }
  },
  {
    id: 702, name: "Hot Wheels Ultimate Garage", price: 89, mrp: 110, category: "Toys", subcategory: "Vehicles",
    brand: "Hot Wheels", rating: 4.7, reviews: 3800, stock: 60,
    images: ["https://images.unsplash.com/photo-1594787318286-126da7779d63?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1594787318286-126da7779d63?w=500&h=500&fit=crop"],
    description: "Multi-level garage with track. 2 cars included. Shark escape loop. Storage for 90+ cars. Motorized elevator. Ages 5+.",
    specs: { "Levels": "3", "Cars Included": "2", "Storage": "90+ cars", "Age": "5+", "Features": "Shark loop, elevator" }
  },
  {
    id: 703, name: "Barbie Dreamhouse 2024", price: 199, mrp: 249, category: "Toys", subcategory: "Dolls",
    brand: "Barbie", rating: 4.6, reviews: 5100, stock: 45,
    images: ["https://images.unsplash.com/photo-1560859251-d563a49c5e4a?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1560859251-d563a49c5e4a?w=500&h=500&fit=crop"],
    description: "3-story house with 10 areas. Elevator and pool. 75+ accessories. Lights and sounds. Wheelchair-accessible ramp. Ages 3+.",
    specs: { "Stories": "3", "Areas": "10", "Accessories": "75+", "Age": "3+", "Features": "Elevator, pool, sounds" }
  },
  {
    id: 704, name: "Nerf Elite 2.0 Blaster", price: 29, mrp: 39, category: "Toys", subcategory: "Outdoor",
    brand: "Nerf", rating: 4.4, reviews: 6700, stock: 200,
    images: ["https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=500&h=500&fit=crop"],
    description: "Motorized blasting. 6-dart clip. 12 darts included. Slam-fire action. Up to 27m range. Tactical rail accessories.",
    specs: { "Darts": "12 included", "Range": "27m", "Action": "Motorized", "Age": "8+", "Power": "Batteries" }
  },

  // BOOKS
  {
    id: 801, name: "Atomic Habits - James Clear", price: 16, mrp: 24, category: "Books", subcategory: "Self-Help",
    brand: "Penguin", rating: 4.9, reviews: 45000, stock: 500,
    images: ["https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&h=500&fit=crop"],
    description: "Tiny changes, remarkable results. Build good habits and break bad ones. Over 5 million copies sold. Practical strategies.",
    specs: { "Pages": "320", "Format": "Hardcover", "Language": "English", "Publisher": "Penguin", "Bestseller": "Yes" }
  },
  {
    id: 802, name: "The Psychology of Money", price: 15, mrp: 22, category: "Books", subcategory: "Finance",
    brand: "Harriman House", rating: 4.8, reviews: 22000, stock: 400,
    images: ["https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=500&h=500&fit=crop"],
    description: "Timeless lessons on wealth, greed, and happiness. 19 short stories exploring financial decisions. International bestseller.",
    specs: { "Pages": "252", "Format": "Paperback", "Language": "English", "Publisher": "Harriman House", "Theme": "Personal finance" }
  },
  {
    id: 803, name: "Harry Potter Box Set (1-7)", price: 89, mrp: 120, category: "Books", subcategory: "Fiction",
    brand: "Bloomsbury", rating: 4.9, reviews: 35000, stock: 150,
    images: ["https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500&h=500&fit=crop"],
    description: "Complete Harry Potter collection. All 7 books in paperback. Magical journey from Philosopher's Stone to Deathly Hallows.",
    specs: { "Books": "7", "Format": "Paperback", "Language": "English", "Publisher": "Bloomsbury", "Age": "8+" }
  },
  {
    id: 804, name: "Sapiens: A Brief History", price: 18, mrp: 26, category: "Books", subcategory: "History",
    brand: "Harvill Secker", rating: 4.7, reviews: 18000, stock: 300,
    images: ["https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=500&h=500&fit=crop", "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=500&h=500&fit=crop"],
    description: "Yuval Noah Harari's masterpiece. How Homo sapiens conquered the world. From the Stone Age to AI. Translated in 65 languages.",
    specs: { "Pages": "464", "Format": "Paperback", "Language": "English", "Author": "Yuval Noah Harari", "Theme": "Anthropology" }
  }
];

const CATEGORIES = [
  { id: "electronics", name: "Electronics", icon: "&#128241;", subcats: ["Mobiles", "Laptops", "Audio", "Cameras", "Gaming", "Tablets"] },
  { id: "fashion", name: "Fashion", icon: "&#128087;", subcats: ["Men's Clothing", "Women's Clothing", "Shoes", "Watches", "Accessories"] },
  { id: "home", name: "Home & Living", icon: "&#127968;", subcats: ["Furniture", "Appliances", "Kitchen", "Lighting", "Bedding", "Decor"] },
  { id: "beauty", name: "Beauty", icon: "&#128132;", subcats: ["Skincare", "Makeup", "Fragrance", "Haircare"] },
  { id: "sports", name: "Sports", icon: "&#127941;", subcats: ["Fitness", "Wearables", "Rackets", "Shoes"] },
  { id: "groceries", name: "Groceries", icon: "&#127828;", subcats: ["Nuts & Dry Fruits", "Coffee & Tea", "Pantry", "Breakfast"] },
  { id: "toys", name: "Toys", icon: "&#127918;", subcats: ["Building Sets", "Dolls", "Vehicles", "Outdoor"] },
  { id: "books", name: "Books", icon: "&#128218;", subcats: ["Fiction", "Self-Help", "Finance", "History"] }
];

const DEALS = [
  { id: 101, tag: "Deal of the Day", discount: "7%" },
  { id: 103, tag: "Best Seller", discount: "13%" },
  { id: 110, tag: "Lightning Deal", discount: "8%" },
  { id: 201, tag: "Deal of the Day", discount: "12%" },
  { id: 301, tag: "Lightning Deal", discount: "17%" },
  { id: 401, tag: "Best Seller", discount: "10%" },
  { id: 501, tag: "Deal of the Day", discount: "17%" },
  { id: 601, tag: "Lightning Deal", discount: "25%" },
  { id: 701, tag: "Best Seller", discount: "15%" },
  { id: 801, tag: "Deal of the Day", discount: "33%" }
];

// Export for Node.js environment
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PRODUCTS, CATEGORIES, DEALS };
}
