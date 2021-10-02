class ContactUs_PO {
     ContactUsForm(fname, lname, email, comment) {
        cy.get('[name="first_name"]').type(fname)
       cy.get('[name="last_name"]').type(lname)
       cy.get('[name="email"]').type(email)
       cy.get('textarea.feedback-input').type(comment)
    }
}
export default ContactUs_PO;