/// <reference types="cypress" />
import signup from '../pages/signup'

import login from '../pages/login'

import menu from '../pages/menu'

import contact from '../pages/contact'

import subscribe from '../pages/subscribe'

import products from '../pages/products'

import { faker } from '@faker-js/faker' 




describe('Trabalho Final - Automation Exercise', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Caso de Teste 1: Registrar usuário', () => {
    menu.goToSignUp()
    signup  
      .fillForm()
      .verifyIfSignUPConcluded()
    
  });

  it('Caso de Teste 2: Login do usuário com e-mail e senha corretos', () => {

    menu.goToSignUp()
    login
      .fillLogin('tester-1723166457031@mail.com', '12345')
      .verifyLoginCorrect()

  });

  it('Caso de Teste 3: Login de usuário com e-mail e senha incorretos', () => {

    menu.goToSignUp()
    login
      .fillLogin('tester-1723166457031@mail.com','54321')
      .verifyLoginIncorrect()
  });

  it('Caso de Teste 4: Sair do usuário', () => {

    menu.goToSignUp()
    login
    .fillLogin('tester-1723166457031@mail.com', '12345')
    .verifyLoginCorrect()
    .logout()
    .verifyLogout()

  });

  it('Caso de Teste 5: Registrar usuário com e-mail existente', () => {

    menu.goToSignUp()
    signup
      .startSignUP(`tester-1723166457031@mail.com`)
      .verifyIfregisterUserWithExistingEmail()
  });

  it('Caso de Teste 6: Formulário de contato', () => {

    menu.goToContactUS()
    contact
      .verifyGetInTouch()  
      .contactUS()
      .verifyContactUS()
  });

  it('Caso de Teste 8: Verificar todos os produtos e a página de detalhes do produto', () => {

    menu.goToProducts()
    products
      .verifyAllProducts()
      .productsList()
      .productsDetail()

  });

  it('Caso de Teste 9: Pesquisar produto', () => {

    menu.goToProducts()
    products
      .searchProducts()
      .verifySearchedProducts()
      .verifyProductsRelatedToSearch()

  });

  it('Caso de Teste 10: Verificar assinatura na página inicial', () => {

    subscribe
      .subscribe()
      .verifySubscribe()

  });

  it('Caso de Teste 15: Fazer pedido: Registrar antes de finalizar a compra', () => {
    signup.fillForm()
 
    cy.contains("Add to cart").click()
    cy.contains("View Cart").click()
    cy.get('.btn-default.check_out').should('be.visible')
    cy.get('.btn-default.check_out').click()
    cy.get('.heading').first().should('have.text', 'Address Details')
    cy.get('.heading').last().should('have.text', 'Review Your Order')
    cy.get('.form-control').type('378 98562-8781')
    cy.get('.btn-default.check_out').click()
    cy.get('[data-qa="name-on-card"]').type(faker.person.fullName())
    cy.get('[data-qa="card-number"]').type(faker.finance.creditCardNumber())
    cy.get('[data-qa="cvc"]').type(faker.finance.creditCardCVV())
    cy.get('[data-qa="expiry-month"]').type(12)
    cy.get('[data-qa="expiry-year"]').type(2035)
    cy.get('[data-qa="pay-button"]').click()
    cy.get('[data-qa="order-placed"]').should('be.visible')
    cy.get('[href *="delete"]').click()
    cy.get('b').should('contain', 'Account Deleted!')
    cy.get('[data-qa="continue-button"]').click()


  });
});