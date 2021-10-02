///<reference types="Cypress" />

describe("Test Contact Us form via WebdriverUni", () => {
    it.only("Should be able to submit a successful submission via contact us form", () => {

       cy.visit('http://webdriveruniversity.com/')
       cy.get('#popup-alerts').invoke('removeAttr','target').click({force:true})
        cy.get('#button1').click()
        
  
    });

})