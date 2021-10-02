/// <reference types="cypress" />

describe("Handle js alerts", () => {
    it("Confirm js alert contains the correct text", () => {
        //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})

      //  cy.get('#checkboxes > :nth-child(1) > input').check().should('be.checked')
       // cy.get('#checkboxes').contains('Option 1').click()
      // cy.get(':nth-child(5) > input').uncheck().should('not.be.checked')

     //  cy.get("input[type='checkbox']").check(["option-1","option-2","option-3","option-4"])
      // cy.get('#radio-buttons').find("input[type='radio']").first().check()
      // cy.get('#radio-buttons').find("input[type='radio']").eq(4).check()

      cy.get('#dropdowm-menu-2').select('maven').should('have.value','maven')
    //  cy.get('#dropdown-menu-2').select('TestNG').contains('TestNG')

    });

    it("js alert contains the correct text", () => {
        //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})


        cy.get('#dropdowm-menu-2').select('TestNG').contains('TestNG')
    });
})