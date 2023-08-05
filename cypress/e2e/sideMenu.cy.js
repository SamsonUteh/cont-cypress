/// <reference types="cypress"/>
import sideMenu from '../pages/sideMenuPage';


describe('Side Menu For Verified User', () => {
    before(() => {
        cy.login('evergreen10073@yahoo.com', 'sS@amdo34df')
        // can you call the cy.visit here?
    });

    it('Hamburger Icon displayed menu when clicked', () => {
        cy.visit('/home');
        sideMenu.hamburgerIcon()
    })

    
    // image of the text
    it('Contains Profile text and the appropriate image', () => {
        cy.visit('/home');
        // sideMenu.hamburgerIcon();
        sideMenu.elements.profileText()
           .should('contain', 'Profile')
           .parents('div[menu-close]')
           .find('img[src="assets/Kyc.png"]')

    })

    it('Contains Create Pool text and the appropriate image', () => {
        cy.visit('/home');
        sideMenu.hamburgerIcon();
        sideMenu.elements.createPoolText()
           .should('contain', 'Create Pool')
           .parents('div[menu-close]')
           .find('img[src="assets/People.png"]')

    })

    it('Contains View Pools text and the appropriate image', () => {
        cy.visit('/home');
        sideMenu.hamburgerIcon();
        sideMenu.elements.viewPoolsText()
           .should('contain', 'View Pools')
           .parents('div[menu-close]')
           .find('img[src="assets/Pools.png"]')

    })

    it('Contains FAQs text and the appropriate image', () => {
        cy.visit('/home');
        sideMenu.hamburgerIcon();
        sideMenu.elements.faqsText()
           .should('contain', 'FAQs')
           .parents('div[menu-close]')
           .find('img[src="assets/Questions.png"]')

    })

    it('Contains Contact Admin text and the appropriate image', () => {
        cy.visit('/home');
        sideMenu.hamburgerIcon();
        sideMenu.elements.contactAdminText()
           .should('contain', 'Contact Admin')
           .parents('div[menu-close]')
           .find('img[src="assets/Admin.png"]')

    })

    it('Contains Transaction History text and the appropriate image', () => {
        cy.visit('/home');
        sideMenu.hamburgerIcon();
        sideMenu.elements.transactionHistoryText()
           .should('contain', 'Transaction History')
           .parents('div[menu-close]')
           .find('img[src="assets/Transaction.png"]')

    })

    it('Contains Logout text and the appropriate image', () => {
        cy.visit('/home');
        sideMenu.hamburgerIcon();
        sideMenu.elements.logoutText()
           .should('contain', 'Logout')
           .parents('div[menu-close]')
           .find('img[src="assets/Logout.png"]')

    })

    it('Profile is clicked and navigates to profile page', () => {
        cy.visit('/home');
        sideMenu.hamburgerIcon();
        sideMenu.profileClick();
        cy.url().should('contain', '/profile');
        sideMenu.elements.profileContent().should('contain', 'Username')

    })

    it('Create Pool is clicked and navigates to create pool page', () => {
        cy.visit('/home');
        sideMenu.hamburgerIcon();
        sideMenu.createPoolClick();
        cy.url().should('contain', '/create-pool');
        sideMenu.elements.createPoolHeader().should('contain', 'New Pool')

    })

    it('View Pools is clicked and navigates to view pools page', () => {
        cy.visit('/home');
        sideMenu.hamburgerIcon();
        sideMenu.viewPoolsClick();
        cy.url().should('contain', '/view-pool')
        sideMenu.elements.poolHeader().should('contain', 'Pools')

    })

    it.only('FAQs is clicked and navigates to FAQs page', () => {
        cy.visit('/home');
        sideMenu.hamburgerIcon();
        sideMenu.faqsClick();
        cy.url().should('contain', '/faq')
        sideMenu.elements.faqHeader().should('contain', 'Frequently Asked Questions')
        cy.go('back')
    })

    it('Contact Admin is clicked and navigates to contact admin page', () => {
        cy.visit('/home');
        sideMenu.hamburgerIcon();
        sideMenu.contactAdminClick();
        cy.url().should('contain', '/contact-admin')
        sideMenu.elements.contactAdminHeader().should('contain', 'Contact Admin')
    })

    it('Transaction history is clicked and navigates to transaction history page', () => {
        cy.visit('/home');
        sideMenu.hamburgerIcon();
        sideMenu.transactionHistoryClick();
        cy.url().should('contain', '/transaction-history')
        sideMenu.elements.transactionHistoryHeader().should('contain', 'Transaction History')
    })

    it('Logout is clicked and navigates to login page', () => {
        cy.visit('/home');
        sideMenu.hamburgerIcon();
        sideMenu.logoutClick();
        cy.url().should('contain', '/login')
        sideMenu.elements.loginHeader().should('contain', 'AJOITE')
    })

   

})

// describe.skip('Side Menu For Unverified User', () => {
//     beforeEach(() => {
//         cy.login('yellow@gmail.com', 'sS@amdo34df')
       
//     });

//     it('Hamburger Icon displayed menu when clicked', () => {
//         cy.visit('/home');
//         sideMenu.hamburgerIcon()
//     })

//     it('Side menu contains all menu items', () => {
//         cy.visit('/home');
//         sideMenu.hamburgerIcon();
//         sideMenu.elements.profileText();
//         sideMenu.elements.createPoolText();
//         sideMenu.elements.viewPoolsText();
//         sideMenu.elements.faqsText();
//         sideMenu.elements.contactAdminText();
//         sideMenu.elements.transactionHistoryText();
//         sideMenu.elements.logoutText();
//     })

    
//     it('Contains Profile text and the appropriate image', () => {
//         cy.visit('/home');
//         sideMenu.hamburgerIcon();
//         sideMenu.elements.profileText()
//            .should('contain', 'Profile')
//            .parents('div[menu-close]')
//            .find('img[src="assets/Kyc.png"]')

//     })

//     it('Contains Create Pool text and the appropriate image', () => {
//         cy.visit('/home');
//         sideMenu.hamburgerIcon();
//         sideMenu.elements.createPoolText()
//            .should('contain', 'Create Pool')
//            .parents('div[menu-close]')
//            .find('img[src="assets/People.png"]')

//     })

//     it('Contains View Pools text and the appropriate image', () => {
//         cy.visit('/home');
//         sideMenu.hamburgerIcon();
//         sideMenu.elements.viewPoolsText()
//            .should('contain', 'View Pools')
//            .parents('div[menu-close]')
//            .find('img[src="assets/Pools.png"]')

//     })

//     it('Contains FAQs text and the appropriate image', () => {
//         cy.visit('/home');
//         sideMenu.hamburgerIcon();
//         sideMenu.elements.faqsText()
//            .should('contain', 'FAQs')
//            .parents('div[menu-close]')
//            .find('img[src="assets/Questions.png"]')

//     })

//     it('Contains Contact Admin text and the appropriate image', () => {
//         cy.visit('/home');
//         sideMenu.hamburgerIcon();
//         sideMenu.elements.contactAdminText()
//            .should('contain', 'Contact Admin')
//            .parents('div[menu-close]')
//            .find('img[src="assets/Admin.png"]')

//     })

//     it.only('Contains Transaction History text and the appropriate image', () => {
//         cy.visit('/home');
//         sideMenu.hamburgerIcon();
//         sideMenu.elements.transactionHistoryText()
//            .should('contain', 'Transaction History')
//            .parents('div[menu-close]')
//            .find('img[src="assets/Transaction.png"]')

//     })

//     it.only('Contains Logout text and the appropriate image', () => {
//         cy.visit('/home');
//         sideMenu.hamburgerIcon();
//         sideMenu.elements.logoutText()
//            .should('contain', 'Logout')
//            .parents('div[menu-close]')
//            .find('img[src="assets/Logout.png"]')

//     })



//     it('Profile is clicked and navigates to profile page', () => {
//         cy.visit('/home');
//         sideMenu.hamburgerIcon();
//         sideMenu.profileClick();
//         cy.url().should('contain', '/profile');
//         sideMenu.elements.profileContent().should('contain', 'Username')

//     })

//     it('Create Pool is clicked and navigates to create pool page', () => {
//         cy.visit('/home');
//         sideMenu.hamburgerIcon();
//         sideMenu.createPoolClick();
//         cy.url().should('not.contain', '/create-pool');
//         sideMenu.elements.createPoolText().should('be.disabled');
        
//     })
    
//     it('View Pools is clicked and navigates to view pools page', () => {
//         cy.visit('/home');
//         sideMenu.hamburgerIcon();
//         sideMenu.viewPoolsClick();
//         cy.url().should('not.contain', '/view-pool')
//         sideMenu.elements.viewPoolsText().should('be.disabled');
      

//     })

//     it('FAQs is clicked and navigates to FAQs page', () => {
//         cy.visit('/home');
//         sideMenu.hamburgerIcon();
//         sideMenu.faqsClick();
//         cy.url().should('contain', '/faq')
//         sideMenu.elements.faqHeader().should('contain', 'Frequently Asked Questions')
//     })

//     it('Contact Admin is clicked and navigates to contact admin page', () => {
//         cy.visit('/home');
//         sideMenu.hamburgerIcon();
//         sideMenu.contactAdminClick();
//         cy.url().should('contain', '/contact-admin')
//         sideMenu.elements.contactAdminHeader().should('contain', 'Contact Admin')
//     })

//     it('Transaction history is clicked and navigates to transaction history page', () => {
//         cy.visit('/home');
//         sideMenu.hamburgerIcon();
//         sideMenu.transactionHistoryClick();
//         cy.url().should('not.contain', '/transaction-history')
//         sideMenu.elements.transactionHistoryText().should('be.disabled');
//     })

//     it('Logout is clicked and navigates to login page', () => {
//         cy.visit('/home');
//         sideMenu.hamburgerIcon();
//         sideMenu.logoutClick();
//         cy.url().should('contain', '/login')
//         sideMenu.elements.loginHeader().should('contain', 'AJOITE')
//     })


// })





