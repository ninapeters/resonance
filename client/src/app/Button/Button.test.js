import { render } from '@testing-library/react'
import user from '@testing-library/user-event'
import Button from './Button'
import {
  SaveIcon,
  SkipIcon,
  CrossIcon,
  BinIcon,
  ResetIcon,
} from '../Icons/Icons'

describe('Button', () => {
  it('renders correctly', () => {
    const { container } = render(
      <>
        <Button onClick={() => {}}>
          <SaveIcon />
        </Button>

        <Button disabled onClick={() => {}}>
          <SaveIcon />
        </Button>

        <Button isRedIcon onClick={() => {}}>
          <SkipIcon />
        </Button>

        <Button isRedIcon isNoCircle onClick={() => {}}>
          <CrossIcon />
        </Button>

        <Button isRedIcon onClick={() => {}}>
          <BinIcon />
        </Button>

        <Button onClick={() => {}}>
          <ResetIcon />
        </Button>
      </>
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  it('calls onClick with the correct id', () => {
    const onClickMock = jest.fn()
    const { getByRole } = render(
      <Button onClick={() => onClickMock('a')}>
        <SaveIcon />
      </Button>
    )
    const button = getByRole('button')
    user.click(button)

    expect(onClickMock).toHaveBeenCalledWith('a')
  })
})
