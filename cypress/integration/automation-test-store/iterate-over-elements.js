///<reference types="Cypress" />

describe("Iterate over Elements", () => {
    it("All hair care products", () => {
        cy.visit('https://automationteststore.com/')
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click()
        cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
            cy.log("Index: " + index + " : " + $el.text())

        })

    });

    it.only("All specific hair care products", () => {
        // cy.visit('https://automationteststore.com/')
        // cy.get("a[href*='product/category&path=']").contains("Hair Care").click()
        cy.selectWeb();
        // cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
        //     if($el.text().includes('Seaweed Conditioner')){
        //         cy.wrap($el).click()
        //     }

        // })
        cy.selectProduct('Eau Parfumee au The Vert Shampoo');
    });

})