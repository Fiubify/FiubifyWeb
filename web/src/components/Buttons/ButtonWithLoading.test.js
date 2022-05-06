import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import ButtonWithLoading from './ButtonWithLoading';

const setup = () => {
  return render(
    <ButtonWithLoading variant={'contained'} onClickHandler={async () => {}}>
      Button Text
    </ButtonWithLoading>
  );
};

describe('Button states', () => {
  test('Show childen when rendering button', () => {
    setup();

    const button = screen.getByRole('button');
    expect(button.textContent).toBe('Button Text');
  });

  test('Show loading component when clicking button', async () => {
    setup();

    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(await screen.findByRole('progressbar')).toBeInTheDocument();
  });

  test('Show button after completing action', async () => {
    setup();

    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(await screen.findByRole('progressbar')).toBeInTheDocument();
    expect(await screen.findByText('Button Text')).toBeInTheDocument();
  });
});
