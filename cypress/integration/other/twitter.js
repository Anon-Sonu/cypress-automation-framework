///<reference types="Cypress" />
///<reference types="Cypress-xpath" />

describe("Youtube Verification", () => {

    before(function () {
        cy.fixture('userDetails').then(function (data) {
            globalThis.data = data;
        })
        

    });

    beforeEach(() => {
        cy.visit('https://twitter.com/');
       
    });

    it("Youtube", () => {
        cy.clearCookies()
        cy.get('div[data-testid="logInSignUpFooter"] > .css-901oao').click();
        //cy.get('a[data-testid="loginButton"]').click();
        cy.get('a.css-4rbku5 > div.css-901oao').click();
        cy.get(data.emailClick).click();
        cy.get(data.emailClick).type(Cypress.env('email'));
        cy.get(data.passClick).type(Cypress.env('pass'));
        cy.get('div.css-901oao > span.css-16my406 > span.r-bcqeeo').first().click();
        // cy.get('div.css-1dbjc4n.r-obd0qt.r-16y2uox').click();
        // cy.get('div.css-1dbjc4n.r-16y2uox.r-1wbh5a2 > div.css-901oao.r-18jsvk2.r-37j5jr.r-a023e6.r-16dba41.r-rjixqe.r-bcqeeo.r-qvutc0').contains('Log out ').click();



    })

})
