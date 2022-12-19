const { defineConfig } = require("cypress");


module.exports = defineConfig({
  projectId: '13szj6',
  e2e: {
    
    // watchForFileChanges: false,
    includeShadowDom: true,
    excludeSpecPattern: '**/spec.cy.js',
    baseUrl: 'http://localhost:8100',
    viewportHeight: 1080,
    viewportWidth: 1920,
    experimentalSessionAndOrigin: true,
    experimentalStudio: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
