const fs = require('fs')

module.exports = {
  devServer: {
    disableHostCheck: true,
    https: {
      key: fs.readFileSync('./klikpalserver.key.txt'),
      cert: fs.readFileSync('./www.klikpal.com.crt'),
  },
  },

  transpileDependencies: ['vuetify'],

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false,
    },
  },
}
