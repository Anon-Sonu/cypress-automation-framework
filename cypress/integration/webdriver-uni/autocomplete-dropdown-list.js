/// <reference types="cypress" />

describe("Handle js alerts", () => {
    it("Confirm js alert contains the correct text", () => {
        //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#autocomplete-textfield').invoke('removeAttr', 'target').click({force:true})
        cy.get('#myInput').type('G')
        cy.get('#myInputautocomplete-list > *').each(($el, index, $list) => {
            const prod = $el.text();
            const productToSelect = 'Grapes';

            if(prod === productToSelect) {
                $el.click();
                cy.get('#submit-button') .click()  
                cy.url().should('include', productToSelect)
            }

        }).then(() => {
            cy.get('#myInput').type('B')
        cy.get('#myInputautocomplete-list > *').each(($el, index, $list) => {
            const prod = $el.text();
            const productToSelect = 'Bacon';

            if(prod === productToSelect) {
                $el.click();
                cy.get('#submit-button') .click()  
                cy.url().should('include', productToSelect)
            }

        })
        })

    })
})