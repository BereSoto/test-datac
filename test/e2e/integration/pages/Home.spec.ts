// https://docs.cypress.io/api/introduction/api.html

describe('Home content testing', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.contains('h1', 'kuntica')
  })
})
