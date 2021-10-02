import ContactUs_PO from '../../support/PageObjects/webdriver-uni/contact_us_po'

///<reference types="Cypress" />

describe("Test Contact Us form via WebdriverUni", () => {
  before(function () {
    cy.fixture('userDetails').then(function (data) {
      globalThis.data = data;
    })
  });

  beforeEach(() => {
    cy.visit(Cypress.env('webDriver'));
  });

  it.only("Should be able to submit a successful submission via contact us form", () => {
    cy.get('#contact-us').invoke('removeAttr', 'target').click({ force: true })
    //cy.title().should('include', 'WebDriver | Contact Us')
    //cy.url().should('include', 'contactus')
    //  cy.get('[name="first_name"]').type(data.fname)
    //  cy.get('[name="last_name"]').type(data.lname)
    //  cy.get('[name="email"]').type(data.email)
    //  cy.get('textarea.feedback-input').type(data.comment)
    // cy.get('[type="submit"]').click()
    //  cy.get('h1').should('have.text','Thank You for your Message!')
    //  cy.document().should('have.property','charset').and('eq','UTF-8')

    const Contact_Us_PO = new ContactUs_PO();
    Contact_Us_PO.ContactUsForm(data.fname, data.lname, data.email, data.comment);

    cy.get('[type="submit"]').click()



  });

  it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
    //  cy.visit("http://webdriveruniversity.com/Contact-Us/contactus.html")
    // cy.get('#contact-us').click({force: true})
    cy.get('[name="first_name"]').type("Sonu")
    cy.get('[name="last_name"]').type("Prajapati")
    cy.get('textarea.feedback-input').type("Nothing")
    cy.get('[type="submit"]').click()
    cy.get('body').contains('Error: all fields are required')

  });



})