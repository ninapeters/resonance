import { render } from '@testing-library/react'
import user from '@testing-library/user-event'
import SavedSong from './SavedSong'

describe('SavedSong', () => {
  it('renders correctly', () => {
    const { container } = render(
      <SavedSong
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
        artist="Unprocessed"
        songTitle="Real"
        id="a"
        deleteSavedSong={() => {}}
        toggleCurrentSongId={() => {}}
        isSongPlaying={false}
        currentSongId="a"
      />
    )
    const Button = getByTestId('x-button')
    expect(Button).toBeInTheDocument()
  })
  it('renders delete field', () => {
    const { getByTestId, getByText } = render(
      <SavedSong
        artist="Unprocessed"
        songTitle="Real"
        id="a"
        deleteSavedSong={() => {}}
        toggleCurrentSongId={() => {}}
        isSongPlaying={false}
        currentSongId="a"
      />
    )
    const Button = getByTestId('x-button')
    user.click(Button)
    expect(getByText('Lorem ipsum')).toBeInTheDocument()
    expect(getByTestId('reset-button')).toBeInTheDocument()
    expect(getByTestId('delete-button')).toBeInTheDocument()
  })
  it('toggles the isSongPlaying state correctly', () => {
    const { getByTitle, queryByTitle, rerender } = render(
      <SavedSong
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
