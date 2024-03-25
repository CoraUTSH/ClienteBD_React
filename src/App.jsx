import { useState } from 'react'
import Axios from 'axios'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
const endpoint="http://localhost:3002/create"

function App() {
  const [matricula, setMatricula] = useState()
  const [nombre, setNombre] = useState()
  const [direccion, setDireccion] = useState()
  
  const add = (e) => {
    e.preventDefault()
    const res=Axios.post(endpoint,
    {
      dmatricula: matricula,
      dnombre: nombre,
      ddireccion: direccion
    })
    .then(() => {
      alert("Empleado registrado");
    })
    .catch(err=>alert(err))
  }

  return (
    <div className='datos'> 
    <form onSubmit={add}>   
      <div className="form-group mb-3">
          <label htmlFor="matricula">Matricula</label>
          <input type="number" className="form-control" onChange={(e)=>{setMatricula(e.target.value)}} id="matricula" placeholder="2020321"/>
          {matricula}
        </div>
        <div className="form-group mb-3">
          <label  htmlFor="nombre">Nombre</label>
          <input type="text" className="form-control" onChange={(e)=>{setNombre(e.target.value)}} id="nombre" placeholder="Yazmin Castillo Montiel"/>
          {nombre}
        </div>
        <div className="form-group mb-3">
          <label htmlFor="direccion">Dirección</label>
          <input type="text" className="form-control"  id="direccion" onChange={(e)=>{setDireccion(e.target.value)}} placeholder="Col. las margaritas, calle: buena vista, núm: 15"/>
          {direccion}
        </div>
        <button type="submit" className="btn btn-primary">Enviar</button>
      </form>  

    </div>
  )
}

export default App
