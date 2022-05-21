import SongsTable from "./SongsTable";

export default function ContentTable({content, contentType}) {
    if (contentType === "SONGS"){
        return (<SongsTable content={content}/>);
    } else if (contentType === "ALBUMS"){
        //return (<AlbumsTable content={content}/>);
    } else if (contentType === "PLAYLISTS"){
        //return (<PlaylistsTable content={content}/>);
    }
    return "";
}