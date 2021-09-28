import React from 'react';

const Test3 = () => {

    const click1 = (e) => {
        //이거슨 선택한 요소
        console.log(e.target);
        //이거슨 감싸고 있는 이벤트가 바인딩된 곳 가지고 옴 
        console.log(e.currentTarget);
    };

    return (
        <div>
            <h1>test3</h1>
            <button onClick={click1} style={{padding:20, margin:20}}>
                <span>확인</span>
                <b>클릭</b>
            </button>
        </div>
    );
};

export default Test3;