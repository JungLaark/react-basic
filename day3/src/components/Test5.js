import React from 'react';

const Test5 = () => {
    //함수영역  if, for, switch~case 등 가능 
    const isLogin = true 
    const done1 =false 
    const done2 = undefined

    const btnLogin = ( isLog )  => {
        if( isLog  === true ) {
            return ( <button>LOGIN</button>)
        }else {
            return ( <button>LOGOUT</button>)
        }
    }


    return (
        <div>
            <h3>JSX 조건문 : 삼항 , && , ||</h3>
            <p>
                {
                    isLogin === true ?
                    <button>로그인</button> :
                    <button>로그아웃</button>
                }
            </p>
            <p> {isLogin ? '로그인':'로그아웃'} </p>
            <p> {isLogin && '로그인 참결과'}</p>
            <p> {done1 || '거짓입니다.'} </p>
            <p> {done1 === false || '거짓입니다.2'}  </p>
            <p> {done1 === true  || '거짓입니다.3'}  </p>
            <p>
                {done2 || <h2>조회된 게시글이 없습니다.</h2>}
            </p>

            {  btnLogin( true ) }
        </div>
    );
};

export default Test5;

/*
같다  ===  다르다 !== 
* jsx 조건분기 - 삼항연산자 (if X )
* { 조건 ? 참 : 거짓 }
* 조건 && 참결과
* 조건 || 거짓결과  => 
  undefined , null, o, false , ''(빈문자열) 중 하나를 return 할 경우 정상적인 화면 렌더링이 이루어지지 않는다 
  특히 undefined변수를 바로 리턴하는 경우 에러 발생 
*/