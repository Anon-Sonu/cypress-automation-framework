///<reference types="Cypress" />

describe("Github Verification", () => {

  it("Github", () => {
    //Home Page
    cy.visit('https://github.com/');

    //Teams Tab
    cy.contains('Team').click({ force: true });
    cy.go('back');

    //Enterprice Tab
    cy.get("a[href='/enterprise']").first().click({ force: true });
    cy.go('back');

    //Explore Tab with Dropdown
    cy.get('.HeaderMenu-summary').first().click({ force: true });
    cy.get("a[href='/topics']").click({ force: true });
    cy.go('back');

    cy.contains('Explore').click({ force: true });
    cy.get("a[href='/collections']").click({ force: true });
    cy.go('back');

    cy.contains('Explore').click({ force: true });
    cy.get("a[href='/trending']").click({ force: true });
    cy.go('back');

    cy.contains('Explore').click({ force: true });
    cy.get("a[href='https://lab.github.com/']").first().click({ force: true });
    cy.go('back');

    cy.contains('Explore').click({ force: true });
    cy.get("a[href='https://opensource.guide']").click({ force: true });
    cy.go('back');

    //Marketplace Tab
    cy.get("a[href='/marketplace']").click({ force: true });

    //Pricing Tab with Dropdown 
    cy.get("a[href='/pricing']").first().click({ force: true });
    cy.contains('Plans').click({ force: true });
    cy.go('back');

    cy.contains('Pricing').click({ force: true });
    cy.get('a[href="/pricing#feature-comparison"]').first().click({ force: true });
    cy.go('back');

    cy.contains('Pricing').click({ force: true });
    cy.contains('Plans').click({ force: true });
    cy.go('back');

    // cy.contains('Explore').invoke('show');
    // cy.contains('Collections').click({ force: true });
    // cy.go('back');

    // cy.contains('Explore').invoke('show');
    // cy.contains('Trending').click({ force: true });
    // cy.go('back');


    //cy.get('.lh-condensed-ultra').first().click({force: true});
    // cy.get('.col-9-max > .h1-mktg').invoke('text').then((text) => {
    //     var a = text;
    //     cy.log(a);


  })

});
