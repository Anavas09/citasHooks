import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';

function Formulario({crearCita}) {

    const stateInicial = {
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    }

    //citas = this.state.citas, guardarCitas = this.setState({citas})
    const [cita, actualizarCita] = useState(stateInicial)

    //Manejando los cambios en los inputs y el textarea
    const handleOnChange = (e) => {
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    }

    console.log(cita);

    //Enviando los datos al componente principal (App.js) y limpiando el formulario 
    const handleOnSubmit = (e) => {
        e.preventDefault()
        crearCita(cita)
        actualizarCita(stateInicial)
    }

    return (
        <Fragment>
            <h2>Crear Cita</h2>
            <form onSubmit={handleOnSubmit}>
                <label>Nombre Mascota</label>
                <input 
                    type="text" 
                    name="mascota"
                    className="u-full-width" 
                    placeholder="Nombre Mascota"
                    onChange={handleOnChange}
                    value={cita.mascota}
                />

                <label>Nombre Dueño</label>
                <input 
                    type="text" 
                    name="propietario"
                    className="u-full-width"  
                    placeholder="Nombre Dueño de la Mascota"
                    onChange={handleOnChange}
                    value={cita.propietario}
                />

                <label>Fecha</label>
                <input 
                    type="date" 
                    className="u-full-width"
                    name="fecha"
                    onChange={handleOnChange}
                    value={cita.fecha}
                />               

                <label>Hora</label>
                <input 
                    type="time" 
                    className="u-full-width"
                    name="hora"
                    onChange={handleOnChange}
                    value={cita.hora}
                />

                <label>Sintomas</label>
                <textarea 
                    className="u-full-width"
                    name="sintomas"
                    onChange={handleOnChange}
                    value={cita.sintomas}
                ></textarea>

                <button type="submit" className="button-primary u-full-width">Agregar</button>
            </form>
        </Fragment>
    );
}

Formulario.propTypes = {
    crearCita: PropTypes.func.isRequired,
};

export default Formulario;