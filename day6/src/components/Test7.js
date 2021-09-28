import React, {useRef, useState} from 'react';

const Test7 = () => {

    //const color = useRef();
    const [color, setColor] = useState('tomato');
    const [text, setText] = useState('');

    const onColor = (e) => {

        const {value} = e.target;
        setText(value);
    }

    const onSelect = () => {
        setColor(text);
    }

    return (
        <div>
            <h1>test7 : useRef</h1>
            <h3 style={{color: color}} >컬러선택</h3>
            <select onChange={onColor}>
                <option value="red" >red</option>
                <option value="green">green</option>
                <option value="pink">pink</option>
                <option value="skyblue">skyblue</option>
                <option value="yellow">yellow</option>
            </select>
            <button onClick={onSelect}>선택</button>
        </div>
    );
};

export default Test7;