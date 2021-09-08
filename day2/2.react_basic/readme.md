# react  

## 환경설정   
### CDN 방식 - 요샌 이렇게 안함 
    - react
    - https://ko.reactjs.org/docs/cdn-links.html#gatsby-focus-wrapper
```javascript
<script crossorigin src="https://unpkg.com/react@17/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.production.min.js"></script>
```
    - Babel
    - https://babeljs.io/docs/en/babel-standalone
```javascript
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
```
```html
<div id="root">
        화면에 보이는 영역
    </div>
    <script type="text/babel">
        //옛 방식 // 태그, 속성, 값
        const el = React.createElement('h1', {}, '제목');
        const dom = document.querySelector('#root');//root 찾음 
        ReactDOM.render(el, dom);//render : 화면에 그리기 
    </script>
```

### 예전 버전의 JSX 사용 방식
    - babel 이 jsx를 예전 버전으로 변경
    - https://babeljs.io/

```html
<div id="root">화면에 보이는 영역</div>
    <script type="text/babel">

        const name = '홍길도';
        const age = 23;
        const el = (
            <div>
                <h2>제목</h2>
                <ul>
                    <li>이름1 : name </li>
                    <li>이름2 : {name} </li>
                    <li>이름3 : {age}</li>
                    <li>이름4 : </li>
                    <li>이름5 : </li>
                </ul>
            </div>
        )
        
        //const dom = document.getElementById()
        const dom = document.querySelector('#root');
        ReactDOM.render(el, dom);//그려주는 역할 넣어주겠다.

    </script>
```

### webpack 
    - 모듈 번들러(Module Bundler)
    - 모듈 번들러란 여러개의 나누어져 있는 파일들을 하나의 파일로 만들어주는 라이브러리
    - 코딩할 때 편의를 위해 여러 개의 모듈로 나눠서 작업
    - 리액트에서 웹팩을 디폴트로 제공 ( 모듈처럼 나눠서 작업할수있게 )
    - https://webpack.js.org/

## 환경설정2 
    - 이건 뭘로 만들어졌는지 볼 수 있는 add on
    - https://chrome.google.com/webstore/detail/wappalyzer/gppongmhjkpfnbhagpmjfkannfbllamg
    - 리엑트로 만들어진 사이트
    - https://www.airbnb.co.kr/ 
    - https://www.dropbox.com/ko/
    - https://www.myrealtrip.com/
    - https://www.wanted.co.kr/
    - https://www.nytimes.com/section/universal/ko
    - https://support.discord.com/hc/ko

## 진도 흐름 
    - redux !!!!!!! 이건 통달하자.  
    - ssr 
    - nextjs

## Component 
    - 반복되는 조각들 하나로 해서 재사용성 증가.

## CSR(client-side-rendering)
    - create-react-app
```bash
npx create-react-app 프로젝트명
cd 프로젝트명
npm start or yarn start - 실행
==============================
yarn create react-app 프로젝트명

==============================
```
    - npm
    - npx
    - yarn 

## 폴더 구성 
    - node_modules
    - public/index.html 
    - src/index.js : App이라는 컴포넌트를 index.html에서 root를 찾아서 넣음 

## 명령어 
    - 코드 자동생성 : rsc