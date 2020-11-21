import AudioButton from './AudioButton'
import { render } from '@testing-library/react'

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
})
