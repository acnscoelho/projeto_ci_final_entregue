class Menu {
    goToProducts(){
        cy.contains(`Products`).click()
    }

    goToSignUp(){
        cy.contains('Signup').click()
    }

    goToContactUS(){
        cy.contains(`Contact us`).click()
    }

}

export default new Menu()


    