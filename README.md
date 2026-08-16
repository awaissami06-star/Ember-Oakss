# Ember & Oak — Organized Website Source

The supplied `ember-and-oak.html` was reorganized into a maintainable folder structure. The visual design and client-side demo behavior are preserved.

## Structure
- `index.html` — markup
- `css/styles.css` — styles and responsive rules
- `js/data.js` — products, categories, locations, social links, icons
- `js/state.js` — shared state
- `js/helpers.js` — reusable helpers
- `js/products.js` — product cards and quantity UI
- `js/featured.js` — featured products
- `js/menu.js` — menu rendering and filters
- `js/locations.js` — location cards
- `js/socials.js` — social buttons
- `js/cart.js` — cart drawer and cart logic
- `js/checkout.js` — demo order confirmation
- `js/toast.js` — notifications
- `js/search.js` — search
- `js/navigation.js` — page navigation
- `js/status.js` — opening-hours status
- `js/counter.js` — ambient counter
- `js/forms.js` — contact/newsletter interactions
- `js/reveal.js` — scroll animations
- `js/main.js` — application entry point
- `assets/` — local images/assets

## Run locally
Use a local HTTP server because the project uses ES modules. For example, in Cursor/VS Code you can use a Live Server extension, or run a simple static server from the project folder.

## Important
The original checkout, contact form and newsletter are client-side demo functionality. The checkout does not send real orders to a database/inbox. For production, connect these to a backend/database and secure admin system.
