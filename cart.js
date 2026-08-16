import { ICONS } from './data.js';
import { cart } from './state.js';
import {
  productById,
  money,
  cardVisualBg,
  visualSVG
} from './helpers.js';
import { refreshCardActions } from './products.js';
import { showToast } from './toast.js';

export function addToCart(id){
  cart[id] = (cart[id] || 0) + 1;

  refreshCardActions(id);
  updateCartUI();

  const p = productById(id);

  if (p) {
    showToast(`${p.name} added to your cup`);
  }

  pulseCartIcon();
}

export function changeQty(id, delta){
  cart[id] = (cart[id] || 0) + delta;

  if(cart[id] <= 0){
    delete cart[id];
  }

  refreshCardActions(id);
  updateCartUI();
}

export function removeFromCart(id){
  delete cart[id];

  refreshCardActions(id);
  updateCartUI();
}

export function cartCount(){
  return Object.values(cart).reduce((a,b) => a + b, 0);
}

export function cartSubtotal(){
  return Object.entries(cart).reduce((sum,[id,qty]) => {
    const product = productById(id);
    return product ? sum + product.price * qty : sum;
  }, 0);
}

export function updateCartUI(){
  const count = cartCount();

  const badge = document.getElementById('cartBadge');

  if (badge) {
    badge.textContent = count;
    badge.classList.toggle('show', count > 0);
  }

  const wrap = document.getElementById('drawerItems');

  if (!wrap) return;

  const entries = Object.entries(cart);

  if(entries.length === 0){

    wrap.innerHTML = `
      <div class="drawer-empty">
        ${ICONS.cup}
        <p>Your cup is empty.<br>Add something from the menu.</p>
      </div>
    `;

  } else {

    wrap.innerHTML = entries.map(([id,qty]) => {

      const p = productById(id);

      if (!p) return '';

      return `
        <div class="drawer-item">

          <div
            class="di-visual"
            style="
              background:${cardVisualBg(p)};
              display:flex;
              align-items:center;
              justify-content:center;
              border-radius:10px;
            "
          >
            ${visualSVG(p,30)}
          </div>

          <div class="di-info">

            <h4>${p.name}</h4>

            <span class="price">
              ${money(p.price * qty)}
            </span>

            <div class="di-controls">

              <div class="qty-stepper">

                <button
                  onclick="changeQty('${id}',-1)"
                  aria-label="Decrease"
                >
                  −
                </button>

                <span>${qty}</span>

                <button
                  onclick="changeQty('${id}',1)"
                  aria-label="Increase"
                >
                  +
                </button>

              </div>

              <button
                class="di-remove"
                onclick="removeFromCart('${id}')"
              >
                Remove
              </button>

            </div>

          </div>

        </div>
      `;

    }).join('');
  }

  const subtotal = document.getElementById('drawerSubtotal');

  if (subtotal) {
    subtotal.textContent = money(cartSubtotal());
  }

  const checkoutBtn = document.getElementById('checkoutBtn');

  if (checkoutBtn) {
    checkoutBtn.disabled = entries.length === 0;
  }
}

export function pulseCartIcon(){

  const btn = document.getElementById('cartBtn');

  if (!btn) return;

  btn.style.transform = 'scale(1.12)';

  setTimeout(() => {
    btn.style.transform = '';
  }, 180);
}


/* ============================================================
   DRAWER OPEN / CLOSE
============================================================ */

const overlay = document.getElementById('overlay');
const drawer = document.getElementById('cartDrawer');

export function openCart(){

  if (!drawer || !overlay) return;

  drawer.classList.add('show');
  overlay.classList.add('show');
}

export function closeCartFn(){

  if (!drawer || !overlay) return;

  drawer.classList.remove('show');
  overlay.classList.remove('show');
}

document.getElementById('cartBtn').addEventListener(
  'click',
  openCart
);

document.getElementById('closeCart').addEventListener(
  'click',
  closeCartFn
);

overlay.addEventListener('click', () => {

  closeCartFn();

  if (typeof closeModal === 'function') {
    closeModal();
  }

});