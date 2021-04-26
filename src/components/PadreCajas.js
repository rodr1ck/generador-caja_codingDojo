import React from 'react';

const PadreCajas = (props) => {
    
    const {children} = props
    
    return (
        <div className="padre-de-cajas">
            {children}
        </div>
    );
}

export default PadreCajas;
