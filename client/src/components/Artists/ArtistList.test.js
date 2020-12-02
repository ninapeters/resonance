import { render } from '@testing-library/react'
import user from '@testing-library/user-event'
import ArtistList from './ArtistList'

describe('ArtistList', () => {
  it('renders correctly', () => {
    const { container } = render(
      <ArtistList
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
      <ArtistList
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
      <ArtistList
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
      <ArtistList
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
      <ArtistList
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
    const button = getByTestId('save-button')
    user.click(button)
    expect(saveSongMock).toHaveBeenCalled()
  })
})
