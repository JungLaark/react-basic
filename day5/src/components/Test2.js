import React, {useState} from 'react';

const Test2 = () => {
    const [color, setColor] = useState('pink');
    const onColor = () => {

        if(color === 'pink'){
            setColor('tomato');
        }else if(color === 'tomato'){
            setColor('pink');
        }

        //이게 더 나음...
        setColor( color === 'pink' ? 'tomato' : 'pink');

        
    }

    return (
        <div style={{margin: "auto 0"}}>
            <p>문제: h2클릭 시 배경색 변경 pink - tomato</p>
            <h2 style={{width:400, height:100, border:'1px solid #000', padding:20,
                        margin:20, lineHeight:'100px', backgroundColor:color, cursor:'pointer'
                      }} onClick={onColor}>
                 배경색: {color}
            </h2>
        </div>
    );
};

export default Test2;