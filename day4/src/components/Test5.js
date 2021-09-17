import React from 'react';

const Test5 = () => {

    const data = [
        {id: 1, name: 'laark', age: 30},
        {id: 2, name: 'laark', age: 30},
        {id: 3, name: 'laark', age: 30},
        {id: 4, name: 'laark', age: 30},
        {id: 5, name: 'laark', age: 30},
        {id: 6, name: 'laark', age: 30}
    ]
    return (
        <div>
            {
                data.map((item,index) => {
                    return (
                        <p key={index}>
                            {index} : {item.id} / {item.name} / {item.age}
                        </p>
                    )
                })
            }
            <hr></hr>
            {
                data.map((item, index) => <p key={index}>
                    {item.id} / 
                    {item.name} /
                    {item.age}
                </p>)
            }
        </div>
    );
};

export default Test5;