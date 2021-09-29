import React from 'react';

const Test5Animal = ({ani, onChangeAni}) => {
    return (
        <div>
            <h2>Animal 컴포넌트</h2>
            <label>동물:</label>
            <input type="text" value={ani} onChange={onChangeAni}></input>
            <span style={{marginLeft:15}}>{ani}</span>
        </div>
    );
};

export default Test5Animal;