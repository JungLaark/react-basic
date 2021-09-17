import React, { useState } from 'react';
import './assets/css/Test5.css';

const Test5 = () => {

    //let isClass = true ? 
    const [isClass, setIsClass] = useState(false);

    const onAdd = () => {
        setIsClass(true);
    }

    const onRemove = () => {
        setIsClass(false);
    }

    const onToggle = () => {
        setIsClass(!isClass);
    }



    return (
        <div className="wrap">
            <p className="test">안녕하세요 오늘은 불금입니다</p>
            <p className="on">안녕하세요 오늘은 불금입니다</p>
            <p className="on1">안녕하세요 오늘은 불금입니다</p>
            <p className="test on">안녕하세요 오늘은 불금입니다</p>
            <hr/>
            <br/>
            <br/>
            
            <p className={isClass === true ? "on" : ""}>on 안녕하세요 오늘은 불금입니다</p>
            <p className={isClass ? "on1" : ""}>on1 안녕하세요 오늘은 불금입니다</p>
            <p className={`test ${isClass ? "on":""}`}>test on 안녕하세요 오늘은 불금입니다</p>
            <div>
                <button onClick={onAdd}>addClass</button>
                <button onClick={onRemove}>removeClass</button>
                <button onClick={onToggle}>toggleClass</button>
            </div>

        </div>
    );
};

export default Test5;