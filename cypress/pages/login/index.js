class Login {
    fillLogin(usuario, senha){
        cy.get('[data-qa="login-email"]').type(usuario)
        cy.get('[data-qa="login-password"]').type(senha, { log: false })
    
        cy.get('[data-qa="login-button"]').click()

        return this
    }

    verifyLoginCorrect() {
        cy.get('i.fa-user').parent().should('contain', 'Ana QA')

        return this
    }

    verifyLoginIncorrect() {
        cy.get('p').should('contain', 'Your email or password is incorrect!')

        return this
    }

    logout() {
        cy.contains('Logout').click()

        return this
    }

    verifyLogout() {    
        cy.url().should('contain', 'login')
        cy.contains("Login to your account").should("be.visible");
        
        return

    }
}

export default new Login()