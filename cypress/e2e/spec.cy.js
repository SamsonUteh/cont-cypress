
const sampleForm = require('../fixtures/exampleForm.json');
const API_URL = Cypress.env('API_BASE_URL');
const authorization = `Bearer ${Cypress.env('TYPEFORM_ACCESS_TOKEN')}`


describe('empty spec', () => {
  it.skip('passes', () => {
    cy.visit('https://example.cypress.io')
    
  })

  it('Retrieves my user information', () => {
    cy.request({
      method: 'GET',
      url: `${API_URL}me`,
      headers: { authorization }
    }).should(({status, body}) => {
      const { alias, language } = body
      expect(status).to.eq(200)
      expect(alias).to.eq(Cypress.env('userAlias'))
      expect(language).to.eq('en')
    })
  })

  it('Retrieves form responses', () => {
    cy.request({
      method: 'GET',
      url: `${API_URL}forms/${Cypress.env('formId')}/responses`,
      headers: { authorization }
    }).should(({status, body}) => {
      expect(status).to.eq(200)
    })
  })

  it.only('Creates a form', () => {
    cy.request({
      method: 'POST',
      url: `${API_URL}forms`,
      headers: { authorization },
      body: sampleForm
    })
  })



})