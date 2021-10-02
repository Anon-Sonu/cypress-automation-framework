///<reference types="Cypress" />
///<reference types="Cypress-xpath" />

describe("Google Verification", () => {

    it("Google", () => {

        cy.visit('https://google.com/');
        // cy.get("a[data-pid='23'][class='gb_f']").click()
        //cy.xpath('//a[class="gb_f"][1]').click();
        cy.get('[title="Search"]').type('Github {enter}');
        // cy.get('[title="Search"]').click();
        //cy.get('.wM6W7d').eq(5).click();


    })

})
