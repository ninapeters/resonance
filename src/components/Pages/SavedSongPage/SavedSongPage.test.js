import { render } from '@testing-library/react'
import SavedSongPage from './SavedSongPage'
import user from '@testing-library/user-event'

describe('SavedSongPage', () => {
  it('renders correctly', () => {
    const { container } = render(
      <SavedSongPage
        savedSongs={[
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
      />
    )
    expect(container.firstChild).toMatchSnapshot()
  })
  it('sets the current id to currentSongId', () => {
    const toggleCurrentSongIdMock = jest.fn()
    const { getByRole } = render(
      <SavedSongPage
        savedSongs={[
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
      />
    )
    const button = getByRole('button')
    user.click(button)
    expect(toggleCurrentSongIdMock).toHaveBeenCalled()
  })
  it('toggles the isSongPlaying state correctly', () => {
    const { getByTitle, queryByTitle, rerender } = render(
      <SavedSongPage
        savedSongs={[
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
      />
    )
    expect(getByTitle('play')).toBeInTheDocument()

    rerender(
      <SavedSongPage
        savedSongs={[
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
      />
    )
    expect(queryByTitle('play')).not.toBeInTheDocument()
    expect(getByTitle('pause')).toBeInTheDocument()
  })
  xit('matches the savedSongs id with the currentSongId', () => {
    const toggleCurrentSongIdMock = jest.fn()
    const { container } = render(
      <SavedSongPage
        savedSongs={[
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
      />
    )
    expect(valueOf('currentSongId')).toEqual('a')
  })
})
