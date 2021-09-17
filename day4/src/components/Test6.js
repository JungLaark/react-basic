import React from 'react';

const data = [
    {id: 1, name: 'laark1', age:23, addr:'대구', done:true},
    {id: 2, name: 'laark2', age:23, addr:'대구', done:false},
    {id: 3, name: 'laark3', age:23, addr:'대구', done:true},
    {id: 4, name: 'laark4', age:23, addr:'대구', done:false},
    {id: 5, name: 'laark5', age:23, addr:'대구', done:true}
]

const Test6 = () => {
    return (
        <div>
            <table>
                <caption>슬기로운 의사생활</caption>
                <colgroup>
                    <col/>
                    <col/>
                    <col/>
                    <col/>
                    <col/>
                </colgroup>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>이름</th>
                        <th>나이</th>
                        <th>주소</th>
                        <th>동의여부</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{data[0].id}</td>
                        <td>{data[0].name}</td>
                        <td>{data[0].age}</td>
                        <td>{data[0].addr}</td>
                        <td>{data[0].done}</td>
                    </tr>
                    {
                        data.map((item, index) => <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                        <td>{item.addr}</td>
                        <td>{item.done}</td>
                        
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Test6;