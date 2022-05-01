async function getUsers() {
  const response = await fetch(
    'https://fiubify-middleware-staging.herokuapp.com/user/',
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  const fetchResponse = await response.json();
  return fetchResponse;
}

async function blockUser(id) {
  const response = await fetch(
    `https://fiubify-middleware-staging.herokuapp.com/user/block/${id}`,
    {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  console.log(response);
}

async function unblockUser(id) {
  const response = await fetch(
    `https://fiubify-middleware-staging.herokuapp.com/user/unblock/${id}`,
    {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  console.log(response);
}

export { getUsers, blockUser, unblockUser };
