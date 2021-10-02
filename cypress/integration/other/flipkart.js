///<reference types="Cypress" />
///<reference types="Cypress-xpath" />

describe("Flipkart Verification", () => {

    before(function () {
        cy.fixture('userDetails').then(function (data) {
            globalThis.data = data;
        })
    });

    beforeEach(() => {
        cy.visit("/");
    });

    it("Flipkart", () => {
        cy.get('div._37M3Pb > div.eFQ30H').each(($el, index, $list) => {
            var a = $el.text();
            cy.log(a);
            cy.get($el).click({ force: true });
        })
        cy.get('div.exehdJ').trigger('mouseover');
        cy.get('div._1bQ5Pp > ul > li').contains('Sell on Flipkart').click({ force: true })
        cy.go('back');
        cy.get('div.exehdJ').trigger('mouseover');
        cy.get('div._1bQ5Pp > ul > li').contains('24x7 Customer Care').click({ force: true })
        cy.get('div._1kidPb > span').contains('Baby & Kids').click({ force: true });
        cy.get('div._1QrT3s > div._1fwVde > a[title="T-Shirts"]').first().contains('T-Shirts').click({ force: true })
        //cy.get('div._3Mn1Gg > div._2GoDe3 >  div._1AtVbE').type('{pagedown}',{ keycode: 192, release: false });
      // cy.get('div#container > div > footer._3voSl0').scrollTo('bottom');
       // cy.scrollIntoView('div#container > div > footer._3voSl0',{force:true});
       cy.get('div#container > div > footer._3voSl0').scrollIntoView()
         cy.wait(5000);

        // for (var i = 0; i < 10; i++) {
        //     cy.get(data.flipProd).trigger('pagedown', { keycode: 192, release: false });
        //     cy.wait(5000);
        // }
        cy.get('div.bra6U8 > span').click({ force: true });

    })
})

