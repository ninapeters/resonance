import AudioButton from './AudioButton'
import { render } from '@testing-library/react'
import user from '@testing-library/user-event'

describe('AudioButton', () => {
  beforeEach(() => {
    window.HTMLMediaElement.prototype.play = jest.fn()
    window.HTMLMediaElement.prototype.pause = jest.fn()
    window.HTMLMediaElement.prototype.load = jest.fn()
  })

  it('renders correctly', () => {
    const { container } = render(
      <AudioButton onClick={() => {}} isSongPlaying={false} />
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  it('shows play button per default', () => {
    const { isSongPlaying, getByTitle } = render(
      <AudioButton onClick={() => {}} isSongPlaying={false} />
    )
    expect(isSongPlaying).toBeFalsy()
    expect(getByTitle('play')).toBeInTheDocument()
  })

  it('calls handleClick correctly', () => {
    const handleClickMock = jest.fn()
    const { getByRole } = render(
      <AudioButton handleClick={handleClickMock} isSongPlaying={false} />
    )
    const button = getByRole('button')
    user.click(button)

    expect(handleClickMock).toHaveBeenCalled()
  })
})
