export default function DescriptionWrapper({description}) {
    if (description){
        return (<h5>Description: {description}</h5>);
    } else {
        return (<h5>No description available</h5>)
    }
}