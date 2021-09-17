import React from 'react';
import Test2Sub from './Test2Sub';



const Test2 = () => {
    return (
        <div>
            <Test2Sub
                name="laark1"
                age={12}
                addr="서울"
                tel="0101001"
                color="tomato"
                isLog={true}
            />
            <hr/>
            <Test2Sub
                name="laark3"
                addr="제주"
                color="skyblue"
            />
            <hr/>
            <Test2Sub/>
        </div>
    );
};

export default Test2;