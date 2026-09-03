/* ================================================================
   PALSIR CZ — спільний скрипт
   ----------------------------------------------------------------
   1) CONFIG   — контакти й адреса форми. Правити тут.
   2) ICONS    — набір SVG-іконок, вставляється на кожну сторінку.
   3) COMMON   — переклади шапки, меню, форми і футера.
   4) buildPage(PAGE) — збирає сторінку: іконки, форму, меню, мову.
   ================================================================ */

const CONFIG = {
  // Порожньо = заявка відкриється у WhatsApp із готовим текстом.
  // Вставте сюди адресу з formspree.io, щоб заявки йшли на пошту.
  formEndpoint: "",
  whatsapp: "420608067777",
  phone: "+420 608 067 777",
  phoneHref: "+420608067777",
  email: "PalsirCz@email.cz",
  address: "Klostermannova 5987, 430 01 Chomutov",
  coords: [50.4620455, 13.4173465],
  brandYear: "2015–2026"
};

/* ---------- SVG-іконки ---------- */
const ICONS = `
<svg xmlns="http://www.w3.org/2000/svg" style="display:none">
<symbol id="i-phone" viewBox="0 0 24 24"><path d="M6.6 3h3l1.5 4-2 1.4a12 12 0 0 0 5.5 5.5l1.4-2 4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.6 5.2 2 2 0 0 1 6.6 3z"/></symbol>
<symbol id="i-telegram" viewBox="0 0 24 24"><path d="M21 4.5 2.9 11.4c-.7.3-.7 1.2 0 1.4l4.5 1.4 1.7 5c.2.6 1 .8 1.4.3l2.5-2.6 4.4 3.2c.5.4 1.3.1 1.4-.6L21.9 5.4c.2-.7-.4-1.2-1-.9z"/><path d="m7.4 14.2 10-6.6-7.5 7.6"/></symbol>
<symbol id="i-whatsapp" viewBox="0 0 24 24"><path d="M12 3a9 9 0 0 0-7.7 13.6L3 21l4.5-1.2A9 9 0 1 0 12 3z"/><path d="M9 8.5c.3 2 1.6 4.2 3.6 5.3.7.4 1.4.6 1.9.2l.8-.7-1.8-1.6-.9.6c-.9-.5-1.7-1.4-2.1-2.3l.7-.8-1.4-1.8-.8.6z"/></symbol>
<symbol id="i-viber" viewBox="0 0 24 24"><path d="M12 2.8c4.6 0 7.6 2.8 7.6 7.3 0 4.4-3 7.2-7.6 7.2-.7 0-1.4 0-2-.2l-3.4 2.6c-.4.3-.9 0-.9-.5v-2.6C3.5 15.3 2.4 13 2.4 10c0-4.5 3-7.3 7.6-7.3z"/><path d="M9 7.6c.3 1.9 1.6 3.6 3.4 4.4.6.3 1.2.4 1.6.1"/></symbol>
<symbol id="i-mail" viewBox="0 0 24 24"><rect x="2.7" y="5" width="18.6" height="14" rx="2.4"/><path d="m3.4 6.6 8.6 6 8.6-6"/></symbol>
<symbol id="i-pin" viewBox="0 0 24 24"><path d="M12 21s7-6 7-11a7 7 0 1 0-14 0c0 5 7 11 7 11z"/><circle cx="12" cy="10" r="2.6"/></symbol>
<symbol id="i-menu" viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16"/></symbol>
<symbol id="i-close" viewBox="0 0 24 24"><path d="M6 6l12 12M18 6 6 18"/></symbol>
<symbol id="i-doc" viewBox="0 0 24 24"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M9 13h6M9 17h4"/></symbol>
<symbol id="i-clock" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.6"/><path d="M12 7.4V12l3 1.8"/></symbol>
<symbol id="i-shield" viewBox="0 0 24 24"><path d="M12 3l7 2.6v5.2c0 4.3-2.9 8-7 10.2-4.1-2.2-7-5.9-7-10.2V5.6z"/><path d="m9 12 2.2 2.2L15.4 10"/></symbol>
<symbol id="i-users" viewBox="0 0 24 24"><circle cx="9.2" cy="8.4" r="3.2"/><path d="M3.4 19.4a5.8 5.8 0 0 1 11.6 0M16.4 5.6a3.2 3.2 0 0 1 0 5.7M17.6 13.9a5.6 5.6 0 0 1 3 5.5"/></symbol>
<symbol id="i-wallet" viewBox="0 0 24 24"><path d="M3.4 7.4A2.4 2.4 0 0 1 5.8 5h11.4a2 2 0 0 1 2 2v1.6"/><rect x="3.4" y="7.4" width="17.2" height="11.6" rx="2.4"/><circle cx="16.4" cy="13.2" r="1.3"/></symbol>
<symbol id="i-factory" viewBox="0 0 24 24"><path d="M3 20V10l5 3V10l5 3V10l5 3V6h3v14z"/><path d="M3 20h18"/></symbol>
<symbol id="i-globe" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.8"/><path d="M3.4 12h17.2M12 3.2c2.4 2.5 3.6 5.5 3.6 8.8S14.4 18.3 12 20.8C9.6 18.3 8.4 15.3 8.4 12S9.6 5.7 12 3.2z"/></symbol>
<symbol id="i-arrow" viewBox="0 0 24 24"><path d="M5 12h13M12.5 6l6 6-6 6"/></symbol>
<symbol id="i-send" viewBox="0 0 24 24"><path d="M21 3 10.5 13.5M21 3l-6.8 18-3.7-7.5L3 9.8z"/></symbol>
</svg>`;

/* ---------- переклади, спільні для всіх сторінок ---------- */
const COMMON = {
uk:{
  navHome:"Про компанію", navJobs:"Робота", navFirms:"Компаніям",
  navDocs:"Документи", navContact:"Контакти",
  menu:"Меню", close:"Закрити",
  dockCall:"Подзвонити", dockApply:"Написати",
  formTitle:"Написати нам", formSub:"Відповідаємо протягом робочого дня.",
  fName:"Імʼя або назва компанії", fPhone:"Телефон", fEmail:"Email",
  fMessenger:"Зручний звʼязок", fCall:"Дзвінок",
  fNote:"Ваше повідомлення",
  fConsent:"Погоджуюся на обробку персональних даних для розгляду звернення.",
  fSubmit:"Надіслати", fSending:"Надсилаємо…",
  fOk:"Повідомлення надіслано. Ми звʼяжемося з вами найближчим часом.",
  fErr:"Не вдалося надіслати. Зателефонуйте: "+CONFIG.phone,
  fFill:"Заповніть імʼя, телефон і підтвердіть згоду.",
  footTagline:"Ліцензована агенція праці", footPrivacy:"Обробка персональних даних",
  mapTitle:"Ми на мапі", mapNote:"Klostermannova 5987, 430 01 Chomutov",
  mapBtn:"Відкрити в Google Maps"
},
cs:{
  navHome:"O společnosti", navJobs:"Práce", navFirms:"Pro firmy",
  navDocs:"Dokumenty", navContact:"Kontakt",
  menu:"Menu", close:"Zavřít",
  dockCall:"Zavolat", dockApply:"Napsat",
  formTitle:"Napište nám", formSub:"Odpovídáme během pracovního dne.",
  fName:"Jméno nebo název firmy", fPhone:"Telefon", fEmail:"E-mail",
  fMessenger:"Preferovaný kontakt", fCall:"Telefonát",
  fNote:"Vaše zpráva",
  fConsent:"Souhlasím se zpracováním osobních údajů za účelem vyřízení dotazu.",
  fSubmit:"Odeslat", fSending:"Odesíláme…",
  fOk:"Zpráva odeslána. Brzy se vám ozveme.",
  fErr:"Odeslání se nezdařilo. Zavolejte: "+CONFIG.phone,
  fFill:"Vyplňte jméno, telefon a potvrďte souhlas.",
  footTagline:"Licencovaná agentura práce", footPrivacy:"Zpracování osobních údajů",
  mapTitle:"Kde nás najdete", mapNote:"Klostermannova 5987, 430 01 Chomutov",
  mapBtn:"Otevřít v Google Maps"
},
ro:{
  navHome:"Despre companie", navJobs:"Locuri de muncă", navFirms:"Pentru companii",
  navDocs:"Documente", navContact:"Contact",
  menu:"Meniu", close:"Închide",
  dockCall:"Sună", dockApply:"Scrie",
  formTitle:"Scrieți-ne", formSub:"Răspundem în timpul zilei lucrătoare.",
  fName:"Nume sau denumirea companiei", fPhone:"Telefon", fEmail:"E-mail",
  fMessenger:"Contact preferat", fCall:"Apel telefonic",
  fNote:"Mesajul dumneavoastră",
  fConsent:"Sunt de acord cu prelucrarea datelor personale pentru soluționarea solicitării.",
  fSubmit:"Trimite", fSending:"Se trimite…",
  fOk:"Mesajul a fost trimis. Vă vom contacta în curând.",
  fErr:"Trimiterea a eșuat. Sunați la: "+CONFIG.phone,
  fFill:"Completați numele, telefonul și bifați acordul.",
  footTagline:"Agenție de muncă licențiată", footPrivacy:"Prelucrarea datelor personale",
  mapTitle:"Unde ne găsiți", mapNote:"Klostermannova 5987, 430 01 Chomutov",
  mapBtn:"Deschide în Google Maps"
}
};

/* ---------- універсальна форма (однакова на всіх сторінках) ---------- */
function formMarkup(){
  return `
  <h2 data-i="formTitle"></h2>
  <p class="sub" data-i="formSub"></p>
  <form id="mainForm" class="f" novalidate>
    <div><label for="f-name" data-i="fName"></label>
      <input id="f-name" name="name" required autocomplete="name"></div>
    <div><label for="f-phone" data-i="fPhone"></label>
      <input id="f-phone" name="phone" type="tel" required placeholder="+420 …" autocomplete="tel"></div>
    <div><label for="f-email" data-i="fEmail"></label>
      <input id="f-email" name="email" type="email" autocomplete="email"></div>
    <div><label for="f-msg" data-i="fMessenger"></label>
      <select id="f-msg" name="messenger">
        <option>Telegram</option><option>Viber</option><option>WhatsApp</option>
        <option data-i="fCall"></option>
      </select></div>
    <div><label for="f-note" data-i="fNote"></label>
      <textarea id="f-note" name="note"></textarea></div>
    <div class="check"><input id="f-ok" type="checkbox" required>
      <label for="f-ok" style="margin:0" data-i="fConsent"></label></div>
    <button class="send" type="submit">
      <svg class="ic"><use href="#i-send"></use></svg><span data-i="fSubmit"></span></button>
    <div class="msg" id="formMsg"></div>
  </form>`;
}

let LANG = "uk";
let DICT = {};

/* ---------- збірка сторінки ---------- */
function buildPage(PAGE, opts){
  opts = opts || {};

  // 1. іконки
  document.body.insertAdjacentHTML("afterbegin", ICONS);

  // 2. форма в кожен контейнер [data-form]
  document.querySelectorAll("[data-form]").forEach(el=>{
    el.classList.add("formsec");
    el.innerHTML = formMarkup();
  });

  // 3. бічне меню — будується з десктопної навігації
  const deskNav = document.querySelector(".nav-desk");
  if(deskNav){
    const side = document.createElement("aside");
    side.className = "sidebar";
    side.innerHTML =
      `<div class="top">
         <span style="font-weight:800;font-size:15px" data-i="menu"></span>
         <button class="close" type="button" aria-label="close">
           <svg class="ic"><use href="#i-close"></use></svg></button>
       </div>
       <nav>${deskNav.innerHTML}</nav>
       <div class="side-contacts">
         <a href="tel:${CONFIG.phoneHref}"><svg class="ic sm"><use href="#i-phone"></use></svg>${CONFIG.phone}</a>
         <a href="mailto:${CONFIG.email}"><svg class="ic sm"><use href="#i-mail"></use></svg>${CONFIG.email}</a>
         <a href="https://wa.me/${CONFIG.whatsapp}"><svg class="ic sm brand-wa"><use href="#i-whatsapp"></use></svg>WhatsApp</a>
       </div>`;
    const ov = document.createElement("div");
    ov.className = "overlay";
    document.body.append(ov, side);

    const burger = document.querySelector(".burger");
    const openMenu = v=>{
      side.classList.toggle("open", v);
      ov.classList.toggle("open", v);
      document.body.classList.toggle("locked", v);
      if(burger) burger.setAttribute("aria-expanded", v ? "true" : "false");
    };
    if(burger) burger.addEventListener("click", ()=>openMenu(true));
    side.querySelector(".close").addEventListener("click", ()=>openMenu(false));
    ov.addEventListener("click", ()=>openMenu(false));
    side.querySelectorAll("nav a").forEach(a=>a.addEventListener("click",()=>openMenu(false)));
    document.addEventListener("keydown", e=>{ if(e.key==="Escape") openMenu(false); });
  }

  // 4. мапа: OpenStreetMap вантажиться одразу (без cookie і стеження),
  //    Google відкривається окремою кнопкою в новій вкладці
  const map = document.querySelector(".map .frame");
  if(map){
    const [lat, lon] = CONFIG.coords;
    const d = 0.006;
    map.innerHTML = `<iframe loading="lazy" title="Palsir CZ"
      src="https://www.openstreetmap.org/export/embed.html?bbox=${lon-d}%2C${lat-d/2}%2C${lon+d}%2C${lat+d/2}&layer=mapnik&marker=${lat}%2C${lon}"></iframe>`;
  }

  // 5. приховати блоки з фото, яких ще немає на сервері
  document.querySelectorAll(".figure img, .heroimg img").forEach(img=>{
    img.addEventListener("error", ()=>img.closest(".figure,.heroimg").classList.add("noimg"));
    if(img.complete && img.naturalWidth===0) img.closest(".figure,.heroimg").classList.add("noimg");
  });

  // 5b. логотип: текст за замовчуванням, картинка щойно вона завантажиться
  const logo = document.querySelector(".mark img");
  if(logo){
    const done = ()=>{ logo.style.display="block";
      const t = document.querySelector(".mark .wordmark"); if(t) t.style.display="none"; };
    if(logo.complete && logo.naturalWidth>0) done(); else logo.addEventListener("load", done);
  }

  // 6. мови
  function apply(l){
    LANG = l;
    DICT = Object.assign({}, COMMON[l], (PAGE && PAGE[l]) || {});
    document.documentElement.lang = l;

    document.querySelectorAll("[data-i]").forEach(el=>{
      const v = DICT[el.dataset.i]; if(v!==undefined) el.textContent = v;
    });
    document.querySelectorAll("[data-html]").forEach(el=>{
      const v = DICT[el.dataset.html]; if(v!==undefined) el.innerHTML = v;
    });
    document.querySelectorAll("[data-alt]").forEach(el=>{
      const v = DICT[el.dataset.alt]; if(v!==undefined) el.alt = v;
    });
    document.querySelectorAll(".langs button").forEach(b=>
      b.setAttribute("aria-pressed", b.dataset.lang===l ? "true" : "false"));

    // мова переноситься на інші сторінки через ?l=
    document.querySelectorAll("a[href$='.html'], a[href*='.html?l=']").forEach(a=>{
      a.href = a.getAttribute("href").split("?")[0] + "?l=" + l;
    });

    if(opts.title && DICT[opts.title]) document.title = DICT[opts.title] + " | Palsir CZ";
  }

  document.querySelectorAll(".langs button").forEach(b=>
    b.addEventListener("click", ()=>apply(b.dataset.lang)));

  const urlLang = new URLSearchParams(location.search).get("l");
  const navLang = (navigator.language||"uk").slice(0,2);
  apply(["uk","cs","ro"].includes(urlLang) ? urlLang
      : (["uk","cs","ro"].includes(navLang) ? navLang : "uk"));

  // 7. надсилання форми
  const form = document.getElementById("mainForm");
  if(form) form.addEventListener("submit", async e=>{
    e.preventDefault();
    const box = document.getElementById("formMsg");
    const btn = form.querySelector("button.send");
    const label = btn.querySelector("span");
    const v = n => form[n] ? form[n].value.trim() : "";
    const d = { name:v("name"), phone:v("phone"), email:v("email"),
                messenger:v("messenger"), note:v("note") };
    const ok = form.querySelector("input[type=checkbox]");

    if(!d.name || !d.phone || !ok.checked){
      box.className = "msg bad"; box.textContent = DICT.fFill; return;
    }

    if(!CONFIG.formEndpoint){
      const lines = [DICT.fName+": "+d.name, DICT.fPhone+": "+d.phone];
      if(d.email) lines.push(DICT.fEmail+": "+d.email);
      if(d.messenger) lines.push(DICT.fMessenger+": "+d.messenger);
      if(d.note) lines.push(d.note);
      window.open("https://wa.me/"+CONFIG.whatsapp+"?text="+encodeURIComponent(lines.join("\n")),"_blank");
      box.className = "msg ok"; box.textContent = DICT.fOk; form.reset(); return;
    }

    btn.disabled = true; label.textContent = DICT.fSending;
    try{
      const r = await fetch(CONFIG.formEndpoint, {method:"POST",
        headers:{"Content-Type":"application/json","Accept":"application/json"},
        body: JSON.stringify(Object.assign({}, d, {lang:LANG, page:location.pathname}))});
      if(!r.ok) throw 0;
      box.className = "msg ok"; box.textContent = DICT.fOk; form.reset();
    }catch(_){
      box.className = "msg bad"; box.textContent = DICT.fErr;
    }
    btn.disabled = false; label.textContent = DICT.fSubmit;
  });
}
