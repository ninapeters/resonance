/// <reference types="cypress" />

const testId = (id) => `[data-testid="${id}"]`

describe('resonance', () => {
  it('should open the login page by first load', () => {
    cy.visit('/')
  })

  it('should display a login button', () => {
    cy.get('[data-testid=login-button]')
  })

  it('should lead to homepage by login', () => {
    const authHeader =
      'Basic NWY3ZmEzMjRlYzEyNGM1ZGE1NjcyZGQ1ZDZmYTliMmY6NjhhYmRmZThiNGU5NDk5NmI4ZmNiNzJjNzM3NDk4MTM='

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
      localStorage.setItem('token', resp.body.access_token)
    })

    cy.visit('/#')
  })
})
