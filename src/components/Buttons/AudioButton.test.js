import { render } from '@testing-library/react'
import user from '@testing-library/user-event'
import AudioButton from './AudioButton'

describe('AudioButton', () => {
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

  it('calls handleClick with the correct id', () => {
    const handleClickMock = jest.fn()
    const { getByRole } = render(
      <AudioButton
        handleClick={() => handleClickMock('a')}
        isSongPlaying={false}
      />
    )
    const button = getByRole('button')
    user.click(button)

    expect(handleClickMock).toHaveBeenCalledWith('a')
  })

  it('changes the button appearance by rerender', () => {
    const { getByTitle, queryByTitle, rerender } = render(
      <AudioButton onClick={() => {}} isSongPlaying={false} />
    )
    expect(getByTitle('play')).toBeInTheDocument()

    rerender(<AudioButton onClick={() => {}} isSongPlaying={true} />)
    expect(queryByTitle('play')).not.toBeInTheDocument()
    expect(getByTitle('pause')).toBeInTheDocument()
  })
})
