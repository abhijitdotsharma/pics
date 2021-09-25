import ImageCard from './ImageCard';
import './ImageList.css';
import React from "react";


const ImageList = (props) => {
    //console.log(props.images)
    const imagesArray = props.images.map(image =>{
        return <ImageCard key={image.id} image={image} />;
    });

    return <div className='image-list'>{imagesArray}</div>
}

export default ImageList;