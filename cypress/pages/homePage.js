class homePage {
    elements = {
        uploadImage: () => cy.get('img'),
        noOfPoolsJoined: () => cy.contains('No of pools joined'),
        lastKYCUpdate: () => cy.contains('Last KYC Update')
    }

    upload(data){
        this.elements.uploadImage().selectFile(data)
    }
}

module.exports = new homePage();