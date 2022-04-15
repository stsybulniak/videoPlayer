import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button Render', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render large button', async () => {
    const onClick = jest.fn();
    render(
      <Button large onClick={onClick}>
        Test
      </Button>
    );

    const element = screen.getByRole('button');

    expect(element.classList.contains('Button--large')).toBe(true);
    fireEvent.click(element);

    expect(onClick).toBeCalledTimes(1);
  });

  it('should render disabled button', async () => {
    const onClick = jest.fn();
    render(
      <Button disabled onClick={onClick}>
        Test
      </Button>
    );

    const element = screen.getByRole('button');

    expect(element.classList.contains('Button--disabled')).toBe(true);
    fireEvent.click(element);

    expect(onClick).toBeCalledTimes(0);
  });
});
