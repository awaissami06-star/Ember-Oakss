export let cart = {};
export let activeFilter = 'all';
export function setActiveFilter(v){ activeFilter=v; }
export function clearCart(){ cart={}; }
