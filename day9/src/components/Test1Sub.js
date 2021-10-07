import React from 'react';

const Test1Sub = ({onDel1, onDel2, onDel3, onAdd, onMod1, onMod2}) => {
    return (
        <div>
            <h1>Test1Sub</h1>
            <p>
                <button onClick={onDel1}>삭제1</button>
                <button onClick={onDel2}>삭제2</button>
                {/* <button onClick={onDel3(3)}>삭제3</button> 에러 생김*/}
                <button onClick={() => onDel3(3)}>삭제3</button>
                <button onClick={() => onDel3(4)}>삭제4</button>
            </p>
            <p>
                <button onClick={ () => onAdd('100억')}>100억 추가</button>
                <button onClick={ () => onAdd('1000억')}>2000억 추가</button>
            </p>
            <p>
                <button onClick={() => onMod1(1)}>수정</button>
                <button onClick={() => onMod2(2)}>수정</button>
            </p>
        </div>
    );
};

export default Test1Sub;