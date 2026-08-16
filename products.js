import { ICONS, ROAST } from './data.js';
import { cart } from './state.js';
import { money, visualSVG, cardVisualBg } from './helpers.js';
export function cardHTML(p){
  const roast = p.roast ? ROAST[p.roast] : null;
  const qty = cart[p.id] || 0;
  return `
  <div class="card" data-id="${p.id}" data-cat="${p.cat}" data-name="${p.name.toLowerCase()}">
    <div class="card-visual" style="background:${cardVisualBg(p)}">
      ${p.signature ? '<span class="badge-signature"><svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M12 2l1.8 5.6L19 9l-5.2 1.4L12 16l-1.8-5.6L5 9l5.2-1.4z"/></svg>Signature</span>' : ''}
      ${visualSVG(p, 68)}
    </div>
    ${roast ? `<div class="roast-row"><span class="roast-dot" style="background:${roast.color}"></span><span class="roast-label">${roast.label}</span></div>` : `<div class="roast-row"><span class="roast-label">Bakery</span></div>`}
    <h3>${p.name}</h3>
    <p class="desc">${p.desc}</p>
    <div class="card-footer">
      <span class="price">${money(p.price)}</span>
      <div class="card-action" data-action-for="${p.id}">
        ${qty > 0 ? qtyStepperHTML(p.id, qty) : `<button class="add-btn" onclick="addToCart('${p.id}')">${ICONS.cup} Add</button>`}
      </div>
    </div>
  </div>`;
}

export function qtyStepperHTML(id, qty){
  return `<div class="qty-stepper">
    <button onclick="changeQty('${id}',-1)" aria-label="Decrease">−</button>
    <span>${qty}</span>
    <button onclick="changeQty('${id}',1)" aria-label="Increase">+</button>
  </div>`;
}

export function refreshCardActions(id){
  document.querySelectorAll(`[data-action-for="${id}"]`).forEach(el=>{
    const qty = cart[id] || 0;
    el.innerHTML = qty > 0 ? qtyStepperHTML(id, qty) : `<button class="add-btn" onclick="addToCart('${id}')">${ICONS.cup} Add</button>`;
  });
}
