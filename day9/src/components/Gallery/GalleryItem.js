import React from 'react';

const GalleryItem = ({item}) => {

    const {id, title, image, desc} = item;

    return (
        <li>
           <img src={image} alt={title} />
        </li>
    );
};

export default GalleryItem;