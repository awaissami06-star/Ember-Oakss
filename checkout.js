import { clearCart } from './state.js';
import { cartCount, closeCartFn, updateCartUI } from './cart.js';
import { PRODUCTS } from './data.js';
import { refreshCardActions } from './products.js';


const modalOverlay = document.getElementById('modalOverlay');
document.getElementById('checkoutBtn').addEventListener('click', ()=>{
  if(cartCount()===0) return;
  const orderNum = 'EO-' + Math.floor(1000 + Math.random()*9000);
  document.getElementById('orderNum').textContent = 'Order #' + orderNum;
  closeCartFn();
  modalOverlay.classList.add('show');
  clearCart();
  PRODUCTS.forEach(p=>refreshCardActions(p.id));
  updateCartUI();
});
function closeModal(){ modalOverlay.classList.remove('show'); }
document.getElementById('closeModal').addEventListener('click', closeModal);

