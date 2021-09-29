import React, {useState} from 'react';
import './Test2.css';

const Test2 = () => {

    const [age, setAge] = useState(20);
    const [isColor, setIsColor] = useState(false);

    //이걸 한 함수에서 하는 방법은 없나여? 
    const onAge = () => {
        setAge(age + 1);
    }

    const onToggle = () => {
        //
        setIsColor(!isColor);

    }

    return (
        // 템플릿 리터널
        <div className={`wrap ${isColor ? 'pink' : 'yellow'}`}>
            <h1>Test2</h1>
            <h2>background-color:{isColor ? 'pink' : 'yellow'}</h2>
            <h2>나이:{age}</h2>
            <p>
                <button onClick={onToggle}>배경색 변경 </button>
                <button onClick={onAge}>나이증가</button>
                <button onClick={()=>setAge(age-1)}>나이감소</button>
            </p>
        </div>
    );
};

export default Test2;