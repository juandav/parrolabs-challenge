const path = require("path")
const manageTranslations = require("react-intl-translations-manager").default

manageTranslations({
  messagesDirectory: path.join(process.cwd(), "src/i18n/messages"),
  translationsDirectory: path.join(process.cwd(), "src/i18n/locales"),
  languages: ["en", "es"]
})