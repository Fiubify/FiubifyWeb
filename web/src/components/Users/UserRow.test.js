const { render, screen } = require('@testing-library/react');
const { default: UserRow } = require('./UserRow');

const setupWithouHandlers = (user) => {
  return render(
    <table>
      <tbody>
        <UserRow
          user={user}
          handleBlockUser={() => {}}
          handleUnblockUser={() => {}}
        />
      </tbody>
    </table>
  );
};

describe('UserRow display', () => {
  test('Display red chip if user blocked', () => {
    const blockedUser = {
      _id: '1',
      uid: '2',
      email: 'email',
      role: 'role',
      disabled: true,
    };
    setupWithouHandlers(blockedUser);

    expect(screen.getByText('TRUE')).toBeInTheDocument();
    expect(screen.getByRole('status').childNodes[0]).toHaveClass(
      'MuiChip-filledError',
      { exact: false }
    );
  });

  test('Display green chip if user not blocked', () => {
    const notBlockedUser = {
      _id: '1',
      uid: '2',
      email: 'email',
      role: 'role',
      disabled: false,
    };
    setupWithouHandlers(notBlockedUser);

    expect(screen.getByText('FALSE')).toBeInTheDocument();
    expect(screen.getByRole('status').childNodes[0]).toHaveClass(
      'MuiChip-filledSuccess',
      { exact: false }
    );
  });
});
