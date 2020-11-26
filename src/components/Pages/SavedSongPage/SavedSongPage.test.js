import { render } from '@testing-library/react'
import user from '@testing-library/user-event'
import SavedSongPage from './SavedSongPage'

describe('SavedSongPage', () => {
  it('renders correctly', () => {
    const { container } = render(
      <SavedSongPage
        SavedSongsList={[
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
  it('calls toggleCurrentSongId correctly', () => {
    const toggleCurrentSongIdMock = jest.fn()
    const { getByRole } = render(
      <SavedSongPage
        SavedSongsList={[
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
        SavedSongsList={[
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
        SavedSongsList={[
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
})
