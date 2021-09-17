# day5
## useState
    - 클래스 컴포넌트를 작성하지 않아도 state와 같은 특징들을 사용 할 수 있음 
    - https://ko.reactjs.org/docs/hooks-state.html
    - 값이 유동적으로 변경될 때 사용 
```javascript
const [변수, 변수를 변경하는 함수(setter)] = React.useState(초기값);


const [count, setCount] = useState(0);
count = 0;
setCount(100) => count = 100

```

    