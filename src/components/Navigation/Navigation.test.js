import { render } from '@testing-library/react'
import user from '@testing-library/user-event'
import Navigation from './Navigation'

describe('Navigation', () => {
  it('renders correctly', () => {
    const { container } = render(
      <Navigation onClick={() => {}}>all songs</Navigation>
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  it('calls onClick correctly', () => {
    const handleClickMock = jest.fn()
    const { getByRole } = render(
      <Navigation handleClick={handleClickMock} isSongPlaying={false}>
        all songs
      </Navigation>
    )
    const button = getByRole('button')
    user.click(button)

    expect(handleClickMock).toHaveBeenCalled()
  })
})
