import { render } from '@testing-library/react'
import SavedSongList from './SavedSongList'

describe('SavedSongList', () => {
  it('renders correctly', () => {
    const { container } = render(
      <SavedSongList
        stopPlayingSongById={() => {}}
        deleteSavedSong={() => {}}
        savedSongs={[
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
        toggleCurrentSongId={() => {}}
        isSongPlaying={false}
        currentSongId="a"
      />
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})
