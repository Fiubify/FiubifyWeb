import {useEffect, useState} from "react";
import ContentTable from "./ContentTable";
import {getContent} from "../../utils/api/contentApi";
import {Button, Divider, Toolbar} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import {useNavigate} from "react-router-dom";

export const songs = 'songs';
export const albums = 'albums';
//const playlists = 'playlists';


export default function ContentPage() {
    const [contents, setContents] = useState([]);
    const [contentType, setContentType] = useState(songs);
    const navigate = useNavigate();

    async function fetchContent(contentType) {
        const apiResponse = await getContent(contentType);
        setContents(apiResponse.data);
    }

    useEffect(() => {
        fetchContent(contentType);
    }, []);

    return (<div>
        <div>
            <Toolbar>
                <Button onClick={() => navigate("/dashboard")} startIcon={<ArrowBackIosIcon/>}></Button>
            </Toolbar>
        </div>
        <Divider/>
        <ContentTable content={contents} contentType={contentType}/>
    </div>);
}