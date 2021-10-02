///<reference types="Cypress" />
///<reference types="Cypress-xpath" />

describe("Amazon Verification", () => {

    before(function () {
        cy.fixture('userDetails').then(function (data) {
            globalThis.data = data;
        })
    });

    //var cls;

    beforeEach(() => {
        cy.visit(Cypress.env('amazon'));
    });

    it("Amazon", () => {
        var cls;
        cy.get('div#nav-signin-tooltip').click();   //Sign Button Click
        cy.get('input#ap_email').click();   //Email Click
        cy.get('input#ap_email').type(Cypress.env('email'));    //Email Typed
        cy.get('input#continue').click();   //Continue button click
        cy.get('input#ap_password').click();    //Password Click
        cy.get('input#ap_password').type(Cypress.env('pass'));     //Password Typed
        cy.get('input#signInSubmit').click();   //Sign in Complete
        // cy.get('div#nav-search-dropdown-card').click(); //Dropdown click

        // cy.get('select#searchDropdownBox').select('Amazon Devices', { force: true })

        // //cy.get('div#nav-search-dropdown-card').contains('Amazon Devices').click({ force: true });
        // cy.get('input#twotabsearchtextbox').click();    //Search Tab Clicked
        // cy.get('input#twotabsearchtextbox').type('Mobile {enter}');     //Mobile typed
        // cy.get('span#a-autoid-0-announce').click();     //Featured Filter Clicked
        // // cy.get('a#s-result-sort-select_1.a-dropdown-link').click();     //Selected Low to High
        // // s-result-sort-select_2
        //cy.get('a#s-result-sort-select_2.a-dropdown-link').click();


        // var var1
        // var var2
        // cy.get(data.mobileProduct).eq(0).then(($span) => {
        //     const var1 = $span.text();
        //     cy.log(var1);
        // })

        // cy.get(data.mobileProduct).eq(1).then(($span) => {
        //     const var2 = $span.text();
        //     cy.log(var2);
        // })
        // if (var1 < var2) {
        //     cy.log('Filter Applied Lowest to Highest')
        // }
        // else {
        //     cy.log('Filter Applied Highest to Lowest')
        // }

        cy.get('div.nav-left > a#nav-hamburger-menu').click();
        cy.get('div#hmenu-content > ul.hmenu[data-menu-id="1"] > li > a.hmenu-item').contains('Best Sellers').click({ force: true });
        // cy.get('span#zg_banner_text').should('have.text', 'Amazon Bestsellers');

        // cy.get('div._p13n-zg-nav-tab-all_style_zg-tabs__EYPLq > ul > li > div > a').contains('New Releases').click();
        // cy.get('span#zg_banner_text').should('have.text', 'Amazon Hot New Releases');

        // cy.get('div._p13n-zg-nav-tab-all_style_zg-tabs__EYPLq > ul > li > div > a').contains('Movers and Shakers').click();
        // cy.get('span#zg_banner_text').should('have.text', 'Amazon Movers & Shakers');

        // cy.get('div._p13n-zg-nav-tab-all_style_zg-tabs__EYPLq > ul > li > div > a').contains('Most Wished For').click();
        // cy.get('span#zg_banner_text').should('have.text', 'Amazon Most Wished For');

        // cy.get('div._p13n-zg-nav-tab-all_style_zg-tabs__EYPLq > ul > li > div > a').contains('Most Gifted').click();
        // cy.get('span#zg_banner_text').should('have.text', 'Amazon Gift Ideas')

        // cy.get('div._p13n-zg-nav-tab-all_style_zg-tabs__EYPLq > ul > li > div > a').contains('Bestsellers').click();
        cy.get('.p13n-sc-truncate-desktop-type2').eq(0).click();
        //cy.get('select#quantity').click();

        cy.get('select#quantity > option').then(function ($btn) {
            var cls = $btn.length;
            cy.log(cls);
            const uuid = () => Cypress._.random(1, cls)
            const id = uuid()
            const testname = `${id}`
            cy.log(testname);
            cy.get('select#quantity').select(testname, { force: true });

            cy.get('input#add-to-cart-button').click({ force: true });
            cy.get('a#nav-cart > div#nav-cart-count-container > span#nav-cart-count').click({ force: true });
        
            cy.get('span.a-dropdown-prompt').eq(0).then(($btn) => {
                const txt = $btn.text()
                cy.log(txt);

                if (testname == txt) {
                    cy.log('----------');
                    cy.log('Number of Cart Items is Added Correctly');
                }
            })
        })



        // cy.get('input#add-to-cart-button').click({ force: true });
        // cy.get('a#nav-cart > div#nav-cart-count-container > span#nav-cart-count').click({ force: true });
        // // var cart = cy.get('span#a-autoid-0 > span.a-button-inner > span#a-autoid-0-announce > span.a-dropdown-prompt').invoke('text');
        // // cy.log(cart);
        // cy.get('span.a-dropdown-prompt').eq(0).then(($btn) => {
        //     const txt = $btn.text()
        //     // $btn is the object that the previous command yielded
        //     cy.log(txt);
        //   })
        //   if(testname == txt){
        //       cy.log('----------');
        //       cy.log('Cart Items as Added Correctly');
        //}
    })
})

