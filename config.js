const templateData =
{
  site: {
    domain: "cmints.io",
    title: "CMintS",
    description: "CMS created with the internationalization in mind",
    github: "https://github.com/Manvel/cmints-website",
    crowdin: "https://crowdin.com/translate/cmints-website",
    localeMap: {
      "en": {name: "English", region: "en_US"},
      "de": {name: "Deutsch", region: "de_DE", crowdin: "en-de"},
      "ru": {name: "Русский", region: "ru_RU", crowdin: "en-ru" },
      "es": {name: "Español", region: "es_ES", crowdin: "en-es" }
    },
    defaultLocale: "en"
  },
  navigations: [
      {path: "documentation", stringId: "header-menu-item-docs"}]};

// See https://markdown-it.github.io/markdown-it/#MarkdownIt.new
const markdownOptions = {};

const defaultLocale = "en";

const port = {
  https: 4000,
  http: 3000
};

exports.templateData = templateData;
exports.markdownOptions = markdownOptions;
exports.defaultLocale = defaultLocale;
exports.port = port;
