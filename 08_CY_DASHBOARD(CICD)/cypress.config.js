const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
      "video": false
  },
  projectId: "sk8wgo",
});

// module.exports = {
//   projectId: "sk8wgo",
//   // ...rest of the Cypress project config
// }
