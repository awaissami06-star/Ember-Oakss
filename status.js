export function updateStatus(){
  const now = new Date();
  const day = now.getDay(); // 0 sun
  const hour = now.getHours() + now.getMinutes()/60;
  let open, close;
  if(day===0){ open=8; close=20; }
  else if(day===6){ open=8; close=22; }
  else { open=7; close=21; }
  const isOpen = hour >= open && hour < close;
  const dot = document.getElementById('statusDot');
  const text = document.getElementById('statusText');
  dot.classList.toggle('closed', !isOpen);
  const fmt = (h)=>{ const hh = Math.floor(h); const period = hh>=12?'PM':'AM'; let disp = hh%12; if(disp===0) disp=12; return `${disp}:00 ${period}`; };
  text.textContent = isOpen ? `Open now · closes ${fmt(close)}` : `Closed · opens ${fmt(open)}`;
}
updateStatus();
setInterval(updateStatus, 60000);
