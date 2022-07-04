import {freeTier} from "../constantes";

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

async function getPlaylists() {
    const response = await fetch(
        `https://fiubify-middleware-staging.herokuapp.com/contents/playlists/`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }
    );

    return await response.json();
}

async function getTracksFromPlaylist(id) {
    const response = await fetch(
        `https://fiubify-middleware-staging.herokuapp.com/contents/playlists/${id}`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }
    );

    return await response.json();
}

function filterContentByPlan(contents, isFree){
    let contentFiltered = [];

    contents.forEach((content) => {
        if ((content.tier === freeTier && isFree) || (content.tier !== freeTier && !isFree))
            contentFiltered.push(content);
    })

    return contentFiltered;
}

export {getSongs, getAlbums, getPlaylists, getTracksFromPlaylist, filterContentByPlan};