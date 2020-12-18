import { render } from '@testing-library/react'
import ArtistList from './ArtistList'

describe('SavedSongList', () => {
  it('renders correctly', () => {
    const { container } = render(
      <ArtistList
        deleteSavedSong={() => {}}
        artists={[
          {
            artist: 'Unprocessed',
            songTitle: 'Real',
            songSnippet: 'https://test/',
            id: 'a',
          },
          {
            artist: 'Dance Gavin Dance',
            songTitle: 'We Own The Night',
            songSnippet: 'https://test/',
            id: 'b',
          },
        ]}
        updateTrack={() => {}}
        toggleCurrentSongId={() => {}}
        isSongPlaying={false}
        currentSongId="a"
        saveSong={() => {}}
        savedSongs={[]}
      />
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})
