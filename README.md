A simple eCommerce mobile application built with React Native and Expo as part of my DCIT 324 Mobile Application Development assignment.

The application demonstrates reusable components, props, state management, navigation, product browsing, product details, and cart functionality.

## Features

- Product catalogue with multiple products
- Reusable Product Card component
- Product information passed through props
- Product grid/list generated using array mapping
- Product Details screen
- Product image, name, price, and rating
- Quantity selector using React state
- Increase and decrease quantity
- Add products to cart
- Cart screen displaying selected products
- Remove products from cart
- Shared cart state using React Context
- Bottom tab navigation
  - Home
  - Cart
  - Profile
- Stack navigation between product listing and product details
- Simple and clean mobile UI

## Technologies Used

- React Native
- Expo
- JavaScript
- React Navigation
- React Context API
- React Hooks
- `useState`
- `useContext`

## Project Structure

```text
ShopEase/
│
├── assets/
│   └── images/
│
├── context/
│   └── CartContext.js
│
├── navigation/
│   └── AppNavigator.js
│
├── screens/
│   ├── HomeScreen.js
│   ├── ProductDetailsScreen.js
│   ├── CartScreen.js
│   └── ProfileScreen.js
│
├── components/
│   └── ProductCard.js
│
├── App.js
├── package.json
└── README.md
