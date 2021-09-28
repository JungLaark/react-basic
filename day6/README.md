# day6 2021-09-27

## event
    - target : 실행된 엘리먼트 반환 
    - currentTarget : 이벤트가 바인딩된 곳 리턴 

## input 
    - onChange
    - value 

## useRef
    - 실제 DOM노드를 참조할 때 사용 
    - 참조 대상의 변경이 필요한 경우 .current 속성을 사용 
    - 직접 DOM 요소에 접근해야 할 때 사용.
    - useRef가 반환하는 ref 객체를 이용해서 자식요소에 접근 가능 
    - 포커스, 텍스트 선택 영역, 미디어의 재생 관리 
    - 애니매이션 실행 
```javascript
const nameRef = useRef(null);
const numRef = useRef(숫자 초기값); //값을 유지할 수 있다?

numRef.current++;

nameRef.current.style.xxx = '값';
nameRef.current.focus();

<요소 ref={nameRef}> //이렇게 하면 해당 ref 변수와 연결이 된다. 
```
    - useRef()를 사용하여 실제 DOM을 조작한 경우 컴포넌트가 다시 그려지지 않는다.
    - state는 값이 바뀌지만 useRef는 값이 바뀌지 않는다? 
    - 함수 컴포넌트 내부에서 특정 값을 지속적으로 참조할 때 사용 
    