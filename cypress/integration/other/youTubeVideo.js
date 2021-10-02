///<reference types="Cypress" />
///<reference types="Cypress-xpath" />

describe("Youtube Verification", () => {

    before(function () {
        cy.fixture('userDetails').then(function (data) {
            globalThis.data = data;
        })
    });

    beforeEach(() => {
        cy.visit(Cypress.env('youtube'));
    });

    it("Youtube", () => {
        cy.get('#search').click()
        cy.get('#search').type('cypress videos {enter}');
        //cy.get('div#title-wrapper').eq(1).click({force:true});
        cy.get('div#title-wrapper > :nth-child(3)').click({force:true});


    })
})

