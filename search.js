import { PRODUCTS } from './data.js';
import { money, visualSVG, cardVisualBg, productById } from './helpers.js';
import { renderMenu } from './menu.js';
import { setActiveFilter } from './state.js';
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

export function runSearch(q){
  q = q.toLowerCase().trim();
  if(!q){ searchResults.classList.remove('open'); if(document.getElementById('page-menu').classList.contains('active')) renderMenu(); return; }
  const matches = PRODUCTS.filter(p=> p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q));
  if(matches.length===0){
    searchResults.innerHTML = `<div class="sr-empty">No drinks match "${q}"</div>`;
  } else {
    searchResults.innerHTML = `<div class="sr-head">${matches.length} result${matches.length!==1?'s':''}</div>` +
      matches.slice(0,8).map(p=>`
        <div class="sr-item" onclick="jumpToProduct('${p.id}')">
          <div class="sr-icon" style="background:${cardVisualBg(p)}; display:flex; align-items:center; justify-content:center;">${visualSVG(p,22)}</div>
          <div><div class="sr-name">${p.name}</div><div class="sr-cat">${p.cat}</div></div>
          <div class="sr-price">${money(p.price)}</div>
        </div>`).join('');
  }
  searchResults.classList.add('open');
  if(document.getElementById('page-menu').classList.contains('active')) renderMenu();
}

searchInput.addEventListener('input', (e)=> runSearch(e.target.value));
searchInput.addEventListener('focus', ()=>{ if(searchInput.value) searchResults.classList.add('open'); });
document.addEventListener('click', (e)=>{
  if(!e.target.closest('.search-box')) searchResults.classList.remove('open');
});

export function jumpToProduct(id){
  const p = productById(id);
  document.getElementById('searchInput').value = '';
  searchResults.classList.remove('open');
setActiveFilter('all');  document.querySelectorAll('.pill-filter').forEach(b=>b.classList.toggle('active', b.dataset.filter==='all'));
  goToPage('menu');
  setTimeout(()=>{
    const card = document.querySelector(`#page-menu .card[data-id="${id}"]`);
    if(card){
      
      card.scrollIntoView({behavior:'smooth', block:'center'});
      card.style.borderColor = 'var(--copper)';
      card.animate([{boxShadow:'0 0 0 0 rgba(201,128,63,.5)'},{boxShadow:'0 0 0 10px rgba(201,128,63,0)'}], {duration:900});
    }
  }, 120);
}
