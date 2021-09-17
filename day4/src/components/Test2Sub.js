import React from 'react';
import PropTypes from 'prop-types';
//template literal 
const Test2Sub = ({addr, age, color, isLog, name, tel}) => {
    return (
        <div style={{border: `3px solid ${color}`}}>
            <h2>이름:{name}</h2>
            <ul>
                <li>주소:{addr}</li>
                <li>나이:{age}</li>
                <li>컬러:{color}</li>
                <li>로그인여부:{isLog ? "로그인" : "로그아웃"}</li>
                <li>전화번호:{tel}</li>
            </ul>
        </div>
    );
};

Test2Sub.defaultProps = {
    age: 0,
    name: "test"
}

//타입 정의
Test2Sub.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    addr: PropTypes.string,
    tel: PropTypes.string,
    color: PropTypes.string,
    isLog: PropTypes.bool
}

export default Test2Sub;