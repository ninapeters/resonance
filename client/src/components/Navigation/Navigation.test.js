import { BrowserRouter as Router } from 'react-router-dom'
import { render } from '@testing-library/react'
import user from '@testing-library/user-event'
import Navigation from './Navigation'

describe('Navigation', () => {
  it('renders correctly', () => {
    const { container } = render(
      <Router>
        <Navigation onClick={() => {}} />
      </Router>
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  it('calls onClick correctly', () => {
    const onClickMock = jest.fn()
    const { getByTestId } = render(
      <Router>
        <Navigation onClick={onClickMock} />
      </Router>
    )
    const HomeLink = getByTestId('link-home')
    user.click(HomeLink)

    expect(onClickMock).toHaveBeenCalled()

    const FavoriteLink = getByTestId('link-favorites')
    user.click(FavoriteLink)

    expect(onClickMock).toHaveBeenCalled()
  })
})
