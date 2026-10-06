/*
 * Global site configuration — single source of truth.
 * Everything brand-related lives here (or in content.js). Never hard-code
 * brand strings in templates.
 */
export const site = {
  // Brand
  brand: 'Awakening',
  brandFull: 'Awakening Culture Technology',
  brandZh: '泰盎文华科技（河南）有限公司',
  tagline: 'Technology Transfer · Global Collaboration · Traditional Chinese Medicine',
  legalName: 'Tai Ang Wen Hua Technology (Henan) Co., Ltd.',

  // Deployment
  url: 'https://www.awakening-culture.com',
  email: 'c52974379@gmail.com',
  phone: '',
  whatsapp: '',
  wechat: '',
  address: {
    line1: 'Zhengzhou, Henan',
    country: 'China',
  },
  founded: 2019,

  // Languages. `dir` reserved for future RTL support.
  languages: [
    { code: 'en', label: 'English',  native: 'English',  htmlLang: 'en', dir: 'ltr', default: true },
    { code: 'zh', label: 'Chinese',  native: '中文',      htmlLang: 'zh-CN', dir: 'ltr' },
    { code: 'es', label: 'Spanish',  native: 'Español',  htmlLang: 'es', dir: 'ltr' },
    { code: 'de', label: 'German',   native: 'Deutsch',  htmlLang: 'de', dir: 'ltr' },
    { code: 'fr', label: 'French',   native: 'Français', htmlLang: 'fr', dir: 'ltr' },
    { code: 'ru', label: 'Russian',  native: 'Русский',  htmlLang: 'ru', dir: 'ltr' },
  ],

  // Integrations — fill these in to go live. Left empty = UI shows a notice.
  integrations: {
    // Formspree / Basin / Getform endpoint, or your own /api/inquiry
    inquiryEndpoint: "https://formspree.io/f/mqpeapek",
    // Mailto fallback used when inquiryEndpoint is empty
    inquiryMailto: "c52974379@gmail.com",
    // Stripe Payment Link (https://buy.stripe.com/...) and/or PayPal.me / PayPal button id
    stripePaymentLink: '',
    paypalClientId: '',
    paypalCurrency: 'USD',
    // Analytics
    gaMeasurementId: '',
    clarityId: '',
  },

  social: [
    { name: 'LinkedIn', url: '#', icon: 'linkedin' },
    { name: 'YouTube', url: '#', icon: 'youtube' },
    { name: 'X', url: '#', icon: 'x' },
  ],
};

export const mainNav = [
  { key: 'home', url: 'index.html' },
  { key: 'technology', url: 'technology.html' },
  { key: 'products', url: 'products.html' },
  { key: 'clinic', url: 'clinic.html' },
  { key: 'about', url: 'about.html' },
  { key: 'news', url: 'news.html' },
  { key: 'contact', url: 'contact.html' },
];

/** Currency formatting helper shared by build + cart. */
export const CURRENCY = 'USD';
