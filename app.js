/**
 * ASHRAM PORTAL & PRANAMI MANAGER
 * Soro Town Saraswata Shakha Sangha (ସୋର ଟାଉନ ସାରସ୍ୱତ ଶାଖା ସଂଘ)
 */

// ==========================================
// 1. DICTIONARY (Bilingual: Odia / English)
// ==========================================
const i18n = {
  or: {
    appTitle: "ସୋର ଟାଉନ ସାରସ୍ୱତ ଶାଖା ସଂଘ",
    appSubtitle: "ଜୟଗୁରୁ ଆଶ୍ରମ ପୋର୍ଟାଲ",
    navHome: "ମୁଖ୍ୟ ପୃଷ୍ଠା", navDirectory: "ଭକ୍ତ ତାଲିକା", navLedger: "ପ୍ରଣାମୀ ରେଜିଷ୍ଟର", navGallery: "ଗ୍ୟାଲେରୀ",
    sriSriThakur: "ଶ୍ରୀ ଶ୍ରୀ ଠାକୁର ନିଗମାନନ୍ଦ ପରମହଂସ ଦେବ", dailyVani: "\"ସର୍ବେ ଭବନ୍ତୁ ସୁଖିନଃ, ସର୍ବେ ସନ୍ତୁ ନିରାମୟାଃ\"",
    nirmanaProgress: "ଆଶ୍ରମ ନିର୍ମାଣ ପାଣ୍ଠି ଅଗ୍ରଗତି", donateNow: "ନିର୍ମାଣ ପାଇଁ ଦାନ କରନ୍ତୁ",
    totalDevotees: "ମୋଟ ଭକ୍ତ", totalMasika: "ମୋଟ ମାସିକ ପ୍ରଣାମୀ",
    addDevotee: "ନୂତନ ଭକ୍ତ", backToList: "ଫେରନ୍ତୁ",
    exportData: "ଏକ୍ସପୋର୍ଟ", printRegister: "ପ୍ରିଣ୍ଟ", masikaRegister: "ମାସିକ ପ୍ରଣାମୀ ରେଜିଷ୍ଟର",
    galleryTitle: "ଆଶ୍ରମ ଗ୍ୟାଲେରୀ", uploadPhoto: "ଫଟୋ ଅପଲୋଡ୍", all: "ସବୁ", catBigraha: "ଶ୍ରୀ ବିଗ୍ରହ", catNirmana: "ନିର୍ମାଣ କାର୍ଯ୍ୟ", catPuja: "ପୂଜା ଓ ଉତ୍ସବ",
    cancel: "ବାତିଲ", save: "ସଂରକ୍ଷଣ", upload: "ଅପଲୋଡ୍", printReceipt: "ପ୍ରିଣ୍ଟ", receipt: "ରସିଦ (Receipt)",
    slNo: "କ୍ରମିକ (Sl No)", phone: "ମୋବାଇଲ୍ (Phone)", address: "ଠିକଣା (Address)", dikshaDetails: "ଦୀକ୍ଷା ବିବରଣୀ (Diksha)",
    selectMonth: "ମାସ (Month)", amount: "ରାଶି (Amount ₹)", notes: "ଟିପ୍ପଣୀ (Notes/Purpose)",
    dbSettings: "କ୍ଲାଉଡ୍ ଡାଟାବେସ୍ (Supabase)",
    masikaPranami: "ମାସିକ ପ୍ରଣାମୀ", nirmanaPranami: "ନିର୍ମାଣ ପ୍ରଣାମୀ", padaPranami: "ପାଦ/ବିଶେଷ ପ୍ରଣାମୀ",
    profile: "ପ୍ରୋଫାଇଲ୍", parichayaPatra: "ପରିଚୟ ପତ୍ର", history: "ପ୍ରଦାନ ଇତିହାସ",
    thakurLifeTitle: "ଶ୍ରୀ ଶ୍ରୀ ଠାକୁରଙ୍କ ଜୀବନୀ ଓ ଦର୍ଶନ",
    thakurBirthName: "ଜନ୍ମ ନାମ: ନଳିନୀକାନ୍ତ ଚଟ୍ଟୋପାଧ୍ୟାୟ",
    thakurBirth: "ଜନ୍ମ: ୧୮ ଅଗଷ୍ଟ ୧୮୮୦ (କୁତବପୁର, ନଦୀୟା)",
    thakurLegacy: "ଦର୍ଶନ: ଅଦ୍ୱୈତ ବେଦାନ୍ତ, ଭକ୍ତି ଯୋଗ ଏବଂ ତନ୍ତ୍ର। ଶ୍ରୀମଦ୍ ସ୍ୱାମୀ ନିଗମାନନ୍ଦ ସରସ୍ୱତୀ ଦେବ ହେଉଛନ୍ତି ସାରସ୍ୱତ ମଠ ଏବଂ ନୀଳାଚଳ ସାରସ୍ୱତ ସଂଘର ପ୍ରତିଷ୍ଠାତା।",
    designation: "ପଦବୀ (Designation)",
    monthNames: { apr: "ଏପ୍ରିଲ", may: "ମେ", jun: "ଜୁନ", jul: "ଜୁଲାଇ", aug: "ଅଗଷ୍ଟ", sep: "ସେପ୍ଟେମ୍ବର", oct: "ଅକ୍ଟୋବର", nov: "ନଭେମ୍ବର", dec: "ଡିସେମ୍ବର", jan: "ଜାନୁଆରୀ", feb: "ଫେବୃଆରୀ", mar: "ମାର୍ଚ୍ଚ" }
  },
  en: {
    appTitle: "Soro Town Saraswata Shakha Sangha",
    appSubtitle: "Jayaguru Ashram Portal",
    navHome: "Home", navDirectory: "Devotee Directory", navLedger: "Pranami Register", navGallery: "Gallery",
    sriSriThakur: "Sri Sri Thakur Nigamananda Paramahansa Dev", dailyVani: "\"Sarve Bhavantu Sukhinah, Sarve Santu Niramayah\"",
    nirmanaProgress: "Ashram Nirmana Fund Progress", donateNow: "Donate for Construction",
    totalDevotees: "Total Devotees", totalMasika: "Total Masika Pranami",
    addDevotee: "New Devotee", backToList: "Back",
    exportData: "Export", printRegister: "Print", masikaRegister: "Masika Pranami Register",
    galleryTitle: "Ashram Gallery", uploadPhoto: "Upload Photo", all: "All", catBigraha: "Sri Bigraha", catNirmana: "Construction", catPuja: "Puja & Utsav",
    cancel: "Cancel", save: "Save", upload: "Upload", printReceipt: "Print", receipt: "Receipt",
    slNo: "Sl No", phone: "Phone", address: "Address", dikshaDetails: "Diksha Details",
    selectMonth: "Month", amount: "Amount (₹)", notes: "Notes/Purpose",
    dbSettings: "Cloud Database (Supabase)",
    masikaPranami: "Masika Pranami", nirmanaPranami: "Nirmana Pranami", padaPranami: "Pada Pranami",
    profile: "Profile", parichayaPatra: "Identity Card", history: "Payment History",
    thakurLifeTitle: "Life & Philosophy of Sri Sri Thakur",
    thakurBirthName: "Birth Name: Nalinikanta Chattopadhyay",
    thakurBirth: "Born: 18 August 1880 (Kutabpur, Nadia)",
    thakurLegacy: "Philosophy: Advaita Vedanta, Bhakti Yoga, and Tantra. Paramahansa Shrimad Swami Nigamananda Saraswati Deva is the founder of Saraswata Matha and Nilachala Saraswata Sangha.",
    designation: "Designation",
    monthNames: { apr: "April", may: "May", jun: "June", jul: "July", aug: "August", sep: "September", oct: "October", nov: "November", dec: "December", jan: "January", feb: "February", mar: "March" }
  }
};

const t = (k) => i18n[state.lang][k] || k;
const tM = (k) => i18n[state.lang].monthNames[k] || k;
const MONTHS = ['apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec', 'jan', 'feb', 'mar'];
function getCurrentFinancialYear() {
  const d = new Date();
  const year = d.getFullYear();
  const month = d.getMonth(); // 0 is Jan, 3 is April
  if (month >= 3) return `${year}-${String(year + 1).slice(-2)}`;
  return `${year - 1}-${String(year).slice(-2)}`;
}

function generateYearsList() {
  const current = getCurrentFinancialYear();
  const currentStart = parseInt(current.split('-')[0]);
  const years = [];
  for(let y = 2023; y <= currentStart + 1; y++) {
    years.push(`${y}-${String(y+1).slice(-2)}`);
  }
  return years;
}

const YEARS = generateYearsList();
const NIRMANA_TARGET = 1000000; // 10 Lakhs

function formatDate(dStr) {
  if (!dStr) return '';
  try {
    const parts = String(dStr).split('-');
    if (parts.length === 3) {
      const d = new Date(parseInt(parts[0], 10), parseInt(parts[1], 10) - 1, parseInt(parts[2], 10));
      const odiaMonths = ["ଜାନୁଆରୀ", "ଫେବୃଆରୀ", "ମାର୍ଚ୍ଚ", "ଏପ୍ରିଲ", "ମେ", "ଜୁନ", "ଜୁଲାଇ", "ଅଗଷ୍ଟ", "ସେପ୍ଟେମ୍ବର", "ଅକ୍ଟୋବର", "ନଭେମ୍ବର", "ଡିସେମ୍ବର"];
      const engMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      const day = d.getDate();
      const month = state.lang === 'or' ? odiaMonths[d.getMonth()] : engMonths[d.getMonth()];
      const year = d.getFullYear();
      return `${day} ${month} ${year}`;
    }
    return String(dStr);
  } catch(e) {
    return String(dStr);
  }
}

// ==========================================
// 2. STATE & SEED DATA
// ==========================================
const SEED_ADMINS = [
  { id: "super-admin-1", name: "Super Admin", username: "mrutunjaya", password: "Mrutunjaya@123", role: "superadmin" }
];

const state = {
  lang: localStorage.getItem('ashram_lang') || 'or',
  currentView: 'home',
  currentYear: getCurrentFinancialYear(),
  dashYear: getCurrentFinancialYear(),
  activeBhaktaId: null,
  
  devotees: [],
  masika: {},      // { '2024-25': { 'devotee_id': { 'aug': 100 } } }
  masika_meta: {}, // { '2024-25': { 'devotee_id': { 'aug': { updated_at, updated_by } } } }
  nirmana: [],     // [ { id, name, phone, address, amount, date, note, updated_at, updated_by } ]
  pada: [],        // [ { id, devotee_id, amount, date, note, updated_at, updated_by } ]
  palia: [],       // [ { id, pali_date, devotee_ids: [], updated_at, updated_by } ]
  expenses: [],    // [ { id, date, amount, source, note, updated_at, updated_by } ]
  gallery: [],     // [ { id, category, title, url, date } ]
  announcements: [],// [ { id, text, expiry_date, created_at, created_by } ]
  admins: [...SEED_ADMINS],
  currentUser: null,
  isAdmin: false
};

function getAuditTooltip(updated_at, updated_by) {
  if (!updated_at) return '';
  try {
    const d = new Date(updated_at);
    const dateStr = d.toLocaleDateString();
    const timeStr = d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const byStr = updated_by ? ` | କର୍ତ୍ତା: ${updated_by}` : '';
    return `🕒 ଶେଷ ସଂଶୋଧନ: ${dateStr} ${timeStr}${byStr}`;
  } catch (e) {
    return '';
  }
}

const SEED_DEVOTEES = [
  { id: "1", sl_no: 1, name: "ଦୀପ୍ତିକାନ୍ତ ପଣ୍ଡା", name_en: "Diptikanta Panda", designation: "ସଭାପତି (President)", phone: "", address: "Soro", diksha: "Nigama" },
  { id: "2", sl_no: 3, name: "ତ୍ରିଲୋଚନ ଶତପଥି", name_en: "Trilochan Satapathy", designation: "ସମ୍ପାଦକ (Secretary)", phone: "", address: "Soro", diksha: "" },
  { id: "3", sl_no: 4, name: "ସୂର୍ଯ୍ୟନ୍ଦୁ ବିକାଶ ପାଣିଗ୍ରାହୀ", name_en: "Suryandu Bikash Panigrahi", designation: "", phone: "", address: "Soro", diksha: "" },
  { id: "4", sl_no: 5, name: "ବିଶ୍ୱନାଥ ଜେନା", name_en: "Biswanath Jena", designation: "", phone: "", address: "Soro", diksha: "" },
  { id: "5", sl_no: 6, name: "ରାଜେନ୍ଦ୍ର ପାଣିଗ୍ରାହୀ", name_en: "Rajendra Panigrahi", designation: "", phone: "", address: "Soro", diksha: "" },
  { id: "6", sl_no: 7, name: "ଦେବାଶିଷ ସନ୍ଦୀବିଗ୍ରହ", name_en: "Debashis Sandhibigraha", designation: "", phone: "", address: "Soro", diksha: "" },
  { id: "7", sl_no: 8, name: "ମୃତ୍ୟୁଞ୍ଜୟ ତ୍ରିପାଠୀ", name_en: "Mrutunjaya Tripathy", designation: "", phone: "", address: "Soro", diksha: "" },
  { id: "8", sl_no: 9, name: "ବିଦ୍ୟୁତ ପ୍ରଭା ମହାନ୍ତି", name_en: "Bidyut Prabha Mohanty", designation: "", phone: "", address: "Soro", diksha: "" },
  { id: "9", sl_no: 10, name: "ଶାନ୍ତିଲତା ତ୍ରିପାଠୀ", name_en: "Santilata Tripathy", designation: "", phone: "", address: "Soro", diksha: "" },
  { id: "10", sl_no: 11, name: "ନରେନ୍ଦ୍ର ପାତ୍ର", name_en: "Narendra Patra", designation: "", phone: "", address: "Soro", diksha: "" },
  { id: "11", sl_no: 12, name: "ସ୍ୱର୍ଣ୍ଣପ୍ରଭା ମା", name_en: "Swarnaprabha Maa", designation: "", phone: "", address: "Soro", diksha: "" }
];

// Seed Masika from Google Sheet
const SEED_MASIKA = {
  "2023-24": {
    "1": { aug:300, sep:300, oct:300, nov:300, dec:300, jan:300, feb:300, mar:300 },
    "2": { aug:100, sep:100, oct:100, nov:100, dec:100, jan:100, feb:100, mar:100 },
    "3": { aug:300, sep:300, oct:300, nov:300, dec:300, jan:300, feb:300, mar:300 },
    "4": { aug:500, sep:500, oct:500, nov:500, dec:500, jan:500, feb:500, mar:500 },
    "5": { aug:150, sep:150, oct:150, nov:150, dec:150, jan:150, feb:150, mar:150 },
    "6": { aug:300, sep:300, oct:300, nov:300, dec:300, jan:300, feb:300, mar:300 },
    "7": { aug:100, sep:100, oct:100, nov:100, dec:100, jan:100, feb:100, mar:100 },
    "8": { aug:300, sep:300, oct:300, nov:300, dec:300, jan:300, feb:300, mar:300 },
    "9": { aug:100, sep:100, oct:100, nov:100, dec:100, jan:100, feb:100, mar:100 },
    "10": { aug:100, sep:100, oct:100, nov:100, dec:100, jan:100, feb:100, mar:100 }
  },
  "2024-25": {
    "1": { apr:300, may:300, jun:300, jul:300, aug:300, sep:300, oct:300, nov:300, dec:300, jan:300, feb:300, mar:300 },
    "2": { apr:100, may:100, jun:100, jul:100, aug:100, sep:100, oct:100, nov:100, dec:100, jan:100, feb:100, mar:100 },
    "3": { apr:300, may:300, jun:300, jul:300, aug:300, sep:300, oct:300, nov:300, dec:300, jan:300, feb:300, mar:300 },
    "4": { apr:500, may:500, jun:500, jul:500, aug:500, sep:500, oct:500, nov:500, dec:500, jan:500, feb:500, mar:500 },
    "5": { apr:150, may:150, jun:150, jul:150, aug:150, sep:150, oct:150, nov:150, dec:150, jan:150, feb:150, mar:150 },
    "6": { apr:300, may:300, jun:300, jul:300, aug:300, sep:300, oct:300, nov:200 },
    "7": { apr:100, may:100, jun:100, jul:100, aug:100, sep:100, oct:100, nov:100, dec:100, jan:100, feb:100, mar:100 },
    "8": { apr:300, may:300, jun:300, jul:300, aug:300, sep:300, oct:300, nov:300, dec:300, jan:300, feb:300, mar:300 },
    "9": { apr:100, may:100, jun:100, jul:100, aug:100, sep:100, oct:100, nov:100, dec:100, jan:100, feb:100, mar:100 },
    "10": { apr:100, may:100, jun:100, jul:100, aug:100, sep:100, oct:100, nov:100, dec:100, jan:100, feb:100, mar:100 }
  },
  "2025-26": {
    "1": { apr:300, may:300, jun:300, jul:300, aug:300, sep:300, oct:300, nov:300, dec:300, jan:300, feb:300, mar:300 },
    "2": { apr:100, may:100, jun:100, jul:100, aug:100, sep:100, oct:100, nov:100, dec:100, jan:100, feb:100, mar:100 },
    "3": { apr:300, may:300, jun:300, jul:300, aug:300, sep:300, oct:300, nov:300, dec:300, jan:300, feb:300, mar:308 },
    "4": { apr:500, may:500, jun:500, jul:500, aug:500, sep:500, oct:500, nov:500, dec:500, jan:500, feb:500, mar:500 },
    "5": { apr:150, may:150, jun:150, jul:150, aug:150, sep:150, oct:150, nov:150, dec:150, jan:150, feb:150, mar:150 },
    "7": { apr:100, may:100, jun:100, jul:100, aug:100, sep:100, oct:100, nov:100, dec:100, jan:100, feb:100, mar:100 },
    "8": { apr:300, may:300, jun:300, jul:300, aug:300, sep:300, oct:300, nov:300, dec:300, jan:300, feb:300, mar:300 },
    "9": { apr:100, may:108, jun:100, jul:100, aug:100, sep:100, oct:100, nov:100, dec:100, jan:100, feb:100, mar:100 },
    "10": { apr:100, may:100, jun:100, jul:100, aug:100, sep:100, oct:100, nov:100, dec:100, jan:100, feb:100, mar:100 },
    "11": { apr:100, may:100, jun:100, jul:100, aug:100, sep:100, oct:100, nov:100, dec:100, jan:100, feb:100, mar:100 }
  },
  "2026-27": {
    "1": { apr:300, may:300, jun:300, jul:300 },
    "3": { apr:300, may:300, jun:300 },
    "4": { apr:500, may:500 },
    "7": { apr:100, may:100, jun:100, jul:100 },
    "8": { apr:300, may:300, jun:500, jul:500, aug:500 },
    "9": { apr:100, may:100 },
    "10": { apr:100, may:100 },
    "11": { apr:100, may:100 }
  }
};

let supabaseClient = null;

// ==========================================
// 3. INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  // 1. Instant local load
  state.devotees = [...SEED_DEVOTEES];
  state.masika = JSON.parse(JSON.stringify(SEED_MASIKA));
  loadLocalStorageData();
  
  // Restore Admin Session (1 hour expiry)
  const adminExpiry = localStorage.getItem('adminExpiry');
  if (adminExpiry && Date.now() < parseInt(adminExpiry)) {
    state.isAdmin = true;
    document.body.classList.add('is-admin');
    const btn = document.getElementById('admin-login-btn');
    if (btn) btn.innerText = '🔓';
  } else {
    // Session expired or doesn't exist
    state.isAdmin = false;
    localStorage.removeItem('adminExpiry');
  }
  
  // 2. Initialize UI immediately
  initSupabase();
  setLanguage(state.lang);

  // Set initial history state safely
  try {
    history.replaceState({ view: 'home' }, '', '#home');
  } catch(e) { console.warn("history.replaceState blocked by WebView", e); }
  
  showView('home', false); // Don't push, we already replaced
  
  // 3. Live Supabase sync in background
  loadData();

  // 4. Initialize Progressive Web App (PWA) & Service Worker
  initPWA();
  initSwipeGestures();
});

// ==========================================
// 4. SUPABASE SYNC LOGIC
// ==========================================
function initSupabase() {
  const defaultUrl = 'https://eptkhzhmnmzoowlosgsc.supabase.co';
  const defaultKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVwdGtoemhtbm16b293bG9zZ3NjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY3ODY1NDEsImV4cCI6MjEwMjM2MjU0MX0._twC2T9s-7g2oFtfRiphwsocignB66c8r_3JghAjkV4';
  
  const url = localStorage.getItem('sbUrl') || defaultUrl;
  const key = localStorage.getItem('sbKey') || defaultKey;
  
  const statusContainer = document.getElementById('connection-status');
  const dot = statusContainer ? statusContainer.querySelector('.connection-dot') : null;
  const text = document.getElementById('connection-text');
  
  if (url && key && window.supabase) {
    try {
      supabaseClient = window.supabase.createClient(url, key);
      if(dot) dot.style.background = 'var(--success)';
      if(text) text.innerText = 'Live';
      if(statusContainer) statusContainer.title = 'Connected to Supabase';
    } catch(e) {
      console.error("Supabase Client Init Error:", e);
      supabaseClient = null;
      if(dot) dot.style.background = 'var(--danger)';
      if(text) text.innerText = 'Error';
    }
  } else {
    if(dot) dot.style.background = 'var(--warning)';
    if(text) text.innerText = 'Local';
  }
}

async function loadData() {
  if (supabaseClient) {
    try {
      try {
        const { data: devs, error: dErr } = await supabaseClient.from('devotees').select('*').order('sl_no', { ascending: true });
        if (!dErr && devs) state.devotees = devs;
      } catch (err) { console.warn("Failed devs:", err); }
      
      try {
        const { data: masika, error: mErr } = await supabaseClient.from('masika_records').select('*');
        if (!mErr && masika) {
          state.masika = {};
          state.masika_meta = {};
          masika.forEach(r => {
            const yr = r.financial_year;
            const did = String(r.devotee_id);
            const m = r.month;
            if (!state.masika[yr]) state.masika[yr] = {};
            if (!state.masika[yr][did]) state.masika[yr][did] = {};
            state.masika[yr][did][m] = Number(r.amount);
            
            if (!state.masika_meta[yr]) state.masika_meta[yr] = {};
            if (!state.masika_meta[yr][did]) state.masika_meta[yr][did] = {};
            state.masika_meta[yr][did][m] = {
              updated_at: r.updated_at,
              updated_by: r.updated_by
            };
          });
        }
      } catch (err) { console.warn("Failed masika:", err); }
      
      try {
        const { data: nirmana, error: nErr } = await supabaseClient.from('nirmana_donors').select('*').order('date', { ascending: false });
        if (!nErr && nirmana) {
          state.nirmana = nirmana.map(r => ({
            id: r.id, name: r.name, phone: r.phone || '', address: r.address || '', amount: Number(r.amount) || 0, date: r.date, note: r.note || '', updated_at: r.updated_at, updated_by: r.updated_by
          }));
        }
      } catch (err) { console.warn("Failed nirmana:", err); }

      try {
        const { data: pada, error: pErr } = await supabaseClient.from('pada_records').select('*').order('paid_date', { ascending: false });
        if (!pErr && pada) {
          state.pada = pada.map(r => ({
            id: r.id, devotee_id: String(r.devotee_id), amount: Number(r.amount) || 0, date: r.paid_date, note: r.note || '', updated_at: r.updated_at, updated_by: r.updated_by
          }));
        }
      } catch (err) { console.warn("Failed pada:", err); }
      
      try {
        const { data: palia, error: plErr } = await supabaseClient.from('palia_records').select('*').order('pali_date', { ascending: false });
        if (palia) {
          state.palia = palia.map(r => {
            let ids = r.devotee_ids || [];
            if (typeof ids === 'string') {
              try { ids = JSON.parse(ids); } 
              catch(e) { ids = ids.replace(/[{}]/g, '').split(',').map(s=>s.trim()).filter(Boolean); }
            }
            return {
              id: r.id, pali_date: r.pali_date, devotee_ids: ids, updated_at: r.updated_at, updated_by: r.updated_by
            };
          });
        }
      } catch (err) { console.warn("Failed palia:", err); }
      
      try {
        const { data: expenses, error: eErr } = await supabaseClient.from('expenses').select('*').order('expense_date', { ascending: false });
        if (expenses) {
          state.expenses = expenses.map(r => ({
            id: r.id, date: r.expense_date, amount: Number(r.amount) || 0, source: r.source, note: r.note || '', updated_at: r.updated_at, updated_by: r.updated_by
          }));
        }
      } catch (err) { console.warn("Failed expenses:", err); }
      
      try {
        const { data: gallery, error: gErr } = await supabaseClient.from('gallery').select('*').order('uploaded_at', { ascending: false });
        if (gallery) {
          state.gallery = gallery.map(r => ({
            id: r.id,
            url: r.url || r.image_url || '',
            title: r.title || (r.category === 'vigraha' ? 'ଶ୍ରୀ ବିଗ୍ରହ' : (r.category === 'nirmana' ? 'ନିର୍ମାଣ କାର୍ଯ୍ୟ' : (r.category === 'puja' ? 'ପୂଜା ଓ ଉତ୍ସବ' : 'ଆଶ୍ରମ ଫଟୋ'))),
            category: r.category || 'all',
            uploader: r.uploaded_by || '',
            date: r.uploaded_at || r.date || ''
          })).filter(x => !!x.url);
        }
      } catch (err) { console.warn("Failed gallery:", err); }

      // Load Admins from Supabase
      try {
        const { data: admins, error: aErr } = await supabaseClient.from('admins').select('*');
        if (admins && admins.length > 0) {
          state.admins = admins;
        }
      } catch (adminErr) {
        console.warn("Could not fetch admins table:", adminErr);
      }

      // Load Announcements from Supabase
      try {
        const { data: anns, error: annErr } = await supabaseClient.from('announcements').select('*');
        if (anns) {
          state.announcements = anns;
        }
      } catch (annErr) {
        console.warn("Could not fetch announcements table:", annErr);
      }



      saveData();
      refreshCurrentView();

    } catch(e) {
      console.warn("Supabase Fetch Error (using offline cache):", e);
    }
  }
}

function refreshCurrentView() {
  const modalsOpen = document.querySelectorAll('.modal-overlay.active, .modal.active');
  if (modalsOpen.length > 0) return; // Don't disrupt open modals during background sync
  
  if (state.currentView === 'home') renderHome();
  else if (state.currentView === 'directory') renderBhaktaDirectory();
  else if (state.currentView === 'ledger') renderLedgerTable();
  else if (state.currentView === 'pada') renderPadaList();
  else if (state.currentView === 'palia') renderPaliaList();
  else if (state.currentView === 'expenses') renderExpenses();
  else if (state.currentView === 'nirmana') renderNirmanaList();
  else if (state.currentView === 'dashboard' && state.activeBhaktaId) openDashboard(state.activeBhaktaId);
  else if (state.currentView === 'gallery') renderGallery('all');
  
  renderMarquee();
  renderAnnouncementsAdminList();
}

function loadLocalStorageData() {
  const d = localStorage.getItem('as_devotees');
  const m = localStorage.getItem('as_masika');
  const mm = localStorage.getItem('as_masika_meta');
  const n = localStorage.getItem('as_nirmana');
  const p = localStorage.getItem('as_pada');
  const pa = localStorage.getItem('as_palia');
  const e = localStorage.getItem('as_expenses');
  const g = localStorage.getItem('as_gallery');
  const a = localStorage.getItem('as_admins');
  const ann = localStorage.getItem('as_announcements');
  if(d) { try { state.devotees = JSON.parse(d); } catch(err){} }
  if(m) { try { state.masika = JSON.parse(m); } catch(err){} }
  if(mm) { try { state.masika_meta = JSON.parse(mm); } catch(err){} }
  if(n) { try { state.nirmana = JSON.parse(n); } catch(err){} }
  if(p) { try { state.pada = JSON.parse(p); } catch(err){} }
  if(pa) { try { state.palia = JSON.parse(pa); } catch(err){} }
  if(e) { try { state.expenses = JSON.parse(e); } catch(err){} }
  if(g) { try { state.gallery = JSON.parse(g); } catch(err){} }
  if(a) { try { state.admins = JSON.parse(a); } catch(err){} }
  else state.admins = [...SEED_ADMINS];
  if(ann) { try { state.announcements = JSON.parse(ann); } catch(err){} }
}

// Background Auto-Refresh
async function syncDataBackground() {
  if (!supabaseClient) return;
  try {
    await loadData();
    console.log("Background sync complete");
  } catch (err) {
    console.log("Background sync failed:", err);
  }
}

// Check for updates every 3 minutes
setInterval(syncDataBackground, 3 * 60 * 1000);

// Check for updates when app comes back to foreground
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === 'visible') {
    syncDataBackground();
  }
});

function saveData() {
  try {
    localStorage.setItem('as_devotees', JSON.stringify(state.devotees));
    localStorage.setItem('as_masika', JSON.stringify(state.masika));
    localStorage.setItem('as_masika_meta', JSON.stringify(state.masika_meta || {}));
    localStorage.setItem('as_nirmana', JSON.stringify(state.nirmana));
    localStorage.setItem('as_pada', JSON.stringify(state.pada));
    localStorage.setItem('as_palia', JSON.stringify(state.palia));
    localStorage.setItem('as_expenses', JSON.stringify(state.expenses));
    localStorage.setItem('as_gallery', JSON.stringify(state.gallery));
    localStorage.setItem('as_announcements', JSON.stringify(state.announcements));
    localStorage.setItem('as_admins', JSON.stringify(state.admins || SEED_ADMINS));
  } catch (err) {
    console.warn("Local storage quota exceeded. Offline cache not updated, but database is safe.");
  }
}

// ==========================================
// 5. VIEW ROUTING & LANGUAGE
// ==========================================
function showView(viewId, pushHistory = true) {
  if ((viewId === 'ledger' || viewId === 'expenses' || viewId === 'nirmana' || viewId === 'pada') && !state.isAdmin) {
    showToast("Access Denied", "error");
    viewId = 'home';
  }
  state.currentView = viewId;
  document.querySelectorAll('.view-section').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(el => el.classList.remove('active'));
  
  const viewEl = document.getElementById(`view-${viewId}`);
  if (viewEl) viewEl.classList.add('active');
  
  document.querySelectorAll(`.nav-btn[data-target="${viewId}"]`).forEach(el => el.classList.add('active'));

  if (viewId === 'home') renderHome();
  if (viewId === 'directory') renderBhaktaDirectory();
  if (viewId === 'ledger') renderLedgerTable();
  if (viewId === 'pada') renderPadaList();
  if (viewId === 'palia') renderPaliaList();
  if (viewId === 'expenses') renderExpenses();
  if (viewId === 'nirmana') renderNirmanaList();
  if (viewId === 'gallery') renderGallery('all');

  // Push browser history so mobile back button works within the app
  if (pushHistory) {
    const historyState = { view: viewId, bhaktaId: state.activeBhaktaId || null };
    try {
      history.pushState(historyState, '', `#${viewId}`);
    } catch(e) { console.warn("history.pushState blocked by WebView", e); }
  }
}

// Handle mobile hardware/software back button
window.addEventListener('popstate', function(event) {
  if (event.state && event.state.view) {
    // Navigate to the previous view without pushing another history entry
    if (event.state.view === 'dashboard' && event.state.bhaktaId) {
      state.activeBhaktaId = event.state.bhaktaId;
      showView('dashboard', false);
      openDashboard(event.state.bhaktaId, false);
    } else {
      showView(event.state.view, false);
    }
  } else {
    // If no state (at the very first entry), show home
    showView('home', false);
  }
});

function toggleMobileMenu() {
  const m = document.getElementById('mobile-menu');
  if (m) m.classList.toggle('hidden');
}

function setLanguage(lang) {
  state.lang = lang;
  localStorage.setItem('ashram_lang', lang);
  document.body.classList.remove('lang-or', 'lang-en');
  document.body.classList.add(lang === 'or' ? 'lang-or' : 'lang-en');
  
  if (state.isAdmin) {
    document.body.classList.add('is-admin');
  }
  
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18n[state.lang] && i18n[state.lang][key]) {
      el.innerText = t(key);
    }
  });
  
  const langBtn = document.getElementById('lang-toggle-btn');
  if (langBtn) {
    langBtn.innerHTML = lang === 'or' ? `<span style="font-weight: 700;">English</span>` : `<span style="font-weight: 700; font-family: var(--font-odia);">ଓଡ଼ିଆ</span>`;
  }
  showView(state.currentView, false);
}

function toggleLanguage() {
  setLanguage(state.lang === 'or' ? 'en' : 'or');
}

// ==========================================
// 6. HOME VIEW
// ==========================================
function renderHome() {
  updateHomeStats();
  renderPredictiveDashboard();
}

function updateHomeStats() {
  const totalDevs = state.devotees ? state.devotees.length : 0;
  const devEl = document.getElementById('home-total-devotees');
  if (devEl) devEl.innerText = totalDevs;
}

function renderPredictiveDashboard() {
  // 1. Dynamic Greeting
  const greetingEl = document.getElementById('dynamic-greeting');
  if (greetingEl) {
    const hour = new Date().getHours();
    let text = "ଶୁଭ ପ୍ରଭାତ"; // Good Morning
    if (hour >= 12 && hour < 17) text = "ଶୁଭ ଅପରାହ୍ନ"; // Afternoon
    else if (hour >= 17) text = "ଶୁଭ ସନ୍ଧ୍ୟା"; // Evening
    greetingEl.innerHTML = `✨ ${text}, ଜୟଗୁରୁ ✨`;
  }

  // 2. Render Scrolling Marquee (Next Pali + Active Announcements)
  renderMarquee();
  renderAnnouncementsAdminList();
}

// ==========================================
// 7. BHAKTA DIRECTORY
// ==========================================
function renderBhaktaDirectory() {
  const searchEl = document.getElementById('dir-search');
  const q = (searchEl ? searchEl.value || '' : '').toLowerCase();
  const grid = document.getElementById('bhakta-grid');
  if (!grid) return;
  
  let filtered = (state.devotees || []).filter(d => {
    return (d.name || '').toLowerCase().includes(q) || ((d.name_en || '').toLowerCase().includes(q)) || String(d.sl_no).includes(q);
  });
  
  grid.innerHTML = filtered.map(d => `
    <div class="bhakta-card" onclick="openDashboard('${d.id}')" title="${getAuditTooltip(d.updated_at, d.updated_by)}">
      <div class="bhakta-badge">Sl ${d.sl_no}</div>
      <div class="bhakta-card-header">
         <div class="bhakta-avatar">${d.avatar ? `<img src="${d.avatar}"/>` : '👤'}</div>
         <div class="bhakta-info">
           <h3>${state.lang === 'or' ? d.name : (d.name_en || d.name)}</h3>
           ${d.designation ? `<p style="color: var(--accent-light); font-weight: 600;">${d.designation}</p>` : ''}
           ${d.phone ? `<p>📞 ${d.phone}</p>` : ''}
         </div>
      </div>
      <div class="bhakta-card-stats text-muted">
         <span>${t('address')}: ${d.address || '-'}</span>
      </div>
    </div>
  `).join('');
}

function openAddDevoteeModal() {
  document.getElementById('dev-form-id').value = '';
  document.getElementById('dev-form-sl').value = (state.devotees || []).reduce((max, d) => Math.max(max, d.sl_no || 0), 0) + 1;
  document.getElementById('dev-form-name').value = '';
  document.getElementById('dev-form-name-en').value = '';
  document.getElementById('dev-form-designation').value = '';
  document.getElementById('dev-form-phone').value = '';
  document.getElementById('dev-form-address').value = '';
  document.getElementById('dev-form-diksha').value = '';
  
  const jySelect = document.getElementById('dev-form-joined-year');
  jySelect.innerHTML = YEARS.map(y => `<option value="${y}">${y}</option>`).join('');
  jySelect.value = state.currentYear;
  
  const smSelect = document.getElementById('dev-form-start-month');
  if (smSelect) smSelect.value = 'apr';

  const masikaCb = document.getElementById('dev-form-masika-active');
  if (masikaCb) masikaCb.checked = false;
  
  const delBtn = document.getElementById('dev-form-delete-btn');
  if (delBtn) delBtn.classList.add('hidden');

  openModal('modal-devotee');
}

function openEditDevoteeModal(id) {
  const d = state.devotees.find(x => String(x.id) === String(id));
  if(!d) return;
  
  const titleEl = document.getElementById('modal-devotee-title');
  if (titleEl) titleEl.innerText = state.lang === 'or' ? 'ଭକ୍ତ ବିବରଣୀ ସଂଶୋଧନ' : 'Edit Devotee Profile';

  document.getElementById('dev-form-id').value = d.id;
  
  const slInput = document.getElementById('dev-form-sl');
  slInput.value = d.sl_no;
  slInput.readOnly = !state.isAdmin;
  slInput.style.opacity = state.isAdmin ? '1' : '0.7';

  document.getElementById('dev-form-name').value = d.name || '';
  document.getElementById('dev-form-name-en').value = d.name_en || '';
  document.getElementById('dev-form-designation').value = d.designation || '';
  document.getElementById('dev-form-phone').value = d.phone || '';
  document.getElementById('dev-form-address').value = d.address || '';
  document.getElementById('dev-form-diksha').value = d.diksha || '';
  
  const jySelect = document.getElementById('dev-form-joined-year');
  if (jySelect) {
    jySelect.innerHTML = YEARS.map(y => `<option value="${y}">${y}</option>`).join('');
    jySelect.value = d.joined_year || '2023-24';
  }
  
  const smSelect = document.getElementById('dev-form-start-month');
  if (smSelect) smSelect.value = d.masika_start_month || 'apr';

  const masikaCb = document.getElementById('dev-form-masika-active');
  if (masikaCb) masikaCb.checked = d.is_masika_active === true;
  
  const delBtn = document.getElementById('dev-form-delete-btn');
  if (delBtn) {
    if (state.isAdmin) delBtn.classList.remove('hidden');
    else delBtn.classList.add('hidden');
  }

  // Update visibility of admin-only fields in form
  document.querySelectorAll('#modal-devotee .admin-only').forEach(el => {
    el.style.display = state.isAdmin ? '' : 'none';
  });

  openModal('modal-devotee');
}

async function saveDevoteeForm(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  if (btn) { if (btn.disabled) return; btn.disabled = true; }
  
  const id = document.getElementById('dev-form-id').value;
  const updaterName = state.currentUser ? state.currentUser.name : 'User';
  const now = new Date().toISOString();

  // If not admin and trying to add a new devotee, block!
  if (!id && !state.isAdmin) {
    if (btn) btn.disabled = false;
    showToast("କେବଳ Admin ନୂତନ ଭକ୍ତ ଯୋଡ଼ିପାରିବେ", "error");
    return;
  }

  const existingDev = id ? state.devotees.find(x => String(x.id) === String(id)) : null;

  const data = {
    sl_no: (state.isAdmin || !existingDev) ? Number(document.getElementById('dev-form-sl').value) : existingDev.sl_no,
    name: document.getElementById('dev-form-name').value.trim(),
    name_en: document.getElementById('dev-form-name-en').value.trim(),
    designation: document.getElementById('dev-form-designation').value.trim(),
    phone: document.getElementById('dev-form-phone').value.trim(),
    address: document.getElementById('dev-form-address').value.trim(),
    diksha: document.getElementById('dev-form-diksha').value.trim(),
    joined_year: (state.isAdmin || !existingDev) ? (document.getElementById('dev-form-joined-year') ? document.getElementById('dev-form-joined-year').value : '2023-24') : (existingDev.joined_year || '2023-24'),
    masika_start_month: (state.isAdmin || !existingDev) ? (document.getElementById('dev-form-start-month') ? document.getElementById('dev-form-start-month').value : 'apr') : (existingDev.masika_start_month || 'apr'),
    is_masika_active: (state.isAdmin || !existingDev) ? (document.getElementById('dev-form-masika-active') ? document.getElementById('dev-form-masika-active').checked : false) : (existingDev.is_masika_active === true),
    avatar: existingDev ? existingDev.avatar : null,
    updated_at: now,
    updated_by: updaterName
  };

  if(id) {
    data.id = id;
    const idx = state.devotees.findIndex(x => String(x.id) === String(id));
    
    if (supabaseClient) {
      const { error } = await supabaseClient.from('devotees').upsert(data);
      if (error) {
        if (btn) btn.disabled = false;
        showToast("Database error: " + error.message, "error");
        return;
      }
    }

    if (idx > -1) {
      state.devotees[idx] = { ...state.devotees[idx], ...data };
      try { saveData(); } catch(err) {}
      showToast("ଭକ୍ତ ବିବରଣୀ ସଫଳତାର ସହ ସଂଶୋଧିତ ହେଲା!", "success");
      try {
        history.pushState({ view: 'dashboard', bhaktaId: String(id) }, '', `#dashboard-${id}`);
      } catch(e) { console.warn("history.pushState blocked by WebView", e); }
      openDashboard(id);
    }
  } else {
    data.id = Date.now().toString();
    if (supabaseClient) {
      const { data: returnData, error } = await supabaseClient.from('devotees').insert(data).select().single();
      if (error) {
        if (btn) btn.disabled = false;
        showToast("Error saving to database: " + error.message, "error");
        return;
      }
      if (returnData && returnData.id) {
        data.id = returnData.id;
      }
    }
    
    state.devotees.push(data);
    try { saveData(); } catch(err) {}
    showToast("ନୂତନ ଭକ୍ତ ଯୋଡ଼ାଗଲା", "success");
    renderBhaktaDirectory();
  }
  
  if (btn) btn.disabled = false;
  closeModal('modal-devotee');
}

async function deleteDevotee() {
  const id = document.getElementById('dev-form-id').value;
  if (!id) return;
  if (!confirm("Are you sure you want to completely delete this devotee and all their records? This cannot be undone.")) return;
  
  if (supabaseClient) {
    const { error } = await supabaseClient.from('devotees').delete().eq('id', id);
    if (error) {
      showToast("Error deleting from database: " + error.message, "error");
      return;
    }
  }

  // Remove from state
  state.devotees = state.devotees.filter(d => String(d.id) !== String(id));
  
  // Also clean up ledger records to prevent memory leak
  YEARS.forEach(y => {
    if (state.masika[y]) {
      delete state.masika[y][String(id)];
      delete state.masika[y][Number(id)];
    }
  });
  
  state.pada = state.pada.filter(r => String(r.devotee_id) !== String(id));

  saveData();
  closeModal('modal-devotee');
  showToast("Devotee deleted successfully", "info");
  
  state.activeBhaktaId = null;
  showView('directory');
}

// ==========================================
// 8. INDIVIDUAL BHAKTA DASHBOARD
// ==========================================
function openDashboard(id, pushHistory = true) {
  state.activeBhaktaId = String(id);
  showView('dashboard', false); // Don't double-push, we push with bhaktaId below
  
  // Push dashboard-specific history entry
  if (pushHistory) {
  try {
    history.pushState({ view: 'dashboard', bhaktaId: String(id) }, '', `#dashboard-${id}`);
  } catch(e) { console.warn("history.pushState blocked by WebView", e); }
  }
  
  const d = state.devotees.find(x => String(x.id) === String(id));
  if(!d) {
    console.error("Devotee not found for id:", id);
    return;
  }

  const displayName = state.lang === 'or' ? d.name : (d.name_en || d.name);

  let html = `
    <div class="dashboard-layout">
      <!-- Left: Profile & Parichaya Patra -->
      <div>
         <div class="profile-card mb-md">
            <div class="profile-photo-container">
               <img src="${d.avatar || 'data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22%23ccc%22><path d=%22M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z%22/></svg>'}" class="profile-photo" id="dash-avatar-img" />
               <label class="photo-upload-btn" title="Upload Photo">
                 📷 <input type="file" accept="image/*" style="display:none;" onchange="uploadAvatar(event, '${id}')" />
               </label>
            </div>
            <h2 style="margin:0;">${displayName}</h2>
            <p class="text-accent" style="font-weight:600;">${t('slNo')}: ${d.sl_no}</p>
            ${d.designation ? `<p style="color: var(--success); font-weight: 600; margin-top: 4px;">${d.designation}</p>` : ''}
            
            <div class="profile-details">
               <div class="profile-item"><span class="profile-item-label">${t('phone')}</span> <span class="profile-item-val">${d.phone || '-'}</span></div>
               <div class="profile-item"><span class="profile-item-label">${t('address')}</span> <span class="profile-item-val">${d.address || '-'}</span></div>
               <div class="profile-item"><span class="profile-item-label">${t('dikshaDetails')}</span> <span class="profile-item-val">${d.diksha || '-'}</span></div>
            </div>
            
            <button class="btn btn-secondary mt-md" style="width:100%" onclick="openEditDevoteeModal('${id}')">✏️ ${t('profile')} ସଂଶୋଧନ</button>
         </div>

         <!-- Identity Card -->
         <div class="id-card-wrap" id="id-card-${id}">
            <div class="id-card">
               <div class="id-header">
                 <h3>ସୋର ଟାଉନ ସାରସ୍ୱତ ଶାଖା ସଂଘ</h3>
                 <p>ପରିଚୟ ପତ୍ର (Identity Card)</p>
               </div>
               <div class="id-body">
                 <img src="${d.avatar || ''}" class="id-photo" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22%23ccc%22><path d=%22M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z%22/></svg>'"/>
                 <div class="id-info">
                    <div><strong>ନାମ:</strong> ${d.name}</div>
                    <div><strong>କ୍ରମିକ ନଂ:</strong> ${d.sl_no}</div>
                    ${d.designation ? `<div><strong>ପଦବୀ:</strong> ${d.designation}</div>` : ''}
                    <div><strong>ଠିକଣା:</strong> ${d.address || ''}</div>
                    <div><strong>ଦୀକ୍ଷା:</strong> ${d.diksha || ''}</div>
                 </div>
               </div>
               <div class="id-footer">
                  <div id="qrcode-${id}" class="qr-code"></div>
                  <div class="id-seal">ସାରସ୍ୱତ<br/>ଶାଖା ସଂଘ</div>
               </div>
            </div>
         </div>
         <button class="btn btn-secondary mt-sm" style="width:100%" onclick="printElement('id-card-${id}')">🖨️ ପ୍ରିଣ୍ଟ ପରିଚୟ ପତ୍ର</button>
      </div>

      <!-- Right: Pranami Management -->
      <div class="card">
         <div class="tabs-nav" style="display:flex; gap:0.5rem; border-bottom:1px solid var(--border); padding-bottom:0.75rem; margin-bottom:1rem;">
           <button class="btn btn-secondary tab-btn active" onclick="switchDashTab('masika', this)">${t('masikaPranami')}</button>
         </div>

         <!-- Masika Tab -->
         <div id="tab-masika" class="tab-content active">
           <div class="toolbar mb-md" style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem;">
             <div style="display:flex; align-items:center; gap:0.5rem; flex-wrap:wrap;">
               <h3 style="margin:0;">${state.dashYear} ${t('masikaPranami')}</h3>
               <div class="year-tabs" style="display:flex; gap:0.3rem;">
                 ${YEARS.map(y => `
                   <button type="button" class="btn btn-sm ${y === state.dashYear ? 'btn-primary' : 'btn-secondary'}" onclick="switchDashYear('${id}', '${y}')">${y}</button>
                 `).join('')}
               </div>
             </div>
             <button class="btn btn-primary btn-sm admin-only" onclick="openDashPaymentModal('masika')">➕ ଦାଖଲ</button>
           </div>
           <div class="table-scroll">
             <table class="data-table">
               <thead><tr><th>${t('selectMonth')}</th><th>${t('amount')}</th><th>${t('receipt')}</th></tr></thead>
               <tbody>
                  ${MONTHS.map(m => {
                    let amt = (state.masika[state.dashYear] && state.masika[state.dashYear][String(id)] ? state.masika[state.dashYear][String(id)][m] : 0) || (state.masika[state.dashYear] && state.masika[state.dashYear][Number(id)] ? state.masika[state.dashYear][Number(id)][m] : 0) || 0;
                    return `<tr>
                      <td>${tM(m)}</td>
                      <td style="font-weight:600; color:${amt>0?'var(--success)':'var(--text-muted)'}">${amt>0 ? '₹'+amt : '-'}</td>
                      <td>${amt>0 ? `<button class="btn btn-ghost btn-sm" onclick="generateReceipt('${id}', 'masika', '${m}', ${amt})">🧾</button>` : ''}</td>
                    </tr>`;
                  }).join('')}
               </tbody>
               <tfoot>
                 <tr>
                   <td><strong>ସମୁଦାୟ (Total)</strong></td>
                   <td style="font-weight:700; color:var(--success);">
                     ₹${MONTHS.reduce((sum, m) => sum + ((state.masika[state.dashYear] && state.masika[state.dashYear][String(id)] ? state.masika[state.dashYear][String(id)][m] : 0) || (state.masika[state.dashYear] && state.masika[state.dashYear][Number(id)] ? state.masika[state.dashYear][Number(id)][m] : 0) || 0), 0).toLocaleString('en-IN')}
                   </td>
                   <td></td>
                 </tr>
               </tfoot>
             </table>
           </div>
         </div>

      </div>
    </div>
  `;
  document.getElementById('dashboard-content').innerHTML = html;

  // Generate QR code
  setTimeout(() => {
    const qrContainer = document.getElementById(`qrcode-${id}`);
    if (qrContainer && window.QRCode) {
      new QRCode(qrContainer, {
        text: `Bhakta: ${d.name}, Sl: ${d.sl_no}`,
        width: 46, height: 46
      });
    }
  }, 100);
}

function switchDashTab(tabId, btnElement) {
  document.querySelectorAll('.tab-btn').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
  btnElement.classList.add('active');
  const target = document.getElementById(`tab-${tabId}`);
  if (target) target.classList.add('active');
}

function switchDashYear(devoteeId, yr) {
  state.dashYear = yr;
  openDashboard(devoteeId);
}

function renderHistoryTable(type, devoteeId) {
  const records = (state[type] || []).filter(r => r.devotee_id === devoteeId);
  if(records.length === 0) return `<p class="text-muted text-center" style="padding:2rem;">କୌଣସି ରେକର୍ଡ ନାହିଁ (No records found)</p>`;
  
  return `
     <table class="data-table">
        <thead><tr><th>ତାରିଖ (Date)</th><th>${t('amount')}</th><th>${t('notes')}</th><th>ଆକ୍ସନ୍</th></tr></thead>
        <tbody>
          ${records.map(r => `<tr>
            <td>${new Date(r.date).toLocaleDateString()}</td>
            <td class="text-success" style="font-weight:600;">₹${r.amount}</td>
            <td>${r.note || '-'}</td>
            <td style="display:flex; gap:0.5rem;">
              <button class="btn btn-ghost btn-sm" title="Receipt" onclick="generateReceipt('${devoteeId}', '${type}', '${r.date}', ${r.amount}, '${r.note}')">🧾</button>
              ${state.isAdmin ? `
                <button class="btn btn-ghost btn-sm admin-only" title="Edit" style="color:var(--accent);" onclick="editTransaction('${r.id}', '${type}', '${devoteeId}')">✏️</button>
                <button class="btn btn-ghost btn-sm admin-only" title="Delete" style="color:var(--danger);" onclick="deleteTransaction('${r.id}', '${type}', '${devoteeId}')">🗑️</button>
              ` : ''}
            </td>
          </tr>`).join('')}
        </tbody>
    </table>
  `;
}

let editingTransaction = null;

function editTransaction(txId, type, devoteeId) {
  editingTransaction = { id: txId, type, devoteeId };
  
  if (type === 'masika') {
    const yr = txId.substring(0, 7); // e.g., '2024-25'
    const m = txId.substring(8); // e.g., 'aug'
    const amt = (state.masika[yr] && state.masika[yr][devoteeId]) ? state.masika[yr][devoteeId][m] : 0;
    
    document.getElementById('pay-dash-type').value = 'masika';
    document.getElementById('pay-dash-year').value = yr;
    document.getElementById('pay-dash-month').value = m;
    document.getElementById('pay-dash-amount').value = amt;
    document.getElementById('pay-dash-note').value = '';
    
    document.getElementById('pay-dash-type').disabled = true;
    document.getElementById('pay-dash-year').disabled = true;
    document.getElementById('pay-dash-month').disabled = true;
    
    openDashPaymentModal('masika');
  } else if (type === 'pada') {
    const record = state.pada.find(r => String(r.id) === String(txId));
    if (!record) return;
    
    document.getElementById('pay-dash-type').value = 'pada';
    document.getElementById('pay-dash-amount').value = record.amount;
    document.getElementById('pay-dash-note').value = record.note || '';
    
    document.getElementById('pay-dash-type').disabled = true;
    
    openDashPaymentModal('pada');
  }
}

async function deleteTransaction(txId, type, devoteeId) {
  if (!confirm("Are you sure you want to delete this transaction? This cannot be undone.")) return;
  
  if (supabaseClient) {
    let table = type === 'nirmana' ? 'nirmana_records' : 'pada_records';
    if (type === 'palia') table = 'palia_records';
    const { error } = await supabaseClient.from(table).delete().eq('id', txId);
    if (error) {
      showToast("Error deleting from database: " + error.message, "error");
      return;
    }
  }

  state[type] = state[type].filter(r => String(r.id) !== String(txId));
  saveData();
  showToast("Transaction deleted successfully", "info");
  
  if (type === 'palia') {
    renderPaliaList();
  } else if (devoteeId) {
    openDashboard(devoteeId);
  } else if (type === 'pada') {
    renderPadaList();
  }
}

function uploadAvatar(event, id) {
  const file = event.target.files[0];
  if(!file) return;

  const targetDev = state.devotees.find(d => String(d.id) === String(id));
  if (!targetDev) {
    showToast("Devotee not found", "error");
    return;
  }

  showToast("ଫଟୋ ପ୍ରକ୍ରିୟାକରଣ ଚାଲିଛି...", "info");

  const reader = new FileReader();
  reader.onload = function(e) {
    const img = new Image();
    img.onload = async function() {
      // Resize avatar to max 250px and JPEG 0.65 for high crispness & small payload (~20KB)
      const MAX_SIZE = 250;
      let width = img.width;
      let height = img.height;
      
      if (width > height && width > MAX_SIZE) {
        height = Math.round(height * (MAX_SIZE / width));
        width = MAX_SIZE;
      } else if (height > MAX_SIZE) {
        width = Math.round(width * (MAX_SIZE / height));
        height = MAX_SIZE;
      }
      
      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, width, height);
      
      const compressedBase64 = canvas.toDataURL('image/jpeg', 0.65);
      const updaterName = state.currentUser ? state.currentUser.name : 'User';

      if (supabaseClient) {
        const { error: sbErr } = await supabaseClient.from('devotees').update({
          avatar: compressedBase64,
          updated_at: new Date().toISOString(),
          updated_by: updaterName
        }).eq('id', targetDev.id);

        if (sbErr) {
          console.error("Supabase avatar update error:", sbErr);
          showToast("Database error: " + sbErr.message, "error");
          return;
        }
      }

      const idx = state.devotees.findIndex(d => String(d.id) === String(id));
      if(idx > -1) {
        state.devotees[idx].avatar = compressedBase64;
      }
      
      try { saveData(); } catch(err) { console.warn("Local storage update skipped", err); }

      const dashImg = document.getElementById('dash-avatar-img');
      if (dashImg) dashImg.src = compressedBase64;
      
      const idImg = document.querySelector(`#id-card-${id} .id-photo`);
      if (idImg) idImg.src = compressedBase64;

      showToast("ପ୍ରୋଫାଇଲ୍ ଫଟୋ ଡାଟାବେସ୍ ରେ ସଂରକ୍ଷିତ ହେଲା! ✅", "success");
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

// ==========================================
// 9. PAYMENT ENTRY & RECEIPTS
// ==========================================
function openDashPaymentModal(type) {
  document.getElementById('pay-dash-devotee').value = state.activeBhaktaId;
  document.getElementById('pay-dash-type').value = type;
  document.getElementById('pay-dash-amount').value = '';
  document.getElementById('pay-dash-note').value = '';

  const isMasika = type === 'masika';
  document.getElementById('pay-dash-year-grp').style.display = isMasika ? 'block' : 'none';
  document.getElementById('pay-dash-month-grp').style.display = isMasika ? 'block' : 'none';
  document.getElementById('pay-dash-note-grp').style.display = isMasika ? 'none' : 'block';

  if(isMasika) {
    document.getElementById('pay-dash-year').innerHTML = YEARS.map(y => `<option value="${y}" ${y === state.dashYear ? 'selected' : ''}>${y}</option>`).join('');
    document.getElementById('pay-dash-month').innerHTML = MONTHS.map(m => `<option value="${m}">${tM(m)}</option>`).join('');
  }
  
  openModal('modal-payment-dash');
}

async function saveDashboardPayment(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  if (btn) { if (btn.disabled) return; btn.disabled = true; }
  const id = document.getElementById('pay-dash-devotee').value;
  const type = document.getElementById('pay-dash-type').value;
  const amt = Number(document.getElementById('pay-dash-amount').value);
  const note = document.getElementById('pay-dash-note').value;
  
  if(!amt || amt <= 0) { alert('Enter valid amount'); return; }

  let refPeriod = '';

  const updaterName = state.currentUser ? state.currentUser.name : 'Admin';
  const now = new Date().toISOString();

  try {
    if(type === 'masika') {
      const yr = document.getElementById('pay-dash-year').value || state.dashYear;
      const m = document.getElementById('pay-dash-month').value;
      refPeriod = `${tM(m)} (${yr})`;
      
      if (supabaseClient) {
        const { error } = await supabaseClient.from('masika_records').upsert({
          devotee_id: id,
          financial_year: yr,
          month: m,
          amount: amt,
          updated_at: now,
          updated_by: updaterName
        }, { onConflict: 'devotee_id,financial_year,month' });
        if(error) throw error;
      }
      if(!state.masika[yr]) state.masika[yr] = {};
      if(!state.masika[yr][id]) state.masika[yr][id] = {};
      state.masika[yr][id][m] = amt;

      if(!state.masika_meta[yr]) state.masika_meta[yr] = {};
      if(!state.masika_meta[yr][id]) state.masika_meta[yr][id] = {};
      state.masika_meta[yr][id][m] = { updated_at: now, updated_by: updaterName };

      state.dashYear = yr;
    } else if(type === 'pada') {
      refPeriod = now;
      let newId = Date.now().toString();
      
      if (supabaseClient) {
        const { data: pData, error } = await supabaseClient.from('pada_records').insert({
          devotee_id: id,
          amount: amt,
          note: note,
          updated_at: now,
          updated_by: updaterName
        }).select().single();
        if(error) throw error;
        if(pData) newId = pData.id;
      }
      state.pada.unshift({
        id: newId,
        devotee_id: id,
        amount: amt,
        date: now,
        note: note,
        updated_at: now,
        updated_by: updaterName
      });
    }
  } catch(error) {
    if (btn) btn.disabled = false;
    showToast("Database Error: " + error.message, "error");
    return;
  }

  if (btn) btn.disabled = false;
  saveData();
  closeModal('modal-payment-dash');
  showToast("ପ୍ରଣାମୀ ସଫଳତାର ସହ ଗ୍ରହଣ କରାଗଲା", "success");
  
  // Show receipt modal & refresh
  generateReceipt(id, type, refPeriod, amt, note);
  openDashboard(id);
}

function generateReceipt(devoteeId, type, refDateOrMonth, amount, note="") {
  const d = state.devotees.find(x => x.id === devoteeId);
  if (!d) return;
  
  const title = type === 'masika' ? t('masikaPranami') : type === 'nirmana' ? t('nirmanaPranami') : t('padaPranami');
  const dname = state.lang === 'or' ? d.name : (d.name_en || d.name);
  let refText = type === 'masika' ? `ମାସ: ${tM(refDateOrMonth)} (${state.currentYear})` : `ତାରିଖ: ${new Date(refDateOrMonth).toLocaleDateString()}`;

  document.getElementById('unified-receipt-area').innerHTML = `
    <div class="receipt-header">
      <h2 style="margin:0; font-family: var(--font-odia); color: #b45309;">ସୋର ଟାଉନ ସାରସ୍ୱତ ଶାଖା ସଂଘ</h2>
      <p style="margin:4px 0 0; font-size:0.8rem; color: #52525b;">ଜୟଗୁରୁ ପ୍ରଣାମୀ ରସିଦ - ${title}</p>
    </div>
    <div class="receipt-body">
      <p><strong>ଭକ୍ତଙ୍କ ନାମ:</strong> ${dname} (Sl No: ${d.sl_no})</p>
      <p><strong>${refText}</strong></p>
      ${note ? `<p><strong>ବିବରଣୀ:</strong> ${note}</p>` : ''}
      <div style="margin-top:1.5rem; background:#fef3c7; padding:1rem; text-align:center; border: 1px dashed #d97706; border-radius: 4px;">
        <h3 style="margin:0; color:#b45309;">ପ୍ରାପ୍ତ ରାଶି: ₹${amount.toLocaleString('en-IN')}</h3>
      </div>
    </div>
    <div class="receipt-footer">
       <div>
         <p style="margin:0; font-size:0.7rem;">ରସିଦ ନଂ: RCP-${Date.now().toString().slice(-6)}</p>
       </div>
       <div class="signature-box">
         ଆଦାୟକାରୀ ସ୍ୱାକ୍ଷର
       </div>
    </div>
  `;
  openModal('modal-receipt-unified');
}

function shareUnifiedReceiptWhatsApp() {
  triggerHaptic('medium');
  const receiptArea = document.getElementById('unified-receipt-area');
  if (!receiptArea) return;
  
  // Extract clean structured information
  const el1 = receiptArea.querySelector('.receipt-body p:nth-child(1)');
  const el2 = receiptArea.querySelector('.receipt-body p:nth-child(2)');
  const el3 = receiptArea.querySelector('.receipt-body h3');
  const el4 = receiptArea.querySelector('.receipt-body p:nth-child(3)');
  const dName = el1 ? el1.innerText : '';
  const refInfo = el2 ? el2.innerText : '';
  const amtInfo = el3 ? el3.innerText : '';
  const noteInfo = el4 ? el4.innerText : '';
  
  let msg = `🙏 *ଜୟଗୁରୁ (JAYAGURU)* 🙏\n`;
  msg += `🏛️ *ସୋର ଟାଉନ ସାରସ୍ୱତ ଶାଖା ସଂଘ*\n`;
  msg += `📜 *ପ୍ରଣାମୀ ରସିଦ (Pranami Digital Receipt)*\n`;
  msg += `--------------------------------\n`;
  if (dName) msg += `👤 ${dName}\n`;
  if (refInfo) msg += `📅 ${refInfo}\n`;
  if (amtInfo) msg += `💰 *${amtInfo}*\n`;
  if (noteInfo && !noteInfo.includes('ଜୟଗୁରୁ')) msg += `📝 ${noteInfo}\n`;
  msg += `--------------------------------\n`;
  msg += `🌐 *ଆଶ୍ରମ ପୋର୍ଟାଲ:* ${window.location.origin + window.location.pathname}\n`;
  msg += `✨ _ଶ୍ରୀ ଶ୍ରୀ ଠାକୁରଙ୍କ ଚରଣେ ପ୍ରଣାମ_ ✨`;

  const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
}

// ==========================================
// 10. LEDGER (Master Table View)
// ==========================================
function renderLedgerTable() {
  const tabs = document.getElementById('year-tabs');
  if (tabs) {
    tabs.innerHTML = YEARS.map(y => `
      <button class="btn btn-sm ${y === state.currentYear ? 'btn-primary' : 'btn-secondary'}" onclick="switchFinancialYear('${y}')">${y}</button>
    `).join(' ');
  }

  const thead = document.getElementById('ledger-head');
  const tbody = document.getElementById('ledger-body');
  const tfoot = document.getElementById('ledger-foot');
  if (!thead || !tbody || !tfoot) return;

  thead.innerHTML = `
    <tr>
      <th>Sl</th>
      <th>ନାମ (Name)</th>
      ${MONTHS.map(m => `<th>${tM(m)}</th>`).join('')}
      <th>Total</th>
    </tr>
  `;

  const ledgerSearch = document.getElementById('ledger-search');
  const q = (ledgerSearch ? ledgerSearch.value || '' : '').toLowerCase();
  const currentFyStart = parseInt(state.currentYear.split('-')[0]);
  
  let devs = (state.devotees || []).filter(d => {
    if (!d.is_masika_active) return false;
    const devJoinedStart = parseInt((d.joined_year || '2023-24').split('-')[0]);
    if (devJoinedStart > currentFyStart) return false; // Joined after this financial year
    return (d.name || '').toLowerCase().includes(q) || ((d.name_en || '').toLowerCase().includes(q)) || String(d.sl_no).includes(q);
  });

  let colTotals = {};
  MONTHS.forEach(m => colTotals[m] = 0);
  let grandTotal = 0;

  tbody.innerHTML = devs.map(d => {
    let rowTotal = 0;
    const devJoinedStart = parseInt((d.joined_year || '2023-24').split('-')[0]);
    const isJoiningYear = devJoinedStart === currentFyStart;
    const startMonthKey = d.masika_start_month || 'apr';
    const startMonthIdx = MONTHS.indexOf(startMonthKey) !== -1 ? MONTHS.indexOf(startMonthKey) : 0;

    let monthCells = MONTHS.map((m, mIdx) => {
      let val = (state.masika[state.currentYear]?.[String(d.id)]?.[m]) || (state.masika[state.currentYear]?.[Number(d.id)]?.[m]) || 0;
      let meta = state.masika_meta?.[state.currentYear]?.[String(d.id)]?.[m] || state.masika_meta?.[state.currentYear]?.[Number(d.id)]?.[m];
      rowTotal += val;
      colTotals[m] += val;
      const tooltip = getAuditTooltip(meta?.updated_at, meta?.updated_by);
      
      const isBeforeStartMonth = isJoiningYear && (mIdx < startMonthIdx);
      if (isBeforeStartMonth && val === 0) {
        return `
          <td style="background: rgba(255,255,255,0.02); text-align: center;" title="Joined in ${tM(startMonthKey)}">
            <span style="opacity: 0.35; font-size: 0.8rem; font-weight: 500; color: var(--text-muted);">N/A</span>
          </td>
        `;
      }

      return `
        <td class="${state.isAdmin ? 'cell-editable' : ''}" ${state.isAdmin ? `onclick="editCellAmount('${d.id}', '${m}', ${val})"` : ''} title="${tooltip}">
          <span class="cell-val">${val > 0 ? '₹' + val : '-'}</span>
        </td>
      `;
    }).join('');
    grandTotal += rowTotal;

    return `
      <tr title="${getAuditTooltip(d.updated_at, d.updated_by)}">
        <td>${d.sl_no}</td>
        <td style="font-weight:600; text-align:left; cursor:pointer;" onclick="openDashboard('${d.id}')">${state.lang === 'or' ? d.name : (d.name_en || d.name)}</td>
        ${monthCells}
        <td style="font-weight:700; color:var(--success);">₹${rowTotal.toLocaleString('en-IN')}</td>
      </tr>
    `;
  }).join('');

  tfoot.innerHTML = `
    <tr>
      <td colspan="2"><strong>ସମୁଦାୟ (Grand Total)</strong></td>
      ${MONTHS.map(m => `<td><strong>₹${colTotals[m].toLocaleString('en-IN')}</strong></td>`).join('')}
      <td><strong>₹${grandTotal.toLocaleString('en-IN')}</strong></td>
    </tr>
  `;
}

function switchFinancialYear(yr) {
  state.currentYear = yr;
  renderLedgerTable();
}

async function editCellAmount(devoteeId, month, currentVal) {
  if (!state.isAdmin) return;
  const input = prompt(`ମାସିକ ପ୍ରଣାମୀ ସଂଶୋଧନ (${tM(month)} - ${state.currentYear}):`, currentVal || 0);
  if (input === null) return;
  const amt = Number(input);
  if (isNaN(amt) || amt < 0) { alert('Please enter a valid amount'); return; }

  const updaterName = state.currentUser ? state.currentUser.name : 'Admin';
  const now = new Date().toISOString();

  try {
    if (supabaseClient) {
      const { error } = await supabaseClient.from('masika_records').upsert({
        devotee_id: String(devoteeId),
        financial_year: state.currentYear,
        month: month,
        amount: amt,
        updated_at: now,
        updated_by: updaterName
      }, { onConflict: 'devotee_id,financial_year,month' });
      if(error) throw error;
    }

    if(!state.masika[state.currentYear]) state.masika[state.currentYear] = {};
    if(!state.masika[state.currentYear][String(devoteeId)]) state.masika[state.currentYear][String(devoteeId)] = {};
    state.masika[state.currentYear][String(devoteeId)][month] = amt;

    if(!state.masika_meta[state.currentYear]) state.masika_meta[state.currentYear] = {};
    if(!state.masika_meta[state.currentYear][String(devoteeId)]) state.masika_meta[state.currentYear][String(devoteeId)] = {};
    state.masika_meta[state.currentYear][String(devoteeId)][month] = {
      updated_at: now,
      updated_by: updaterName
    };

    saveData();
    renderLedgerTable();
    updateHomeStats();
    showToast("ପ୍ରଣାମୀ ତାଲିକା ଅପଡେଟ୍ ହେଲା!", "success");
  } catch(e) {
    alert("Error updating: " + e.message);
  }
}

function exportToCSV() {
  let csv = `Sl,Name,${MONTHS.map(m => tM(m)).join(',')},Total\n`;
  (state.devotees || []).forEach(d => {
    let rowTotal = 0;
    let rowVals = MONTHS.map(m => {
      let v = (state.masika[state.currentYear] && state.masika[state.currentYear][String(d.id)] ? state.masika[state.currentYear][String(d.id)][m] : 0) || (state.masika[state.currentYear] && state.masika[state.currentYear][Number(d.id)] ? state.masika[state.currentYear][Number(d.id)][m] : 0) || 0;
      rowTotal += v;
      return v;
    });
    csv += `"${d.sl_no}","${d.name}",${rowVals.join(',')},"${rowTotal}"\n`;
  });

  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `Pranami_Register_${state.currentYear}.csv`;
  a.click();
}

function printLedger() {
  window.print();
}

// ==========================================
// 11. GALLERY
// ==========================================
function openLightbox(url, title) {
  const modal = document.getElementById('gallery-lightbox');
  const img = document.getElementById('lightbox-image');
  const caption = document.getElementById('lightbox-caption');
  if (modal && img) {
    img.src = url;
    if (caption) caption.innerText = title || '';
    modal.classList.add('active');
  }
}

function closeLightbox(e) {
  if (e.target.id === 'gallery-lightbox' || e.target.classList.contains('lightbox-close-btn')) {
    closeLightboxDirect();
  }
}

function closeLightboxDirect() {
  const modal = document.getElementById('gallery-lightbox');
  if (modal) modal.classList.remove('active');
}

function renderGallery(filter = 'all') {
  document.querySelectorAll('#gallery-filters .filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.filter === filter);
  });

  const grid = document.getElementById('gallery-grid');
  if (!grid) return;

  const catNames = {
    vigraha: 'ଶ୍ରୀ ବିଗ୍ରହ',
    nirmana: 'ନିର୍ମାଣ କାର୍ଯ୍ୟ',
    puja: 'ପୂଜା ଓ ଉତ୍ସବ',
    all: 'ଆଶ୍ରମ ଫଟୋ'
  };

  let items = (state.gallery || []).filter(x => x && (x.url || x.image_url) && (x.url !== 'undefined' && x.image_url !== 'undefined'));
  if (filter !== 'all') {
    items = items.filter(x => x.category === filter);
  }

  if (items.length === 0) {
    grid.innerHTML = `
      <div class="card text-center" style="grid-column: 1/-1; padding: 3rem 1rem; color:var(--text-muted); background:var(--bg-secondary); border-radius:var(--radius-lg);">
        <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">🖼️</div>
        <p style="margin:0; font-size:1.05rem; font-weight:600; color:var(--text-primary);">କୌଣସି ଫଟୋ ନାହିଁ</p>
        <p style="margin:0.25rem 0 0; font-size:0.85rem;">(No photos found in this album. Tap + to upload)</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = items.map(x => {
    const photoUrl = x.url || x.image_url || '';
    const photoTitle = (x.title && x.title !== 'undefined') ? x.title : (catNames[x.category] || 'ଆଶ୍ରମ ଫଟୋ');
    
    return `
      <div class="gallery-item" onclick="openLightbox('${photoUrl}', '${photoTitle.replace(/'/g, "\\'")}')">
         <img src="${photoUrl}" class="gallery-img" loading="lazy" alt="${photoTitle}" onerror="this.parentElement.style.display='none'" />
         <div class="gallery-overlay">${photoTitle}</div>
         ${state.isAdmin ? `
           <button class="btn btn-danger btn-sm" style="position: absolute; top: 8px; right: 8px; padding: 4px 8px; font-size: 13px; z-index: 10; box-shadow: 0 2px 8px rgba(0,0,0,0.5);" onclick="event.stopPropagation(); deletePhoto('${x.id}')" title="Delete Photo">🗑️</button>
         ` : ''}
      </div>
    `;
  }).join('');
}

async function deletePhoto(id) {
  if (!confirm("Are you sure you want to delete this photo?")) return;
  
  if (supabaseClient) {
    const { error } = await supabaseClient.from('gallery').delete().eq('id', id);
    if (error) {
      console.error('Error deleting photo:', error);
      showToast("Error deleting photo: " + error.message, "error");
      return;
    }
  }
  
  state.gallery = state.gallery.filter(x => String(x.id) !== String(id));
  
  try {
    saveData();
  } catch (err) {
    console.warn('Local storage quota exceeded, skipping local cache update.');
  }
  
  renderGallery();
  showToast("Photo deleted successfully", "info");
}

function openPhotoUploadModal() { 
  if (!state.isAdmin) {
    showToast("Access Denied: Admin only", "error");
    return;
  }
  openModal('modal-photo-upload'); 
}

async function handlePhotoUpload(e) {
  e.preventDefault();
  const file = document.getElementById('upload-file').files[0];
  const cat = document.getElementById('upload-category').value;
  const title = document.getElementById('upload-title').value;

  if(!file) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    const img = new Image();
    img.onload = async function() {
      // Ultra-compression for 1GB storage limit: Resize to max 600px width/height
      const MAX_SIZE = 600;
      let width = img.width;
      let height = img.height;
      
      if (width > height && width > MAX_SIZE) {
        height *= MAX_SIZE / width;
        width = MAX_SIZE;
      } else if (height > MAX_SIZE) {
        width *= MAX_SIZE / height;
        height = MAX_SIZE;
      }
      
      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, width, height);
      
      // Compress to JPEG 60% quality to keep base64 string extremely small (approx 50-80KB)
      const compressedBase64 = canvas.toDataURL('image/jpeg', 0.6);

      let photoId = Date.now().toString();
      
      if (supabaseClient) {
        const { data: gData, error } = await supabaseClient.from('gallery').insert({
          category: cat,
          title: title || (cat === 'vigraha' ? 'ଶ୍ରୀ ବିଗ୍ରହ' : (cat === 'nirmana' ? 'ନିର୍ମାଣ କାର୍ଯ୍ୟ' : (cat === 'puja' ? 'ପୂଜା ଓ ଉତ୍ସବ' : 'ଆଶ୍ରମ ଫଟୋ'))),
          url: compressedBase64
        }).select().single();
        if (error) {
          console.error('Supabase upload error:', error);
          showToast("Database error: " + error.message, "error");
        }
        if (gData) {
          photoId = gData.id;
        }
      }

      const photoData = {
        id: photoId,
        category: cat,
        title: title || (cat === 'vigraha' ? 'ଶ୍ରୀ ବିଗ୍ରହ' : (cat === 'nirmana' ? 'ନିର୍ମାଣ କାର୍ଯ୍ୟ' : (cat === 'puja' ? 'ପୂଜା ଓ ଉତ୍ସବ' : 'ଆଶ୍ରମ ଫଟୋ'))),
        url: compressedBase64,
        date: new Date().toISOString()
      };

      state.gallery.unshift(photoData);
      try {
        saveData();
      } catch (err) {
        console.warn('Local storage quota exceeded, skipping local cache update.');
      }
      
      closeModal('modal-photo-upload');
      renderGallery(cat);
      showToast("ଫଟୋ ଅପଲୋଡ୍ ସଫଳ!", "success");
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

// ==========================================
// 12. UTILS & MODAL CONTROLS
// ==========================================
function openModal(id) {
  triggerHaptic('light');
  const el = document.getElementById(id);
  if (el) {
    el.classList.add('active');
    // Enable click on backdrop to close bottom sheet
    el.onclick = (e) => {
      if (e.target === el) closeModal(id);
    };
  }
}

function closeModal(id) {
  triggerHaptic('light');
  const el = document.getElementById(id);
  if (el) el.classList.remove('active');
}

// Native Haptic Vibration Feedback
function triggerHaptic(type = 'light') {
  if (navigator.vibrate) {
    try {
      if (type === 'light') navigator.vibrate(15);
      else if (type === 'medium') navigator.vibrate(30);
      else if (type === 'success') navigator.vibrate([15, 30, 25]);
      else if (type === 'error') navigator.vibrate([40, 40, 40]);
    } catch (e) {}
  }
}

function showToast(msg, type='info') {
  triggerHaptic(type === 'error' ? 'error' : 'success');
  const container = document.getElementById('toast-container');
  if (!container) return;
  const t = document.createElement('div');
  t.className = `toast ${type}`;
  t.innerText = msg;
  container.appendChild(t);
  setTimeout(() => t.remove(), 3000);
}

function printElement(elemId) {
  const elem = document.getElementById(elemId);
  const content = elem ? elem.innerHTML : '';
  const wrap = document.getElementById('print-area-wrapper');
  if (content && wrap) {
    wrap.innerHTML = content;
    window.print();
    wrap.innerHTML = '';
  }
}

function openDbSettingsModal() {
  document.getElementById('sb-url-input').value = localStorage.getItem('sbUrl') || 'https://eptkhzhmnmzoowlosgsc.supabase.co';
  document.getElementById('sb-key-input').value = localStorage.getItem('sbKey') || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVwdGtoemhtbm16b293bG9zZ3NjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY3ODY1NDEsImV4cCI6MjEwMjM2MjU0MX0._twC2T9s-7g2oFtfRiphwsocignB66c8r_3JghAjkV4';
  openModal('modal-db-settings');
}

async function testSupabaseConnection() {
  const url = document.getElementById('sb-url-input').value;
  const key = document.getElementById('sb-key-input').value;
  if(!url || !key) {
    alert("Please enter both URL and Key.");
    return;
  }
  
  try {
    const tempClient = window.supabase.createClient(url, key);
    const { data, error } = await tempClient.from('devotees').select('id').limit(1);
    if(error) throw error;
    alert("✅ Connection Successful to Supabase!");
  } catch(e) {
    alert("❌ Connection Failed: " + e.message);
  }
}

function saveDbSettings(e) {
  if(e) e.preventDefault();
  const url = document.getElementById('sb-url-input').value;
  const key = document.getElementById('sb-key-input').value;
  localStorage.setItem('sbUrl', url);
  localStorage.setItem('sbKey', key);
  initSupabase();
  closeModal('modal-db-settings');
  if(supabaseClient) loadData();
}

// ==========================================
// PADA PRANAMI GLOBAL
// ==========================================
function renderPadaList() {
  const container = document.getElementById('pada-content');
  if (!container) return;

  const records = state.pada || [];
  let totalPada = records.reduce((sum, r) => sum + (Number(r.amount) || 0), 0);

  let html = `
    <div class="pada-container">
      <!-- Executive Summary -->
      <div class="ledger-summary-strip">
        <div class="ledger-stat-card">
          <div class="ledger-stat-icon" style="background: rgba(16, 185, 129, 0.15); color: #10b981;">🙏</div>
          <div>
            <div class="ledger-stat-val" style="color: #10b981;">₹${totalPada.toLocaleString('en-IN')}</div>
            <div class="ledger-stat-lbl">ସମୁଦାୟ ପାଦ ପ୍ରଣାମୀ ସଂଗ୍ରହ</div>
          </div>
        </div>
        <div class="ledger-stat-card">
          <div class="ledger-stat-icon">📝</div>
          <div>
            <div class="ledger-stat-val">${records.length} ଟି</div>
            <div class="ledger-stat-lbl">ମୋଟ ଦାଖଲ ରେକର୍ଡ</div>
          </div>
        </div>
      </div>

      <!-- Pada Cards Grid -->
      ${records.length === 0 ? `
        <div class="card text-center" style="padding:3rem 1rem; color:var(--text-muted); background:var(--bg-secondary); border-radius:var(--radius-lg);">
          <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">🙏</div>
          <p style="margin:0; font-size:1.05rem; font-weight:600; color:var(--text-primary);">କୌଣସି ପାଦ ପ୍ରଣାମୀ ରେକର୍ଡ ନାହିଁ</p>
          <p style="margin:0.25rem 0 0; font-size:0.85rem;">(No Pada Pranami records found. Tap + to add)</p>
        </div>
      ` : `
        <div class="pada-cards-grid">
          ${records.map(r => {
            const d = new Date(r.date);
            const dateStr = `${d.getDate()}-${d.toLocaleString('en-US', { month: 'short' })}-${d.getFullYear()}`;
            return `
              <div class="pada-card" title="${getAuditTooltip(r.updated_at, r.updated_by)}">
                <div class="pada-card-header">
                  <div class="pada-date-tag">
                    <span>📅</span>
                    <span>${dateStr}</span>
                  </div>
                  <div class="pada-amount-badge">
                    ₹${Number(r.amount).toLocaleString('en-IN')}
                  </div>
                </div>
                ${r.note ? `
                  <div class="donor-contact-info">
                    <span>📝 <strong>ବିବରଣୀ:</strong> ${r.note}</span>
                  </div>
                ` : `
                  <div style="font-size:0.82rem; color:var(--text-muted);">
                    ✨ ଶ୍ରୀ ଶ୍ରୀ ଠାକୁରଙ୍କ ଶ୍ରୀଚରଣେ ପାଦ ପ୍ରଣାମୀ
                  </div>
                `}
                <div class="pada-card-footer">
                  <span style="font-size:0.75rem; color:var(--text-muted);">
                    ${r.updated_by ? `ଦାଖଲକାରୀ: ${r.updated_by}` : 'ଆଶ୍ରମ ରେକର୍ଡ'}
                  </span>
                  <button class="btn btn-ghost btn-sm" style="color:var(--danger);" onclick="deleteTransaction('${r.id}', 'pada')" title="ଡିଲିଟ୍">
                    🗑️
                  </button>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      `}
    </div>
  `;
  container.innerHTML = html;
}

function openPadaGlobalModal() {
  document.getElementById('pada-global-amount').value = '';
  document.getElementById('pada-global-date').value = new Date().toISOString().split('T')[0];
  document.getElementById('pada-global-note').value = '';
  
  openModal('modal-pada-global');
}

async function savePadaGlobal(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  if (btn) { if (btn.disabled) return; btn.disabled = true; }

  const devoteeId = null; // Set to null for collective collection to avoid foreign key constraint
  const amount = Number(document.getElementById('pada-global-amount').value);
  const date = document.getElementById('pada-global-date').value;
  const note = document.getElementById('pada-global-note').value;
  const updaterName = state.currentUser ? state.currentUser.name : 'Admin';
  const now = new Date().toISOString();

  let newId = Date.now().toString();

  if (supabaseClient) {
    const { data, error } = await supabaseClient.from('pada_records').insert({
      devotee_id: devoteeId,
      amount: amount,
      paid_date: date,
      note: note,
      updated_at: now,
      updated_by: updaterName
    }).select().single();
    
    if (error) {
      if (btn) btn.disabled = false;
      showToast("Database error: " + error.message, "error");
      return;
    }
    if (data) newId = data.id;
  }

  state.pada.unshift({
    id: newId,
    devotee_id: devoteeId,
    amount: amount,
    date: date,
    note: note,
    updated_at: now,
    updated_by: updaterName
  });

  if (btn) btn.disabled = false;
  saveData();
  closeModal('modal-pada-global');
  showToast("ପାଦ ପ୍ରଣାମୀ ସଫଳତାର ସହ ଯୋଡାଗଲା", "success");
  
  renderPadaList();
  renderExpenses(); // Update kharcha stats
}

// ==========================================
// 11b. PUJA PALI
// ==========================================
let paliFilterMonth = 'all';

function filterPaliMonth(m) {
  paliFilterMonth = m;
  renderPaliaList();
}

function renderPaliaList() {
  const container = document.getElementById('palia-content');
  if (!container) return;

  const today = new Date();
  today.setHours(0,0,0,0);
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  let records = [...(state.palia || [])].sort((a, b) => new Date(a.pali_date) - new Date(b.pali_date));

  // Filter if selected
  if (paliFilterMonth !== 'all') {
    records = records.filter(r => {
      const d = new Date(r.pali_date);
      return d.getMonth() === parseInt(paliFilterMonth);
    });
  }

  const odiaMonths = ["ଜାନୁଆରୀ", "ଫେବୃଆରୀ", "ମାର୍ଚ୍ଚ", "ଏପ୍ରିଲ", "ମେ", "ଜୁନ", "ଜୁଲାଇ", "ଅଗଷ୍ଟ", "ସେପ୍ଟେମ୍ବର", "ଅକ୍ଟୋବର", "ନଭେମ୍ବର", "ଡିସେମ୍ବର"];
  const odiaWeekdays = ["ରବିବାର", "ସୋମବାର", "ମଙ୍ଗଳବାର", "ବୁଧବାର", "ଗୁରୁବାର", "ଶୁକ୍ରବାର", "ଶନିବାର"];

  let html = `
    <div class="pali-container">
      <!-- Month Filters -->
      <div class="pali-filter-bar">
        <button class="filter-btn ${paliFilterMonth === 'all' ? 'active' : ''}" onclick="filterPaliMonth('all')">
          ସବୁ ମାସ (All)
        </button>
        ${odiaMonths.map((mName, idx) => `
          <button class="filter-btn ${paliFilterMonth === String(idx) ? 'active' : ''}" onclick="filterPaliMonth('${idx}')">
            ${mName}
          </button>
        `).join('')}
      </div>

      <!-- Pali Cards Grid -->
      ${records.length === 0 ? `
        <div class="card text-center" style="padding:3rem 1rem; color:var(--text-muted); background:var(--bg-secondary); border-radius:var(--radius-lg);">
          <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">🌺</div>
          <p style="margin:0; font-size:1.05rem; font-weight:600; color:var(--text-primary);">କୌଣସି ପାଳି ରେକର୍ଡ ନାହିଁ</p>
          <p style="margin:0.25rem 0 0; font-size:0.85rem;">(No Puja Pali scheduled for this filter)</p>
        </div>
      ` : `
        <div class="pali-cards-grid">
          ${records.map(r => {
            const d = new Date(r.pali_date);
            const dateMidnight = new Date(d);
            dateMidnight.setHours(0,0,0,0);
            
            const isToday = dateMidnight.getTime() === today.getTime();
            const isUpcoming = dateMidnight.getTime() >= today.getTime() && dateMidnight.getTime() <= tomorrow.getTime();
            const isPast = dateMidnight.getTime() < today.getTime();

            const dayNum = d.getDate();
            const monthName = odiaMonths[d.getMonth()];
            const weekdayName = odiaWeekdays[d.getDay()];
            const yearNum = d.getFullYear();

            const devoteeList = (r.devotee_ids || []).map(did => {
              const dev = state.devotees.find(x => String(x.id) === String(did));
              return dev ? { id: dev.id, name: (state.lang === 'or' ? dev.name : (dev.name_en || dev.name)) } : { id: did, name: 'Bhakta' };
            });

            return `
              <div class="pali-card ${isToday ? 'is-today' : (isUpcoming ? 'is-upcoming' : '')}">
                <div class="pali-card-header">
                  <div class="pali-date-box">
                    <div class="pali-date-badge">
                      <div class="pali-date-day">${dayNum}</div>
                      <div class="pali-date-month">${monthName.slice(0, 4)}</div>
                    </div>
                    <div class="pali-date-meta">
                      <div class="pali-date-full">${dayNum} ${monthName}, ${yearNum}</div>
                      <div class="pali-date-weekday">🌺 ${weekdayName}</div>
                    </div>
                  </div>
                  ${isToday ? `<span class="pali-status-pill today">🌟 ଆଜି</span>` : (isUpcoming ? `<span class="pali-status-pill upcoming">✨ ଆସନ୍ତାକାଲି</span>` : (isPast ? `<span class="pali-status-pill past">✓ ସମାପ୍ତ</span>` : `<span class="pali-status-pill upcoming">ଆଗାମୀ</span>`))}
                </div>

                <div class="pali-devotees-section">
                  <div class="pali-devotees-label">ପାଳିଆ ଭକ୍ତ (Palia Devotees):</div>
                  <div class="pali-devotees-chips">
                    ${devoteeList.map(dv => `
                      <span class="pali-devotee-chip" onclick="openDashboard('${dv.id}')" title="ଭକ୍ତ ପ୍ରୋଫାଇଲ୍ ଦେଖନ୍ତୁ">
                        👤 ${dv.name}
                      </span>
                    `).join('')}
                  </div>
                </div>

                <div class="pali-card-actions">
                  <button class="btn btn-secondary btn-sm" style="color:#25D366; font-weight:600; flex:1;" onclick="sharePaliaWhatsApp('${r.id}')">
                    <span>📱 WhatsApp ରେ ସୂଚନା</span>
                  </button>
                  ${state.isAdmin ? `
                    <button class="btn btn-ghost btn-sm" style="color:var(--accent);" onclick="editPalia('${r.id}')" title="Edit">
                      ✏️
                    </button>
                    <button class="btn btn-ghost btn-sm" style="color:var(--danger);" onclick="deleteTransaction('${r.id}', 'palia')" title="ଡିଲିଟ୍">
                      🗑️
                    </button>
                  ` : ''}
                </div>
              </div>
            `;
          }).join('')}
        </div>
      `}
    </div>
  `;
  container.innerHTML = html;
}

function openPaliaModal() {
  document.getElementById('palia-date').value = new Date().toISOString().split('T')[0];
  
  const listContainer = document.getElementById('palia-devotees-list');
  listContainer.innerHTML = state.devotees.map(d => `
    <label style="display:block; padding: 6px; border-bottom: 1px solid var(--border); cursor:pointer;">
      <input type="checkbox" name="palia_devotee" value="${d.id}" style="margin-right: 8px; transform: scale(1.2);">
      <span style="font-size: 1.1rem;">${state.lang === 'or' ? d.name : (d.name_en || d.name)}</span>
    </label>
  `).join('');
    
  openModal('modal-palia');
}

let editingPaliaId = null;

function editPalia(id) {
  const record = state.palia.find(r => String(r.id) === String(id));
  if (!record) return;
  
  editingPaliaId = id;
  document.getElementById('palia-date').value = record.pali_date;
  
  // Uncheck all first
  document.querySelectorAll('input[name="palia_devotee"]').forEach(cb => cb.checked = false);
  
  // Check the ones in the record
  (record.devotee_ids || []).forEach(did => {
    const cb = document.querySelector(`input[name="palia_devotee"][value="${did}"]`);
    if (cb) cb.checked = true;
  });
  
  // Update selection count
  const countSpan = document.getElementById('palia-selected-count');
  if (countSpan) countSpan.textContent = (record.devotee_ids || []).length;
  
  openModal('modal-palia');
}

async function savePalia(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  if (btn) { if (btn.disabled) return; btn.disabled = true; }

  const date = document.getElementById('palia-date').value;
  
  const checkedBoxes = document.querySelectorAll('input[name="palia_devotee"]:checked');
  const devoteeIds = Array.from(checkedBoxes).map(cb => cb.value);

  if (devoteeIds.length === 0) {
    if (btn) btn.disabled = false;
    showToast("ଦୟାକରି ଅତିକମରେ ଜଣେ ଭକ୍ତ ବାଛନ୍ତୁ", "error");
    return;
  }

  const updaterName = state.currentUser ? state.currentUser.name : 'Admin';
  const now = new Date().toISOString();

  let newId = Date.now().toString();

  if (editingPaliaId) {
    newId = editingPaliaId;
    if (supabaseClient) {
      const { error } = await supabaseClient.from('palia_records').update({
        pali_date: date,
        devotee_ids: devoteeIds,
        updated_at: now,
        updated_by: updaterName
      }).eq('id', newId);
      
      if (error) {
        if (btn) btn.disabled = false;
        showToast("Database error: " + error.message, "error");
        return;
      }
    }
    const idx = state.palia.findIndex(x => String(x.id) === String(newId));
    if (idx > -1) {
      state.palia[idx] = { id: newId, pali_date: date, devotee_ids: devoteeIds, updated_at: now, updated_by: updaterName };
    }
  } else {
    if (supabaseClient) {
      const { data, error } = await supabaseClient.from('palia_records').insert({
        id: newId,
        pali_date: date,
        devotee_ids: devoteeIds,
        updated_at: now,
        updated_by: updaterName
      }).select().single();
      
      if (error) {
        if (btn) btn.disabled = false;
        showToast("Database error: " + error.message, "error");
        return;
      }
      if (data) newId = data.id;
    }

    if (!state.palia) state.palia = [];
    state.palia.push({
      id: newId,
      pali_date: date,
      devotee_ids: devoteeIds,
      updated_at: now,
      updated_by: updaterName
    });
  }

  if (btn) btn.disabled = false;
  saveData();
  closeModal('modal-palia');
  editingPaliaId = null;
  document.getElementById('palia-date').value = new Date().toISOString().split('T')[0];
  document.querySelectorAll('input[name="palia_devotee"]').forEach(cb => cb.checked = false);
  const countSpan = document.getElementById('palia-selected-count');
  if (countSpan) countSpan.textContent = '0';
  
  showToast("Puja Pali saved", "success");
  renderPaliaList();
  renderMarquee();
}

// ==========================================
// 12. NIRMANA DONORS
// ==========================================
// 14. MULTI-ADMIN & ROLE MANAGEMENT
// ==========================================
function updateAdminUI() {
  const btn = document.getElementById('admin-login-btn');
  const userNameEl = document.getElementById('admin-user-name');

  if (state.isAdmin && state.currentUser) {
    document.body.classList.add('is-admin');
    if (state.currentUser.role === 'superadmin') {
      document.body.classList.add('is-superadmin');
    } else {
      document.body.classList.remove('is-superadmin');
    }
    if (btn) btn.innerText = '🔓';
    if (userNameEl) {
      userNameEl.innerText = `${state.currentUser.name} (${state.currentUser.role === 'superadmin' ? 'Super Admin' : 'Admin'})`;
    }
  } else {
    document.body.classList.remove('is-admin', 'is-superadmin');
    if (btn) btn.innerText = '🔒';
    if (userNameEl) userNameEl.innerText = 'Admin';
  }
}

function openAdminLoginModal() {
  if (state.isAdmin) {
    state.isAdmin = false;
    state.currentUser = null;
    localStorage.removeItem('adminExpiry');
    localStorage.removeItem('adminUser');
    updateAdminUI();
    showToast('Logged out successfully', 'info');
    if (state.currentView === 'ledger' || state.currentView === 'expenses' || state.currentView === 'nirmana') {
      showView('home');
    } else {
      showView(state.currentView);
    }
  } else {
    document.getElementById('admin-username').value = '';
    document.getElementById('admin-password').value = '';
    openModal('modal-admin-login');
  }
}

function handleAdminLogin(e) {
  e.preventDefault();
  const u = document.getElementById('admin-username').value.trim();
  const p = document.getElementById('admin-password').value;

  const found = (state.admins || SEED_ADMINS).find(a => a.username.toLowerCase() === u.toLowerCase() && a.password === p);

  if (found) {
    state.isAdmin = true;
    state.currentUser = {
      id: found.id,
      name: found.name,
      username: found.username,
      role: found.role
    };

    localStorage.setItem('adminUser', JSON.stringify(state.currentUser));
    localStorage.setItem('adminExpiry', Date.now() + 3600000); // 1 hour session
    
    closeModal('modal-admin-login');
    updateAdminUI();
    showToast(`Welcome, ${found.name}!`, 'success');

    // Refresh current view
    if (state.currentView === 'home') renderHome();
    else if (state.currentView === 'directory') renderBhaktaDirectory();
    else if (state.currentView === 'ledger') renderLedgerTable();
    else if (state.currentView === 'expenses') renderExpenses();
    else if (state.currentView === 'nirmana') renderNirmanaList();
    else if (state.currentView === 'gallery') renderGallery('all');
    else if (state.currentView === 'dashboard') openDashboard(state.activeBhaktaId);
  } else {
    showToast('Invalid Username or Password', 'error');
  }
}

function checkAdminSession() {
  const expiry = localStorage.getItem('adminExpiry');
  const userJson = localStorage.getItem('adminUser');
  if (expiry && Date.now() < Number(expiry) && userJson) {
    try {
      state.currentUser = JSON.parse(userJson);
      state.isAdmin = true;
      updateAdminUI();
    } catch(e) {
      state.isAdmin = false;
      state.currentUser = null;
      localStorage.removeItem('adminExpiry');
      localStorage.removeItem('adminUser');
      updateAdminUI();
    }
  } else {
    state.isAdmin = false;
    state.currentUser = null;
    if (expiry) {
      localStorage.removeItem('adminExpiry');
      localStorage.removeItem('adminUser');
    }
    updateAdminUI();
  }
}

// Super Admin: Admin Management
function openAdminManagementModal() {
  if (!state.isAdmin || (state.currentUser && state.currentUser.role !== 'superadmin')) {
    showToast("Access Denied: Super Admin only", "error");
    return;
  }
  renderAdminList();
  openModal('modal-admin-manage');
}

function renderAdminList() {
  const tbody = document.getElementById('admin-table-body');
  if (!tbody) return;
  const list = state.admins || [];

  if (list.length === 0) {
    tbody.innerHTML = `<tr><td colspan="4" class="text-center text-muted" style="padding:1.5rem;">No admins registered</td></tr>`;
    return;
  }

  tbody.innerHTML = list.map(a => `
    <tr>
      <td><strong>${a.name}</strong></td>
      <td><code>${a.username}</code></td>
      <td>
        <span class="badge ${a.role === 'superadmin' ? 'badge-gold' : 'badge-outline'}">
          ${a.role === 'superadmin' ? 'Super Admin' : 'Admin'}
        </span>
      </td>
      <td>
        <button type="button" class="btn btn-secondary btn-sm" onclick="resetAdminPassword('${a.id}')" title="Reset Password">🔑 Reset</button>
        ${a.username !== 'admin' && (state.currentUser && String(a.id) !== String(state.currentUser.id)) ? `
          <button type="button" class="btn btn-ghost btn-sm" style="color:var(--danger);" onclick="deleteAdmin('${a.id}')" title="Delete Admin">🗑️</button>
        ` : ''}
      </td>
    </tr>
  `).join('');
}

function openAddAdminModal() {
  document.getElementById('new-admin-name').value = '';
  document.getElementById('new-admin-username').value = '';
  document.getElementById('new-admin-password').value = '';
  document.getElementById('new-admin-role').value = 'admin';
  openModal('modal-add-admin');
}

async function saveAdminForm(e) {
  e.preventDefault();
  const name = document.getElementById('new-admin-name').value.trim();
  const username = document.getElementById('new-admin-username').value.trim();
  const password = document.getElementById('new-admin-password').value;
  const role = document.getElementById('new-admin-role').value;

  if (!name || !username || !password) {
    showToast("Please fill all fields", "error");
    return;
  }

  if (state.admins.some(a => a.username.toLowerCase() === username.toLowerCase())) {
    showToast("Username already taken! Please choose a different username.", "error");
    return;
  }

  const newAdmin = {
    id: Date.now().toString(),
    name,
    username,
    password,
    role,
    created_at: new Date().toISOString()
  };

  if (supabaseClient) {
    const { data, error } = await supabaseClient.from('admins').insert(newAdmin).select().single();
    if (error) {
      showToast("Error adding admin to database: " + error.message, "error");
      return;
    }
    if (data) newAdmin.id = data.id;
  }

  state.admins.push(newAdmin);
  saveData();
  closeModal('modal-add-admin');
  renderAdminList();
  showToast(`Admin "${name}" ସଫଳତାର ସହ ଯୋଡ଼ାଗଲା!`, 'success');
}

async function deleteAdmin(adminId) {
  const admin = state.admins.find(a => String(a.id) === String(adminId));
  if (!admin) return;

  if ((state.currentUser && String(admin.id) === String(state.currentUser.id)) || admin.username === 'admin') {
    alert("You cannot delete the primary Super Admin account!");
    return;
  }

  if (!confirm(`Are you sure you want to delete admin "${admin.name}" (${admin.username})?`)) return;

  if (supabaseClient) {
    const { error } = await supabaseClient.from('admins').delete().eq('id', adminId);
    if (error) {
      alert("Error deleting admin: " + error.message);
      return;
    }
  }

  state.admins = state.admins.filter(a => String(a.id) !== String(adminId));
  saveData();
  renderAdminList();
  showToast(`Admin deleted successfully`, 'info');
}

async function resetAdminPassword(adminId) {
  const admin = state.admins.find(a => String(a.id) === String(adminId));
  if (!admin) return;

  const newPass = prompt(`Enter new password for "${admin.name}" (${admin.username}):`);
  if (!newPass) return;
  if (newPass.length < 4) {
    alert("Password must be at least 4 characters!");
    return;
  }

  if (supabaseClient) {
    const { error } = await supabaseClient.from('admins').update({ password: newPass }).eq('id', adminId);
    if (error) {
      alert("Error updating password in database: " + error.message);
      return;
    }
  }

  admin.password = newPass;
  saveData();
  showToast(`Password for "${admin.name}" has been reset!`, 'success');
}

// Self-Service Change Password
function openChangePasswordModal() {
  if (!state.isAdmin || !state.currentUser) return;
  document.getElementById('change-old-password').value = '';
  document.getElementById('change-new-password').value = '';
  document.getElementById('change-confirm-password').value = '';
  openModal('modal-change-password');
}

async function saveChangePassword(e) {
  e.preventDefault();
  const oldP = document.getElementById('change-old-password').value;
  const newP = document.getElementById('change-new-password').value;
  const confirmP = document.getElementById('change-confirm-password').value;

  const currentAdmin = state.admins.find(a => (state.currentUser && String(a.id) === String(state.currentUser.id)) || (state.currentUser && a.username === state.currentUser.username));
  if (!currentAdmin) {
    alert("Admin user not found!");
    return;
  }

  if (currentAdmin.password !== oldP) {
    alert("Current password is incorrect!");
    return;
  }

  if (newP !== confirmP) {
    alert("New password and confirm password do not match!");
    return;
  }

  if (newP.length < 4) {
    alert("Password must be at least 4 characters!");
    return;
  }

  if (supabaseClient) {
    const { error } = await supabaseClient.from('admins').update({ password: newP }).eq('id', currentAdmin.id);
    if (error) {
      alert("Error updating password in database: " + error.message);
      return;
    }
  }

  currentAdmin.password = newP;
  saveData();
  closeModal('modal-change-password');
  showToast("ପାସୱାର୍ଡ଼ ସଫଳତାର ସହ ପରିବର୍ତ୍ତନ ହେଲା (Password updated)!", "success");
}

// Call on startup
checkAdminSession();

// ==========================================
// 15. WHATSAPP NOTIFICATIONS
// ==========================================
function generateGroupReminder() {
  const d = new Date();
  const jsMonthMap = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
  const currentM = jsMonthMap[d.getMonth()];
  
  // Financial Year start year (in Odisha, financial year starts in April, index 3)
  const realFyStartYear = d.getMonth() >= 3 ? d.getFullYear() : d.getFullYear() - 1;

  let pendingList = [];

  (state.devotees || []).forEach(dev => {
    // Only check active Masika contributors
    if (!dev.is_masika_active) return;

    let unpaidCount = 0;
    
    // Parse devotee's joined year (default to 2023-24 if not set)
    const devJoinedYear = dev.joined_year || '2023-24';
    const devJoinedStartYear = parseInt(devJoinedYear.split('-')[0]);
    const startMonthKey = dev.masika_start_month || 'apr';
    const startMonthIdx = MONTHS.indexOf(startMonthKey) !== -1 ? MONTHS.indexOf(startMonthKey) : 0;

    YEARS.forEach(y => {
      const fyStartYear = parseInt(y.split('-')[0]);
      
      // Skip if this financial year is BEFORE the devotee joined
      if (fyStartYear < devJoinedStartYear) return;

      // Skip future financial years
      if (fyStartYear > realFyStartYear) return;

      // Determine valid months for this year
      // Note: 2023-24 collection started in August 2023 (April-July did not exist)
      let validMonthsForYear = (y === '2023-24') 
        ? ['aug', 'sep', 'oct', 'nov', 'dec', 'jan', 'feb', 'mar'] 
        : [...MONTHS];

      // If this is the joining financial year, start calculating strictly from their Masika Starting Month!
      if (fyStartYear === devJoinedStartYear) {
        if (y === '2023-24') {
          const augIdx = MONTHS.indexOf('aug');
          const effectiveStartIdx = Math.max(augIdx, startMonthIdx);
          const effectiveStartKey = MONTHS[effectiveStartIdx];
          const sliceIdx = validMonthsForYear.indexOf(effectiveStartKey);
          if (sliceIdx !== -1) {
            validMonthsForYear = validMonthsForYear.slice(sliceIdx);
          }
        } else {
          validMonthsForYear = validMonthsForYear.slice(startMonthIdx);
        }
      }

      // If this is the current ongoing financial year, only count up to the current calendar month
      if (fyStartYear === realFyStartYear) {
        const currentMIdx = validMonthsForYear.indexOf(currentM);
        if (currentMIdx !== -1) {
          validMonthsForYear = validMonthsForYear.slice(0, currentMIdx + 1);
        }
      }

      validMonthsForYear.forEach(m => {
        let amt = 0;
        if (state.masika[y] && (state.masika[y][String(dev.id)] || state.masika[y][Number(dev.id)])) {
          amt = (state.masika[y] && state.masika[y][String(dev.id)] ? Number(state.masika[y][String(dev.id)][m]) : 0) || (state.masika[y] && state.masika[y][Number(dev.id)] ? Number(state.masika[y][Number(dev.id)][m]) : 0) || 0;
        }
        if (amt === 0) {
          unpaidCount++;
        }
      });
    });

    if (unpaidCount > 3) {
      pendingList.push(`${state.lang === 'or' ? dev.name : (dev.name_en || dev.name)} - ${unpaidCount} ମାସ ବାକି`);
    }
  });

  if (pendingList.length === 0) {
    showToast("କୌଣସି ଭକ୍ତଙ୍କର ୩ ମାସରୁ ଉର୍ଦ୍ଧ୍ୱ ବାକି ନାହିଁ।", "success");
    return;
  }

  const header = `ଜୟଗୁରୁ,\nନିମ୍ନଲିଖିତ ଭାଇ ଓ ମା' ମାନଙ୍କର ମାସିକ ପ୍ରଣାମୀ ୩ ମାସରୁ ଉର୍ଦ୍ଧ୍ୱ ବାକି ଅଛି। ଦୟାକରି ଯଥାଶୀଘ୍ର ଦାଖଲ କରିବେ:\n\n`;
  const body = pendingList.map((item, idx) => `${idx + 1}. ${item}`).join('\n');
  const footer = `\n\nଧନ୍ୟବାଦ,\nସୋର ଟାଉନ ଶାଖା ସଂଘ`;
  
  const fullMsg = header + body + footer;
  const url = `https://wa.me/?text=${encodeURIComponent(fullMsg)}`;
  window.open(url, '_blank');
}

// ==========================================
// 16. EXPENSES & ACCOUNTING
// ==========================================
function renderExpenses(filterType = 'all') {
  const container = document.getElementById('expenses-content');
  if (!container) return;

  // Calculate totals
  let totalMasikaCollected = 0;
  YEARS.forEach(y => {
    if(state.masika[y]) {
      Object.values(state.masika[y]).forEach(devObj => {
        Object.values(devObj).forEach(amt => {
          totalMasikaCollected += (Number(amt) || 0);
        });
      });
    }
  });

  let totalPadaCollected = (state.pada || []).reduce((sum, r) => sum + (Number(r.amount) || 0), 0);
  let totalNirmanaCollected = (state.nirmana || []).reduce((sum, r) => sum + (Number(r.amount) || 0), 0);

  let totalMasikaExp = (state.expenses || []).filter(e => e.source === 'masika').reduce((sum, e) => sum + (Number(e.amount) || 0), 0);
  let totalPadaExp = (state.expenses || []).filter(e => e.source === 'pada').reduce((sum, e) => sum + (Number(e.amount) || 0), 0);
  let totalNirmanaExp = (state.expenses || []).filter(e => e.source === 'nirmana').reduce((sum, e) => sum + (Number(e.amount) || 0), 0);

  const netMasika = totalMasikaCollected - totalMasikaExp;
  const netPada = totalPadaCollected - totalPadaExp;
  const netNirmana = totalNirmanaCollected - totalNirmanaExp;
  const netGrandTotal = netMasika + netPada + netNirmana;

  let filteredExpenses = (state.expenses || []);
  if (filterType !== 'all') {
    filteredExpenses = filteredExpenses.filter(e => e.source === filterType);
  }

  let html = `
    <div class="expense-container">
      <!-- Executive Balances Summary Strip -->
      <div class="ledger-summary-strip" style="grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));">
        <div class="ledger-stat-card" style="border-color: rgba(217, 119, 6, 0.4); background: linear-gradient(135deg, rgba(217, 119, 6, 0.12), var(--bg-secondary));">
          <div class="ledger-stat-icon" style="background: rgba(217, 119, 6, 0.2); color: var(--accent-light);">💎</div>
          <div>
            <div class="ledger-stat-val" style="color: var(--accent-light);">₹${netGrandTotal.toLocaleString('en-IN')}</div>
            <div class="ledger-stat-lbl">ସମୁଦାୟ ଆଶ୍ରମ ନେଟ୍ ବଳକା ପାଣ୍ଠି</div>
          </div>
        </div>

        <div class="ledger-stat-card">
          <div class="ledger-stat-icon" style="background: rgba(251, 191, 36, 0.15); color: #fbbf24;">📘</div>
          <div>
            <div class="ledger-stat-val" style="color: #fbbf24;">₹${netMasika.toLocaleString('en-IN')}</div>
            <div class="ledger-stat-lbl">ମାସିକ ବଳକା (ଆଦାୟ: ₹${totalMasikaCollected.toLocaleString('en-IN')} - ଖର୍ଚ୍ଚ: ₹${totalMasikaExp.toLocaleString('en-IN')})</div>
          </div>
        </div>

        <div class="ledger-stat-card">
          <div class="ledger-stat-icon" style="background: rgba(16, 185, 129, 0.15); color: #10b981;">🙏</div>
          <div>
            <div class="ledger-stat-val" style="color: #10b981;">₹${netPada.toLocaleString('en-IN')}</div>
            <div class="ledger-stat-lbl">ପାଦ ପ୍ରଣାମୀ ବଳକା (ଆଦାୟ: ₹${totalPadaCollected.toLocaleString('en-IN')} - ଖର୍ଚ୍ଚ: ₹${totalPadaExp.toLocaleString('en-IN')})</div>
          </div>
        </div>

        <div class="ledger-stat-card">
          <div class="ledger-stat-icon" style="background: rgba(244, 63, 94, 0.15); color: #f43f5e;">🏗️</div>
          <div>
            <div class="ledger-stat-val" style="color: #f43f5e;">₹${netNirmana.toLocaleString('en-IN')}</div>
            <div class="ledger-stat-lbl">ନିର୍ମାଣ ବଳକା (ଆଦାୟ: ₹${totalNirmanaCollected.toLocaleString('en-IN')} - ଖର୍ଚ୍ଚ: ₹${totalNirmanaExp.toLocaleString('en-IN')})</div>
          </div>
        </div>
      </div>

      <!-- Filter Chips -->
      <div class="gallery-filters mb-sm">
        <button class="filter-btn ${filterType === 'all' ? 'active' : ''}" onclick="renderExpenses('all')">
          ସମସ୍ତ ଖର୍ଚ୍ଚ (All)
        </button>
        <button class="filter-btn ${filterType === 'masika' ? 'active' : ''}" onclick="renderExpenses('masika')">
          📘 ମାସିକରୁ (Masika)
        </button>
        <button class="filter-btn ${filterType === 'pada' ? 'active' : ''}" onclick="renderExpenses('pada')">
          🙏 ପାଦ ପ୍ରଣାମୀରୁ (Pada)
        </button>
        <button class="filter-btn ${filterType === 'nirmana' ? 'active' : ''}" onclick="renderExpenses('nirmana')">
          🏗️ ନିର୍ମାଣରୁ (Nirmana)
        </button>
      </div>

      <!-- Expense Cards Grid -->
      ${filteredExpenses.length === 0 ? `
        <div class="card text-center" style="padding:3rem 1rem; color:var(--text-muted); background:var(--bg-secondary); border-radius:var(--radius-lg);">
          <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">💸</div>
          <p style="margin:0; font-size:1.05rem; font-weight:600; color:var(--text-primary);">କୌଣସି ଖର୍ଚ୍ଚ ରେକର୍ଡ ନାହିଁ</p>
          <p style="margin:0.25rem 0 0; font-size:0.85rem;">(No expenses found for this category. Tap + to add)</p>
        </div>
      ` : `
        <div class="expense-cards-grid">
          ${filteredExpenses.map(e => {
            const d = new Date(e.date);
            const dateStr = `${d.getDate()}-${d.toLocaleString('en-US', { month: 'short' })}-${d.getFullYear()}`;
            const sourceLabel = e.source === 'masika' ? '📘 ମାସିକ ପ୍ରଣାମୀରୁ' : (e.source === 'pada' ? '🙏 ପାଦ ପ୍ରଣାମୀରୁ' : '🏗️ ନିର୍ମାଣ ପାଣ୍ଠିରୁ');
            
            return `
              <div class="expense-card" title="${getAuditTooltip(e.updated_at, e.updated_by)}">
                <div class="expense-card-header">
                  <div class="pada-date-tag">
                    <span>📅</span>
                    <span>${dateStr}</span>
                  </div>
                  <div class="expense-amount-badge">
                    -₹${Number(e.amount).toLocaleString('en-IN')}
                  </div>
                </div>

                <h3 class="expense-note-title">📝 ${e.note}</h3>

                <div class="expense-card-footer">
                  <span class="expense-source-pill ${e.source}">
                    ${sourceLabel}
                  </span>
                  <div style="display: flex; gap: 0.5rem;">
                    <button class="btn btn-ghost btn-sm" style="color:var(--accent);" onclick="editExpense('${e.id}')" title="Edit">
                      ✏️
                    </button>
                    <button class="btn btn-ghost btn-sm" style="color:var(--danger);" onclick="deleteExpense('${e.id}')" title="Delete">
                      🗑️
                    </button>
                  </div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      `}
    </div>
  `;
  container.innerHTML = html;
}

function openAddExpenseModal() {
  document.getElementById('expense-date').value = new Date().toISOString().split('T')[0];
  document.getElementById('expense-source').value = 'masika';
  document.getElementById('expense-amount').value = '';
  document.getElementById('expense-note').value = '';
  openModal('modal-expense');
}

let editingExpenseId = null;

function editExpense(id) {
  const record = state.expenses.find(r => String(r.id) === String(id));
  if (!record) return;
  
  editingExpenseId = id;
  document.getElementById('expense-date').value = record.date;
  document.getElementById('expense-source').value = record.source;
  document.getElementById('expense-amount').value = record.amount;
  document.getElementById('expense-note').value = record.note || '';
  
  openModal('modal-expense');
}

async function saveExpense(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  if (btn) { if (btn.disabled) return; btn.disabled = true; }

  const date = document.getElementById('expense-date').value;
  const source = document.getElementById('expense-source').value;
  const amount = Number(document.getElementById('expense-amount').value);
  const note = document.getElementById('expense-note').value;
  const updaterName = state.currentUser ? state.currentUser.name : 'Admin';
  const now = new Date().toISOString();

  const expData = {
    expense_date: date,
    source: source,
    amount: amount,
    note: note,
    updated_at: now,
    updated_by: updaterName
  };

  let newId = Date.now().toString();

  if (editingExpenseId) {
    newId = editingExpenseId;
    if (supabaseClient) {
      const { error } = await supabaseClient.from('expenses').update(expData).eq('id', newId);
      if (error) {
        if (btn) btn.disabled = false;
        showToast("Database error: " + error.message, "error");
        return;
      }
    }
    const idx = state.expenses.findIndex(x => String(x.id) === String(newId));
    if (idx > -1) {
      state.expenses[idx] = { id: newId, date, source, amount, note, updated_at: now, updated_by: updaterName };
    }
  } else {
    if (supabaseClient) {
      const { data, error } = await supabaseClient.from('expenses').insert(expData).select().single();
      if (error) {
        if (btn) btn.disabled = false;
        showToast("Database error: " + error.message, "error");
        return;
      }
      if (data) newId = data.id;
    }
    state.expenses.unshift({
      id: newId,
      date: date,
      source: source,
      amount: amount,
      note: note,
      updated_at: now,
      updated_by: updaterName
    });
  }

  if (btn) btn.disabled = false;
  saveData();
  closeModal('modal-expense');
  editingExpenseId = null;
  document.getElementById('expense-date').value = new Date().toISOString().split('T')[0];
  document.getElementById('expense-source').value = 'masika';
  document.getElementById('expense-amount').value = '';
  document.getElementById('expense-note').value = '';
  showToast("Expense saved", "success");
  renderExpenses('all');
}

async function deleteExpense(id) {
  if (!confirm("Are you sure you want to delete this expense record?")) return;
  
  if (supabaseClient) {
    const { error } = await supabaseClient.from('expenses').delete().eq('id', id);
    if (error) {
      alert("Error deleting from database: " + error.message);
      return;
    }
  }

  state.expenses = state.expenses.filter(e => String(e.id) !== String(id));
  saveData();
  showToast("Expense deleted", "info");
  renderExpenses();
}

// ==========================================
// 17. NIRMANA DONORS (ADMIN ONLY)
// ==========================================
let nirmanaSearchQuery = '';

function searchNirmanaDonors(q) {
  nirmanaSearchQuery = (q || '').toLowerCase();
  renderNirmanaList();
}

function shareNirmanaWhatsApp(donorId) {
  triggerHaptic('medium');
  const donor = (state.nirmana || []).find(r => String(r.id) === String(donorId));
  if (!donor) return;

  const d = new Date(donor.date);
  const dateFormatted = `${d.getDate()}-${d.toLocaleString('en-US', { month: 'short' })}-${d.getFullYear()}`;

  let msg = `🙏 *ଜୟଗୁରୁ (JAYAGURU)* 🙏\n`;
  msg += `🏛️ *ସୋର ଟାଉନ ସାରସ୍ୱତ ଶାଖା ସଂଘ*\n`;
  msg += `🏗️ *ନିର୍ମାଣ ପାଣ୍ଠି ଦାନ ରସିଦ (Nirmana Donation Receipt)*\n`;
  msg += `--------------------------------\n`;
  msg += `👤 *ଦାତାଙ୍କ ନାମ:* ${donor.name}\n`;
  if (donor.phone) msg += `📞 *ଫୋନ୍:* ${donor.phone}\n`;
  if (donor.address) msg += `📍 *ଠିକଣା:* ${donor.address}\n`;
  msg += `💰 *ପ୍ରଦାନ ରାଶି:* ₹${Number(donor.amount).toLocaleString('en-IN')}\n`;
  msg += `📅 *ତାରିଖ (Date):* ${dateFormatted}\n`;
  if (donor.note) msg += `📝 *ବିବରଣୀ:* ${donor.note}\n`;
  msg += `--------------------------------\n`;
  msg += `✨ ଆଶ୍ରମ ନିର୍ମାଣ ପାଇଁ ଆପଣଙ୍କର ଏହି ମହତ୍ ଦାନ ସ୍ୱୀକାର କରାଗଲା।\n`;
  msg += `✨ _ଶ୍ରୀ ଶ୍ରୀ ଠାକୁର ଆପଣଙ୍କର ମଙ୍ଗଳ କରନ୍ତୁ_ ✨\n`;
  msg += `🌐 *ଆଶ୍ରମ ପୋର୍ଟାଲ:* ${window.location.origin + window.location.pathname}`;

  const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
}

function renderNirmanaList() {
  const container = document.getElementById('nirmana-content');
  if (!container) return;

  let records = state.nirmana || [];
  let totalNirmana = records.reduce((sum, r) => sum + (Number(r.amount) || 0), 0);

  if (nirmanaSearchQuery) {
    records = records.filter(r => 
      (r.name || '').toLowerCase().includes(nirmanaSearchQuery) ||
      (r.phone || '').includes(nirmanaSearchQuery) ||
      (r.address || '').toLowerCase().includes(nirmanaSearchQuery)
    );
  }

  let html = `
    <div class="nirmana-container">
      <!-- Executive Summary Strip -->
      <div class="ledger-summary-strip">
        <div class="ledger-stat-card">
          <div class="ledger-stat-icon" style="background: rgba(244, 63, 94, 0.15); color: #f43f5e;">🏗️</div>
          <div>
            <div class="ledger-stat-val" style="color: #f43f5e;">₹${totalNirmana.toLocaleString('en-IN')}</div>
            <div class="ledger-stat-lbl">ସମୁଦାୟ ନିର୍ମାଣ ପାଣ୍ଠି ସଂଗ୍ରହ</div>
          </div>
        </div>
        <div class="ledger-stat-card">
          <div class="ledger-stat-icon">👥</div>
          <div>
            <div class="ledger-stat-val">${(state.nirmana || []).length} ଜଣ</div>
            <div class="ledger-stat-lbl">ମୋଟ ନିର୍ମାଣ ଦାତା</div>
          </div>
        </div>
      </div>

      <!-- Search Bar -->
      <div class="search-wrapper mb-sm" style="max-width: 420px;">
        <span class="search-icon">🔍</span>
        <input type="text" class="search-input" placeholder="ଦାତାଙ୍କ ନାମ କିମ୍ବା ଫୋନ୍ ନମ୍ବର ଖୋଜନ୍ତୁ..." value="${nirmanaSearchQuery}" oninput="searchNirmanaDonors(this.value)" />
      </div>

      <!-- Nirmana Donor Cards Grid -->
      ${records.length === 0 ? `
        <div class="card text-center" style="padding:3rem 1rem; color:var(--text-muted); background:var(--bg-secondary); border-radius:var(--radius-lg);">
          <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">🏗️</div>
          <p style="margin:0; font-size:1.05rem; font-weight:600; color:var(--text-primary);">କୌଣସି ନିର୍ମାଣ ଦାତା ରେକର୍ଡ ନାହିଁ</p>
          <p style="margin:0.25rem 0 0; font-size:0.85rem;">(No Nirmana donors found. Tap + to add donor)</p>
        </div>
      ` : `
        <div class="nirmana-cards-grid">
          ${records.map(r => {
            const d = new Date(r.date);
            const dateStr = `${d.getDate()}-${d.toLocaleString('en-US', { month: 'short' })}-${d.getFullYear()}`;
            return `
              <div class="nirmana-card" title="${getAuditTooltip(r.updated_at, r.updated_by)}">
                <div class="nirmana-card-header">
                  <h3 class="donor-name-title">👤 ${r.name}</h3>
                  <div class="nirmana-amount-badge">
                    ₹${Number(r.amount).toLocaleString('en-IN')}
                  </div>
                </div>

                <div class="donor-contact-info">
                  ${r.phone ? `<div>📞 <strong>ଫୋନ୍:</strong> ${r.phone}</div>` : ''}
                  ${r.address ? `<div>📍 <strong>ଠିକଣା:</strong> ${r.address}</div>` : ''}
                  <div>📅 <strong>ତାରିଖ:</strong> ${dateStr}</div>
                </div>

                ${r.note ? `
                  <div class="donor-note-box">
                    📝 <strong>ବିବରଣୀ:</strong> ${r.note}
                  </div>
                ` : ''}

                <div class="nirmana-card-footer">
                  <button class="btn btn-secondary btn-sm" style="color:#25D366; font-weight:600; flex:1;" onclick="shareNirmanaWhatsApp('${r.id}')">
                    <span>📱 WhatsApp ରସିଦ</span>
                  </button>
                  <div style="display: flex; gap: 0.5rem;">
                    <button class="btn btn-ghost btn-sm" style="color:var(--accent);" onclick="editNirmana('${r.id}')" title="Edit">
                      ✏️
                    </button>
                    <button class="btn btn-ghost btn-sm" style="color:var(--danger);" onclick="deleteNirmanaDonor('${r.id}')" title="Delete">
                      🗑️
                    </button>
                  </div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      `}
    </div>
  `;
  container.innerHTML = html;
}

function editNirmana(id) {
  const record = state.nirmana.find(r => String(r.id) === String(id));
  if (!record) return;
  
  document.getElementById('nirmana-id').value = id;
  document.getElementById('nirmana-name').value = record.name;
  document.getElementById('nirmana-phone').value = record.phone || '';
  document.getElementById('nirmana-address').value = record.address || '';
  document.getElementById('nirmana-amount').value = record.amount;
  document.getElementById('nirmana-date').value = record.date;
  document.getElementById('nirmana-note').value = record.note || '';
  
  openModal('modal-nirmana');
}

function openAddNirmanaDonorModal() {
  document.getElementById('nirmana-id').value = '';
  document.getElementById('nirmana-name').value = '';
  document.getElementById('nirmana-phone').value = '';
  document.getElementById('nirmana-address').value = '';
  document.getElementById('nirmana-amount').value = '';
  document.getElementById('nirmana-date').value = new Date().toISOString().split('T')[0];
  document.getElementById('nirmana-note').value = '';
  openModal('modal-nirmana-donor');
}

async function saveNirmanaDonor(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  if (btn) { if (btn.disabled) return; btn.disabled = true; }

  const id = document.getElementById('nirmana-id').value;
  const updaterName = state.currentUser ? state.currentUser.name : 'Admin';
  const now = new Date().toISOString();

  const donor = {
    name: document.getElementById('nirmana-name').value,
    phone: document.getElementById('nirmana-phone').value,
    address: document.getElementById('nirmana-address').value,
    amount: Number(document.getElementById('nirmana-amount').value),
    date: document.getElementById('nirmana-date').value,
    note: document.getElementById('nirmana-note').value,
    updated_at: now,
    updated_by: updaterName
  };

  let finalId = id || Date.now().toString();

  if (supabaseClient) {
    if (id) {
      const { error } = await supabaseClient.from('nirmana_donors').update(donor).eq('id', id);
      if (error) { if (btn) btn.disabled = false; alert("Error updating: " + error.message); return; }
    } else {
      const { data, error } = await supabaseClient.from('nirmana_donors').insert(donor).select().single();
      if (error) { if (btn) btn.disabled = false; alert("Error adding: " + error.message); return; }
      if (data) finalId = data.id;
    }
  }

  if (id) {
    const idx = state.nirmana.findIndex(x => String(x.id) === String(id));
    if (idx > -1) state.nirmana[idx] = { id: finalId, ...donor };
  } else {
    state.nirmana.unshift({ id: finalId, ...donor });
  }

  if (btn) btn.disabled = false;
  saveData();
  closeModal('modal-nirmana-donor');
  showToast("ନିର୍ମାଣ ଦାତା ସଫଳତାର ସହ ସଂରକ୍ଷିତ ହେଲା", "success");
  renderNirmanaList();
}

async function deleteNirmanaDonor(id) {
  if (!confirm("Are you sure you want to delete this Nirmana donor record?")) return;
  
  if (supabaseClient) {
    const { error } = await supabaseClient.from('nirmana_donors').delete().eq('id', id);
    if (error) {
      alert("Error deleting from database: " + error.message);
      return;
    }
  }

  state.nirmana = state.nirmana.filter(r => String(r.id) !== String(id));
  saveData();
  showToast("Donor record deleted", "info");
  renderNirmanaList();
}

// ==========================================
// 18. DATABASE BACKUP & EXPORT
// ==========================================
function exportDatabaseBackup() {
  const backupData = {
    appName: "Soro Town Saraswata Sakha Sangha - Pranami Manager",
    exportedAt: new Date().toISOString(),
    version: "2.0",
    admins: state.admins || [],
    devotees: state.devotees || [],
    masika: state.masika || {},
    masika_meta: state.masika_meta || {},
    pada: state.pada || [],
    nirmana: state.nirmana || [],
    expenses: state.expenses || [],
    gallery: state.gallery || [],
    announcements: state.announcements || []
  };

  const jsonStr = JSON.stringify(backupData, null, 2);
  const blob = new Blob([jsonStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  const d = new Date();
  const dateStr = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  a.href = url;
  a.download = `Soro_Ashram_Backup_${dateStr}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast("ସମ୍ପୂର୍ଣ୍ଣ ଡାଟାବେସ୍ Backup ଡାଉନଲୋଡ୍ ହେଲା!", "success");
}

async function importDatabaseBackup(e) {
  const file = e.target.files[0];
  if (!file) return;

  if (!confirm("Are you sure you want to restore the database from this backup file? This will update all devotees, contributions, and expenses.")) {
    e.target.value = '';
    return;
  }

  const reader = new FileReader();
  reader.onload = async function(evt) {
    try {
      const data = JSON.parse(evt.target.result);
      if (!data.devotees || !Array.isArray(data.devotees)) {
        alert("Invalid backup file format!");
        return;
      }

      // Restore in-memory state
      state.devotees = data.devotees;
      if (data.admins) state.admins = data.admins;
      if (data.masika) state.masika = data.masika;
      if (data.masika_meta) state.masika_meta = data.masika_meta;
      if (data.pada) state.pada = data.pada;
      if (data.nirmana) state.nirmana = data.nirmana;
      if (data.expenses) state.expenses = data.expenses;
      if (data.gallery) state.gallery = data.gallery;
      if (data.announcements) state.announcements = data.announcements;

      saveData();

      // If connected to Supabase, sync restored data to Supabase
      if (supabaseClient) {
        showToast("Syncing restored data to Supabase...", "info");
        try {
          if (data.admins && data.admins.length > 0) {
            await supabaseClient.from('admins').upsert(data.admins);
          }
          if (data.devotees.length > 0) {
            await supabaseClient.from('devotees').upsert(data.devotees);
          }
          if (data.nirmana && data.nirmana.length > 0) {
            await supabaseClient.from('nirmana_donors').upsert(data.nirmana);
          }
          if (data.expenses && data.expenses.length > 0) {
            await supabaseClient.from('expenses').upsert(data.expenses);
          }
          if (data.announcements && data.announcements.length > 0) {
            await supabaseClient.from('announcements').upsert(data.announcements);
          }
          if (data.palia && data.palia.length > 0) {
            await supabaseClient.from('palia_records').upsert(data.palia);
          }
          showToast("Cloud sync complete!", "success");
        } catch (syncErr) {
          console.warn("Supabase partial sync error:", syncErr);
        }
      }

      showToast("ଡାଟା ସଫଳତାର ସହ Restore ହେଲା (Restored successfully)!", "success");
      closeModal('modal-db-settings');
      
      // Refresh current view
      if (state.currentView === 'home') renderHome();
      else if (state.currentView === 'directory') renderBhaktaDirectory();
      else if (state.currentView === 'ledger') renderLedgerTable();
      else if (state.currentView === 'expenses') renderExpenses();
      else if (state.currentView === 'nirmana') renderNirmanaList();
      else if (state.currentView === 'gallery') renderGallery('all');
    } catch (err) {
      alert("Error reading backup file: " + err.message);
    } finally {
      e.target.value = '';
    }
  };
  reader.readAsText(file);
}

// ==========================================
// 17. PWA & MOBILE NATIVE EXPERIENCE
// ==========================================
let deferredPrompt = null;

function initPWA() {
  // 1. Register Service Worker
  if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('./sw.js').then(async (reg) => {
        console.log('[PWA] Service Worker registered with scope:', reg.scope);
        
        // Register Periodic Background Sync (App Ping)
        if ('periodicSync' in reg) {
          try {
            const status = await navigator.permissions.query({ name: 'periodic-background-sync' });
            if (status.state === 'granted') {
              // Register ping every 3 days (3 * 24 * 60 * 60 * 1000)
              await reg.periodicSync.register('keep-alive-ping', { minInterval: 259200000 });
              console.log('[PWA] Auto-Ping Background Sync Registered.');
            }
          } catch(e) { console.warn('Periodic sync not supported or denied', e); }
        }
      }).catch((err) => {
        console.warn('[PWA] Service Worker registration failed:', err);
      });
  }

  // 2. Intercept Native Install Prompt
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    
    // Check if user previously dismissed banner in this session
    if (!sessionStorage.getItem('pwa_banner_dismissed')) {
      const banner = document.getElementById('pwa-install-banner');
      if (banner) {
        banner.classList.remove('hidden');
      }
    }
  });

  window.addEventListener('appinstalled', () => {
    console.log('[PWA] App installed successfully');
    deferredPrompt = null;
    const banner = document.getElementById('pwa-install-banner');
    if (banner) banner.classList.add('hidden');
    showToast("ଆଶ୍ରମ ଆପ୍ ସଫଳତାର ସହ Install ହେଲା!", "success");
  });
}

async function installPWA() {
  triggerHaptic('medium');
  if (!deferredPrompt) {
    // If browser doesn't support direct prompt, guide user
    alert("ଆପ୍ Install କରିବାକୁ Browser Menu (୩ଟି ବିନ୍ଦୁ) ଉପରେ କ୍ଲିକ୍ କରି 'Install app' କିମ୍ବା 'Add to Home screen' ବାଛନ୍ତୁ।");
    return;
  }

  deferredPrompt.prompt();
  const { outcome } = await deferredPrompt.userChoice;
  console.log(`[PWA] User choice: ${outcome}`);
  
  if (outcome === 'accepted') {
    const banner = document.getElementById('pwa-install-banner');
    if (banner) banner.classList.add('hidden');
  }
  deferredPrompt = null;
}

function dismissInstallBanner() {
  triggerHaptic('light');
  const banner = document.getElementById('pwa-install-banner');
  if (banner) {
    banner.classList.add('hidden');
    sessionStorage.setItem('pwa_banner_dismissed', 'true');
  }
}

function sharePaliaWhatsApp(paliId) {
  triggerHaptic('medium');
  const record = (state.palia || []).find(r => String(r.id) === String(paliId));
  if (!record) return;

  const d = new Date(record.pali_date);
  const dateFormatted = `${d.getDate()}-${d.toLocaleString('en-US', { month: 'short' })}-${d.getFullYear()}`;
  const monthFormatted = d.toLocaleString('en-US', { month: 'long' });
  
  const names = (record.devotee_ids || []).map(id => {
    const dev = state.devotees.find(x => String(x.id) === String(id));
    return dev ? (state.lang === 'or' ? dev.name : (dev.name_en || dev.name)) : '';
  }).filter(Boolean).join(', ');

  let msg = `🙏 *ଜୟଗୁରୁ (JAYAGURU)* 🙏\n`;
  msg += `🏛️ *ସୋର ଟାଉନ ସାରସ୍ୱତ ଶାଖା ସଂଘ*\n`;
  msg += `🌺 *ପୂଜା ପାଳି ସୂଚନା (Puja Pali Reminder)*\n`;
  msg += `--------------------------------\n`;
  msg += `📅 *ତାରିଖ (Date):* ${dateFormatted} (${monthFormatted})\n`;
  msg += `👥 *ପାଳିଆ ଭକ୍ତ:* ${names || 'ସମସ୍ତ ଭକ୍ତ'}\n`;
  msg += `--------------------------------\n`;
  msg += `✨ ସମସ୍ତ ଭକ୍ତଙ୍କୁ ଯଥା ସମୟରେ ଉପସ୍ଥିତ ରହିବାକୁ ଅନୁରୋଧ।\n`;
  msg += `🌐 *ଆଶ୍ରମ ପୋର୍ଟାଲ:* ${window.location.origin + window.location.pathname}\n`;
  msg += `✨ _ଶ୍ରୀ ଶ୍ରୀ ଠାକୁରଙ୍କ ଚରଣେ ପ୍ରଣାମ_ ✨`;

  const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
}

// ==========================================
// 18. GESTURE NAVIGATION & MICRO-ANIMATIONS
// ==========================================
let touchStartX = 0;
let touchStartY = 0;

function initSwipeGestures() {
  document.addEventListener('touchstart', e => {
    const card = e.target.closest('.swipeable-card');
    if (!card) return;
    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
  }, {passive: true});

  document.addEventListener('touchend', e => {
    const card = e.target.closest('.swipeable-card');
    if (!card) return;
    const touchEndX = e.changedTouches[0].screenX;
    const touchEndY = e.changedTouches[0].screenY;
    
    const deltaX = touchEndX - touchStartX;
    const deltaY = touchEndY - touchStartY;
    
    // Horizontal swipe detection (tolerance for slight vertical movement)
    if (Math.abs(deltaX) > 50 && Math.abs(deltaY) < 30) {
      const container = card.closest('.swipe-container');
      if (!container) return;
      
      if (deltaX < 0) {
        // Swipe Left -> Reveal Actions
        document.querySelectorAll('.swipe-container.swiped').forEach(el => {
           if (el !== container) el.classList.remove('swiped');
        });
        container.classList.add('swiped');
        triggerHaptic('light');
      } else {
        // Swipe Right -> Hide Actions
        container.classList.remove('swiped');
      }
    }
  });
}

// ==========================================
// 19. ADVANCED OFFLINE-FIRST (BACKGROUND SYNC)
// ==========================================
async function registerOfflineSync() {
  if ('serviceWorker' in navigator && 'SyncManager' in window) {
    try {
      const sw = await navigator.serviceWorker.ready;
      await sw.sync.register('sync-offline-data');
      console.log('[App] Background sync registered!');
    } catch (err) {
      console.warn('[App] Background sync failed:', err);
    }
  }
}

// Listen for messages from Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.addEventListener('message', async event => {
    if (event.data && event.data.type === 'PROCESS_OFFLINE_QUEUE') {
      console.log('[App] Received sync trigger from SW. Pushing data to Supabase...');
      showToast("ଅଫଲାଇନ୍ ଡାଟା ସର୍ଭରକୁ ଅପଲୋଡ୍ ହେଲା (Offline Data Synced)!", "success");
    }
  });
}

// ==========================================
// 20. GLOBAL ANNOUNCEMENTS & MARQUEE
// ==========================================
let editingAnnouncementId = null;

function editAnnouncement(id) {
  const ann = (state.announcements || []).find(a => String(a.id) === String(id));
  if (!ann) return;
  
  editingAnnouncementId = id;
  document.getElementById('announcement-msg').value = ann.text;
  document.getElementById('announcement-expiry').value = ann.expiry_date || '';
  
  // Scroll up to the form
  const formEl = document.getElementById('announcement-msg');
  if (formEl) formEl.scrollIntoView({ behavior: 'smooth' });
}

async function addAnnouncement() {
  const msgEl = document.getElementById('announcement-msg');
  const expiryEl = document.getElementById('announcement-expiry');
  if (!msgEl || !msgEl.value.trim()) {
    showToast("Please enter an announcement.", "error");
    return;
  }
  if (!expiryEl || !expiryEl.value) {
    showToast("Please select an expiry date.", "error");
    return;
  }
  
  const text = msgEl.value.trim();
  const expiryDate = expiryEl.value;
  
  let newId = Date.now().toString();
  const now = new Date().toISOString();
  const creator = state.currentUser ? state.currentUser.name : 'Admin';

  if (editingAnnouncementId) {
    newId = editingAnnouncementId;
    if (supabaseClient) {
      const { error } = await supabaseClient.from('announcements').update({
        text: text,
        expiry_date: expiryDate
      }).eq('id', newId);
      if (error) {
        showToast("Database sync error: " + error.message, "error");
      }
    }
    const idx = state.announcements.findIndex(a => String(a.id) === String(newId));
    if (idx > -1) {
      state.announcements[idx].text = text;
      state.announcements[idx].expiry_date = expiryDate;
    }
  } else {
    const ann = {
      id: newId,
      text: text,
      expiry_date: expiryDate,
      created_at: now,
      created_by: creator
    };

    if (supabaseClient) {
      try {
        const { error } = await supabaseClient.from('announcements').insert(ann);
        if (error) {
          showToast("Database sync error.", "error");
        }
      } catch (err) {
        console.error(err);
      }
    }
    
    if (!state.announcements) state.announcements = [];
    state.announcements.push(ann);
  }
  
  saveData();
  showToast(editingAnnouncementId ? "Announcement updated!" : "Announcement added successfully!", "success");
  
  msgEl.value = '';
  expiryEl.value = '';
  editingAnnouncementId = null;
  
  renderAnnouncementsAdminList();
  renderMarquee();
}

async function deleteAnnouncement(id) {
  if (!confirm("Delete this announcement?")) return;
  
  if (supabaseClient) {
    try {
      const { error } = await supabaseClient.from('announcements').delete().eq('id', id);
      if (error) throw error;
    } catch (e) {
      console.error("Supabase announcement delete error:", e);
      showToast("Error deleting announcement from cloud.", "error");
    }
  }

  state.announcements = state.announcements.filter(a => String(a.id) !== String(id));
  saveData();
  showToast("Announcement deleted.", "info");
  renderAnnouncementsAdminList();
  renderMarquee();
}

function renderAnnouncementsAdminList() {
  const listEl = document.getElementById('admin-announcements-list');
  if (!listEl) return;
  
  if (!state.announcements || state.announcements.length === 0) {
    listEl.innerHTML = `
      <div style="background: rgba(255,255,255,0.02); border: 1px dashed rgba(255,255,255,0.1); border-radius: var(--radius-md); padding: 2rem; text-align: center;">
        <div style="font-size: 2rem; opacity: 0.2; margin-bottom: 0.5rem;">📭</div>
        <div style="color: var(--text-muted); font-size: 0.9rem;">No active broadcasts.</div>
      </div>
    `;
    return;
  }
  
  const sorted = [...state.announcements].sort((a,b) => new Date(b.created_at) - new Date(a.created_at));
  const todayStr = new Date().toISOString().split('T')[0];
  
  let html = '';
  for(const ann of sorted) {
    const isExpired = ann.expiry_date < todayStr;
    html += `
      <div style="background: ${isExpired ? 'rgba(239,68,68,0.05)' : 'var(--bg-secondary)'}; border: 1px solid ${isExpired ? 'rgba(239,68,68,0.2)' : 'rgba(99,102,241,0.2)'}; border-left: 4px solid ${isExpired ? '#ef4444' : '#6366f1'}; border-radius: var(--radius-md); padding: 1rem 1.25rem; display: flex; justify-content: space-between; align-items: center; gap: 15px; transition: transform 0.2s;">
        <div style="flex: 1;">
          <p style="margin: 0 0 0.5rem 0; font-size: 1rem; color: #fff; line-height: 1.4; font-weight: 500;">${ann.text}</p>
          <div style="display: flex; gap: 12px; font-size: 0.75rem; flex-wrap: wrap; align-items: center;">
            <span style="background: rgba(255,255,255,0.05); padding: 2px 8px; border-radius: 4px; color: var(--text-muted);">👤 ${ann.created_by}</span>
            <span style="background: ${isExpired ? 'rgba(239,68,68,0.1)' : 'rgba(16,185,129,0.1)'}; color: ${isExpired ? '#ef4444' : '#34d399'}; padding: 2px 8px; border-radius: 4px; display: flex; align-items: center; gap: 4px;">
              ${isExpired ? '⏳ Expired' : '✨ Active'} until ${formatDate(ann.expiry_date)}
            </span>
          </div>
        </div>
        <div style="display: flex; gap: 8px;">
          <button class="btn btn-ghost btn-icon" style="color: #6366f1; flex-shrink: 0; background: rgba(99,102,241,0.1); border-radius: 50%;" onclick="editAnnouncement('${ann.id}')" title="Edit Broadcast">
            <span style="font-size: 1.1rem;">✏️</span>
          </button>
          <button class="btn btn-ghost btn-icon" style="color: #ef4444; flex-shrink: 0; background: rgba(239,68,68,0.1); border-radius: 50%;" onclick="deleteAnnouncement('${ann.id}')" title="Delete Broadcast">
            <span style="font-size: 1.1rem;">🗑️</span>
          </button>
        </div>
      </div>
    `;
  }
  listEl.innerHTML = html;
}

function renderMarquee() {
  const container = document.getElementById('marquee-container');
  const textEl = document.getElementById('marquee-text');
  if (!container || !textEl) return;
  
  const today = new Date();
  today.setHours(0,0,0,0);
  const todayStr = today.getFullYear() + '-' + String(today.getMonth()+1).padStart(2,'0') + '-' + String(today.getDate()).padStart(2,'0');
  
  let nextPaliText = '';
  if (state.palia && state.palia.length > 0) {
    const upcoming = state.palia.filter(p => p && p.pali_date && p.pali_date >= todayStr).sort((a,b) => new Date(a.pali_date) - new Date(b.pali_date));
    if (upcoming.length > 0) {
      const nextPali = upcoming[0];
      const dNames = [];
      if (nextPali.devotee_ids && Array.isArray(nextPali.devotee_ids)) {
        for(let id of nextPali.devotee_ids) {
          const dev = (state.devotees || []).find(x => String(x.id) === String(id));
          if(dev) dNames.push(state.lang === 'or' ? dev.name : (dev.name_en || dev.name));
        }
      }
      const namesFormatted = dNames.length > 0 ? ` - [ ${dNames.join(', ')} ]` : '';
      nextPaliText = `🌺 ଆଗାମୀ ପୂଜା ପାଳି: ${formatDate(nextPali.pali_date)}${namesFormatted}`;
    }
  }
  
  let adminAnnouncements = [];
  if (state.announcements && Array.isArray(state.announcements)) {
    adminAnnouncements = state.announcements
      .filter(a => a && a.text && (!a.expiry_date || a.expiry_date >= todayStr))
      .map(a => `⭐ ${a.text}`);
  }
  
  const items = [];
  if (nextPaliText) items.push(nextPaliText);
  items.push(...adminAnnouncements);
  
  if (items.length === 0) {
    container.classList.add('hidden');
    textEl.classList.remove('marquee-animating');
  } else {
    container.classList.remove('hidden');
    textEl.innerHTML = items.join(' &nbsp;&nbsp;&nbsp;&nbsp;♦&nbsp;&nbsp;&nbsp;&nbsp; ');
    
    // Restart animation
    textEl.classList.remove('marquee-animating');
    void textEl.offsetWidth; // trigger reflow
    textEl.classList.add('marquee-animating');
  }
}

// ==========================================
// 21. NAVIGATION SWIPE HINT
// ==========================================
function initSwipeHint() {
  if (window.innerWidth <= 900) {
    const hint = document.getElementById('nav-swipe-hint');
    if (hint) {
      hint.style.display = 'flex';
      setTimeout(() => {
        if (hint && hint.style.display !== 'none') {
          hint.style.opacity = '0';
          setTimeout(() => hint.style.display = 'none', 500);
        }
      }, 6000);
    }
  }
}

function hideSwipeHint() {
  const hint = document.getElementById('nav-swipe-hint');
  if (hint && hint.style.display !== 'none') {
    hint.style.opacity = '0';
    setTimeout(() => hint.style.display = 'none', 500);
  }
}

// Initialize hint on load
document.addEventListener('DOMContentLoaded', initSwipeHint);
