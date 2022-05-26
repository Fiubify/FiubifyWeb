async function getSongs() {
    const response = await fetch(
        `https://fiubify-middleware-staging.herokuapp.com/contents/songs/`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }
    );

    return await response.json();
}

async function getAlbums() {
    const response = await fetch(
        `https://fiubify-middleware-staging.herokuapp.com/contents/albums/`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }
    );

    return await response.json();
}

export {getSongs, getAlbums};