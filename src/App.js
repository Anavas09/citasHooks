import React, { useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita';

function App() {

  //Cargar citas iniciales desde el localStorage del browser al state inicial de la app 
  let citasIniciales = JSON.parse(localStorage.getItem('citas'));

  if (!citasIniciales) {
    citasIniciales = []
  }

  //citas = this.state.citas, guardarCitas = this.setState({citas})
  const [citas, guardarCitas] = useState(citasIniciales)

  //Agregando una nueva cita
  const crearCita = (cita) => {
    //copiando las citas existentes en el state y agregando una nueva
    const nuevasCitas = [...citas, cita]
    //Almacenando en el state
    guardarCitas(nuevasCitas)
  }

  //Eliminando una cita del state
  const eliminarCita = (index) => {
    const citasRestantes = [...citas];
    citasRestantes.splice(index, 1);
    guardarCitas(citasRestantes);
  }

  useEffect(
    () => {
      let citasIniciales = JSON.parse(localStorage.getItem('citas'));

      if (citasIniciales) {
        localStorage.setItem('citas', JSON.stringify(citas))
      }else{
        localStorage.setItem('citas', JSON.stringify([]))
      }
    }, [ citas ]
  )

  //Si la condición es verdadera se muestra un mensaje, en caso contrario se muestra el otro
  const titulo = Object.keys(citas).length === 0 ? 'No hay citas':'Administre las citas aquí'
  
  return (
    <div>
      <h1>Administrador de Pacientes</h1>
      <div className="container" >
        <div className="row">
          <div className="one-half column">
            <Formulario crearCita={crearCita}/>
          </div>
          <div className="one-half column">
            <h2>{titulo}</h2>
            {citas.map((cita, i) => {
              return(
                <Cita
                  key={i}
                  index={i}
                  cita={cita}
                  eliminarCita={eliminarCita}
                />
              )
            })}
          </div>
        </div>
      </div> 
    </div>
  );
}

export default App;
