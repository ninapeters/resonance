import { render } from '@testing-library/react'
import LoginPage from './LoginPage'

describe('LoginPage', () => {
  it('renders correctly', () => {
    const { container } = render(<LoginPage />)
    expect(container.firstChild).toMatchSnapshot()
  })
  it('links to the right location by clicking the login-button', () => {
    const { getByTestId } = render(<LoginPage />)
    expect(getByTestId('login-button').href).toBe('http://localhost:3001/login')
  })
})
