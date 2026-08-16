import { ICONS } from './data.js';
export function showToast(msg){
  const wrap = document.getElementById('toastWrap');
  const t = document.createElement('div');
  t.className = 'toast';
  t.innerHTML = `${ICONS.check}<span>${msg}</span>`;
  wrap.appendChild(t);
  requestAnimationFrame(()=> t.classList.add('show'));
  setTimeout(()=>{
    t.classList.remove('show');
    setTimeout(()=> t.remove(), 350);
  }, 2200);
}
