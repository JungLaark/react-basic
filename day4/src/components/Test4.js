import React from 'react';

const Test4 = () => {
    //값이 변경된다 -> useState
    const title = "슬기로운 의사생활";
    const arr = ['조정석', '유연석', '김대명', '전미도'];
    return (
        <div>
            <h2>드라마 : {title}</h2>
            <p>{arr[0]}</p>
            <p>{arr[1]}</p>
            <hr/>
            {
                //이렇게 하면 오류남 . unique한 key값을 가져야 한다라는 ㅇ러가 남
                arr.map((item, index) => {
                    return(
                        <p>{index} / {item}</p>
                    )
                })
            }
            <hr/>
            {
                arr.map((item, index) => <p key={index}>{index} : {item}</p>)
            }
        </div>
    );
};

export default Test4;