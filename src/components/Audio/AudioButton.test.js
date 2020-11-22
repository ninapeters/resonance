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

  it('changes the state isSongPlaying by click', () => {
    const { getByRole, queryByTitle, getByTitle } = render(
      <AudioButton
        songUrl={'https://www.testurl.com'}
        id={'nj8se0eqez237'}
        currentSong={'nj8se0eqez237'}
        setCurrentSong={() => {}}
      />
    )
    expect(getByTitle('play')).toBeInTheDocument()

    const button = getByRole('button')
    user.click(button)

    expect(getByTitle('pause')).toBeInTheDocument()
    expect(queryByTitle('play')).not.toBeInTheDocument()
  })
})
