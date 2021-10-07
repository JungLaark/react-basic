import React, {useState} from 'react';
import GalleryView from './GalleryView';
import GalleryText from './GalleryText';
import './style.css';

const imgList = [
    //이 경로는 public 이 root 다 
    {id: 1, title:'cat1', image: './images/cat0.jpg', desc: '설명'},
    {id: 2, title:'cat2', image: './images/cat1.jpg', desc: '설명'},
    {id: 3, title:'cat3', image: './images/cat2.jpg', desc: '설명'},
    {id: 4, title:'cat4', image: './images/cat3.jpg', desc: '설명'},
    {id: 5, title:'cat5', image: './images/cat4.jpg', desc: '설명'},
    {id: 6, title:'cat6', image: './images/cat5.jpg', desc: '설명'},
    {id: 7, title:'cat7', image: './images/cat6.jpg', desc: '설명'}
]


const Gallery = () => {

    const [data, setData] = useState(imgList);
    const [cat, setCat] = useState(imgList[0])

    return (
        <div className="wrap">
            <GalleryView data={data} cat={cat}/>
            <GalleryText data={data}/>
        </div>
    );
};

export default Gallery;