async function getUsers() {
  const response = await fetch(
    'https://fiubify-middleware-staging.herokuapp.com/user/',
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    }
  );

  const fetchResponse = await response.json();
  return fetchResponse;
}

async function blockUser(id, token) {
  const response = await fetch(
    `https://fiubify-middleware-staging.herokuapp.com/user/block/${id}`,
    {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
        body: JSON.stringify({
            token: token,
        })
    }
  );

  return response;
}

async function unblockUser(id, token) {
  const response = await fetch(
    `https://fiubify-middleware-staging.herokuapp.com/user/unblock/${id}`,
    {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
        body: JSON.stringify({
            token: token,
        })
    }
  );
  return response;
}

export { getUsers, blockUser, unblockUser };
