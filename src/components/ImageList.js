import React from "react";

const ImageList = (props) => {
    //console.log(props.images)
    const imagesArray = props.images.map(image =>{
        return <img alt= {image.description} key={image.id} src={image.urls.regular}/>;
    });

    return <div>{imagesArray}</div>
}

export default ImageList;