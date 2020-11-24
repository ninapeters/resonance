import ArtistList from './ArtistList'
import { render } from '@testing-library/react'

describe('ArtistList', () => {
  beforeEach(() => {
    window.HTMLMediaElement.prototype.play = jest.fn()
    window.HTMLMediaElement.prototype.pause = jest.fn()
    window.HTMLMediaElement.prototype.load = jest.fn()
  })
  it('renders correctly', () => {
    const { container } = render(
      <ArtistList
        artists={[
          {
            artist: 'Dance Gavin Dance',
            songTitle: 'We Own The Night',
            id: 'jkas872301jklas',
          },
        ]}
      />
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})
