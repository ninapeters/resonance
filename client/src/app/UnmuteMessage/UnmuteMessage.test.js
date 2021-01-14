import { render } from '@testing-library/react'
import user from '@testing-library/user-event'
import UnmuteMessage from './UnmuteMessage'

describe('UnmuteMessage', () => {
  it('renders correctly', () => {
    const { container } = render(
      <UnmuteMessage onClick={() => {}} isShown={true} />
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})
