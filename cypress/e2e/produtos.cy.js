/// <reference types="cypress" />

describe('Funcionalidade Produtos', () => {

    beforeEach(() => { 
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')

    });

    it('Adicionar produto ao carrinho com sucesso', () => {
        var quantidade = 5


        cy.get('[class="product-block grid"]').eq(6).click()
        cy.get('.button-variable-item-S').click()
        cy.get(':nth-child(2) > .value > .variable-items-wrapper > .variable-item').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()


        
    });
    

    
});