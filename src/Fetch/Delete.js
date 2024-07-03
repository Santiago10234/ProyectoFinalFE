async function DeleteCars(id) {
    const url = 'http://localhost:3001/cars'+id;
  
    try {
      const response = await fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
          }
      });
  
    } catch (error) {
      console.error('error', error);
    }
  }

  export {DeleteCars}
  