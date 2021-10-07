import React from 'react';
import GalleryTest from './components/Gallery/GalleryTest';
import Test1 from './components/Test1';
import Test2 from './components/Test2';
import './assets/css/reset.css';
import Gallery from './components/Gallery/Gallery';

const App = () => {
  return (
    <div>
      <h1>day9</h1>
      <br/>
      <hr/>
      <Test1/>
      <br/>
      <hr/>
      <Test2/>
      <br/>
      <hr/>
      <GalleryTest/>
      <br/>
      <hr/>
      <Gallery/>

    </div>
  );
};

export default App;