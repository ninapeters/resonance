/// <reference types="cypress" />
import 'cypress-localstorage-commands'

const testId = (id) => `[data-testid="${id}"]`

Cypress.Commands.add('postToken', () => {
  const authHeader = Cypress.env('authHeader')

  const options = {
    method: 'POST',
    url: 'https://accounts.spotify.com/api/token',
    form: true,
    body: {
      grant_type: 'client_credentials',
    },
    headers: {
      Authorization: authHeader,
    },
  }

  cy.request(options).then((resp) => {
    cy.setLocalStorage('token', resp.body.access_token)
  })
})

describe('postToken', () => {
  before(() => {
    cy.postToken()
    cy.saveLocalStorage()
  })

  beforeEach(() => {
    cy.restoreLocalStorage()
  })

  it('should exist token in localStorage', () => {
    cy.getLocalStorage('token').should('exist')
    cy.getLocalStorage('token').then((token) => {
      console.log('token', token)
    })
  })
})

describe('resonance login page', () => {
  it('should open the login page by first load', () => {
    cy.visit('/')
  })

  it('should display a login button', () => {
    cy.get('[data-testid=login-button]')
  })

  it('should open the homepage by login', () => {
    cy.postToken()
    cy.saveLocalStorage()
    cy.getLocalStorage('token').should('exist')

    cy.visit('/')
  })
})
