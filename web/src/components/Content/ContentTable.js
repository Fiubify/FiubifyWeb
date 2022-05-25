import SongsTable from "./SongsTable";
import {albums, songs} from "./ContentPage";

export default function ContentTable({content, contentType}) {
    if (contentType === songs){
        return (<SongsTable content={content}/>);
    } else if (contentType === albums){
        //return (<AlbumsTable content={content}/>);
    } else if (contentType === "playlists"){
        //return (<PlaylistsTable content={content}/>);
    }
    return "";
}