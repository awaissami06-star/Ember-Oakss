let cupsBase = 48203;
setInterval(()=>{
  cupsBase += Math.floor(Math.random()*3);
  document.getElementById('cupsPoured').textContent = cupsBase.toLocaleString();
}, 4000);
