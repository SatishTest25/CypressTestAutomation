const { defineConfig } = require("cypress");

const fs = require('fs-extra')
const path = require('path')

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve('../TESTCYPRESS/cypress', 'config', `${file}.json`)

  return fs.readJson(pathToConfigFile)
}

module.exports = defineConfig({
  e2e: {
    watchForFileChanges: false,
    defaultCommandTimeout: 40000,
    pageLoadTimeout: 12000,
    reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/reports",
    charts: true,
    reportFilename: "[name]_[datetime]-Report",
    timestamp: "longDate",
    embeddedScreenshots: true,
    inlineAssets: true,
    overwrite: false 
  },

  
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);

      const file = config.env.configFile || 'testenv'
  return getConfigurationByFile(file)
      // implement node event listeners here
    },
  },


});
