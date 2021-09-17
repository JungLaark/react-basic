import React from 'react';

const Test3 = () => {

    const handleClick1 = () => {
        alert('test1');
    }

    const handleClick2 = () => {
        alert('test3');
    }

    const handleClick3 = () => {
        alert('test4');
    }

    const handleClick4 = (num) => {
        alert(num);
    }
    return (
        <div>
            <h2>이벤트 처리</h2>
            <p><button onClick={handleClick1}>클릭</button></p>
            <p><button onClick={handleClick2}>클릭</button></p>
            <p><button onClick={handleClick3}>클릭</button></p>

            <p><button onClick={() => alert('testtest')}>클릭</button></p>
            <p><button>클릭</button></p>
            <p><button>클릭</button></p>

            <p><button onClick={handleClick4 (100)}>클릭</button></p>
            <p><button onClick={() => handleClick4(100)}>클릭</button></p>
            <p><button>클릭</button></p>
        </div>
    );
};

export default Test3;