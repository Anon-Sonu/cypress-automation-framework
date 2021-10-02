///<reference types="Cypress" />
///<reference types="Cypress-xpath" />

describe("Youtube Verification", () => {

    before(function () {
        cy.fixture('userDetails').then(function (data) {
            globalThis.data = data;
        })
        // cy.cypress('cypress.env').then(function (url) {
        //     globalThis.url = url;
        // })

    });

    beforeEach(() => {
        cy.visit(Cypress.env('url'));
        //cy.visit(Cypress.env('env').url);
    });

    it("Youtube", () => {
        // cy.get('#search').click()
        // cy.get('#search').type('cypress videos {enter}');
        //assertion
        // cy.get('a.style-scope.ytd-video-renderer[aria-label="Cypress Tutorials : Screenshot and Record video made easy !! by TechieQA 2 years ago 6 minutes, 11 seconds 4,566 views"]').contains('Cypress Tutorials');
        // Explore Tab
        // cy.get('a[title="Explore"]').click({ force: true });
        // cy.get(data.exploreUrl).contains('Trending').click();
        // var a = cy.get(data.exploreUrl).children();
        //  var b = a.length;
        // cy.log(b);
        // cy.get(data.exploreUrl).each(($el) => {
        //     var text = $el.text();
        //     var len = text.length();
        //     cy.log(len);
        // })
        //.its('length')
        const a = cy.get(data.exploreUrl,{timeout: 1000}).its('length').should('eq',9);
       // cy.wait(5000);
        cy.log(a);

        // var cls
        // cy.get(data.exploreUrl).then(($btn) => {
        //     cls = $btn.length;
        //     cy.log(cls);
        //     for (var i = 0; i < cls; i++) {
        //         cy.get(data.exploreUrl).eq(i).click({ force: true });
        //     }

        // })

        // for (var i = 0; i < cls; i++) {
        //     cy.get(data.exploreUrl).eq(i).click({ force: true });
        //     i++;
        // }

        // cy.get(data.exploreUrl).each(($el, index, $list) => {
        //     const a = $el.text();
        //     cy.log(a);
        //     cy.get($el).click({force:true});
        //     cy.wait(3000);
        // cy.get(data.exploreUrl).contains('Trending').click({ force: true });
        // cy.go('back');


    })

    //cy.get('.tp-yt-paper-tab.style-scope').contains('Music').click({ force: true });
    //div#tabsContent > tp-yt-paper-tab.iron-selected
    //.tp-yt-paper-tab.style-scope
    // cy.get('div#tabsContent > tp-yt-paper-tab.iron-selected').each(($el, index, $list) => {
    //     const a = $el.text();
    //     cy.contains(a).click({force:true});
    // })
    // cy.go('back');
    // cy.get(data.exploreUrl).contains('Music').click({ force: true });
    // cy.get(data.exploreUrl).contains('Gaming').click();
    // cy.get(data.exploreUrl).contains('News').click();
    // cy.get(data.exploreUrl).contains('Movies').click();
    // cy.get(data.exploreUrl).contains('Fashion & Beauty').click();
    // cy.get(data.exploreUrl).contains('Learning').click();
    // cy.get(data.exploreUrl).contains('Live').click();
    // cy.get(data.exploreUrl).contains('Sports').click();
    //cy.contains('Music').click({force: true});
    //Sign in
    //     cy.get('a.yt-simple-endpoint.style-scope.ytd-button-renderer > .size-small').click({force:true});
    //     cy.get('div.Xb9hP > #identifierId').click({force: true});
    //    cy.get('input[type="email"]').type('sonurprajapati2000 {enter}');
})

