# YATIKA DHOOP वेबसाइट — सेटअप गाइड (Hindi + English)

यह HTML, CSS और JavaScript पर बनी responsive शुरुआती वेबसाइट है। इसमें:
- Hindi / English toggle
- Product catalogue और category filters
- Search
- Cart / quantity controls
- Retail order message on WhatsApp
- Wholesale enquiry form on WhatsApp
- Mobile responsive layout

## सबसे पहले ये बदलाव करें

### 1. WhatsApp नंबर जोड़ें
`config.js` खोलें और:
```js
whatsappNumber: "91XXXXXXXXXX",
```
को अपने WhatsApp Business नंबर से बदलें। भारत के लिए `91` के बाद नंबर लिखें। `+`, spaces या hyphens न डालें। उदाहरण के तौर पर `919876543210` जैसा format (यह सिर्फ उदाहरण है)।

### 2. कीमतें और पैक विवरण अपडेट करें
`script.js` में `products` array है। प्रत्येक product के `price: 0` को अपनी वास्तविक बिक्री कीमत से बदलें। `0` रहने पर साइट “Ask for price / कीमत पूछें” दिखाती है।
- केवल वास्तविक और पुष्टि की गई कीमत डालें।
- पैक वजन, स्टिक की संख्या, MRP और उपलब्धता को product data में जोड़ना चाहें तो आगे बढ़ाया जा सकता है।
- अभी दिए गए नाम शुरुआती उदाहरण हैं; जो SKU आप नहीं बेचते, उसे हटाएँ या बदलें।

### 3. ब्रांड जानकारी बदलें
`index.html` में ब्रांड नाम, संपर्क, कंपनी परिचय और टैगलाइन बदल सकते हैं। वर्तमान product artwork CSS से बना placeholder है; लॉन्च से पहले अपनी असली product-packaging photos जोड़ना बेहतर होगा।

## कंप्यूटर पर वेबसाइट कैसे देखें
1. ZIP extract करें।
2. `index.html` पर double-click करें। सामान्य browser में वेबसाइट खुल जाएगी।
3. WhatsApp order test करने से पहले `config.js` में सही नंबर डालें।

## GitHub Pages पर मुफ्त होस्टिंग
1. GitHub में sign in करें और नया **Public repository** बनाएँ, जैसे `yatika-dhoop-site`।
2. इस ZIP की सभी फाइलें और `assets` folder repository के root में upload करें। `index.html` root में ही होना चाहिए।
3. Repository → **Settings** → **Pages** खोलें।
4. **Deploy from a branch** चुनें; Branch `main` और folder `/(root)` चुनकर Save करें।
5. कुछ मिनट बाद GitHub Pages URL दिखेगा। वेबसाइट खोलकर मोबाइल और WhatsApp order test करें।
6. अपना domain जोड़ने के लिए Settings → Pages → **Custom domain** में domain लिखें। GitHub द्वारा बताए गए DNS records अपने domain registrar में सेट करें। HTTPS उपलब्ध होने पर उसे enable करें।
Official guide: https://docs.github.com/en/pages

## अपना पहले से खरीदा हुआ domain जोड़ना
- Domain registrar के DNS control panel में जाएँ।
- GitHub Pages की official custom-domain guide में बताए गए वर्तमान DNS records अपने domain के अनुसार जोड़ें।
- GitHub repository Settings → Pages → Custom domain में वही domain डालें।
- DNS propagation में समय लग सकता है। किसी दूसरे hosting provider पर domain का DNS अलग होगा।

## बजट
- कोड: ₹0 यदि आप स्वयं या AI की मदद से manage करें।
- GitHub Pages: सामान्य static site के लिए ₹0।
- आपका मौजूदा domain: नया domain खर्च नहीं।
- WhatsApp enquiry: अतिरिक्त website subscription की जरूरत नहीं।
- Professional email, payment gateway, backend/database, automatic inventory या dealer login इस starter में शामिल नहीं हैं।

## जरूरी सीमाएँ
- यह static website है, secure backend नहीं।
- Orders आपके WhatsApp पर message के रूप में आएँगे; वेबसाइट में order database नहीं बनेगा।
- Checkout पर final price, stock, shipping और payment details WhatsApp पर confirm करें।
- कोई customer phone number या private data इस static site में store नहीं किया जाता।
- Google Fonts के लिए internet connection चाहिए; offline होने पर fallback fonts इस्तेमाल होंगे।


## आपके प्रोडक्ट फोटो जोड़े गए हैं
आपके 15 अपलोड किए गए प्रोडक्ट फोटो वेबसाइट की बाकी फाइलों के साथ उसी root में रखे गए हैं और `script.js` में उनसे लिंक कर दिया गया है। GitHub Repository के root में सभी वेबसाइट फाइलें और सभी JPG फोटो अपलोड करें।

**ध्यान दें:** अभी सभी प्रोडक्ट की कीमत `0` / “कीमत पूछें” पर है। असली कीमतें डालने के लिए `script.js` में हर प्रोडक्ट की `price:0` को वास्तविक कीमत से बदलें। WhatsApp ऑर्डर चालू करने के लिए `config.js` में अपना WhatsApp नंबर भी सेट करें।


## नया अपडेट: लोगो और अतिरिक्त प्रोडक्ट फोटो
- `yatika-logo.png` को वेबसाइट के header में जोड़ा गया है।
- Cool Water, Divine Delight, Lavender, Night Jasmine, Luxury Oud और Z Black के फोटो तथा प्रोडक्ट कार्ड जोड़े गए हैं।
- कुल 21 फ्रेगरेंस/प्रोडक्ट विकल्प और 1 combo विकल्प वेबसाइट में हैं।
- वेबसाइट अपलोड करते समय सभी `.html`, `.css`, `.js`, `.png` और `.jpg` फाइलें एक ही repository root में रखें।
- कीमतें अभी “कीमत पूछें” मोड में हैं। `script.js` में `price:0` को असली कीमत से बदलें और `config.js` में सही WhatsApp नंबर डालें।


## अतिरिक्त उत्पाद (नया अपडेट)
- Pure Gugal Cups / शुद्ध गुगल कप
- Hawan Special Cups / हवन स्पेशल कप
- Loban Dhoop Cups / लोबान धूप कप
- Bhimsaini Kapoor / भीमसेनी कपूर
- Natural Gugal / नेचुरल गुगल
- Bambooless Incense Sticks / बैंबूलेस अगरबत्ती रेंज
- Mix Flower Dhoop Cones / मिक्स फ्लावर धूप कोन

इन उत्पादों की असली फोटो वेबसाइट में शामिल हैं। कीमतें अभी “कीमत पूछें” पर हैं; कीमत और स्टॉक की पुष्टि के बाद ही बदलें।
