import {screen, render} from '@testing-library/react';
import UsersPage from './UsersPage';
import {BrowserRouter, Route, Routes} from "react-router-dom";

const MOCK_USER_LIST = [{
    _id: '1', uid: '2', email: 'email', role: 'Artist', disabled: false,
}, {
    _id: '2', uid: '4', email: 'emailardo', role: 'Artist', disabled: true,
},];

const MOCKED_USERS_API_RESPONSE = {data: {users: MOCK_USER_LIST}};

beforeEach(() => {
    global.fetch = jest.fn(() => Promise.resolve({
        json: () => Promise.resolve(MOCKED_USERS_API_RESPONSE),
    }));
});

describe('UsersPage status', () => {
    test('Users are displayed after api fetch', async () => {
        render(<BrowserRouter>
            <Routes>
                <Route path="*" element={<UsersPage/>}/>
            </Routes>
        </BrowserRouter>
    );

        expect(await screen.findAllByText('Artist')).toHaveLength(2);
    });
});
