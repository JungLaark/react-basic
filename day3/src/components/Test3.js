import React from 'react';

const Test3 = () => {
    const txt = '오늘은 월요일 입니다.'
    // jQuery 객체 {키:값} - { 속성 :값 }
    //background-color -> backgroundColor , font-size -> fontSize  : 카멜케이스표기법 
    const css1 = {
        backgroundColor:'pink',
        fontSize:30,
        padding:15,
        margin:10 ,
        color:'#fff'
    }
    const css2 = {
        backgroundColor:'yellow',
        lineHeight:5,
        textIndent:20
    }

    return (
        <div style={{margin:20, border:'1px solid tomato',padding:'20px'}}>
            <h2>JSX : style</h2> 
            <p style={ css1 }>{txt}</p>      
            <p style={css2}> {txt}</p>      
            <p style={{fontSize:30}}>{txt}</p>      
            <p>{txt}</p>      
            {/* <p style={{키:값}} style={객체}>{txt}</p>       */}
            
        </div>
    );
};

export default Test3;