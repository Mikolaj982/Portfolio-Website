const i18n = require('i18next');
const { initReactI18next }  = require('react-i18next');
const LanguageDetector = require('i18next-browser-languagedetector');
const Backend = require('i18next-http-backend');
// const { DateTime } = require('luxon');
const configure = () => {
i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    returnEmptyString: false,
    debug: true,
    fallbackLng: 'en',
    backend: {
        loadPath: '/locales/{{lng}}/{{ns}}.json',
      },
  });

// i18n.services.formatter.add('DATE_LONG', (value, lng, _options) => {
//   return DateTime.fromJSDate(value).setLocale(lng).toLocaleString(DateTime.DATE_HUGE)
// });
return i18n;
}
module.exports = {configure};
