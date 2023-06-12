# e-Commerce Store 🛒 - Front site

Electronic products e-Commerce 🎧📱💻.

This is the web interface for users to interact with the e-Commerce platform.

The other part of the project is the [administrative web](https://github.com/AntonioJRuizG/ecommerce-admin-preview) for managing the e-Commerce store.

## Description

Take a look at the stock of electronic products we offer to you. Stay informed about the latest product arrivals and the featured product with a special offer.

Add your favorites to your cart and proceed to payment, or save your cart list for later. Save your order data for a quicker experience on your next shopping session.

Enjoy a smooth user experience on this website by receiving user feedback after every action you take.

Use the app on any device; the responsive design adapts to every screen size.

## Features

### Featured product

- A product showcased on the home page, which can be set by the e-Commerce administrator.

### Last products

- A list of the most recent products in stock, displayed on the home page.

### All products

- A comprehensive list of all the products in stock, which updates after a user makes a purchase.

### Categories

- Filter the product list by category, color, size, type, etc.

### Cart

- Add products to your cart. Access a list of your cart, featuring a small image, title, quantity, and price for each product.
- Adjust the quantity of each product or remove them.
- View the total price of your shopping.

#### Order

- Complete the order information form and proceed to the checkout page to view your shopping results.

## Tech

- ReactJS
- Next.js
- Sass modules
- Stripe
- MongoDB
- Firebase
- Responsive

## Getting Started

First, install

```bash
npm i
```

second, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/cart](http://localhost:3000/api/cart) and [http://localhost:3000/api/checkout](http://localhost:3000/api/checkout).

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.
