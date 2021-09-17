import React from 'react';
/*
const Test6Sub = ( props ) => {
    return (
        <div style={{borderBottom:'2px solid pink', margin:10, padding:10}}>
           <h2>Test6Sub 자식컴포넌트</h2> 
           <h3>이름 : {props.name} / {typeof props.name} </h3> 
           <h3>나이 : {props.age} / {typeof props.age} </h3> 
        </div>
    );
};
*/

/*
const Test6Sub = ( props ) => {
    //비구조할당  , 구조분해 
    const {name ,age } = props 

    return (
        <div style={{borderBottom:'2px solid pink', margin:10, padding:10}}>
           <h2>Test6Sub 자식컴포넌트</h2> 
           <h3>이름 : {name} / {typeof name} </h3> 
           <h3>나이 : {age} / {typeof age} </h3> 
        </div>
    );
};
*/

const Test6Sub = ({ name ,age }) => {
    //비구조할당  , 구조분해 

    return (
        <div style={{borderBottom:'2px solid pink', margin:10, padding:10}}>
           <h2>Test6Sub 자식컴포넌트</h2> 
           <h3>이름 : {name} / {typeof name} </h3> 
           <h3>나이 : {age} / {typeof age} </h3> 
        </div>
    );
};

const Test6 = () => {

    const data1 = {name:'강아지', age:2 }
    const data2 = {name:'고양이', age:4 }

    return (
        <div style={{border:'1px solid #999',padding:20,margin:20}}>
           <h2>컴포넌트분리와 props</h2> 
           <h2>부모컴포넌트에서 자식컴포넌트에 값을전달</h2> 
           <h2>자식컴포넌트가 부모컴포넌트에 값을요구</h2> 
           <hr/>
        {/*  <철수컴포넌트 props명="값" /> : 철수영역에 props변수에 값을 담아서 전달해 */}
        {/* <자식컴포넌트 props명="값" props명={값} /> */}
        {/* 부모Test6에서 자식에게 값을 전달할경우 props은 일종의 변수처럼사용(영문, 한글가능x)   */}
        
        {/* 함수, 상태값, 상태변경함수을 전달할때 */}

        <Test6Sub name="홍길동" age="20" />
        {/*Test6Sub 컴포넌트에 값전달 props명=>변수명  */}

        <Test6Sub name="이익준" age ={30} />

        <Test6Sub name={data1.name} age={data1.age} />
        <Test6Sub name={data2.name} age ={data2.age} />

        {/* ...복사{키:값} */}
        <Test6Sub {...data1} />
        <Test6Sub {...data2} />
        </div>
    );
};

export default Test6;