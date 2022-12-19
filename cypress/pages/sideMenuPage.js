class sideMenuPage {
    elements = {
        hamburger: () => cy.get('ion-buttons'),
        profileText: () => cy.contains('Profile'),
        profileContent: () => cy.get('.content-ltr > :nth-child(1) > ion-row.md > .title'),
        createPoolText: () => cy.contains('Create Pool'),
        createPoolHeader: () => cy.get('app-create-pool.ion-page > .pool_header'),
        viewPoolsText: () => cy.contains('View Pools'),
        poolHeader: () => cy.get('.pool_header'),
        faqsText: () => cy.contains('FAQs'),
        faqHeader: () => cy.get('.question_header > .freq_question1'),
        contactAdminText: () => cy.contains('Contact Admin'),
        contactAdminHeader: () => cy.get('.freq_question1'),
        transactionHistoryText: () => cy.contains('Transaction History'),
        transactionHistoryHeader: () => cy.contains('Transaction History'),
        logoutText: () => cy.contains('Logout'),
        loginHeader: () => cy.get('div.app_name'),
    }

    hamburgerIcon(){
        this.elements.hamburger().click()
    }

    profileClick(){
        this.elements.profileText().click();
    }

    createPoolClick(){
        this.elements.createPoolText().click();
    }

    viewPoolsClick(){
        this.elements.viewPoolsText().click();
    }

    faqsClick(){
        this.elements.faqsText().click();
    }

    contactAdminClick(){
        this.elements.contactAdminText().click();
    }

    transactionHistoryClick(){
        this.elements.transactionHistoryText().click();
    }
    
    logoutClick(){
        this.elements.logoutText().click();
    }

}

module.exports = new sideMenuPage();