(() => {
  "use strict";
  const cfg = window.YATIKA_CONFIG || {};
  let language = "en";
  let category = "all";
  let cart = [];
  const products = [
    {id:"mystic-aroma",name:{en:"Mystic Aroma",hi:"मिस्टिक अरोमा"},category:"dhoop",categoryLabel:{en:"Dhoop sticks",hi:"धूपबत्ती"},desc:{en:"A soft, inviting fragrance for everyday rituals.",hi:"रोज़ की पूजा के लिए मुलायम और मनभावन खुशबू।"},price:0,unit:{en:"Pack",hi:"पैक"},symbol:"✺",image:"mystic-aroma.jpg",badge:{en:"POPULAR",hi:"लोकप्रिय"}},
    {id:"astha",name:{en:"Astha",hi:"आस्था"},category:"dhoop",categoryLabel:{en:"Dhoop sticks",hi:"धूपबत्ती"},desc:{en:"A premium fragrance for devotional moments.",hi:"भक्ति के पलों के लिए प्रीमियम खुशबू।"},price:0,unit:{en:"Pack",hi:"पैक"},symbol:"✺",image:"astha.jpg",badge:{en:"PREMIUM",hi:"प्रीमियम"}},
    {id:"bhimsaini-kapoor-gugal",name:{en:"Bhimsaini Kapoor Gugal",hi:"भीमसेनी कपूर गुगल"},category:"dhoop",categoryLabel:{en:"Dhoop sticks",hi:"धूपबत्ती"},desc:{en:"A traditional fragrance for pooja and prayer.",hi:"पूजा-पाठ के लिए पारंपरिक खुशबू।"},price:0,unit:{en:"Pack",hi:"पैक"},symbol:"✺",image:"bhimsaini-kapoor-gugal.jpg",badge:null},
    {id:"black-stone",name:{en:"Black Stone",hi:"ब्लैक स्टोन"},category:"dhoop",categoryLabel:{en:"Dhoop sticks",hi:"धूपबत्ती"},desc:{en:"A bold premium fragrance in a bamboo-less format.",hi:"बैंबू-लेस फॉर्मेट में प्रीमियम खुशबू।"},price:0,unit:{en:"Pack",hi:"पैक"},symbol:"✺",image:"black-stone.jpg",badge:{en:"PREMIUM",hi:"प्रीमियम"}},
    {id:"chandan",name:{en:"Chandan",hi:"चंदन"},category:"dhoop",categoryLabel:{en:"Dhoop sticks",hi:"धूपबत्ती"},desc:{en:"A classic sandalwood-inspired fragrance.",hi:"चंदन से प्रेरित पारंपरिक खुशबू।"},price:0,unit:{en:"Pack",hi:"पैक"},symbol:"✺",image:"chandan.jpg",badge:null},
    {id:"charming",name:{en:"Charming",hi:"चार्मिंग"},category:"incense",categoryLabel:{en:"Incense sticks",hi:"अगरबत्ती"},desc:{en:"A fresh, elegant fragrance for your space.",hi:"आपके स्थान के लिए ताज़ी और आकर्षक खुशबू।"},price:0,unit:{en:"Pack",hi:"पैक"},symbol:"✺",image:"charming.jpg",badge:null},
    {id:"gugal-kapoor",name:{en:"Gugal Kapoor",hi:"गुगल कपूर"},category:"dhoop",categoryLabel:{en:"Dhoop sticks",hi:"धूपबत्ती"},desc:{en:"A traditional fragrance for daily worship.",hi:"दैनिक पूजा के लिए पारंपरिक खुशबू।"},price:0,unit:{en:"Pack",hi:"पैक"},symbol:"✺",image:"gugal-kapoor.jpg",badge:null},
    {id:"kasturi",name:{en:"Kasturi",hi:"कस्तूरी"},category:"dhoop",categoryLabel:{en:"Dhoop sticks",hi:"धूपबत्ती"},desc:{en:"A rich, distinctive premium fragrance.",hi:"गहरी और विशिष्ट प्रीमियम खुशबू।"},price:0,unit:{en:"Pack",hi:"पैक"},symbol:"✺",image:"kasturi.jpg",badge:{en:"PREMIUM",hi:"प्रीमियम"}},
    {id:"loban",name:{en:"Loban",hi:"लोबान"},category:"dhoop",categoryLabel:{en:"Dhoop sticks",hi:"धूपबत्ती"},desc:{en:"A warm traditional fragrance for prayer time.",hi:"पूजा के समय के लिए गर्माहट भरी पारंपरिक खुशबू।"},price:0,unit:{en:"Pack",hi:"पैक"},symbol:"✺",image:"loban.jpg",badge:null},
    {id:"maja-mix",name:{en:"Maja Mix",hi:"मजा मिक्स"},category:"dhoop",categoryLabel:{en:"Dhoop sticks",hi:"धूपबत्ती"},desc:{en:"A blended fragrance for a pleasant atmosphere.",hi:"मनभावन वातावरण के लिए मिली-जुली खुशबू।"},price:0,unit:{en:"Pack",hi:"पैक"},symbol:"✺",image:"maja-mix.jpg",badge:null},
    {id:"real-mogra",name:{en:"Real Mogra",hi:"रियल मोगरा"},category:"dhoop",categoryLabel:{en:"Dhoop sticks",hi:"धूपबत्ती"},desc:{en:"A floral mogra-inspired fragrance.",hi:"मोगरे से प्रेरित फूलों की खुशबू।"},price:0,unit:{en:"Pack",hi:"पैक"},symbol:"✺",image:"real-mogra.jpg",badge:null},
    {id:"pineapple",name:{en:"Pineapple",hi:"पाइनएप्पल"},category:"dhoop",categoryLabel:{en:"Dhoop sticks",hi:"धूपबत्ती"},desc:{en:"A fruity fragrance with a bright character.",hi:"खुशमिज़ाज फल जैसी खुशबू।"},price:0,unit:{en:"Pack",hi:"पैक"},symbol:"✺",image:"pineapple.jpg",badge:null},
    {id:"real-rose",name:{en:"Real Rose",hi:"रियल रोज़"},category:"dhoop",categoryLabel:{en:"Dhoop sticks",hi:"धूपबत्ती"},desc:{en:"A rose-inspired fragrance for your rituals.",hi:"आपकी पूजा के लिए गुलाब से प्रेरित खुशबू।"},price:0,unit:{en:"Pack",hi:"पैक"},symbol:"✺",image:"real-rose.jpg",badge:null},
    {id:"royal-kevda",name:{en:"Royal Kevda",hi:"रॉयल केवड़ा"},category:"dhoop",categoryLabel:{en:"Dhoop sticks",hi:"धूपबत्ती"},desc:{en:"A traditional, floral kevda fragrance.",hi:"पारंपरिक फूलों जैसी केवड़ा खुशबू।"},price:0,unit:{en:"Pack",hi:"पैक"},symbol:"✺",image:"royal-kevda.jpg",badge:null},
    {id:"royal-shivam",name:{en:"Royal Shivam",hi:"रॉयल शिवम"},category:"dhoop",categoryLabel:{en:"Dhoop sticks",hi:"धूपबत्ती"},desc:{en:"A devotional fragrance for sacred spaces.",hi:"पवित्र स्थानों के लिए भक्ति-भाव वाली खुशबू।"},price:0,unit:{en:"Pack",hi:"पैक"},symbol:"✺",image:"royal-shivam.jpg",badge:null},
    {id:"cool-water",name:{en:"Cool Water",hi:"कूल वाटर"},category:"dhoop",categoryLabel:{en:"Dhoop sticks",hi:"धूपबत्ती"},desc:{en:"A cool, refreshing fragrance for peaceful moments.",hi:"सुकून भरे पलों के लिए ताज़गी भरी खुशबू।"},price:0,unit:{en:"Pack",hi:"पैक"},symbol:"✺",image:"cool-water.jpg",badge:{en:"NEW",hi:"नया"}},
    {id:"divine-delight",name:{en:"Divine Delight",hi:"डिवाइन डिलाइट"},category:"dhoop",categoryLabel:{en:"Dhoop sticks",hi:"धूपबत्ती"},desc:{en:"A warm fragrance for daily pooja and prayer.",hi:"दैनिक पूजा-पाठ के लिए मनभावन खुशबू।"},price:0,unit:{en:"Pack",hi:"पैक"},symbol:"✺",image:"divine-delight.jpg",badge:null},
    {id:"lavender",name:{en:"Lavender",hi:"लैवेंडर"},category:"dhoop",categoryLabel:{en:"Dhoop sticks",hi:"धूपबत्ती"},desc:{en:"A gentle floral fragrance for a calm atmosphere.",hi:"शांत वातावरण के लिए हल्की फूलों जैसी खुशबू।"},price:0,unit:{en:"Pack",hi:"पैक"},symbol:"✺",image:"lavender.jpg",badge:null},
    {id:"night-jasmine",name:{en:"Night Jasmine",hi:"नाइट जैस्मिन"},category:"dhoop",categoryLabel:{en:"Dhoop sticks",hi:"धूपबत्ती"},desc:{en:"A rich jasmine-inspired fragrance.",hi:"चमेली से प्रेरित मनमोहक खुशबू।"},price:0,unit:{en:"Pack",hi:"पैक"},symbol:"✺",image:"night-jasmine.jpg",badge:null},
    {id:"luxury-oud",name:{en:"Luxury Oud",hi:"लक्ज़री ऊद"},category:"dhoop",categoryLabel:{en:"Dhoop sticks",hi:"धूपबत्ती"},desc:{en:"A deep, distinctive premium fragrance.",hi:"गहरी और खास प्रीमियम खुशबू।"},price:0,unit:{en:"Pack",hi:"पैक"},symbol:"✺",image:"luxury-oud.jpg",badge:{en:"PREMIUM",hi:"प्रीमियम"}},
    {id:"z-black",name:{en:"Z Black",hi:"ज़ेड ब्लैक"},category:"dhoop",categoryLabel:{en:"Dhoop sticks",hi:"धूपबत्ती"},desc:{en:"A bold, modern fragrance in a premium pack.",hi:"प्रीमियम पैक में दमदार आधुनिक खुशबू।"},price:0,unit:{en:"Pack",hi:"पैक"},symbol:"✺",image:"z-black.jpg",badge:{en:"PREMIUM",hi:"प्रीमियम"}},

    {id:"pure-gugal-cups",name:{en:"Pure Gugal Cups",hi:"शुद्ध गुगल कप"},category:"dhoop",categoryLabel:{en:"Dhoop cups",hi:"धूप कप"},desc:{en:"Traditional gugal dhoop cups for pooja and devotional use.",hi:"पूजा और धार्मिक उपयोग के लिए पारंपरिक गुगल धूप कप।"},price:0,unit:{en:"Pack",hi:"पैक"},symbol:"✺",image:"pure-gugal-cups.jpg",badge:{en:"TRADITIONAL",hi:"पारंपरिक"}},
    {id:"hawan-special-cups",name:{en:"Hawan Special Cups",hi:"हवन स्पेशल कप"},category:"dhoop",categoryLabel:{en:"Hawan cups",hi:"हवन कप"},desc:{en:"Dhoop cups suited to hawan and prayer rituals.",hi:"हवन और पूजा-विधि के लिए धूप कप।"},price:0,unit:{en:"Pack",hi:"पैक"},symbol:"✺",image:"hawan-special-cups.jpg",badge:null},
    {id:"loban-cups",name:{en:"Loban Dhoop Cups",hi:"लोबान धूप कप"},category:"dhoop",categoryLabel:{en:"Dhoop cups",hi:"धूप कप"},desc:{en:"A traditional loban aroma for your prayer space.",hi:"पूजा-स्थल के लिए पारंपरिक लोबान की सुगंध।"},price:0,unit:{en:"Pack",hi:"पैक"},symbol:"✺",image:"loban-cups.jpg",badge:null},
    {id:"bhimsaini-kapoor",name:{en:"Bhimsaini Kapoor",hi:"भीमसेनी कपूर"},category:"pooja",categoryLabel:{en:"Pooja essentials",hi:"पूजा सामग्री"},desc:{en:"Bhimsaini camphor in a convenient jar pack.",hi:"सुविधाजनक जार पैक में भीमसेनी कपूर।"},price:0,unit:{en:"Jar",hi:"जार"},symbol:"✺",image:"bhimsaini-kapoor.jpg",badge:{en:"POOJA ESSENTIAL",hi:"पूजा सामग्री"}},
    {id:"natural-gugal",name:{en:"Natural Gugal",hi:"नेचुरल गुगल"},category:"pooja",categoryLabel:{en:"Pooja essentials",hi:"पूजा सामग्री"},desc:{en:"Natural gugal resin for traditional dhoop rituals.",hi:"पारंपरिक धूप के लिए प्राकृतिक गुगल।"},price:0,unit:{en:"Jar",hi:"जार"},symbol:"✺",image:"natural-gugal-jars.jpg",badge:null},
    {id:"bamboo-less-incense-range",name:{en:"Bambooless Incense Sticks",hi:"बैंबूलेस अगरबत्ती"},category:"incense",categoryLabel:{en:"Incense sticks",hi:"अगरबत्ती"},desc:{en:"Explore Yatika bambooless incense stick varieties.",hi:"याटिका की विभिन्न बैंबूलेस अगरबत्ती वैरायटी देखें।"},price:0,unit:{en:"Pack",hi:"पैक"},symbol:"✺",image:"bamboo-less-incense-range.jpg",badge:{en:"BAMBOOLESS",hi:"बैंबूलेस"}},
    {id:"mix-flower-cones",name:{en:"Mix Flower Dhoop Cones",hi:"मिक्स फ्लावर धूप कोन"},category:"cones",categoryLabel:{en:"Dhoop cones",hi:"धूप कोन"},desc:{en:"Colourful mixed-flower dhoop cones in a jar.",hi:"जार में रंग-बिरंगे मिक्स फ्लावर धूप कोन।"},price:0,unit:{en:"Jar",hi:"जार"},symbol:"✺",image:"mix-flower-cones.jpg",badge:{en:"VARIETY PACK",hi:"वैरायटी पैक"}},
    ,{id:"12-fragrance-combo",name:{en:"12 Fragrance Combo",hi:"12 फ्रेगरेंस कॉम्बो"},category:"combo",categoryLabel:{en:"Combo pack",hi:"कॉम्बो पैक"},desc:{en:"Explore a variety of fragrances in one box.",hi:"एक बॉक्स में कई खुशबुओं का अनुभव।"},price:0,unit:{en:"Combo box",hi:"कॉम्बो बॉक्स"},symbol:"✺",image:"",badge:{en:"VALUE COMBO",hi:"वैल्यू कॉम्बो"}}
  ];
  const $ = s => document.querySelector(s);
  const $$ = s => [...document.querySelectorAll(s)];
  const money = n => new Intl.NumberFormat(language==="hi"?"hi-IN":"en-IN",{style:"currency",currency:"INR",maximumFractionDigits:0}).format(n);
  const t = (en,hi) => language==="hi" ? hi : en;
  const safeText = value => String(value ?? "").replace(/[&<>"']/g, ch => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));
  function validWhatsApp() {
    const number = String(cfg.whatsappNumber || "").replace(/\D/g,"");
    return number.length >= 10 && !number.includes("XXXXXXXXXX") && !number.includes("0000000000") ? number : "";
  }
  function openWhatsApp(message) {
    const number = validWhatsApp();
    if (!number) { showToast(t("Please add your WhatsApp number in config.js first.","कृपया पहले config.js में अपना WhatsApp नंबर जोड़ें।")); return; }
    window.open(`https://wa.me/${number}?text=${encodeURIComponent(message)}`,"_blank","noopener,noreferrer");
  }
  function productCard(p) {
    const badge = p.badge ? `<span class="product-badge">${safeText(p.badge[language])}</span>` : "";
    const price = p.price > 0 ? money(p.price) : t("Ask for price","कीमत पूछें");
    const productVisual = p.image
      ? `<img class="product-photo" src="${safeText(p.image)}" alt="${safeText(p.name[language])}" loading="lazy">`
      : `<div class="mini-pack"><span class="mini-brand">YATIKA</span><span class="mini-symbol">${p.symbol}</span><span class="mini-title">${safeText(p.name[language])}</span><span class="mini-sub">FRAGRANCE COLLECTION</span></div>`;
    return `<article class="product-card">
      <div class="product-art">${badge}${productVisual}</div>
      <div class="product-info"><span class="product-category">${safeText(p.categoryLabel[language])}</span><h3>${safeText(p.name[language])}</h3><p class="product-desc">${safeText(p.desc[language])}</p>
      <div class="product-bottom"><span class="product-price">${price} ${p.price>0?`<small>/ ${safeText(p.unit[language])}</small>`:""}</span><button class="add-btn" data-add="${p.id}">${t("+ Add"," + जोड़ें")}</button></div></div>
    </article>`;
  }
  function renderProducts() {
    const query = ($("#searchInput").value || "").trim().toLowerCase();
    const list = products.filter(p => (category==="all" || p.category===category) &&
      (!query || p.name.en.toLowerCase().includes(query) || p.name.hi.includes(query) || p.desc.en.toLowerCase().includes(query)));
    $("#productGrid").innerHTML = list.length ? list.map(productCard).join("") : `<p>${t("No products found. Try another search.","कोई प्रोडक्ट नहीं मिला। दूसरी खोज करें।")}</p>`;
    $$("[data-add]").forEach(btn => btn.addEventListener("click", () => addToCart(btn.dataset.add)));
  }
  function addToCart(id) {
    const p = products.find(x => x.id===id);
    if (!p) return;
    const item = cart.find(x => x.id===id);
    if (item) item.qty += 1; else cart.push({id,qty:1});
    renderCart(); showToast(`${p.name[language]} ${t("added to order","ऑर्डर में जोड़ा गया")}`);
  }
  function changeQty(id,delta) {
    const item = cart.find(x=>x.id===id); if(!item)return;
    item.qty += delta; if(item.qty<=0) cart=cart.filter(x=>x.id!==id);
    renderCart();
  }
  function renderCart() {
    const count = cart.reduce((n,x)=>n+x.qty,0);
    $("#cartCount").textContent = count;
    $("#cartItems").innerHTML = cart.length ? cart.map(item=>{
      const p=products.find(x=>x.id===item.id);
      return `<div class="cart-row"><div><strong>${safeText(p.name[language])}</strong><small>${p.price>0?money(p.price):t("Price to be confirmed","價格待確認 / कीमत की पुष्टि होगी")}</small></div><div class="qty-controls"><button data-minus="${p.id}" aria-label="Decrease quantity">−</button><span>${item.qty}</span><button data-plus="${p.id}" aria-label="Increase quantity">+</button></div></div>`;
    }).join("") : `<div class="empty-cart">${t("Your order list is empty.","आपकी ऑर्डर लिस्ट खाली है।")}</div>`;
    const total=cart.reduce((n,item)=>{const p=products.find(x=>x.id===item.id);return n+(p.price||0)*item.qty;},0);
    $("#cartTotal").textContent=money(total);
    $$("[data-minus]").forEach(b=>b.addEventListener("click",()=>changeQty(b.dataset.minus,-1)));
    $$("[data-plus]").forEach(b=>b.addEventListener("click",()=>changeQty(b.dataset.plus,1)));
    $("#checkoutBtn").disabled=!cart.length;
    $("#checkoutBtn").style.opacity=cart.length?"1":".55";
  }
  function openCart(){ $("#cartDrawer").classList.add("open");$("#cartDrawer").setAttribute("aria-hidden","false");document.body.style.overflow="hidden"; }
  function closeCart(){ $("#cartDrawer").classList.remove("open");$("#cartDrawer").setAttribute("aria-hidden","true");document.body.style.overflow=""; }
  let toastTimer;
  function showToast(msg){const el=$("#toast");el.textContent=msg;el.classList.add("show");clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove("show"),2600);}
  function updateLanguage() {
    $$("[data-en][data-hi]").forEach(el=>{el.textContent=el.dataset[language];});
    $("#langToggle").textContent=language==="en"?"हिंदी":"English";
    $("#searchInput").placeholder=t("Search fragrances...","खुशबू खोजें...");
    $("#searchInput").setAttribute("aria-label",t("Search products","प्रोडक्ट खोजें"));
    document.documentElement.lang=language==="hi"?"hi":"en";
    renderProducts();renderCart();
  }
  $("#langToggle").addEventListener("click",()=>{language=language==="en"?"hi":"en";updateLanguage();});
  $("#filters").addEventListener("click",e=>{const b=e.target.closest("[data-category]");if(!b)return;category=b.dataset.category;$$(".filter").forEach(x=>x.classList.toggle("active",x===b));renderProducts();});
  $("#searchInput").addEventListener("input",renderProducts);
  $("#cartOpen").addEventListener("click",openCart);
  $("#cartClose").addEventListener("click",closeCart);
  $("#cartBackdrop").addEventListener("click",closeCart);
  $("#checkoutBtn").addEventListener("click",()=>{
    if(!cart.length)return;
    const lines=cart.map(item=>{const p=products.find(x=>x.id===item.id);return `• ${p.name.en} / ${p.name.hi} — Qty: ${item.qty} — ${p.price>0?money(p.price):"Price to confirm"}`;});
    const total=cart.reduce((n,item)=>n+(products.find(x=>x.id===item.id).price||0)*item.qty,0);
    openWhatsApp(`${cfg.businessName||"Yatika Enterprises"} - Retail Order\n\n${lines.join("\n")}\n\nEstimated subtotal: ${money(total)}\nPlease confirm final price, availability and shipping.`);
  });
  $("#wholesaleForm").addEventListener("submit",e=>{
    e.preventDefault();const d=new FormData(e.currentTarget);
    const msg=`${cfg.businessName||"Yatika Enterprises"} - Wholesale Enquiry\nName: ${d.get("name")}\nBusiness: ${d.get("business")}\nCity: ${d.get("city")}\nInterested quantity: ${d.get("quantity")}\nPhone: ${d.get("phone")||"Not provided"}\n\nPlease share wholesale rates and product catalogue.`;
    openWhatsApp(msg);
  });
  $("#contactWhatsApp").addEventListener("click",e=>{e.preventDefault();openWhatsApp(`${cfg.businessName||"Yatika Enterprises"} - Product enquiry\nHello, please share product details and current prices.`);});
  $("#menuToggle").addEventListener("click",()=>$("#mainNav").classList.toggle("open"));
  $$("#mainNav a").forEach(a=>a.addEventListener("click",()=>$("#mainNav").classList.remove("open")));
  $("#year").textContent=new Date().getFullYear();
  renderProducts();renderCart();
})();