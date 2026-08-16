import { renderMenu } from './menu.js';
import { renderLocations } from './locations.js';
import { setActiveFilter } from './state.js';
import { triggerReveals } from './reveal.js';
export function goToPage(name){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.getElementById('page-'+name).classList.add('active');
  document.querySelectorAll('#mainNav button').forEach(b=> b.classList.toggle('active', b.dataset.page===name));
  window.scrollTo({top:0, behavior:'smooth'});
  if(name==='menu') renderMenu();
  if(name==='locations') renderLocations();
  triggerReveals();
}

document.getElementById('mainNav').addEventListener('click', (e)=>{
  const btn = e.target.closest('button');
  if(btn) goToPage(btn.dataset.page);
});
document.getElementById('logoHome').addEventListener('click', ()=> goToPage('home'));
document.getElementById('logoHome').addEventListener('keydown', (e)=>{
  if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); goToPage('home'); }
});
document.addEventListener('click', (e)=>{
  const el = e.target.closest('[data-nav]');
  if(el){
    e.preventDefault();
    if(el.dataset.filter){ setActiveFilter(el.dataset.filter); }
    goToPage(el.dataset.nav);
    if(el.dataset.filter){
      setTimeout(()=>{
        document.querySelectorAll('.pill-filter').forEach(b=>b.classList.toggle('active', b.dataset.filter===el.dataset.filter));
        renderMenu();
      },50);
    }
  }
});
