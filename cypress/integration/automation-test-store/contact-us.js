///<reference types="Cypress" />

describe("Test Contact Us form via WebdriverUni", () => {
    before(function() {
        cy.fixture('example').then(function(data) {
            globalThis.data = data;
        })
    })
    it("Should be able to submit a successful submission via contact us form", () => {
        cy.visit("https://automationteststore.com/");
        cy.xpath("//a[contains(@href,'contact')]").click().then(function(itemHeaderText){
            cy.log('Selected'+ itemHeaderText.text())


        })

        cy.get('#ContactUsFrm_first_name').type(data.first);
        cy.get('#ContactUsFrm_email').type(data.last);
        cy.get('#ContactUsFrm_email').should('have.attr','name','email');
        cy.get('#ContactUsFrm_enquiry').type("No Enquiry");
        cy.get("button[title='Submit']").click();
        cy.get('.mb40 > :nth-child(3)').should('have.text','Your enquiry has been successfully sent to the store owner!');

    });

})