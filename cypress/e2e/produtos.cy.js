/// <reference types="cypress" />

describe('Funcionalidade Produtos', () => {

    beforeEach(() => { 
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')

    });

    it('Adicionar produto ao carrinho com sucesso', () => {
        var quantidade = 5

        cy.get('[class="product-block grid"]').eq(5).click()
        cy.get('.button-variable-item-34').click()
        cy.get('.button-variable-item-Blue').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.woocommerce-message').should('contain' , quantidade + ' × “Arcadio Gym Short” foram adicionados no seu carrinho.')

    });

    it('Visualizar produtos no carrinho', () => {
        var quantidade = 2
        
        cy.get('[class="product-block grid"]').eq(8).click()
        cy.get('.button-variable-item-XS').click()
        cy.get(':nth-child(2) > .value > .variable-items-wrapper > .variable-item').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.woocommerce-message > .button').click()

        cy.get('.page-title').should('contain' , 'Carrinho')
        
    });

    it('Remover item do carrinho', () => {
        var quantidade = 10

        cy.get('[class="product-block grid"]').eq(5).click()
        cy.get('.button-variable-item-34').click()
        cy.get('.button-variable-item-Blue').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.dropdown-toggle > .text-skin > .icon-basket').click()
        cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .view-cart').click()
        cy.get('.remove > .fa').click()

        cy.get('.woocommerce-message').should('contain' , 'removido')
        
    });  
    
});