import React from 'react';

const Test5Display = ({name, ani}) => {
    return (
        <div>
            <h2>Display 컴포넌트</h2>
            <h3>
                {name}님이 좋아하는 동물은 {ani}입니다. 
            </h3>

        </div>
    );
};

export default Test5Display;