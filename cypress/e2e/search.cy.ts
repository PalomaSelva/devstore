describe('add product to cart', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should be able to search products ', () => {
    cy.searchByQuery('moletom')
    cy.location('pathname').should('include', 'search')
    cy.location('search').should('include', 'moletom')
    cy.get('a[href^="/product"]').should('exist')
  })
  it('should not be able to search products without a search query', () => {
    // cy.get('input').type('moletom{enter}')
    cy.on('uncaught:exception', () => {
      return false
    })
    cy.visit('/search')
    cy.location('search').should('not.include', 'moletom')
    cy.contains('Nenhum resultado encontrado').should('exist')
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
