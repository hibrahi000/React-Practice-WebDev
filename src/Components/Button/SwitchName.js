import React from 'react';
import './SwitchName.css';
const switchName = ( props ) =>{
    let {name} = props;

    return (
        <button className='switchName'>{name}</button>
    )

};

export default switchName;

