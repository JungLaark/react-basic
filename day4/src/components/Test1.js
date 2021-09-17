import React from 'react';

//props 꺽쇠 아님 
//props 대신 {name, isLog} 이렇게 들어왔다. 
const Test1Sub = ({name, isLog, color, msg}) => {

    //const {name, isLog} = props;

    return (
        <div style={{border: `3px solid ${color}`}}>
            <h2>{msg}</h2>
            <ul>
                <li>이름:{name}</li>
                <li>로그인 여부:{isLog === true ? '로그인' : '로그아웃'}</li>
            </ul>
         
        </div>
    );
};


const Test1 = () => {

    const title = "props 전달값 연습(값 변경 불가)";

    return (
        <div>
            <Test1Sub 
                msg={title}
                name="Laark"
                isLog = "false"
                color = "yellow"
            >

            </Test1Sub>
        </div>
    );
};

export default Test1;