async function putPublicacion(id ,marca, modelo, precio, year) {
     try {
     const respuesta = await fetch(`http://localhost:3001/cars/${id}`,{
        method:"PUT",
        headers:{
            "Content-type": "application/json"
        },
        body:JSON.stringify({
            brand: marca,
            model: modelo,
            price: precio,
            year: year,
        })
    })
    let data = await respuesta.json()
    console.log(data)
    } catch (error) {
        console.log(error);
    }
}
export {putPublicacion}