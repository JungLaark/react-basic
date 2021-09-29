import React, {useState, useRef} from 'react';
//음 Test2에만 넣었던 css 가 여기도 적용되네 
//그래서 style-component를 쓰는거구나 
const Test3_step1 = () => {

    const idRef = useRef(null);
    const [userid, setUserid] = useState('');
    const [userpw, setUserpw] = useState('');
    const [userem, setUserem] = useState('');

    const changeInput1 = (e) => {

        const {value} = e.target;
        setUserid(value);

    }

    const changeInput2 = (e) => {
        const {value} = e.target;
        setUserpw(value);
    }

    const changeInput3 = (e) => {
        const {value} = e.target;
        setUserem(value);
    }

    const btnClick = () => {
        //dom에 이버
        //지우려면 
        setUserid('');
        setUserpw('');
        setUserem('');

        idRef.current.focus();
    }

    return (

        <div style={{margin:20}}>
            <h1>Test3</h1>
            <p>
                <input type="text" onChange={changeInput1} value={userid} ref={idRef}/>
                <input type="text" onChange={changeInput2} value={userpw}/>
                <input type="text" onChange={changeInput3} value={userem}/>
                <button onClick={btnClick} >초기화</button>
            </p>
            <hr/>
            <h4>아이디:{userid}</h4>
            <h4>비번:{userpw}</h4>
            <h4>이메일:{userem}</h4>
        </div>
    );
};

export default Test3_step1;