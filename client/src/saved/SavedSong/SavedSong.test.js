import { render } from '@testing-library/react'
import user from '@testing-library/user-event'
import SavedSong from './SavedSong'

describe('SavedSong', () => {
  it('renders correctly', () => {
    const { container } = render(
      <SavedSong
        stopPlayingSongById={() => {}}
        artist="Unprocessed"
        songTitle="Real"
        id="a"
        deleteSavedSong={() => {}}
        toggleCurrentSongId={() => {}}
        isSongPlaying={false}
        currentSongId="a"
      />
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  xit('calls stopPlayingSongById with the correct id', () => {
    const stopPlayingSongByIdMock = jest.fn()
    const { getByTestId } = render(
      <SavedSong
        stopPlayingSongById={() => stopPlayingSongByIdMock('a')}
        artist="Unprocessed"
        songTitle="Real"
        id="a"
        deleteSavedSong={() => {}}
        toggleCurrentSongId={() => {}}
        isSongPlaying={false}
        currentSongId="a"
      />
    )
    const button = getByTestId('prepare-delete-button')
    user.click(button)
    expect(stopPlayingSongByIdMock).toHaveBeenCalledWith('a')
  })

  it('calls toggleCurrentSongId with the correct id', () => {
    const toggleCurrentSongIdMock = jest.fn()
    const { getByTestId } = render(
      <SavedSong
        stopPlayingSongById={() => {}}
        artist="Unprocessed"
        songTitle="Real"
        id="a"
        deleteSavedSong={() => {}}
        toggleCurrentSongId={() => toggleCurrentSongIdMock('a')}
        isSongPlaying={false}
        currentSongId="a"
      />
    )
    const button = getByTestId('audio-button')
    user.click(button)
    expect(toggleCurrentSongIdMock).toHaveBeenCalledWith('a')
  })

  xit('has delete button', () => {
    const { getByTestId } = render(
      <SavedSong
        stopPlayingSongById={() => {}}
        artist="Unprocessed"
        songTitle="Real"
        id="a"
        deleteSavedSong={() => {}}
        toggleCurrentSongId={() => {}}
        isSongPlaying={false}
        currentSongId="a"
      />
    )
    const Button = getByTestId('prepare-delete-button')
    expect(Button).toBeInTheDocument()
  })

  xit('renders delete field', () => {
    const { getByTestId } = render(
      <SavedSong
        stopPlayingSongById={() => {}}
        artist="Unprocessed"
        songTitle="Real"
        id="a"
        deleteSavedSong={() => {}}
        toggleCurrentSongId={() => {}}
        isSongPlaying={false}
        currentSongId="a"
      />
    )
    const Button = getByTestId('prepare-delete-button')
    user.click(Button)
    expect(getByTestId('reset-button')).toBeInTheDocument()
    expect(getByTestId('delete-button')).toBeInTheDocument()
  })

  xit("stops playing the current song, if it's the one to be deleted", () => {
    const stopPlayingSongByIdMock = jest.fn()
    const { getByTestId } = render(
      <SavedSong
        stopPlayingSongById={() => stopPlayingSongByIdMock('a')}
        artist="Unprocessed"
        songTitle="Real"
        id="a"
        deleteSavedSong={() => {}}
        toggleCurrentSongId={() => {}}
        isSongPlaying={false}
        currentSongId="a"
      />
    )
    const Button = getByTestId('prepare-delete-button')
    user.click(Button)
    expect(stopPlayingSongByIdMock).toHaveBeenCalledWith('a')
  })

  it('switches the appearance of play and pause button by changing the state isSongPlaying', () => {
    const { getByTitle, queryByTitle, rerender } = render(
      <SavedSong
        stopPlayingSongById={() => {}}
        artist="Unprocessed"
        songTitle="Real"
        id="a"
        deleteSavedSong={() => {}}
        toggleCurrentSongId={() => {}}
        isSongPlaying={false}
        currentSongId="a"
      />
    )
    expect(getByTitle('play')).toBeInTheDocument()

    rerender(
      <SavedSong
        stopPlayingSongById={() => {}}
        artist="Unprocessed"
        songTitle="Real"
        id="a"
        deleteSavedSong={() => {}}
        toggleCurrentSongId={() => {}}
        isSongPlaying={true}
        currentSongId="a"
      />
    )
    expect(queryByTitle('play')).not.toBeInTheDocument()
    expect(getByTitle('pause')).toBeInTheDocument()
  })
})
