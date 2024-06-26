describe('add product to cart', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('should be able to navigate to the product page and add it to the cart', () => {
    cy.get('a[href^="/product"]').first().click()

    cy.location('pathname').should('include', '/product')
    cy.contains('adicionar ao carrinho', {
      matchCase: false,
    }).click()

    expect(cy.contains('Cart(1)').should('exist'))
  })

  it('should not count duplicated products on cart', () => {
    cy.get('a[href^="/product"]').first().click()

    cy.location('pathname').should('include', '/product')
    cy.contains('adicionar ao carrinho', {
      matchCase: false,
    })
      .click()
      .click()
    expect(cy.contains('Cart(1)').should('exist'))
  })

  it('should be able to search products and add it to cart', () => {
    cy.searchByQuery('moletom')
    cy.get('a[href^="/product"]').first().click()
    cy.contains('adicionar ao carrinho', {
      matchCase: false,
    }).click()
    expect(cy.contains('Cart(1)').should('exist'))
  })
})
