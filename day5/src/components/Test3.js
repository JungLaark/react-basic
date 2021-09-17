import React, {useState} from 'react';

const Test3 = () => {

    //useState인데 setState로 했다. 왜그랬지 
    const [visible, setVisible] = useState(true);

    const onShow = () => {
        setVisible(true);
    };

    const onHide = () => {
        setVisible(false);
    };

    const onToggle = () => {
        setVisible(!visible);
    };


    return (
        <div>
            <p>버튼을 누르면 박스 보이고 숨기기</p>
            <p>
                <button onClick={onShow}>보이기</button>
                <button onClick={onHide}>숨기기</button>
                <button onClick={onToggle}>보이기/숨기기 토글이 뭐야
                {visible === true ? '숨기기':'보이기'}
                 </button>
            </p>
            
            <hr/>
            {
                visible === true ? 
                <div style={{width:300, height:100, background:'pink', margin:'20px auto'}}>
                </div>
                : null
            }
            <hr/>
            {
                visible && 
                <div style={{width:300, height:100, background:'pink', margin:'20px auto'}}>
                </div>
            }
        </div>
    );
};

export default Test3;