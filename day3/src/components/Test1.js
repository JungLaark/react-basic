import React  from 'react';
//컴포넌트 파일명.js , 파일명.jsx
//컴포넌트명은 반드시 첫글자 대문자로 시작한다 단 파일명상관없다 
//rsc -> 컴포넌트명이 파일명과 동일처리
//import 참조변수 from '파일명.js'; .js , jsx 생략가능

const Test1 = () => {
    return (
        <React.Fragment>
            <h2>JSX 영역</h2>
            <p>리액트 개발이 쉬워진다 형식html구조</p>
            <p>태그열기, 태그닫기</p>
            <p> return (태그-div) 하나이상일때는 div묶어야한다 </p>
            <br />
            <img  />
            <input />
            <hr />
            //한줄 주석 
            /*
               여러줄 주석  
            */
            {/* 설명 */}
            <p
                //한줄 주석 
                /*
                    여러줄주석 
                */
            >
                나는 문단입니다.
            </p>
        </React.Fragment>
    );
};

export default Test1;