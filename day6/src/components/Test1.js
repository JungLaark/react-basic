import React, {useState} from 'react';
//useState 정리 

const Test1 = () => {

    const [count, setCount] = useState(1);

    const increment = () => {
        setCount(count+1);
    }

    const increment1 = () => {
        //이렇게 하면 1씩 증가한다. 왜 그럴까
        //함수 안에서 순차적으로가 아니라 동시에 실행한다?
        //해결하려면 이전값 => 이전값 + 1
        //setCount(count+1);
        //setCount(count+1);
        //매개변수 cnt와 state이다 
        //이건 어디에서 사용이 될까요 
        setCount(cnt => cnt + 1);
        setCount(state => state + 1);
    }
    const decrement1 = () => {
        setCount(count-1);
        setCount(count-1);
    }
    const increment2 = () => {

    }
    const decrement2 = () => {
        for(let i=0; i<5 ; i++){
            setCount(state => state-1);
        }
    }

    return (
        <div>
            <h1>test1</h1>
            <h1>숫자 : {count}</h1>
            <p>
                <button onClick={increment}>증가</button>
                <button onClick={()=>setCount(count-1)}>감소</button>
            </p>
            <p>
                <button onClick={increment1}>2증가</button>
                <button onClick={decrement1}>2감소</button>
            </p>
            <p>
                <button onClick={increment2}>5증가</button>
                <button onClick={decrement2}>5감소</button>
            </p>
        </div>
    );
};

export default Test1;