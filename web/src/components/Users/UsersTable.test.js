import UsersTable from './UsersTable';
import { render, screen } from '@testing-library/react';

describe('UsersTable display', () => {
  test('Display the correct values', () => {
    const user = {
      _id: '1',
      uid: '2',
      email: 'email',
      role: 'role',
      disabled: true,
    };

    render(
      <UsersTable
        users={[user]}
        handleBlockUser={() => {}}
        handleUnblockUser={() => {}}
      />
    );

    expect(screen.getByText(user._id)).toBeInTheDocument();
    expect(screen.getByText(user.uid)).toBeInTheDocument();
    expect(screen.getByText(user.email)).toBeInTheDocument();
    expect(screen.getByText(user.role)).toBeInTheDocument();
    expect(
      screen.getByText(String(user.disabled).toUpperCase())
    ).toBeInTheDocument();
  });
});
