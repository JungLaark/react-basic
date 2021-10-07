import React from 'react';

const GalleryBig = ({cat}) => {

    const {title, image} = cat;

    return (
        <div className="bigimg">
            <img src={image} alt={title}/>
        </div>
    );
};

export default GalleryBig;