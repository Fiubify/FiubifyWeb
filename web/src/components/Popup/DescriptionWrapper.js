import {Typography} from "@mui/material";

export default function DescriptionWrapper({description}) {
    if (description){
        return (<div>
            <h4>Description</h4>
            <Typography variant="subtitle1" gutterBottom component="div">{description}</Typography>
        </div>);
    } else {
        return (<h5>No description available</h5>)
    }
}