import { render } from '@testing-library/react'
import Navigation from './Navigation'
import user from '@testing-library/user-event'

describe('Navigation', () => {
  it('renders correctly', () => {
    render(<Navigation onClick={() => {}}>all songs</Navigation>)
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
