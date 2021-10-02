/// <reference types="cypress" />

describe("Handle js alerts", () => {
    it("Confirm js alert contains the correct text", () => {
        //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#iframe').invoke('removeAttr', 'target').click({force:true})

        cy.get('#frame').then($iframe => {
            const body = $iframe.contents().find('body')
            cy.wrap(body).as('iframe')

            cy.get('@iframe').find('#button-find-out-more').click()

            cy.get('@iframe').find('#myModal').as('model')

            cy.get('@model').should(($expectedText) => {
                const a = $expectedText.text();
                expect(a).to.include('Welcome to webdriveruniversity.com we sell a wide');

            })

            cy.get('@model').contains('close').click()
        })

    });
})