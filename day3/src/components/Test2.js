import React from 'react';

const Test2 = () => {
    //함수영역  - 모든 조건문/제어문 가능 
    // 변수 선언  - 수업용 ( 실제 사용 달라요 )
    const title ='신상명세서'
    const name ='홍길동'
    const age = 20
    const addr = '서울'
    const tel ='010-0000-1111'

    return (
        <>
            {/* JSX 영역 */}
            {/* 자바스크립트 값을 출력할때는 {} 안에 처리한다 */}
            <h2> {title} </h2>
            <ul>
                <li>이름: {name} </li>
                <li>나이: {age} </li>
                <li>주소: {addr} </li>
                <li>전화: {tel} </li>               
            </ul>
        </>
    );
};

export default Test2;