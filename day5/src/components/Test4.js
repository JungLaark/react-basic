import React, {useState} from 'react';

const Test4 = () => {

    //state는 뭐가 있어야 하노 
    let count = 1;
    console.log('숫자', count);

    const [count2, setCount2] = useState(1);

    //이렇게 하면 화면으로는 안바뀜 state 써야 함 
    const increment = ()=> {
        // count += 1;
        // console.log('증가', count);

        setCount2(count2 + 1);
    }

    const decrement = () => {
        // count -= 1;
        // console.log('감소', count);

        setCount2(count2 - 1);
    }






    return (
        <div>
            <h2>숫자: {count2}</h2>
            <p>
                <button onClick={increment}>증가</button>
                <button onClick={decrement}>감소</button>
            </p>
        </div>
    );
};

export default Test4;