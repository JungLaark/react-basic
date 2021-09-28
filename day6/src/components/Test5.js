import React, {useRef} from 'react';

const Test5 = () => {

    const nameRef = useRef(null);
    const addrRef = useRef(null);

    const onView = () => {
        //실제 연결된 dom에서 값을 가지고 오겠다.
        const data = {
            name: nameRef.current.value,
            addr: addrRef.current.value
        }

        console.log(data);

        const json = JSON.stringify(data);

        console.log(json);
    }

    return (
        <div>
            <h1>test5 : useRef</h1>
            {/**/}
            <input type="text" ref={nameRef}></input>
            <input type="text" ref={addrRef}></input>
            <button onClick={onView}>확인</button>
        </div>
    );
};

export default Test5;