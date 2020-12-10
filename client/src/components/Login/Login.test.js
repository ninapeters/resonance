import { render } from '@testing-library/react'
import Login from './Login'

describe('Login', () => {
  it('renders correctly', () => {
    const { container } = render(<Login />)
    expect(container.firstChild).toMatchSnapshot()
  })
  it('links to the right location by clicking the login-button', () => {
    const { getByTestId } = render(<Login />)
    expect(getByTestId('login-button').href).toBe('http://localhost:3001/login')
  })
})
