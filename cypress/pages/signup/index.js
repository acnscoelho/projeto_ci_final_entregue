import menu from "../menu"

class SignUP {
    fillForm() {
        const timestamp = new Date().getTime()

        menu.goToSignUp()
    
        const signUpName = 'Ana QA'

        Cypress.env('signUpName', signUpName)
    
        cy.get('[data-qa="signup-name"]').type(Cypress.env('signUpName'))
        cy.get('[data-qa="signup-email"]').type(`tester-${timestamp}@mail.com`)
        cy.contains('button', 'Signup').click()
    
        cy.get('input[type=radio]').check('Mrs')

        cy.get('input[type=radio]').eq(1).check() 
    
        cy.get('[type=password]').type('12345', { log: false })
    
        cy.get('[data-qa="days"]').select('21')
        cy.get('[data-qa="months"]').select('August')
        cy.get('[data-qa="years"]').select('2000')
    
        cy.get('input[type=checkbox]#newsletter').check()
        cy.get('input[type=checkbox]#optin').check()
    
        cy.get('[data-qa="first_name"]').type('Ana')
        cy.get('[data-qa="last_name"]').type('Coelho')
        cy.get('[data-qa="company"]').type('Coelho Co')
        cy.get('[data-qa="address"]').type('rua treze, n 14')
        cy.get('[data-qa="country"]').select('United States')
        cy.get('[data-qa="state"]').type('Florida')
        cy.get('[data-qa="city"]').type('Sacramento')
        cy.get('[data-qa="zipcode"]').type('90002')
        cy.get('[data-qa="mobile_number"]').type('222 333 444')
    
        cy.get('[data-qa="create-account"]').click()

        cy.url().should('includes', 'account_created')
    
        cy.get('[data-qa="account-created"]').should('be.visible')
    
        cy.get('[data-qa="continue-button"]').click()

        return this
    }

    startSignUP(usuario) {
        cy.get('[data-qa="signup-name"]').type(`Ana QA`)
        cy.get('[data-qa="signup-email"]').type(usuario)
        cy.contains('button', 'Signup').click()

        return this
    }

    verifyIfSignUPConcluded() {
        cy.get('i.fa-user').parent().should('contain', Cypress.env('signUpName'))

        return this
    }

    verifyIfregisterUserWithExistingEmail() {
        cy.get(`.signup-form form p`)
        .should('be.visible')
        .and('contain', 'Email Address already exist!')

        return this
    }
}

export default new SignUP()