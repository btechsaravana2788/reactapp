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
- Loading and error handling

## Tech Stack

- React 18
- React Router v6
- Redux Toolkit
- React Redux
- Styled Components
- Vite

## Setup

### 1. Install dependencies

Open a terminal in `e:\wamp64\www\saravanafrontend` and run:

```cmd
npm.cmd install
```

### 2. Start the development server

Run:

```cmd
npm.cmd run dev
```

### 3. Open the app

Open the local URL shown by Vite, for example:

```text
http://localhost:4174/
```

### 4. Build for production

To verify the app compiles:

```cmd
npm.cmd run build
```

### 5. PowerShell note

If PowerShell blocks `npm` script execution, use `npm.cmd` instead of `npm`.
If you want to allow scripts temporarily, run:

```powershell
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Bypass
```

Then start the dev server again:

```powershell
npm run dev
```

## Complete Command Sequence

Execute these commands in order to get the app running:

### Step 1: Navigate to the project directory
```cmd
cd e:\wamp64\www\saravanafrontend
```

### Step 2: Install all dependencies
```cmd
npm.cmd install
```

**What this does:** Downloads and installs React, Redux, React Router, Styled Components, Vite, and all other dependencies from npm registry. Creates `node_modules/` folder.

### Step 3: Start the development server
```cmd
npm.cmd run dev
```

**What this does:** Launches Vite dev server with hot module replacement (HMR). Watch for output like:
```
  ➜  Local:   http://localhost:4174/
```

### Step 4: Open in browser
Copy the local URL from terminal output and open it in your browser, for example:
```
http://localhost:4174/
```

### Optional: Build for production
```cmd
npm.cmd run build
```

**What this does:** Creates optimized production-ready files in the `dist/` folder. Output shows bundle sizes.

### Optional: Preview production build locally
```cmd
npm.cmd run preview
```

**What this does:** Serves the production build on a local server to test before deployment.

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
