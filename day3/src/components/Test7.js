import React from 'react';
const Test7Sub = ({name , age , addr }) => {
    // const {name , age , addr } = props 
    return (
        <div>
            <p>이름: {name} </p>
            <p>나이: {age} </p>
            <p>주소: {addr} </p>
        </div>
    );
};
const Test7 = () => {
    return (
        <div>
            <Test7Sub 
                name="홍길동"
                //숫자, 논리값 {}
                age = {30}
                addr ="서울"
            />          
        </div>
    );
};

export default Test7;