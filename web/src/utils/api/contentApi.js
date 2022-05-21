async function getContent(contentType) {
    const response = await fetch(
        `https://fiubify-middleware-staging.herokuapp.com/content/${contentType}`,//habria que pegarle a una url de este estilo
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }
    );

    return await response.json();
}

export { getContent };