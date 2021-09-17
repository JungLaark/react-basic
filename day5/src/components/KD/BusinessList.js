import React from 'react';
import BusinessItem from './BusinessItem';

const BusinessList = ({data}) => {
    return (
        <ul class="list">
            {
                data.map((item, index) => <BusinessItem key={index} item={item}/>
                )
            }
            
            <BusinessItem/>
        </ul>
    );
};

export default BusinessList;