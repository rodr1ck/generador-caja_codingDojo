import React from 'react';

const Caja = (props) => {

    const {color} = props
    
    return (
        <div className="caja" style={{backgroundColor: color.color}} />
    );
}

export default Caja;
