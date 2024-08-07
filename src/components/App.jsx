
// import React, { useState, useEffect } from 'react';


// const ImagenPerro = ({ imagen }) => {
//   return (
//     <div>
//       <h2>Imagen de un Perro</h2>
//       <img src={imagen} alt="Perro" />
//     </div>
//   );
// };

// const App = () => {
//   const [imagen, setImagen] = useState('');

//   useEffect(() => {
//     const obtenerImagenPerro = async () => {
//       try {
//         const respuesta = await fetch('https://dog.ceo/api/breeds/image/random');
//         const datos = await respuesta.json();
//         setImagen(datos.message);
//       } catch (error) {
//         console.error('Error al obtener la imagen del perro:', error);
//       }
//     };

//     obtenerImagenPerro();
//   }, []);

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Aplicación de Imágenes de Perros</h1>
//       </header>
//       <ImagenPerro imagen={imagen} />
//     </div>
//   );
// };

// export default App;
// ----------------------------------------------
// API - 2do ejemplo Hook

import React, {useState, useEffect} from 'react';

const ListaProductos = ({productos}) =>{

  return(
    <div className="lista-productos">
      <h1>Lista de Productos</h1>
      <ul>
        {productos.map((producto) => (
          <li key={producto.id}>{producto.title}</li>
          ))}
      </ul>
    </div>
  )
}
  const App = () =>{
    const [productos, setProductos] = useState([]);

    useEffect(() =>{
      const obtenerProductos = async () =>{
        try{
          const respuesta = await fetch('https://fakestoreapi.com/products');
          const datos = await respuesta.json()
          setProductos(datos)
          }catch(e){
            console.log(e)
            }
      }
      obtenerProductos();
    }, []);

    return(
      <div>
        <ListaProductos productos={productos} />
      </div>)
  }


export default App;