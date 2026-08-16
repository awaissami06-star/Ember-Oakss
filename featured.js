import { PRODUCTS } from './data.js';
import { cardHTML } from './products.js';
export function renderFeatured(){
  const el = document.getElementById('featuredScroller');
  el.innerHTML = PRODUCTS.filter(p=>p.featured).map(cardHTML).join('');
}
