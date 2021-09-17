# day4
## Property Type Check
    - https://ko.reactjs.org/docs/typechecking-with-proptypes.html
    - Flow, like, TypeScript 정적 타이핑 도구 
    - 유효성 검사 할 수 있음 Validator
```javascript
import PropTypes from 'prop-types';

//초기값 정의 
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
```
## 이벤트 처리 
    - https://ko.reactjs.org/docs/handling-events.html
    - 이건 바로 실행됨 
```html
<p><button onClick={handleClick4 (100)}>클릭</button></p>
<p><button onClick={() => handleClick4(100)}>클릭</button></p>
```
    - 함수로 한 번 묶어서 처리해줘야 함 

## Map
```javascript
 arr.map((item, index) => {
                    return(
                        <p>{index} / {item}</p>
                    );
                });
```
    - <p key={index}> 로 추가해줘야 함 
```html
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
```

yarn