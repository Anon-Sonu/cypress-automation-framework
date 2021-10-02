///<reference types="Cypress" />

describe("Iterate over Elements", () => {

    before(function() {
        cy.fixture('products').then(function(data){
            globalThis.data = data;
        })
    });

    beforeEach(function()  {
        cy.visit('https://automationteststore.com/');
        cy.get("a[href$='category&path=52']").click();      
    });

    it("All hair care products", () => {
       globalThis.data.productName.forEach(function(element) {
           cy.addProduct(element);
       });
    });

})