const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '13szj6',
  e2e: {
    
    // watchForFileChanges: false,
    includeShadowDom: true,
    // excludeSpecPattern: '**/spec.cy.js',
    baseUrl: 'http://localhost:8100',
    viewportHeight: 1080,
    // viewportWidth: 1920,
    viewportWidth: 500,
    // experimentalSessionAndOrigin: true,
    experimentalStudio: true,
    env: {
      API_BASE_URL: 'https://api.typeform.com/',
      TYPEFORM_ACCESS_TOKEN: 'tfp_HKngXgStxSqXaCAXXTmhtsGxRbqYetEwuFmqTFjAFpU3_h1URJ5cWKC3u',
      userAlias: 'Samson Uteh',
      formId: 'WBaOWxM'
    }
   
  }

  


});
