import React from 'react';
import ListObj from "./ListObj";

const ListComponent=()=> {
    
    return (
        <ul>
            <li>{ListObj.home}</li>
            <li>{ListObj.about}</li>
            <li>{ListObj.contactUs}</li>   
            </ul>
    );
};

export default ListComponent;