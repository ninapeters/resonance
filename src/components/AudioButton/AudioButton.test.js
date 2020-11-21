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
    const { isSongPlaying, getByText } = render(
      <AudioButton
        songUrl={'https://www.testurl.com'}
        id={'nj8se0eqez237'}
        currentSong={'nj8se0eqez237'}
        setCurrentSong={() => {}}
      />
    )
    expect(getByText(/play/)).toBeInTheDocument()
    expect(isSongPlaying).toBeFalsy()
  })

  /*   it('changes the state isSongPlaying by calling handleAudio', () => {
    const handleAudioMock = jest.fn()
    const { getByTitle, getByRole } = render(
      <AudioButton
        songUrl={'https://www.testurl.com'}
        id={'nj8se0eqez237'}
        currentSong={'nj8se0eqez237'}
        setCurrentSong={() => {}}
        onClick={handleAudioMock}
      />
    )
    expect(getByTitle(/pause/)).toBeInTheDocument()

    const button = getByRole('button')
    expect(button).toBeInTheDocument()

    user.click(button)
    expect(handleAudioMock).toHaveBeenCalled()
  }) */
})
