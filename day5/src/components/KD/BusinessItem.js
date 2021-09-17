import React from 'react';

const BusinessItem = (item) => {

    const {id, des, image, title, titleeng} = item;

    return (
        <li>
        {/* <a href="#">
          <div>
            <img
              src="http://www.kyungdong.co.kr/ko/front/image/main/sec01_img01.jpg"
              alt=""
            />
          </div>
          <h3>
            국내자원개발
            <span> Domestic resource</span>
          </h3>
          <p>
            경동은 수십년간 축적된 경험과 광산운영 전반의 기술력을 보유하고
            있습니다.
          </p>
        </a> */}
        <a href="#">
          <div>
            <img
              src={image}
              alt={title}
            />
          </div>
          <h3>
            {title}
            <span> {titleeng}</span>
          </h3>
          <p>
            {des}
          </p>
        </a>
      </li>
    );
};

export default BusinessItem;