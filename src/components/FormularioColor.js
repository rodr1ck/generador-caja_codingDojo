import React from 'react';
import {useState} from 'react';

const FormularioColor = (props) => {

    const {addColor} = props;
    const [color, setColor] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const payload = {};
        for (const [key, val] of formData.entries()) payload[key] = val;

        if (payload['color'].trim() === '')
            return alert('Tienes que entrar un color!');

        // exito
        addColor(payload);
        form.querySelectorAll('input[type="text"]').forEach((input, index) => {
            setColor('')
            if (index === 0) input.focus();
        });
    };

    return (
        <form onSubmit={onSubmit} className="formulario-de-color">
            <label htmlFor="text-colour">Color</label>
            <input value={color} onChange={(e) => setColor(e.target.value)} id="text-colour" type="text" name="color" placeholder="Ingresa un color"/>
            <input type="submit" value="Añadir" />
        </form>
    );
}

export default FormularioColor;


