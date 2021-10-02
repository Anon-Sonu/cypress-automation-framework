/// <reference types="cypress" />

describe("Handle js alerts", () => {
    it("Confirm js alert contains the correct text", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#datepicker').scrollIntoView().invoke('removeAttr', 'target').click({ force: true })
        cy.get('#datepicker').click();
        // let date = new Date();
        // date.setDate(date.getDate());
        // cy.log(date.getDate());

        // let date1 = new Date();
        // date1.setDate(date1.getDate() + 5);
        // cy.log(date1.getDate());
        // cy.get('.input-group-addon').click();
        // cy.get('.next').first().click();
        // cy.get('.day').contains('21').click();

        var date = new Date();
        date.setDate(date.getDate());

        var year = date.getFullYear();
        var month = date.toLocaleString("default", { month: "long" });
        var day = date.getDate();

        cy.log("Year is: " + year);
        cy.log("Month is: " + month);
        cy.log("Day is: " + day);

        function selectMonthAndYear() {
            cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(currentDate => {
                if (!currentDate.text().includes(year)) {
                    cy.get('.next').first().click();
                    selectMonthAndYear();
                }
            })
        }
        selectMonthAndYear();
    })

});