import React, {useState} from 'react';

function Formulario(){
    const[inputValue, setInputValue] = useState('');

    const[valorEnviado, setValorEnviado] = useState('');

    const manejarCambio = (e) => {
        setInputValue(e.target.value);
    }

    const manejarEnvio = (e) =>{
        e.preventDefault();
        setValorEnviado(inputValue);
        setInputValue('');
    }
    
    return(
        <div>
            <h2>Formulario</h2>
            <form onSubmit={manejarEnvio}>
                <label>
                    Ingresa algún texto:
                    <input type="text" value={inputValue} onChange={manejarCambio}/>
                </label>
                <button type="submit">Enviar</button>

            </form>
            {valorEnviado &&(
                <p>Valor enviado: {valorEnviado}</p>
            )}
        </div> 
    )
}

export default Formulario;