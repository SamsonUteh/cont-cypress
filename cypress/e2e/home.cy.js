/// <reference types="cypress"/>
import homePage from '../pages/homePage';

// for the data on the home, use cy.request to compare the value with cy.visit
describe('home page', () => {
    beforeEach(() => {
        // cy.login('evergreen10073@yahoo.com', 'sS@amdo34df')
        // cy.visit('/home')
        cy.fixture('user').then(userLogin => {
            const email = userLogin.email // use alias instead according to best practice
            const password = userLogin.password
            cy.login(email, password)
            
        })
    })

    it.only('Parameter', () => {
        // cy.visit('/home');
        cy.request({})
        homePage.elements.noOfPoolsJoined();
        // will you parent and find to locate the '3' value for no of pools joined
        // watch videos of selectors from the cypress videos
        
    })
    
    it('upload image', () => {
        cy.visit('/home');
        homePage.upload('cypress/fixtures/images/joyful.jpg');
        cy.url().should('contain', 'home')
    })

})