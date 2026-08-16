export const ICONS = {
  search:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>',
  instagram:'<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg>',
  twitter:'<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8"><path d="M18 3h3l-7.5 8.6L22 21h-6.6l-5.2-6.8L4.2 21H1.2l8-9.2L2 3h6.8l4.7 6.2L18 3z"/></svg>',
  tiktok:'<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8"><path d="M14 3v10.5a3.5 3.5 0 1 1-3-3.46"/><path d="M14 3c.5 2.8 2.3 4.7 5 5"/></svg>',
  facebook:'<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M15 8h2V4h-2a4 4 0 0 0-4 4v3H9v4h2v7h4v-7h2.5l.5-4H15V8.5A.5.5 0 0 1 15.5 8z"/></svg>',
  cup:'<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M3 8h13v6a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8z"/><path d="M16 10h2a2.5 2.5 0 0 1 0 5h-2"/><path d="M6 3c-.6 1 .6 1 0 2M10 3c-.6 1 .6 1 0 2"/></svg>',
  glass:'<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M6 3h12l-1.5 16a2 2 0 0 1-2 1.8h-5a2 2 0 0 1-2-1.8L6 3z"/><path d="M7.5 9h9"/></svg>',
  pastry:'<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M2 12c2-4 6-7 10-7s8 3 10 7c-2 1-4 1.5-5 3.5-1-1-2.5-1-3.5 0-1-1-2.5-1-3.5 0-1-2-3-2.5-8-3.5z"/></svg>',
  check:'<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M8 12l3 3 5-6"/></svg>',
  pin:'<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M12 22s8-7.5 8-13a8 8 0 1 0-16 0c0 5.5 8 13 8 13z"/><circle cx="12" cy="9" r="3"/></svg>',
  clock:'<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>',
  phone:'<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .3 2 .7 3a2 2 0 0 1-.4 2.1L8 10.3a16 16 0 0 0 6 6l1.5-1.4a2 2 0 0 1 2.1-.4c1 .4 2 .6 3 .7a2 2 0 0 1 1.4 2.7z"/></svg>',
};

export const ROAST = {
  light:{color:'#d8a86a', label:'Light roast'},
  medium:{color:'#a9673a', label:'Medium roast'},
  dark:{color:'#5c3220', label:'Dark roast'},
  signature:{color:'#e29a4d', label:'Signature'},
}

export const PRODUCTS = [
  {id:'p1', name:'Single Origin Espresso', cat:'espresso', roast:'dark', price:3.50, desc:'A double shot of our Sumatra lot, pulled short and syrupy.', shape:'cup', featured:true},
  {id:'p2', name:'Cortado', cat:'espresso', roast:'medium', price:4.25, desc:'Equal parts espresso and steamed milk, cut clean and short.', shape:'cup'},
  {id:'p3', name:'Cappuccino', cat:'espresso', roast:'medium', price:4.75, desc:'Classic ratio, dense microfoam, dusted with cocoa on request.', shape:'cup'},
  {id:'p4', name:'Caffè Latte', cat:'espresso', roast:'medium', price:5.00, desc:'Silky steamed milk over a double shot, latte art included.', shape:'cup'},
  {id:'p5', name:'Flat White', cat:'espresso', roast:'dark', price:5.25, desc:'Ristretto shots under velvety micro-foam, no sugar needed.', shape:'cup', featured:true},
  {id:'p6', name:'Mocha Ember', cat:'espresso', roast:'signature', price:5.75, desc:'House dark-chocolate ganache, espresso, and a torched marshmallow.', shape:'cup', signature:true},
  {id:'p7', name:'Classic Cold Brew', cat:'cold', roast:'medium', price:4.50, desc:'Steeped 18 hours, served over ice, naturally sweet.', shape:'glass'},
  {id:'p8', name:'Oak-Barrel Nitro', cat:'cold', roast:'dark', price:5.50, desc:'Nitrogen-infused cold brew rested in oak for three days.', shape:'glass', signature:true, featured:true},
  {id:'p9', name:'Iced Vanilla Latte', cat:'cold', roast:'light', price:5.25, desc:'House vanilla syrup, cold milk, double espresso over ice.', shape:'glass'},
  {id:'p10', name:'Affogato', cat:'cold', roast:'dark', price:6.00, desc:'A hot shot poured over a scoop of house vanilla-bean gelato.', shape:'glass'},
  {id:'p11', name:'Maple Cardamom Latte', cat:'signature', roast:'signature', price:6.25, desc:'Toasted cardamom syrup and maple, our best-selling original.', shape:'cup', signature:true, featured:true},
  {id:'p12', name:'Smoked Honey Cortado', cat:'signature', roast:'signature', price:5.95, desc:'Applewood-smoked honey folded through a classic cortado.', shape:'cup', signature:true},
  {id:'p13', name:'Spanish Latte', cat:'signature', roast:'medium', price:5.50, desc:'Sweetened condensed milk, espresso, a whisper of cinnamon.', shape:'cup'},
  {id:'p14', name:'Butter Croissant', cat:'pastry', roast:null, price:3.25, desc:'Laminated 36 hours, baked fresh in-house every morning.', shape:'pastry'},
  {id:'p15', name:'Cinnamon Roll', cat:'pastry', roast:null, price:4.00, desc:'Slow-proofed dough, brown-butter icing, best warmed.', shape:'pastry'},
  {id:'p16', name:'Almond Biscotti', cat:'pastry', roast:null, price:2.75, desc:'Twice-baked, made for dunking straight into your espresso.', shape:'pastry'},
]

export const CATEGORIES = [
  {key:'espresso', label:'Espresso Drinks'},
  {key:'cold', label:'Cold &amp; Iced'},
  {key:'signature', label:'Signature'},
  {key:'pastry', label:'Pastries'},
]
export const LOCATIONS = [
  {
    name: 'Gulberg III — Flagship',
    address: 'MM Alam Road, Gulberg III, Lahore',
    hours: '7:00 AM – 9:00 PM',
    phone: '+92 42 3555 0192',
    lat: 31.5204,
    lng: 74.3587
  },
  {
    name: 'DHA Phase 5',
    address: 'Sunset Boulevard, DHA Phase 5, Lahore',
    hours: '8:00 AM – 10:00 PM',
    phone: '+92 42 3555 0287',
    lat: 31.4697,
    lng: 74.4100
  },
  {
    name: 'Johar Town',
    address: 'Faisal Town Link Road, Johar Town, Lahore',
    hours: '8:00 AM – 8:00 PM',
    phone: '+92 42 3555 0341',
    lat: 31.4697,
    lng: 74.2728
  }
];

export const SOCIALS = [
  {key:'instagram', handle:'@ember.oak', url:'https://instagram.com/ember.oak'},
  {key:'twitter', handle:'@emberandoak', url:'https://twitter.com/emberandoak'},
  {key:'tiktok', handle:'@ember.oak.cafe', url:'https://tiktok.com/@ember.oak.cafe'},
  {key:'facebook', handle:'/emberandoakcafe', url:'https://facebook.com/emberandoakcafe'},
]
