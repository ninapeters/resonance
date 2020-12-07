import { render } from '@testing-library/react'
import user from '@testing-library/user-event'
import Button from './Button'
import { ReactComponent as DeleteIcon } from '../../assets/x.svg'

describe('Button', () => {
  it('renders correctly', () => {
    const { container } = render(
      <Button onClick={() => {}}>
        <DeleteIcon />
      </Button>
    )
    expect(container.firstChild).toMatchSnapshot()
  })
  it('calls onClick with the correct id', () => {
    const onClickMock = jest.fn()
    const { getByRole } = render(
      <Button onClick={() => onClickMock('a')}>
        <DeleteIcon />
      </Button>
    )
    const button = getByRole('button')
    user.click(button)

    expect(onClickMock).toHaveBeenCalledWith('a')
  })
})
