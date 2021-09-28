import React, {useRef} from 'react';
//useRef
//이 방법은 좋지 않단다
const Test6 = () => {
    
    const colorRef = useRef(null);

    const onSelect = () => {
        const data = {
            color: colorRef.current.value
        }
        console.log(data);
        const json = JSON.stringify(data, null, 5);
        console.log(json);
    }

    return (
        <div>
            <h1>test6 : useRef</h1>
            <select ref={colorRef}>
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

export default Test6;