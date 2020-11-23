import AudioButton from './AudioButton'
import { render } from '@testing-library/react'
import user from '@testing-library/user-event'

describe('AudioButton', () => {
  it('renders correctly', () => {
    const { container } = render(
      <AudioButton
        songUrl={'https://www.testurl.com'}
        id={'nj8se0eqez237'}
        currentSong={'nj8se0eqez237'}
        setCurrentSong={() => {}}
      />
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  it('shows play button per default', () => {
    const { isSongPlaying, getByTitle } = render(
      <AudioButton
        songUrl={'https://www.testurl.com'}
        id={'nj8se0eqez237'}
        currentSong={'nj8se0eqez237'}
        setCurrentSong={() => {}}
      />
    )
    expect(isSongPlaying).toBeFalsy()
    expect(getByTitle('play')).toBeInTheDocument()
  })

  it('toggles play and pause of a song', () => {
    window.HTMLMediaElement.prototype.play = jest.fn()
    window.HTMLMediaElement.prototype.load = jest.fn()
    window.HTMLMediaElement.prototype.load = jest.fn()

    const setCurrentSongMock = jest.fn()
    const { getByRole, queryByTitle, getByTitle } = render(
      <AudioButton
        songUrl={'https://www.testurl.com'}
        id={'a'}
        currentSong={'a'}
        setCurrentSong={setCurrentSongMock}
      />
    )
    expect(getByTitle('play')).toBeInTheDocument()

    const button = getByRole('button')

    user.click(button)
    expect(setCurrentSongMock).toHaveBeenCalledWith('a')
    expect(window.HTMLMediaElement.prototype.play).toHaveBeenCalled()
    expect(window.HTMLMediaElement.prototype.load).toHaveBeenCalled()
    expect(getByTitle('pause')).toBeInTheDocument()
    expect(queryByTitle('play')).not.toBeInTheDocument()

    user.click(button)
    expect(setCurrentSongMock).toHaveBeenCalledWith('a')
    expect(window.HTMLMediaElement.prototype.load).toHaveBeenCalled()
    expect(queryByTitle('play')).toBeInTheDocument()
  })
})
