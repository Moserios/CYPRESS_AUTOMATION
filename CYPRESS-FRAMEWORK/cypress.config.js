const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    url: 'http://zero.webappsecurity.com/index.html',
    login_name: "username",
    login_password: "password",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
