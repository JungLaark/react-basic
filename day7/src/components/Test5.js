import React, {useState} from 'react';
import Test5Animal from './Test5Animal';
import Test5Display from './Test5Display';
import Test5Name from './Test5Name';

const Test5 = () => {

    //부모에서 상태값 관리
    const [name, setName] = useState('');
    const [ani, setAni] = useState('고양이');

    const onChangeAni = (e) => {
        const {value} = e.target;
        setAni(value);
    }

    const onChangeName = (e) => {
        const {value} = e.target;
        setName(value);
    }



    return (
        <div>
            <h1>Test5</h1>
            <br></br>
            <Test5Name name={name} onChangeName={onChangeName}/>
            <hr/>
            <Test5Animal ani={ani} onChangeAni={onChangeAni}/>
            <hr/>
            <Test5Display name={name} ani={ani} />
        </div>
    );
};

export default Test5;