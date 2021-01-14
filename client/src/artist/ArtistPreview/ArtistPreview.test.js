import { render } from '@testing-library/react'
import user from '@testing-library/user-event'
import ArtistPreview from './ArtistPreview'

describe('ArtistPreview', () => {
  it('renders correctly', () => {
    const { container } = render(
      <ArtistPreview
        artist="Unprocessed"
        songTitle="Real"
        id="a"
        image="https://testurl.com"
        songUrl="https://testurl.com"
        updateTrack={() => {}}
        stopPlayingSong={() => {}}
        togglePlayingSong={() => {}}
        toggleCurrentSongId={() => {}}
        isSongPlaying={false}
        currentSongId="a"
        saveSong={() => {}}
        savedSongs={[]}
      />
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  it('calls updateTrack correctly', () => {
    const updateTrackMock = jest.fn()
    const { getByTestId } = render(
      <ArtistPreview
        artist="Unprocessed"
        songTitle="Real"
        id="a"
        image="https://testurl.com"
        songUrl="https://testurl.com"
        updateTrack={updateTrackMock}
        stopPlayingSong={() => {}}
        togglePlayingSong={() => {}}
        toggleCurrentSongId={() => {}}
        isSongPlaying={false}
        currentSongId="a"
        saveSong={() => {}}
        savedSongs={[]}
      />
    )
    const button = getByTestId('skip-button')
    user.click(button)
    expect(updateTrackMock).toHaveBeenCalled()
  })

  it('calls stopPlayingSong correctly', () => {
    const stopPlayingSongMock = jest.fn()
    const { getByTestId } = render(
      <ArtistPreview
        artist="Unprocessed"
        songTitle="Real"
        id="a"
        image="https://testurl.com"
        songUrl="https://testurl.com"
        updateTrack={() => {}}
        stopPlayingSong={stopPlayingSongMock}
        togglePlayingSong={() => {}}
        toggleCurrentSongId={() => {}}
        isSongPlaying={false}
        currentSongId="a"
        saveSong={() => {}}
        savedSongs={[]}
      />
    )
    const button = getByTestId('skip-button')
    user.click(button)
    expect(stopPlayingSongMock).toHaveBeenCalled()
  })

  it('calls togglePlayingSong correctly', () => {
    const togglePlayingSongMock = jest.fn()
    const { getByTestId } = render(
      <ArtistPreview
        artist="Unprocessed"
        songTitle="Real"
        id="a"
        image="https://testurl.com"
        songUrl="https://testurl.com"
        updateTrack={() => {}}
        stopPlayingSong={() => {}}
        togglePlayingSong={togglePlayingSongMock}
        toggleCurrentSongId={() => {}}
        isSongPlaying={false}
        currentSongId="a"
        saveSong={() => {}}
        savedSongs={[]}
      />
    )
    const button = getByTestId('audio-button')
    user.click(button)
    expect(togglePlayingSongMock).toHaveBeenCalled()
  })

  it('calls toggleCurrentSongId with the correct id', () => {
    const toggleCurrentSongIdMock = jest.fn()
    const { getByTestId } = render(
      <ArtistPreview
        artist="Unprocessed"
        songTitle="Real"
        id="a"
        image="https://testurl.com"
        songUrl="https://testurl.com"
        updateTrack={() => {}}
        stopPlayingSong={() => {}}
        togglePlayingSong={() => {}}
        toggleCurrentSongId={() => toggleCurrentSongIdMock('a')}
        isSongPlaying={false}
        currentSongId="a"
        saveSong={() => {}}
        savedSongs={[]}
      />
    )
    const button = getByTestId('audio-button')
    user.click(button)
    expect(toggleCurrentSongIdMock).toHaveBeenCalledWith('a')
  })

  it('switches the appearance of play and pause button by changing the state isSongPlaying', () => {
    const { getByTitle, queryByTitle, rerender } = render(
      <ArtistPreview
        artist="Unprocessed"
        songTitle="Real"
        id="a"
        image="https://testurl.com"
        songUrl="https://testurl.com"
        updateTrack={() => {}}
        toggleCurrentSongId={() => {}}
        isSongPlaying={false}
        currentSongId="a"
        saveSong={() => {}}
        savedSongs={[]}
      />
    )
    expect(getByTitle('play')).toBeInTheDocument()

    rerender(
      <ArtistPreview
        artist="Unprocessed"
        songTitle="Real"
        id="a"
        image="https://testurl.com"
        songUrl="https://testurl.com"
        updateTrack={() => {}}
        toggleCurrentSongId={() => {}}
        isSongPlaying={true}
        currentSongId="a"
        saveSong={() => {}}
        savedSongs={[]}
      />
    )
    expect(queryByTitle('play')).not.toBeInTheDocument()
    expect(getByTitle('pause')).toBeInTheDocument()
  })

  it('calls saveSong correctly', () => {
    const saveSongMock = jest.fn()
    const { getByTestId } = render(
      <ArtistPreview
        artist="Unprocessed"
        songTitle="Real"
        id="a"
        image="https://testurl.com"
        songUrl="https://testurl.com"
        updateTrack={() => {}}
        toggleCurrentSongId={() => {}}
        isSongPlaying={false}
        currentSongId="a"
        saveSong={saveSongMock}
        savedSongs={[]}
      />
    )
    const button = getByTestId('save-button')
    user.click(button)
    expect(saveSongMock).toHaveBeenCalled()
  })
})
