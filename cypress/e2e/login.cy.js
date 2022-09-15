/// <reference types="cypress" />

describe('Funcionalidade Login', () => {
  
  beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    
  });
 
  it('Fazer login com sucesso', () => {
    cy.get('#username').type("aluno@teste.com")
    cy.get('#password').type("teste@123")
    cy.get('.woocommerce-form > .button').click()

    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá')

  })

  it('Exibir mensagem de erro ao inserir usuário inválido', () => {
    cy.get('#username').type("aluno50@teste.com")
    cy.get('#password').type("teste@123")
    cy.get('.woocommerce-form > .button').click()

    cy.get('.woocommerce-error').should('contain' , 'Endereço de e-mail desconhecido')
 
  })

  it('Exibir mensagem de erro ao inserir senha inválida', () => {
    cy.get('#username').type("aluno@teste.com")
    cy.get('#password').type("teste@4567")
    cy.get('.woocommerce-form > .button').click()

    cy.get('.woocommerce-error').should('contain' , 'Erro: A senha fornecida para o e-mail aluno@teste.com está incorreta. Perdeu a senha?')

  })

  it('Recuperar senha perdida', () => {
    cy.get('.lost_password > a').click()
    cy.get('#user_login').type("aluno@teste.com")
    cy.get('.woocommerce-Button').click()
    cy.get('.woocommerce-message').should('contain' , 'O e-mail de redefinição de senha foi enviado')
  })
});
