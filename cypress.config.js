const { defineConfig } = require('cypress')
module.exports = defineConfig({

  projectId: '6m5xqs',
  viewportWidth: 1366,
  viewportHeight: 768,
  env: {},
  experimentalSourceRewriting: true,
  experimentalGetCookiesSameSite: true,
  chromeWebSecurity: false,
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    reporterEnabled: 'mochawesome',
    mochawesomeReporterOptions: {
      reportDir: 'cypress/reports/mocha',
      quite: true,
      overwrite: false,
      html: false,
      json: true,
    }
  },
  e2e: {
    experimentalSessionAndOrigin: true,
    setupNodeEvents(on, config) {
      //config.env.CYPRESS_INCLUDE_TAGS = 'custom,include,smoke';
      //config.env.CYPRESS_EXCLUDE_TAGS = 'wip';
      //on('file:preprocessor', tagify(config)); 
    },
    //baseUrl: 'https://arv3st:arv3st@arvestbankode4.prod.acquia-sites.com/',
    baseUrl: 'https://www.arvest.com/',
    //baseUrl: 'https://arv3st:arv3st@arvestbanktest.prod.acquia-sites.com/',
    //baseUrl: 'https://arv3st:arv3st@arvestbankdev.prod.acquia-sites.com/',
    specPattern: 'cypress/e2e/specs/*.spec.{js,jsx,ts,tsx}',

  },
  env: {
    "cyAdminUser": "extahossain@arvest.com",
    "cyAdminPassword": "DrupalTest7$"
  }
})
