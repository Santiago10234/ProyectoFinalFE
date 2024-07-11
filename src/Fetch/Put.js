async function putPublicacion(id,obj) {
     try {
     const respuesta = await fetch(`http://localhost:3001/cars/${id}`,{
        method:"PUT",
        headers:{
            "Content-type": "application/json"
        },
        body:JSON.stringify(obj)
    })
    let data = await respuesta.json()
    console.log(data)
    } catch (error) {
        console.log(error);
    }
}
export {putPublicacion}