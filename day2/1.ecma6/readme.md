## day2

### Filter
```javascript
        //배열 객체
        const data = [
            {id:1, name:'test1', age:20},
            {id:2, name:'test2', age:20},
            {id:3, name:'test3', age:20},
            {id:4, name:'test4', age:20},
            {id:4, name:'test5', age:20}
        ]

        const data1 = data.filter( item => item.id === 1);
        console.log(data1);

        const data2 = data.filter( item => item.id !== 4);
        console.log(data2);

        //find, findindex 도 같은 종류이다.
```

### find 
```javascript
        //배열 객체
        const data = [
            {id:1, name:'test1', age:20},
            {id:2, name:'test2', age:20},
            {id:3, name:'test3', age:20},
            {id:4, name:'test4', age:20},
            {id:4, name:'test5', age:20}
        ]

        const arr = [10, 20, 30, 40, 50];

        const re1 = arr.find(item => item > 30);

        const re2 = arr.find(item => item === 40);
        console.log(re2);

        const re3 = data.find(item => item.id === 5);
```

### indexOf
```javascript
        const arr = ['고구마', '김치', '감자', '고기', '고단백'];
        const txt1 = '고';
        const result = arr.filter(item => item.indexOf(txt1) !== -1);

                /*************************************************/
        
        const data = [
            {name: '운동을 하다'},
            {name: '저녁을 하다'},
            {name: '리엑트 공부를 하다'},
            {name: '영화를 보다'}
        ];

        const txt2 = '하다';
        const result2 = data.filter(item => item.name.indexOf(txt2) !== -1);
        console.log(result2);

```
### 비구조할당 / 구조분해
```javascript
       const dog = {
            name: '치와와',
            age: 3
        }
        //dog.name
        //dog['name']

        //const {key, key} = 객체
        const {name, age} = dog;
        console.log(name, age);
        // . 쓰지않고도 출력할 수 있다. 

        const data = {
            a: 20, b: 30, c: 100
        }

        const {a, b, c} = data;
        console.log(a, b, c);
        //이건 좀 익숙해져야겠다. 
```

### 스프레드 연산자 / 전개 연산자
    - concat과 비슷하지만 복사, 수정도 가능하다. 
```javascript
        const arr = ['강아지', '고양이', '야옹이'];
        const arr1 = arr.concat();
        const arr2 = [...arr];//배열안에 있는 값 복사
        console.log('-----');
        const arr3 = arr.concat('호렁아', '소');
        const arr4 = [...arr3, '호랑이', '소'];
        console.log('-----');
        //키 값들 복사
        const dog = {name:'치와와', age:3, addr:'서울'};
        const dog1 = {
            ...dog, 
            name: 'test',
            age: 30,
            addr: '제주'
            
        }//이건 업데이트 됨 

        console.log('dog1 : ', dog1);

        const data = [
            {id:1, name:'test1', age:20},
            {id:2, name:'test2', age:20},
            {id:3, name:'test3', age:20},
            {id:4, name:'test4', age:20},
            {id:4, name:'test5', age:20}
        ]

        const data1 = data.concat({id:6, name:'test6', age:22});
        const data2 = [
            ...data,
            {
                id: 7,
                name: "test6",
                age: 34
            },
            {
                id: 7,
                name: "test6",
                age: 34
            },
            {
                id: 7,
                name: "test6",
                age: 34
            }
        ]
        //이건 추가가 됨 
        console.log(data2);
        /*===============================================*/
        //갱신
        const data3 = data.map((item, index) => {
            if(item.id === 3){
                return {
                    ...item,
                    name: 'laark',
                    age: 22
                }
            }else{
                return item;
            }
        });

        console.log(data3);

        /*===============================================*/
        const data4 = data.map((item, index) => 
        item.id === 1 ? {...item, name:'이순신', age:70} : item);
        console.log(data4);
        //25분에 시작
        //{...item, name:'이순신', age:70} -> 1인거 가져오고 name과 age 바꾼다

```
    