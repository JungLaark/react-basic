import React from 'react';
//현재 폴더 경로에는 반드시  ./
import './Test4.css'

const Test4 = () => {
    return (
        <>
            <h2>JSX : 클래스 - className </h2>
            <p>class는 자바스크립에서 클래스 정의 용도로 사용되는 키워드</p>
            <div className="con-box">
                <article className="box1">test</article>
                <article>test</article>
                <article>test</article>
                <article>test</article>
            </div>
        </>
    );
};

export default Test4;