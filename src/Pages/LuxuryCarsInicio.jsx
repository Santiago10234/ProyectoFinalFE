import React from 'react';
import QuienesSomos from '../Components/QuienesSomos'; // Asegúrate de ajustar la ruta si es necesario
import '../styles/QuienesSomos.css'; // Importa el archivo de estilos
import NabBar from '../Components/NavBar';

function LuxuryCarsInicio() {
  return (
    
    <div className="App">
      <NabBar/>
      <header className="App-header">
        <h1 className='colorh1'>Bienvenido a LuxuryCars</h1>
      </header>
      <main>
        <QuienesSomos />
        {/* Otros componentes y contenido de tu aplicación */}
      </main>
      <footer>
        <p className='colorh1'>&copy; 2024 LuxuryCars. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}


export default LuxuryCarsInicio





