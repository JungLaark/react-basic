import React, {useState} from 'react';

const Test2 = () => {

    const [data, setData] = useState([
        {
            id: 1,
            name: 'laark1',
            age: 40
        },
        {
            id: 2,
            name: 'laark2',
            age: 30
        },
        {
            id: 3,
            name: 'laark3',
            age: 55
        },
        {
            id: 4,
            name: 'laark4',
            age: 10
        },
        {
            id: 5,
            name: 'laark5',
            age: 20
        }
        
    ]);

    const onAdd1 = () => {
        setData(data.concat({id: 6, name: 'laark6', age: 4}));
    };

    const onAdd2 = () => {
        setData([
            //스프레드 연산자를 써야한다.
            ...data,
            {
                id: 7,
                name: '추가',
                age: 34
            }
        ])
    };
    const onAdd3 = () => {

    };

    return (
        <div>
            <h1>test2</h1>
            <h1>오징어 게임</h1>
            <p>
                <button onClick={onAdd1}>추가 1</button>
                <button onClick={onAdd2}>추가 2</button>
                <button onClick={onAdd3}>추가 3</button>
            </p>
            <hr/>
            <ul>
                {
                    data.map((item, index) => <li key={index}>
                        {item.id} / {item.name} / {item.age}
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Test2;