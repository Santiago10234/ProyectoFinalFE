const apiUrl = "http://localhost:3001/users"
const guardarUser = async (obj) => {
    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
        const data = response.json()
        console.log(data);
        return data
    } catch (error) {
        
    }
}

export {guardarUser}

const enviaDatosDeAmbos = async (marca, modelo, img, precio, year) => {
    try {
      const response = await fetch("http://localhost:3001/cars", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          Brand: marca,
          Model: modelo,
          img: img,
          price: precio,
          year: year,
          userID: localStorage.getItem("idU")
        })
      });
  
      if (!response.ok) {
        throw new Error('Error al enviar los datos');
      }
  
      const data = await response.json(); // Espera a que la promesa se resuelva
  
      console.log(data);
      return data;
    } catch (error) {
      console.error('Error al cargar los datos:', error);
      throw error; // Re-lanza el error para manejarlo en el código que llama a esta función
    }
  }
export {enviaDatosDeAmbos}  