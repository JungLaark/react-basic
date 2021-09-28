import React, {useState, useRef} from 'react';
//추가
//실제 dom을 가지고 와서 깜빡이게 하고자 한다.
const Test4 = () => {


    const [userid, setUserid] = useState('');
    const [userpw, setUserpw] = useState('');

    const idRef = useRef(null);

    const handleChange1 = (e) => {
        setUserid(e.target.value);
    } 

    const handleChange2 = (e) => {
        const {value} = e.target

        setUserpw(value);
    }

    const onReset = () => {
        
        setUserid('');
        setUserpw('');
        //이렇게 하면 h2에 있는 값은 지워지는데 
        //input 안에 있는 값들은 바뀌지 않는다 
        //상태값이 연결되어 있지 않기 때문 
        //input 태그 안에 value를 연결시켜줘야 한다. 
        idRef.current.focus();
    }

    return (
        <div>
            <h1>test4</h1>
            <input type="text" onChange={handleChange1} value={userid} ref={idRef}></input>
            <input type="text" onChange={handleChange2} value={userpw}></input>
            <button onClick={onReset}>초기화</button>
            <hr/>
            <h2>ID : {userid}</h2>
            <h2>Password : {userpw}</h2>
        </div>
    );
};

export default Test4;