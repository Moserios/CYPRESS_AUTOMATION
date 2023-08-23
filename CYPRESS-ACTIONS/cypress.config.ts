import { defineConfig } from "cypress";

export default defineConfig({
  reporter: "cypress-mochawesome-reporter",
  video: false,

  //,
  // e2e: {
  //   // We've imported your old cypress plugins here.
  //   // You may want to clean this up later by importing these.
  //   setupNodeEvents(on, config) {
  //     return require('./cypress/plugins/index.js')(on, config)
  //   },
  // },
  defaultCommandTimeout: 10000,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
