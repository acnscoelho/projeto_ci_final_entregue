class Subscribe {
    subscribe(){
        cy.get('input#susbscribe_email')
        .scrollIntoView()
        .type('tester-qa@mail.com')
  
      cy.get('button#subscribe').click()

      return this
    }

    verifySubscribe() {
      cy.contains('You have been successfully subscribed!').should('be.visible')

      return this
    }
}

export default new Subscribe()