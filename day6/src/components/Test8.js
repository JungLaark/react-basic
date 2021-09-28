import React, {useState} from 'react';

const Test8 = () => {

    const [check, setCheck] = useState(false);

    const change = (e) => {
        setCheck(e.target.checked);
    }

    return (
        <div style={{color: check ? 'red' : 'blue', margin:20}}>
            <input type="checkbox" checked={check} onChange={change}></input>
            오늘은 월요일입니다. 

        </div>
    );
};

export default Test8;