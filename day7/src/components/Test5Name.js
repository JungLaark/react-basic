import React from 'react';

const Test5Name = ({name, onChangeName}) => {
    return (
        <div>
            <h2>NAME 컴포넌트</h2>
            <label>이름:</label>
            <input type="text" value={name} onChange={onChangeName}></input>
            <span style={{marginLeft:15}}>{name}</span>
        </div>
    );
};

export default Test5Name;