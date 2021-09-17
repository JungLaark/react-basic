import React, {useState} from 'react';


const Test1 = () => {

    const [name, setName] = useState('아무개');
    const [color, setColor] = useState('blue');

    const onName1 = () => {
        setName('test1');
    }
    const onName2 = () => {
        setName('test2');
    }
    const onName3 = () => {
        setName('test3');
    }

    return (
        <div style={{margin: "auto 0"}}>
            <h1 style={{color: color}}>이름:{name} / 색:{color}</h1>
            <p>
                <button onClick={onName1}>laark1</button>
                <button onClick={onName2}>larrk2</button>
                <button onClick={onName3}>larrk3</button>
            </p>
            <p>
                <button onClick={ () => {setColor('pink')}}>pink</button>
                <button onClick={ () => setColor('tomato')} >tomato</button>
                <button onClick={ () => setColor('skyblue')}>skyblue</button>
            </p>
        </div>
    );
};

export default Test1;