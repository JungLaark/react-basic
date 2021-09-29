import React, {useState} from 'react';

const Name = () => {

    const [name, setName] = useState('');

    return (
        <div>
            <h1>Name</h1>
            <p>
                <label htmlFor="name">이름:</label>
                <input type="text" id="name" onChange={e=>setName(e.target.value)}/>
                <span style={{marginLeft:15}}>{name}</span>
            </p>
        </div>
    );
};
const Animall = ({ani, onAni}) => {
    return (
        <div>
            <h1>Animall</h1>
            <p>
                <label htmlFor="ani">동물:</label>
                <input type="text" id="ani" value={ani} onChange={onAni}/>
                <span style={{marginLeft:15}}>{ani}</span>
            </p>
        </div>
    );
};
const Display = ({ani}) => {
    return (
        <div>
            <h1>Display</h1>
            <h2>내가 좋아하는 동물은 {ani} 입니다.</h2>
        </div>
    );
};
const Test4 = () => {

    const [ani, setAni] = useState('cat');

    const onAni = (e) => {
        const {value} = e.target;
        setAni(value);
    }

    return (
        <div>
            <h1>Test4</h1>
            <h1>컴포넌트 분리</h1>
            <h1>state, props, 이벤트 처리</h1>
            <Name/>
            <hr/>
            <Animall ani={ani} onAni={onAni}/>
            <hr/>
            <Display ani={ani}/>
        </div>
    );
};

export default Test4;