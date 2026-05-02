# Mini E-Commerce Application

This React application is a small clothing e-commerce storefront built for a technical test.

## Features

- Product listing page with 100+ products
- Search by title
- Category and size filters
- Product details page with full product view
- Redux Toolkit for global state management
- React Router for navigation
- Styled Components + basic CSS for UI styling
- Local storage persistence for search and filter state
- Loading skeletons and error handling
- Light/dark theme toggle using React Context

## Tech Stack

- React 18
- React Router v6
- Redux Toolkit
- React Redux
- Styled Components
- Vite

## Recommended Setup

### 1. Create the Vite app
```cmd
npm create vite@latest mini-ecommerce -- --template react
```

### 2. Enter the project folder
```cmd
cd mini-ecommerce
```

### 3. Install required libraries
```cmd
npm install react-router-dom @reduxjs/toolkit react-redux styled-components
```

### 4. Start the development server
```cmd
npm run dev
```

If PowerShell blocks script execution, use `npm.cmd` instead of `npm`.

### 5. Optional: Build for production
```cmd
npm run build
```

### 6. Optional: Preview production build
```cmd
npm run preview
```

## Actual Project Commands

If you are working in this repository already, use:
```cmd
cd e:\wamp64\www\saravanafrontend
npm.cmd install
npm.cmd run dev
```

## Suggested Folder Structure

```text
src/
  app/store.js
  features/products/productsSlice.js
  context/FilterContext.jsx
  components/
    ProductCard.jsx
    SearchBar.jsx
    FilterBar.jsx
    SkeletonCard.jsx
  pages/
    ProductList.jsx
    ProductDetails.jsx
  styles/
    global.css
  App.jsx
  main.jsx
```

## API Endpoints

The app uses DummyJSON product endpoints.

```javascript
const BASE_URL = 'https://dummyjson.com';

GET /products?limit=100
GET /products/:id
GET /products/category-list
```

## Setup for This Repository

### Step 1: Navigate to the project directory
```cmd
cd e:\wamp64\www\saravanafrontend
```

### Step 2: Install all dependencies
```cmd
npm.cmd install
```

### Step 3: Start the development server
```cmd
npm.cmd run dev
```

### Step 4: Open in browser
Open the URL shown by Vite, for example:
```text
http://localhost:4174/
```

### Optional: Build for production
```cmd
npm.cmd run build
```

### Optional: Preview production build locally
```cmd
npm.cmd run preview
```

## Troubleshooting

| Issue | Solution |
|-------|----------|
| `npm` command blocked in PowerShell | Use `npm.cmd` instead, or run `Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Bypass` |
| Port 4174 already in use | Vite will auto-increment to 4175, 4176, etc. |
| `node_modules` folder missing | Run `npm.cmd install` |
| Changes don't show in browser | Hard refresh (Ctrl+Shift+R) or clear browser cache |
| Build fails | Delete `node_modules/` and `package-lock.json`, then run `npm.cmd install` again |

## Notes

- Product data is fetched from the public DummyJSON API.
- Search and filters persist across page refresh and route navigation.
- The project includes a light/dark toggle via React Context.
