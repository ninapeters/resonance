import { render } from '@testing-library/react'
import user from '@testing-library/user-event'
import SavedSong from './SavedSong'

describe('SavedSong', () => {
  it('renders correctly', () => {
    const { container } = render(
      <SavedSong
        stopPlayingSong={() => {}}
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

  it('calls toggleCurrentSongId with the correct id', () => {
    const toggleCurrentSongIdMock = jest.fn()
    const { getByTestId } = render(
      <SavedSong
        stopPlayingSong={() => {}}
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

  it('has delete button', () => {
    const { getByTestId } = render(
      <SavedSong
        stopPlayingSong={() => {}}
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

  it('renders delete field and stops playing current song', () => {
    const stopPlayingSongMock = jest.fn()
    const { getByTestId } = render(
      <SavedSong
        stopPlayingSong={stopPlayingSongMock}
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
    expect(stopPlayingSongMock).toHaveBeenCalled()
    expect(getByTestId('reset-button')).toBeInTheDocument()
    expect(getByTestId('delete-button')).toBeInTheDocument()
  })

  it("stops playing the current song, if it's the one to be deleted", () => {
    const stopPlayingSongMock = jest.fn()
    const { getByTestId } = render(
      <SavedSong
        stopPlayingSong={() => stopPlayingSongMock('a')}
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
    expect(stopPlayingSongMock).toHaveBeenCalledWith('a')
  })

  it('switches the appearance of play and pause button by changing the state isSongPlaying', () => {
    const { getByTitle, queryByTitle, rerender } = render(
      <SavedSong
        stopPlayingSong={() => {}}
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
        stopPlayingSong={() => {}}
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
