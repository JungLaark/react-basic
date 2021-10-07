import React, {useState, useRef} from 'react';
import Test1Sub from './Test1Sub';

const Test1 = () => {

    const no = useRef(6);//dom 연결 

    const [data, setData] = useState([
        {id: 1, name: '홍길동1'},
        {id: 2, name: '홍길동2'},
        {id: 3, name: '홍길동3'},
        {id: 4, name: '홍길동4'},
        {id: 5, name: '홍길동5'},
        {id: 6, name: '홍길동6'}
    ]);

    const onDel1 = () => {
        setData(data.filter(item => item.id !== 1));
    }

    const onDel2 = () => {
        setData(data.filter(item=> item.id !== 2));
    }

    const onDel3 = (id) => {
        setData(data.filter(item => item.id !== id));
        //에러 생김
    }

    const onAdd = (text) => {
        setData([
            ...data,
            {
                id: no.current++,
                name: text
                //text 가 name 이라면 name 이렇게 사용가능하다 
                //name
            }
        ]);
    };

    const onMod1 = (id) => {
        setData(data.map((item, index) => {
            if(item.id === id){
                return{
                    ...item,
                name: '제임스 딘'
                }
            }else{
                return item;
            }
        }))
    }

    const onMod2 = (value) => {
        setData(data.map(item => item.id === value ? {...item, name: '울랄라'} : item));
    }


    return (
        <div>
            <h1>Test1</h1>
            <h2>삭제 및 수정</h2>
            {
                data.map((item, index) => <p key={item.id}>
                    {item.id} / {item.name}
                </p>)
            }
            <hr/>
            <Test1Sub onDel1={onDel1} onDel2={onDel2} onDel3={onDel3}
            onAdd={onAdd} onMod1={onMod1} onMod2={onMod2}/>
        </div>
    );
};

export default Test1;