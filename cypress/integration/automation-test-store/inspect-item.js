///<reference types="Cypress" />

describe("Test Contact Us form via WebdriverUni", () => {
    it("Should be able to submit a successful submission via contact us form", () => {
        cy.visit('https://automationteststore.com/')
        cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .fixed_wrapper > .fixed > .prdocutname').click()
    });

    it("Should be able to submit a successful submission via contact us form", () => {
        cy.visit('https://automationteststore.com/')
        cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click()
    });

    it("Should be able to submit a successful submission via contact us form", () => {
        cy.visit('https://automationteststore.com/')
        cy.get('.fixed_wrapper').find('.prdocutname').eq(0).click()
    });

    it.only("Should be able to submit a successful submission via contact us form", () => {
        cy.visit('https://automationteststore.com/index.php?rt=content/contact')
        cy.contains('#ContactUsFrm','Contact Us Form').find('#field_11').should('contain','First name:')
        
    });

})