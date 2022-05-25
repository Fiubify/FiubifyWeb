async function getContent(contentType) {
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

export {getContent};