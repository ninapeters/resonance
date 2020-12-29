/// <reference types="cypress" />

const testId = (id) => `[data-testid="${id}"]`

describe('resonance', () => {
  it('should open the login page by first load', () => {
    cy.visit('/')
  })

  it('should display a login button', () => {
    cy.get('[data-testid=login-button]')
  })

  /*   it('should lead to homepage by clicking the login button', () => {
    cy.get('[data-testid=login-button]')
      .should('have.attr', 'href')
      .and('include', 'login')
      .then((href) => {
        cy.visit(href)
      })
  }) */
})
