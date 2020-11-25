import ArtistPage from './ArtistPage'
import { render } from '@testing-library/react'

describe('ArtistPage', () => {
  beforeEach(() => {
    window.HTMLMediaElement.prototype.play = jest.fn()
    window.HTMLMediaElement.prototype.pause = jest.fn()
    window.HTMLMediaElement.prototype.load = jest.fn()
  })
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
        savedSongs={[]}
      />
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})
