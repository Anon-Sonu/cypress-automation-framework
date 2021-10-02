///<reference types="Cypress" />

describe("Test Contact Us form via WebdriverUni", () => {
    beforeEach("Should be able to submit a successful submission via contact us form", () => {
        cy.visit('http://webdriveruniversity.com/')
        cy.get('#data-table').invoke('removeAttr', 'target').click({ force: true })
    });

    it("Should be able to submit a successful submission via contact us form", () => {

        var userDetails = [];
        let numb = 0;

        cy.get('#thumbnail-1 td').each(($el, index, $list) => {
            userDetails[index] = $el.text();

        }).then(() => {
            var i;
            for(i=0;i<userDetails.length;i++) {
                if(Number(userDetails[i])) {
                    numb += Number(userDetails[i]);
                }
            }
            cy.log("Found Total Age "+ numb);
            expect(numb).to.eq(322);
        })

    });
    it.only("Should be able to submit a successful submission via contact us form", () => {
        cy.get('#thumbnail-1 td:nth-child(2)').each(($el, index, $list) => {
            const texr = $el.text();
            if($el.text().includes('Woods')) {
                cy.get('#thumbnail-1 td:nth-child(2)').eq(index).next().then(function(age) {
                        const userAge = age.text();
                        expect(userAge).to.equal('80');
                })
            }
        })
    });
    
    

})