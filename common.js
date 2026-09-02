/* ================================================================
   PALSIR CZ — спільний скрипт
   ----------------------------------------------------------------
   1) CONFIG    — контакти й адреса форми. Правити тут.
   2) COMMON    — переклади шапки, підвалу і форми (усі сторінки).
   3) initI18n  — приймає переклади конкретної сторінки і все вмикає.
   ================================================================ */

const CONFIG = {
  // Порожньо = заявка відкриється у WhatsApp із готовим текстом.
  // Вставте сюди адресу з formspree.io, щоб заявки йшли на пошту.
  formEndpoint: "",
  whatsapp: "420608067777",
  phone: "+420 608 067 777",
  phoneHref: "+420608067777",
  email: "PalsirCz@email.cz"
};

const COMMON = {
uk:{
  navJobs:"Робота", navFirms:"Компаніям", navDocs:"Документи", navContact:"Контакти",
  dockCall:"Зателефонувати", dockApply:"Написати нам",
  footCompany:"Palsir CZ s.r.o., IČO 04383249, Klostermannova 5987, 430 01 Chomutov",
  footLicense:"Ліцензія на посередництво в працевлаштуванні, зокрема іноземців. Застраховані на випадок банкрутства.",
  footPrivacy:"Політика обробки персональних даних",
  fName:"Імʼя та прізвище", fPhone:"Телефон", fEmail:"Email",
  fMessenger:"Зручний месенджер", fCall:"Дзвінок",
  fCity:"Місто, де ви зараз", fNote:"Ваше повідомлення",
  fConsent:"Погоджуюся на обробку моїх персональних даних для розгляду звернення.",
  fSubmit:"Надіслати", fSending:"Надсилаємо…",
  fOk:"Повідомлення надіслано. Ми звʼяжемося з вами найближчим часом.",
  fErr:"Не вдалося надіслати. Зателефонуйте нам: "+CONFIG.phone,
  fFill:"Заповніть імʼя, телефон і підтвердіть згоду."
},
cs:{
  navJobs:"Práce", navFirms:"Pro firmy", navDocs:"Dokumenty", navContact:"Kontakt",
  dockCall:"Zavolat", dockApply:"Napsat nám",
  footCompany:"Palsir CZ s.r.o., IČO 04383249, Klostermannova 5987, 430 01 Chomutov",
  footLicense:"Povolení ke zprostředkování zaměstnání včetně zaměstnávání cizinců. Pojištěni proti úpadku.",
  footPrivacy:"Zásady zpracování osobních údajů",
  fName:"Jméno a příjmení", fPhone:"Telefon", fEmail:"E-mail",
  fMessenger:"Preferovaný messenger", fCall:"Telefonát",
  fCity:"Město, kde se nacházíte", fNote:"Vaše zpráva",
  fConsent:"Souhlasím se zpracováním osobních údajů za účelem vyřízení dotazu.",
  fSubmit:"Odeslat", fSending:"Odesíláme…",
  fOk:"Zpráva odeslána. Brzy se vám ozveme.",
  fErr:"Odeslání se nezdařilo. Zavolejte nám: "+CONFIG.phone,
  fFill:"Vyplňte jméno, telefon a potvrďte souhlas."
},
ro:{
  navJobs:"Locuri de muncă", navFirms:"Pentru companii", navDocs:"Documente", navContact:"Contact",
  dockCall:"Sună acum", dockApply:"Scrieți-ne",
  footCompany:"Palsir CZ s.r.o., IČO 04383249, Klostermannova 5987, 430 01 Chomutov",
  footLicense:"Licență de mediere a muncii, inclusiv pentru străini. Asigurați împotriva insolvenței.",
  footPrivacy:"Politica de prelucrare a datelor personale",
  fName:"Nume și prenume", fPhone:"Telefon", fEmail:"E-mail",
  fMessenger:"Messenger preferat", fCall:"Apel telefonic",
  fCity:"Orașul în care vă aflați", fNote:"Mesajul dumneavoastră",
  fConsent:"Sunt de acord cu prelucrarea datelor mele personale pentru soluționarea solicitării.",
  fSubmit:"Trimite", fSending:"Se trimite…",
  fOk:"Mesajul a fost trimis. Vă vom contacta în curând.",
  fErr:"Trimiterea a eșuat. Sunați-ne: "+CONFIG.phone,
  fFill:"Completați numele, telefonul și bifați acordul."
}
};

let LANG = "uk";
let DICT = {};

function initI18n(PAGE, opts){
  opts = opts || {};

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
    document.querySelectorAll("a[href$='.html']").forEach(a=>{
      a.href = a.getAttribute("href").split("?")[0] + "?l=" + l;
    });

    if(opts.title && DICT[opts.title]) document.title = DICT[opts.title] + " | Palsir CZ";
  }

  document.querySelectorAll(".langs button").forEach(b=>
    b.addEventListener("click", ()=>apply(b.dataset.lang)));

  const url = new URLSearchParams(location.search).get("l");
  const nav = (navigator.language||"uk").slice(0,2);
  const start = ["uk","cs","ro"].includes(url) ? url
              : (["uk","cs","ro"].includes(nav) ? nav : "uk");
  apply(start);
}

function initForm(formId, msgId){
  const form = document.getElementById(formId);
  if(!form) return;
  form.addEventListener("submit", async e=>{
    e.preventDefault();
    const box = document.getElementById(msgId);
    const btn = form.querySelector("button.send");
    const val = n => form[n] ? form[n].value.trim() : "";
    const d = { name:val("name"), phone:val("phone"), email:val("email"),
                messenger:val("messenger"), city:val("city"), note:val("note") };
    const ok = form.querySelector("input[type=checkbox]");

    if(!d.name || !d.phone || (ok && !ok.checked)){
      box.className = "msg bad"; box.textContent = DICT.fFill; return;
    }

    if(!CONFIG.formEndpoint){
      const lines = [DICT.fName+": "+d.name, DICT.fPhone+": "+d.phone];
      if(d.email) lines.push(DICT.fEmail+": "+d.email);
      if(d.messenger) lines.push(DICT.fMessenger+": "+d.messenger);
      if(d.city) lines.push(DICT.fCity+": "+d.city);
      if(d.note) lines.push(d.note);
      window.open("https://wa.me/"+CONFIG.whatsapp+"?text="+encodeURIComponent(lines.join("\n")),"_blank");
      box.className = "msg ok"; box.textContent = DICT.fOk; form.reset(); return;
    }

    btn.disabled = true; btn.textContent = DICT.fSending;
    try{
      const r = await fetch(CONFIG.formEndpoint, {method:"POST",
        headers:{"Content-Type":"application/json","Accept":"application/json"},
        body: JSON.stringify(Object.assign({}, d, {lang:LANG, page:location.pathname}))});
      if(!r.ok) throw 0;
      box.className = "msg ok"; box.textContent = DICT.fOk; form.reset();
    }catch(_){
      box.className = "msg bad"; box.textContent = DICT.fErr;
    }
    btn.disabled = false; btn.textContent = DICT.fSubmit;
  });
}
