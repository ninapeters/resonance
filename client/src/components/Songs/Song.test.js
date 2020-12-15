import { render } from '@testing-library/react'
import user from '@testing-library/user-event'
import Song from './Song'

const testProps = {
  artists: [],
  updateTrack: jest.fn(),
  toggleCurrentSongId: jest.fn(),
  isSongPlaying: false,
  currentSongId: 'a',
  saveSong: jest.fn(),
  savedSongs: [],
}

describe('Song', () => {
  it('renders correctly', () => {
    const props = { ...testProps }
    const { container } = render(<Song {...props} />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('calls updateTrack correctly', () => {
    const updateTrackMock = jest.fn()
    const props = { ...testProps, updateTrack: updateTrackMock }
    const { getByTestId } = render(<Song {...props} />)
    const button = getByTestId('skip-button')
    user.click(button)
    expect(updateTrackMock).toHaveBeenCalled()
  })

  it('calls toggleCurrentSongId with the correct id', () => {
    const toggleCurrentSongIdMock = jest.fn()
    const props = { ...testProps, toggleCurrentSongId: toggleCurrentSongIdMock }
    const { getByTestId } = render(<Song {...props} />)
    const button = getByTestId('audio-button')
    user.click(button)
    expect(toggleCurrentSongIdMock).toHaveBeenCalledWith('a')
  })

  it('switches the appearance of play and pause button by changing the state isSongPlaying', () => {
    let props = { ...testProps, isSongPlaying: false }
    const { getByTitle, queryByTitle, rerender } = render(<Song {...props} />)
    expect(getByTitle('play')).toBeInTheDocument()

    props = { ...testProps, isSongPlaying: true }
    rerender(<Song {...props} />)
    expect(queryByTitle('play')).not.toBeInTheDocument()
    expect(getByTitle('pause')).toBeInTheDocument()
  })

  it('calls saveSong correctly', () => {
    const saveSongMock = jest.fn()
    const props = { ...testProps, saveSong: saveSongMock }
    const { getByTestId } = render(<Song {...props} />)
    const button = getByTestId('save-button')
    user.click(button)
    expect(saveSongMock).toHaveBeenCalled()
  })
})
