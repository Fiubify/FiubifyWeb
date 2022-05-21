import {useEffect, useState} from "react";
import StatusBar from "../StatusBar/StatusBar";
import SongsTable from "./SongsTable";
import ContentTable from "./ContentTable";

export default function ContentPage() {
    const [contents, setContents] = useState([]);
    const [contentType, setContentType] = useState("SONGS");

    async function fetchContent(contentType) {
        //const apiResponse = await getContent(contentType);
        //setContents(apiResponse.data.content);
    }

    useEffect(() => {
        fetchContent(contentType);
    }, [contentType]);

    return (<div>
        <ContentTable content={contents} contentType={contentType} />
    </div>);
}