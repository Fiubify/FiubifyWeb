import {freeTier} from "../constantes";

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

  return await response.json();
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

function filterUsersByPlan(users, isFree) {
    let usersFiltered = [];

    users.forEach((user) => {
        if ((user.plan === freeTier && isFree) || (user.plan !== freeTier && !isFree))
            usersFiltered.push(user);
    })

    return usersFiltered;
}

export { getUsers, blockUser, unblockUser, filterUsersByPlan };
