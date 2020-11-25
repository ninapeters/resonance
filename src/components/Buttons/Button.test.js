import { render } from '@testing-library/react'
import Button from './Button'

describe('Button', () => {
  it('renders correctly', () => {
    const { container, rerender } = render(<Button>Save this song</Button>)
    expect(container.firstChild).toMatchSnapshot()

    rerender(<Button disabled>Save this song</Button>)
    expect(container.firstChild).toMatchSnapshot()
  })
})
