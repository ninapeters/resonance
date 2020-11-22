import ArtistList from './ArtistList'
import { render } from '@testing-library/react'

describe('ArtistList', () => {
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
