const supportedLanguages = ['en-gb', 'pt-br', 'es', 'ca', 'ja', 'fr', 'ar', 'de'];
const defaultLang = 'en-gb';

function getFallbackLanguage(language) {
  const baseLanguage = language.split('-')[0];
  const fallbackMap = {
    'en': 'en-gb',
    'pt': 'pt-br',
    'es': 'es',
    'ca': 'ca',
    'ja': 'ja',
    'fr': 'fr',
    'ar': 'ar',
    'de': 'de',
  };

  return fallbackMap[baseLanguage] || defaultLang;
}

function getBrowserLanguage() {
  const browserLanguage = navigator.language.toLowerCase();

  let pageLanguage = defaultLang;
  
  if (supportedLanguages.includes(browserLanguage)) {
    pageLanguage = browserLanguage;
  } else {
    pageLanguage = getFallbackLanguage(browserLanguage);
  }

  return pageLanguage;
}


function applyTranslations(translations) {
  
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[key]) {
      el.textContent = translations[key];
    }
  });

  document.querySelectorAll('[data-i18n-attr]').forEach(el => {
    const [key, attr] = el.getAttribute('data-i18n-attr').split(':');
    if (translations[key]) {
      el.setAttribute(attr, translations[key]);
    }
  });

  document.querySelectorAll('[data-i18n-paragraphs]').forEach(el => {
    const key = el.getAttribute('data-i18n-paragraphs');
    const paragraphs = translations[key];
    if (Array.isArray(paragraphs)) {
      el.innerHTML = paragraphs.map(text => `<p>${text}</p>`).join('');
    }
  });
  

  if (translations.title) {
    document.title = translations.title;
  }
}

function loadLanguage(language) {
  fetch(`i18n/${language}.json`)
    .then(res => res.json())
    .then(translations => {
      applyTranslations(translations);
      document.documentElement.lang = language;
      document.documentElement.dir = (language === 'ar') ? 'rtl' : 'ltr';
    })
    .catch(() => {
      console.warn(`Could not load language: ${language}`);
    });
}

const flagMap = {
  'pt-br': 'br',
  'en-gb': 'gb',
  'es': 'es',
  'ja': 'jp',
  'fr': 'fr',
  'ca': 'es-ct',
  'de': 'de',
  'ar': 'sa'
};

function updateFlagUI(lang) {
  const flagEl = document.querySelector('#selected-flag span');
  const code = flagMap[lang]; // 'gb', 'br', etc.
  if (flagEl && code) {
    flagEl.className = `fi fi-${code}`;
    flagEl.setAttribute('aria-label', lang);
  }
}
  

document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('preferredLanguage');
  const initialLang = savedLang || getBrowserLanguage();
  loadLanguage(initialLang);
  updateFlagUI(initialLang);

  const dropdown = document.getElementById('language-dropdown');
  const selected = document.getElementById('selected-flag');
  const options = document.getElementById('flag-options');

  selected.addEventListener('click', () => {
    const expanded = options.classList.toggle('hidden') ? 'false' : 'true';
    selected.setAttribute('aria-expanded', expanded);
  });

  options.querySelectorAll('li').forEach(li => {
    li.addEventListener('click', () => {
      const selectedLang = li.dataset.lang;
      localStorage.setItem('preferredLanguage', selectedLang);
      loadLanguage(selectedLang);
      options.classList.add('hidden');
      selected.setAttribute('aria-expanded', 'false');
      updateFlagUI(selectedLang);
    });
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target)) {
      options.classList.add('hidden');
      selected.setAttribute('aria-expanded', 'false');
    }
  });
});
