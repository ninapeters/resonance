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
    const onClickMock = jest.fn()
    const { getByTestId } = render(
      <AudioButton onClick={() => onClickMock('a')} isSongPlaying={false} />
    )
    const button = getByTestId('audio-button')
    user.click(button)

    expect(onClickMock).toHaveBeenCalledWith('a')
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
