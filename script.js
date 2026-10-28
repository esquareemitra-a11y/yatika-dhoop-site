(() => {
  "use strict";
  const cfg = window.YATIKA_CONFIG || {};
  let language = "en";
  let category = "all";
  let cart = [];
  const products = [
    {id:"bamboo-less",name:{en:"Bamboo-less Dhoop",hi:"बैंबू-लेस धूप"},category:"dhoop",categoryLabel:{en:"Dhoop sticks",hi:"धूपबत्ती"},desc:{en:"A convenient choice for daily pooja.",hi:"रोज़ की पूजा के लिए उपयुक्त विकल्प।"},price:120,unit:{en:"Pack",hi:"पैक"},symbol:"✺",badge:{en:"POPULAR",hi:"लोकप्रिय"}},
    {id:"kesar-gulab",name:{en:"Kesar Gulab",hi:"केसर गुलाब"},category:"dhoop",categoryLabel:{en:"Floral dhoop",hi:"फ्लोरल धूप"},desc:{en:"A floral fragrance for prayer time.",hi:"पूजा के समय के लिए फूलों की खुशबू।"},price:120,unit:{en:"Pack",hi:"पैक"},symbol:"❀",badge:{en:"BESTSELLER",hi:"बेस्टसेलर"}},
    {id:"lemon-grass",name:{en:"Lemon Grass",hi:"लेमन ग्रास"},category:"dhoop",categoryLabel:{en:"Fresh fragrance",hi:"ताज़ी खुशबू"},desc:{en:"A fresh fragrance for everyday spaces.",hi:"रोज़मर्रा के स्थानों के लिए ताज़ी खुशबू।"},price:120,unit:{en:"Pack",hi:"पैक"},symbol:"✳",badge:null},
    {id:"real-rose",name:{en:"Real Rose Dhoop",hi:"रियल रोज़ धूप"},category:"dhoop",categoryLabel:{en:"Rose fragrance",hi:"गुलाब की खुशबू"},desc:{en:"Rose-inspired fragrance for your rituals.",hi:"आपकी पूजा के लिए गुलाब से प्रेरित खुशबू।"},price:0,unit:{en:"Pack",hi:"पैक"},symbol:"❁",badge:null},
    {id:"sandalwood",name:{en:"Sandalwood Incense",hi:"चंदन अगरबत्ती"},category:"incense",categoryLabel:{en:"Incense",hi:"अगरबत्ती"},desc:{en:"A classic fragrance for a calm setting.",hi:"शांत वातावरण के लिए पारंपरिक खुशबू।"},price:120,unit:{en:"Pack",hi:"पैक"},symbol:"✦",badge:null},
    {id:"kevda",name:{en:"Kevda Dhoop",hi:"केवड़ा धूप"},category:"dhoop",categoryLabel:{en:"Traditional fragrance",hi:"पारंपरिक खुशबू"},desc:{en:"A traditional fragrance option.",hi:"पारंपरिक खुशबू का विकल्प।"},price:120,unit:{en:"Pack",hi:"पैक"},symbol:"✺",badge:null},
    {id:"kasturi",name:{en:"Kasturi Dhoop",hi:"कस्तूरी धूप"},category:"dhoop",categoryLabel:{en:"Premium dhoop",hi:"प्रीमियम धूप"},desc:{en:"A rich fragrance option for pooja.",hi:"पूजा के लिए गहरी खुशबू का विकल्प।"},price:120,unit:{en:"Pack",hi:"पैक"},symbol:"❋",badge:null},
    {id:"12-fragrance-combo",name:{en:"12 Fragrance Combo",hi:"12 फ्रेगरेंस कॉम्बो"},category:"combo",categoryLabel:{en:"Combo pack",hi:"कॉम्बो पैक"},desc:{en:"Explore a variety of fragrances in one box.",hi:"एक बॉक्स में कई खुशबुओं का अनुभव।"},price:0,unit:{en:"Combo box",hi:"कॉम्बो बॉक्स"},symbol:"✺",badge:{en:"VALUE COMBO",hi:"वैल्यू कॉम्बो"}}
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
    return `<article class="product-card">
      <div class="product-art">${badge}<div class="mini-pack"><span class="mini-brand">YATIKA</span><span class="mini-symbol">${p.symbol}</span><span class="mini-title">${safeText(p.name[language])}</span><span class="mini-sub">FRAGRANCE COLLECTION</span></div></div>
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