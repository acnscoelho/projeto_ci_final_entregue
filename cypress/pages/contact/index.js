class Contact {
    contactUS() {
        cy.get('[data-qa="name"]').type(`Tester`)
        cy.get('[data-qa="email"]').type(`tester-qa@mail.com`)
        cy.get('[data-qa="subject"]').type(`Test Automation`)
        cy.get('[data-qa="message"]').type(`Learning Test Automation`)
    
        cy.fixture('example.json').as('arquivo')
        cy.get('input[name="upload_file"]').selectFile('@arquivo')
    
        cy.get('[data-qa="submit-button"]').click()

        return this
    }

    verifyGetInTouch(){
        cy.get(`.contact-form h2`)
        .should('be.visible')
        .and('have.text', 'Get In Touch')

        return this
    }
    
    verifyContactUS() {
        cy.get('.status').should('have.text', 'Success! Your details have been submitted successfully.')

        return this
    }
}

export default new Contact()