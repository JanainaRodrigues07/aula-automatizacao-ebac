/// <reference types="cypress" />
var faker = require ('faker');

describe('Funcionalidade Pre-cadastro', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        
      });

      it('Fazer pré-cadastro com sucesso', () => {
        let nome = faker.name.firstName()
        let sobrenome = faker.name.lastName()
        let email = faker.internet.email(nome)

        cy.get('#reg_email').type(email)
        cy.get('#reg_password').type("teste.111")
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(nome)
        cy.get('#account_last_name').type(sobrenome)
        cy.get('.woocommerce-Button').click()

        cy.get('.woocommerce-message').should('contain' , 'Detalhes da conta modificados com sucesso')
    
      });

      it('Trocar senha com sucesso', () => {
        let nome = faker.name.firstName()
        let sobrenome = faker.name.lastName()
        let email = faker.internet.email()


        cy.get('#reg_email').type(email)
        cy.get('#reg_password').type("teste.123@")
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(nome)
        cy.get('#account_last_name').type(sobrenome)
        cy.get('#password_current').type("teste.123@")
        cy.get('#password_1').type("teste.321@")
        cy.get('#password_2').type("teste.321@")
        cy.get('.woocommerce-Button').click()

        cy.get('.woocommerce-message').should('contain' , 'Detalhes da conta modificados com sucesso')
        
      });
      
});

    
    
    

