const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      url: "https://parabank.parasoft.com/parabank/index.htm",
    },
    specPattern: 'cypress/integration/tests/*.ts'
  },
});
