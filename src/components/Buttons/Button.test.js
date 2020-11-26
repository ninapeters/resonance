import { render } from '@testing-library/react'
import user from '@testing-library/user-event'
import Button from './Button'

describe('Button', () => {
  it('renders correctly', () => {
    const { container, rerender } = render(
      <Button disabled={false} handleClick={() => {}}>
        Save this song
      </Button>
    )
    expect(container.firstChild).toMatchSnapshot()

    rerender(
      <Button disabled={true} handleClick={() => {}}>
        Save this song
      </Button>
    )
    expect(container.firstChild).toMatchSnapshot()
  })
  it('calls handleClick with the correct id', () => {
    const handleClickMock = jest.fn()
    const { getByRole } = render(
      <Button disabled={false} handleClick={() => handleClickMock('a')}>
        Save this song
      </Button>
    )
    const button = getByRole('button')
    user.click(button)

    expect(handleClickMock).toHaveBeenCalledWith('a')
  })
})
