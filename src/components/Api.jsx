import React, {useState, useEffect} from 'react';

const ImagenPerro = ({imagen}) => {
    return(
        <div className="imagen-perro">
            <h1>Imagen de Perros</h1>
            <img src={imagen} alt="imagen de perro" />
        </div>
    )
}

const Appp = () =>{
    const [imagen, setImagen] = useState('')

    useEffect(() =>{
        const obtenerImagenPerro = async () =>{
            try{
                const respuesta = await fetch('https://dog.ceo/api/breeds/image/random')
                const datos = await respuesta.json()
                setImagen(datos.message)
            }catch(e){
                console.log(e)
            }     
        }
        obtenerImagenPerro();
    }, [])
}