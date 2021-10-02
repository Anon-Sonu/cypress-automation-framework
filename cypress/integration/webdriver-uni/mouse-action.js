/// <reference types="cypress" />

describe("Handle js alerts", () => {
    it("Confirm js alert contains the correct text", () => {
        //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({ force: true })

      //  cy.get('#draggable').trigger('mousedown',{which: 1});
        //cy.get('#droppable').trigger('mousemove').trigger('mouseup', {force: true});
        cy.get('#click-box').trigger('mousedown',{which: 1}).then(($element) => {
            expect($element).to.have.css('background-color', 'rgb(0, 255, 0)');
        })

    })
})