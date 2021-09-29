import React, {useState, useRef} from 'react';
//음 Test2에만 넣었던 css 가 여기도 적용되네 
//그래서 style-component를 쓰는거구나 
const Test3_step2 = () => {

    const idRef = useRef(null);

    const [form, setForm] = useState({
        userid : '',
        userpw : '',
        userem : ''
    });

    //form.userid 대신에 
    //form['userem'] key값 
    //비구조 할당법
    const {userid, userpw, userem} = form;


    // const [userid, setUserid] = useState('');
    // const [userpw, setUserpw] = useState('');
    // const [userem, setUserem] = useState('');

    const changeInput1 = (e) => {

        const {value, name} = e.target;
        setForm({
            ...form,
            [name]: value
        });
        //이렇게하면 나머지 변수들이 없어진다. 
        //그래서 기존에거 가지고 오기 위해
        //spread 연산자 써야함 
    }

    const changeInput2 = (e) => {
        const {value, name} = e.target;
        setForm({
            ...form,
            [name]: value
        })
    }

    const changeInput3 = (e) => {
        const {value, name} = e.target;
        setForm({
            ...form,
            [name]: value
        });
    }

    const btnClick = () => {
        //dom에 이버
        //지우려면 
        setForm({
            userid: '',
            userpw: '',
            userem: ''
        })
        idRef.current.focus();
    }

    return (

        <div style={{margin:20}}>
            <h1>Test3</h1>
            <p>
                <input type="text" onChange={changeInput1} value={userid} name="userid" ref={idRef}/>
                <input type="text" onChange={changeInput2} value={userpw} name="userpw"/>
                <input type="text" onChange={changeInput3} value={userem} name="userem"/>
                <button onClick={btnClick} >초기화</button>
            </p>
            <hr/>
            <h4>아이디:{userid}</h4>
            <h4>비번:{userpw}</h4>
            <h4>이메일:{userem}</h4>
        </div>
        // <div style={{margin:20}}>
        //     <h1>Test3</h1>
        //     <p>
        //         <input type="text" onChange={changeInput1} value={form.userid} ref={idRef}/>
        //         <input type="text" onChange={changeInput2} value={form.userpw}/>
        //         <input type="text" onChange={changeInput3} value={form.userem}/>
        //         <button onClick={btnClick} >초기화</button>
        //     </p>
        //     <hr/>
        //     <h4>아이디:{form.userid}</h4>
        //     <h4>비번:{form.userpw}</h4>
        //     <h4>이메일:{form.userem}</h4>
        // </div>
    );
};

export default Test3_step2;