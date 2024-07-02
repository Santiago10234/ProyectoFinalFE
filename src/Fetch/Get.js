const apiUrl = "http://localhost:3001/users"
const traerUser = async () => {
    try {
      // Petición GET a la API para obtener las tareas guardadas
      const response = await fetch(apiUrl);
      const data = await response.json();
      return data; 
    } catch (error) {
      console.error('Error al cargar los usuarios:', error);
    }
  };

  export default traerUser


const traeDatosDeAmbos=async(endpoint)=>{
  try {
    // Petición GET a la API para obtener las tareas guardadas
    const response = await fetch("http://localhost:3001/"+endpoint);
    const data = await response.json();
    return data; 
  } catch (error) {
    console.error('Error al cargar los datos:', error);
  }
}
export {traeDatosDeAmbos}
