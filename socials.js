import { SOCIALS, ICONS } from './data.js';
export function socialsHTML(){
  return SOCIALS.map(s=>`<a class="social-btn" href="${s.url}" target="_blank" rel="noopener" aria-label="${s.key}" title="${s.handle}">${ICONS[s.key]}</a>`).join('');
}
