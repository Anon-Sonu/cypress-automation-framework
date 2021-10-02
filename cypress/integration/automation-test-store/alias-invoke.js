///<reference types="Cypress" />

describe("Iterate over Elements", () => {
    it("All hair care products", () => {
        cy.visit('https://automationteststore.com/')
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click()

        cy.get(".fixed_wrapper .prdocutname").eq(2).invoke('text').as('productThumbnail')
        cy.get('@productThumbnail').its('length').should('be.gt', 5)
        cy.get('@productThumbnail').should('include', 'Curls to straight Shampoo')
    });

    it.only("All hair care products", () => {
        cy.visit('https://automationteststore.com/')
        cy.get('.pricetag.jumbotron').as('productThumb')
       // cy.get('@productThumb').find('.pricenew').each(($el, index, $list) => {
         //   cy.log($el.text())
        cy.get('.thumbnail').find('.oneprice').invoke('text').as('itemPrice')
            var itemsTotal = 0;
        cy.get('@itemPrice').then($linkText => {
            var itemPriceTotal = 0;
            var itemPrice = $linkText.split('$');
            var i;
            for(i=0;i<itemPrice.length; i++) {
               // cy.log(itemPrice[i])
                itemPriceTotal += Number(itemPrice[i])
            }
            itemsTotal += itemPriceTotal;
            cy.log("Non sale price items total: "+ itemPriceTotal)
        })
        });
})