import React from 'react';
import GalleryItem from './GalleryItem';

const GalleryList = ({data}) => {
    return (
        <div>
            <ul>
                {
                    data.map( item => <GalleryItem key={item.id} item={item}></GalleryItem>)
                }
            </ul>
        </div>
    );
};

export default GalleryList;