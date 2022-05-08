const { render, screen } = require('@testing-library/react');
const { default: StatusBar } = require('./StatusBar');

const setup = (action) => {
  return render(<StatusBar actions={[action]} />);
};

describe('Status Bar messages', () => {
  test('Check if error is rendered', () => {
    const errorAction = { type: 'error', msg: 'Some Text' };
    setup(errorAction);

    expect(screen.getByRole('alert')).toBeInTheDocument();
    expect(screen.getByText(errorAction.msg)).toBeInTheDocument();
    expect(screen.getByText('Error')).toBeInTheDocument();
  });

  test('Check if success is rendered', () => {
    const successAction = { type: 'success', msg: 'Some Text' };
    setup(successAction);

    expect(screen.getByRole('alert')).toBeInTheDocument();
    expect(screen.getByText(successAction.msg)).toBeInTheDocument();
    expect(
      screen.getByText('Successful', { exact: false })
    ).toBeInTheDocument();
  });
});
