import { render } from '@testing-library/react'
import user from '@testing-library/user-event'
import ArtistPage from './ArtistPage'

describe('ArtistPage', () => {
  it('renders correctly', () => {
    const { container } = render(
      <ArtistPage
        artists={[
          {
            artist: 'Unprocessed',
            songTitle: 'Real',
            songSnippet: 'https://test/',
            id: 'a',
          },
        ]}
        toggleCurrentSongId={() => {}}
        isSongPlaying={false}
        currentSongId="a"
        saveSong={() => {}}
        SavedSongsList={[]}
      />
    )
    expect(container.firstChild).toMatchSnapshot()
  })
  it('calls toggleCurrentSongId correctly', () => {
    const toggleCurrentSongIdMock = jest.fn()
    const { getByTestId } = render(
      <ArtistPage
        artists={[
          {
            artist: 'Unprocessed',
            songTitle: 'Real',
            songSnippet: 'https://test/',
            id: 'a',
          },
        ]}
        toggleCurrentSongId={toggleCurrentSongIdMock}
        isSongPlaying={false}
        currentSongId="a"
        saveSong={() => {}}
        SavedSongsList={[]}
      />
    )
    const button = getByTestId('audio-button')
    user.click(button)
    expect(toggleCurrentSongIdMock).toHaveBeenCalled()
  })
  it('toggles the isSongPlaying state correctly', () => {
    const { getByTitle, queryByTitle, rerender } = render(
      <ArtistPage
        artists={[
          {
            artist: 'Unprocessed',
            songTitle: 'Real',
            songSnippet: 'https://test/',
            id: 'a',
          },
        ]}
        toggleCurrentSongId={() => {}}
        isSongPlaying={false}
        currentSongId="a"
        saveSong={() => {}}
        SavedSongsList={[]}
      />
    )
    expect(getByTitle('play')).toBeInTheDocument()

    rerender(
      <ArtistPage
        artists={[
          {
            artist: 'Unprocessed',
            songTitle: 'Real',
            songSnippet: 'https://test/',
            id: 'a',
          },
        ]}
        toggleCurrentSongId={() => {}}
        isSongPlaying={true}
        currentSongId="a"
        saveSong={() => {}}
        SavedSongsList={[]}
      />
    )
    expect(queryByTitle('play')).not.toBeInTheDocument()
    expect(getByTitle('pause')).toBeInTheDocument()
  })
  it('calls saveSong correctly', () => {
    const saveSongMock = jest.fn()
    const { getByTestId } = render(
      <ArtistPage
        artists={[
          {
            artist: 'Unprocessed',
            songTitle: 'Real',
            songSnippet: 'https://test/',
            id: 'a',
          },
        ]}
        toggleCurrentSongId={() => {}}
        isSongPlaying={false}
        currentSongId="a"
        saveSong={saveSongMock}
        SavedSongsList={[]}
      />
    )
    const button = getByTestId('button')
    user.click(button)
    expect(saveSongMock).toHaveBeenCalled()
  })
})
