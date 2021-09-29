import React, {useRef, useState} from 'react';

const Test1 = () => {

    const [check, setCheck] = useState(false);

    const handleChange = (e) => {

        const {checked} = e.target;
        setCheck(checked);

    };

    return (
        <div style={{margin: 20}}>
            <h1>Test1</h1>
            <input type="checkbox" checked={check} onChange={handleChange}/>
            숨기기 / 보이기
            {
                check && 
                <div style={{width:300, height:80, background: 'tomato', marginTop:20}} ></div>
            }
            <hr/>
            {
                check ?
                <div style={{width:300, height:80, background: 'tomato', marginTop:20}} ></div>
                : null
            }
            
        </div>
    );
};

export default Test1;