import { PRODUCTS, CATEGORIES } from './data.js';
import { cardHTML } from './products.js';
import { activeFilter, setActiveFilter } from './state.js';
export function renderMenu(){
  const el = document.getElementById('menuSections');
  const q = (document.getElementById('searchInput').value || '').toLowerCase().trim();
  let totalShown = 0;
  let html = '';

  CATEGORIES.forEach(cat=>{
    let items = PRODUCTS.filter(p=>p.cat===cat.key);
    if(activeFilter !== 'all' && activeFilter !== cat.key) return;
    if(q) items = items.filter(p=> p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q));
    if(items.length === 0) return;
    totalShown += items.length;
    html += `<div class="menu-section"><h2 id="sec-${cat.key}">${cat.label}</h2><div class="grid">${items.map(cardHTML).join('')}</div></div>`;
  });

  if(totalShown === 0){
    html = `<div class="no-results"><p>No drinks match "${q || 'that filter'}" — try a different search or clear the filter.</p></div>`;
  }
  el.innerHTML = html;
  document.getElementById('menuCount').textContent = `${totalShown} item${totalShown!==1?'s':''} shown`;
}

document.getElementById('menuControls').addEventListener('click', (e)=>{
  const btn = e.target.closest('.pill-filter');
  if(!btn) return;
  document.querySelectorAll('.pill-filter').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  setActiveFilter(btn.dataset.filter);
  renderMenu();
});
