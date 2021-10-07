import React from 'react';
import GalleryBig from './GalleryBig'
import GalleryList from './GalleryList'

const GalleryView = ({data, cat}) => {
    return (
        <div className="bigview">
            <GalleryBig cat={cat}/>
            <GalleryList data={data}/>
        </div>
    );
};

export default GalleryView;