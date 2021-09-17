import React, {useState} from 'react';
import '../assets/css/reset.css';
import '../assets/css/KD-Style.css';
import BusinessList from './BusinessList';

const Business = () => {

    const [data, setData] = useState([
        {id: 1, title:'국내자원개발', titleeng:'Domestic resource',
        image: 'http://www.kyungdong.co.kr/ko/front/image/main/sec01_img01.jpg',
        des: '경동은 수십년간 축적된 경험과 광산운영 전반의 기술력을 보유하고 있습니다.'},    
        {id: 2, title:'국내자원개발', titleeng:'Domestic resource',
        image: 'http://www.kyungdong.co.kr/ko/front/image/main/sec01_img01.jpg',
        des: '경동은 수십년간 축적된 경험과 광산운영 전반의 기술력을 보유하고 있습니다.'},    
        {id: 3, title:'국내자원개발', titleeng:'Domestic resource',
        image: 'http://www.kyungdong.co.kr/ko/front/image/main/sec01_img01.jpg',
        des: '경동은 수십년간 축적된 경험과 광산운영 전반의 기술력을 보유하고 있습니다.'},    
        {id: 4, title:'국내자원개발', titleeng:'Domestic resource',
        image: 'http://www.kyungdong.co.kr/ko/front/image/main/sec01_img01.jpg',
        des: '경동은 수십년간 축적된 경험과 광산운영 전반의 기술력을 보유하고 있습니다.'}    
    ])

    return (
        <section class="business">
        <div class="inner">
          <h2>BUSINESS</h2>
          <p>고객이 신뢰하는 글로벌 에너지 자원 선도 기업</p>
          <BusinessList data={data}/>
        
          <p class="more">
            <a href="#">View More</a>
          </p>
        </div>
      </section>
    );
};

export default Business;