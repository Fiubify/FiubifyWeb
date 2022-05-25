import {useEffect, useState} from "react";
import ContentTable from "./ContentTable";
import {getContent} from "../../utils/api/contentApi";

export const songs = 'songs';
export const albums = 'albums';
//const playlists = 'playlists';


export default function ContentPage() {
    const [contents, setContents] = useState([]);
    const [contentType, setContentType] = useState(songs);

    async function fetchContent(contentType) {
        const apiResponse = await getContent(contentType);
        setContents(apiResponse.data.contents);
        console.log(contents);
        console.log(apiResponse.data.contents);
    }

    useEffect(() => {
        fetchContent(contentType);
    }, []);

    return (<div>
        <ContentTable content={contents} contentType={contentType} />
    </div>);
}