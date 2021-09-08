# React 

## day1

### 초기설정 
    vscode
    - Live Server
    - Korean Language Pack for Visual Studio Code
    - Auto Close Tag
    - Auto Complete Tag
    - Auto Import 
    - Auto Rename Tag 추가 

### template literal
```javascript
        let a = 30;
        const b = 50;
        const result1 = a+'와' +b+ '의 합은' + (a+b);
        console.log(result1);

        //템플릿 리터럴
        const result2 = `${a} 와 ${b} 의 합은 ${a+b}`;
        console.log(result2);

        const name = 'laark';
        const age = 20;
        const addr = '서울';
        let result3 = `${name}은 나이가 ${age} 이고 사는 곳은 ${addr} 입니다.`;
        console.log(result3);
```
### 연산자 
```javascript
         //react 에서의 같다는 === 세번써야 한다. 
        const result1 = done1 === true ? '참' : '거짓';
        console.log(result1);

        const result2 = done1 = true ? '참' : '거짓';
        console.log(result2);

        const result3 = done1 === true && '참' //앞의 조건이 맞으면 나옴

        const result4 =  done2 === true || '거짓'//아닐 때 나옴 
        //리액트 환경에서는 안나온다
        //js 환경에서 위에 true 가 false이면 true가 나옴 
        console.log(result4);

        // || 값이 존재하지 않으면 
        const result5 = done3 || '값 없음'
        console.log(result5);

        //다중 if 문 못씀 
        /*
            다중 if처럼
            
            조건1 && '결과1'
            조건2 && '결과2'
            조건3 && '결과3'
            조건4 && '결과4'
            조건5 && '결과5'
        */
```
### 화살표 함수
```javascript
        const make4 = num => {
            console.log(num);
        }

        make4(200);

        const make5 = (num1, num2) => {
            console.log(num1 + num2);
        }

        make5(100, 1200);
```

### push, concat, slice
```javascript
        //불변성 원본 데이터 훼손없이 개발 할 상황이 온다. react에서는 
        const arr = [10, 20, 30, 40, 50];
        arr.push(60);
        arr.push(70);
        arr.push(80);
        arr.push(90);
        console.log(arr);
        //push는 원본이 바뀌게 된다 

        //불변성 원본유지 카피본으로 작업한다. 이게 react 
        //concat, slice, 스프레드 연산자를 주로 사용한다. 

        const arr1 = [10, 20, 30, 40, 50];
        const arr2 =arr1.concat();//카피본 만드는 것
        console.log('arr1', arr1);
        console.log('arr2', arr2);

        const arr3 = arr1.concat(66,77,88);
        console.log('arr3', arr3);

        //slice
        const arr4 = arr1.slice(1,3);
        console.log('arr4', arr4);

        //객체 
        //const dog = {name : 'test'};
        //dog.name

        //객체 안에 배열이 들어감 
        const data = [
            {id: 1, name: 'test1', age:20},
            {id: 2, name: 'test2', age:20},
            {id: 3, name: 'test3', age:20},
            {id: 4, name: 'test4', age:20}
        ]

        console.log(data[0].id, data[0].name, data[0].age);
        console.log(data[1].id, data[1].name, data[1].age);
        console.log(data[2].id, data[2].name, data[2].age);
        console.log(data[3].id, data[3].name, data[3].age);

        const data1 = data.concat();
        const data2 = data.concat({
            id: 1000,
            name: 'test',
            age: 34
        });
        console.log('data1', data1);
        console.log('data2', data2);
```
### map
```javascript
         //JSX
        //map 쓴다. 
        arr.map((item, idx) => {
            return (
                console.log(idx, item)
            )
        });

        console.log('-0------------------');
        //return 없어도 됨 
        //결과가 하나 뿐일 경우 
        arr.map((item, index) => console.log(index, item));
        console.log('-0------------------');

        /***************************************/

        const data = [
            {id: 1, name: 'test', age:20},
            {id: 2, name: 'test1', age:20},
            {id: 3, name: 'test2', age:20},
            {id: 4, name: 'test4', age:20}
        ]

        data.map((item, index) => {
            return(
                console.log(item.id, item.name, item.age)
            )
        });

        data.map((item, index) => {
            console.log(item.id, item.name, item.age)
        })
```
### Filter
```javascript
        const arr=[10, 20, 30, 40];
        //item => 조건 
        ///filter 결과는 항상 배열이다 
        //find는 값 하나만 출력 
        const arr1 = arr.filter(item => item>20 );
        const arr2 = arr.filter(item => item === 20);
        const arr3 = arr.filter(item => item !== 20);

        console.log(arr1);
        const data = [
            {id:1, name:'test1', age:20},
            {id:2, name:'test2', age:20},
            {id:3, name:'test3', age:20},
            {id:4, name:'test$', age:20}
        ]

        const data2 = data.filter(item => item.id === 1);
        console.log(data2);
```
<<<<<<< HEAD:day1/readme.md

=======
>>>>>>> 3104babac4c14691f864809f272c07dc9f6caa2a:readme.md
