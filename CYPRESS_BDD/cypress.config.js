const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  e2e: {
    video: false,
    screenshotOnRunFailure: false,
    failOnStatusCode: false,
    excludeSpecPattern: '**/*.js',
    excludeSpecPattern: "**/*.md",
    //baseUrl: 'https://jsonplaceholder.typicode.com',
    specPattern: 'cypress/e2e/**/*.feature',
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
      // implement node event listeners here
  },
},
});
