import React from 'react'

function Editar() {
  return (
    <div>
       <div className='container'>
        <div className="container-register">
          <h1 className='titulo'>Edita tu Vehículo</h1>
          <form className='container-inp'>
              <select className='inp'>
                <option defaultValue>Marca</option>
                <option>Alfa Romeo</option>
                <option>Aston Martin</option>
                <option>Audi</option>
                <option>Bentley</option>
                <option>BMW</option>
                <option>Cadillac</option>
                <option>Dodge</option>
                <option>Ferrari</option>
                <option>Audi</option>
                <option>Ford</option>
                <option>Jaguar</option>
                <option>Lamborghini</option>
                <option>Land Rover</option>
                <option>Lexus</option>
                <option>Audi</option>
                <option>Maserati</option>
                <option>Mazda</option>
                <option>Mercedes Benz</option>
                <option>Porsche</option>
                <option>Rolls Royce</option>
                <option>Tesla</option>
                <option>Toyota</option>
                <option>Volvo</option>
            </select>
            <input className='inp' placeholder='Modelo' type="text" />
            <input className='inp' placeholder='Año' type="number" />
            <input className='inp' placeholder='Precio' type="text" />

            <button className='btn-register' type='submit'>Editar</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Editar
