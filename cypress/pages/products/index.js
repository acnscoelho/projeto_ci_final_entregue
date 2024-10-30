class Products {
    searchProducts(){
        cy.url().should('contain', 'products')
        cy.get('.title').should('be.visible').and('contain', 'All Products')
    
        cy.get('input#search_product').type('Shirt')
        cy.get('button#submit_search').click()

        return this
    }

    verifyAllProducts() {
        cy.url().should('contain', 'products')
        cy.get('.title').should('be.visible').and('contain', 'All Products')

        return this
    }

    productsList() {
        cy.get('.single-products')
        .should('be.visible')
        .and('have.length.at.least', 1)
        .first()
        .parent()
        .contains('View Product')
        .click()

        return this
    }

    productsDetail() {
        cy.get('.product-information > h2').should('be.visible')
        cy.get('.product-information p').should('be.visible').and('have.length', 4)
        cy.get('.product-information span span').should('be.visible')

        return this
    }

    verifySearchedProducts() {
        cy.get('.title').should('be.visible').and('contain', 'Searched Products')

        return this
    }

    verifyProductsRelatedToSearch() {
        cy.get('.single-products')
        .should('be.visible')
        .and('have.length.at.least', 1)

        return this
    }
}

export default new Products()