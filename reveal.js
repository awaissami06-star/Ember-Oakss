const revealObserver = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){ entry.target.classList.add('in'); revealObserver.unobserve(entry.target); }
  });
},{threshold:.12});
export function triggerReveals(){
  document.querySelectorAll('.reveal:not(.in)').forEach(el=> revealObserver.observe(el));
}
