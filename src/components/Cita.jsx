import React from 'react';
import PropTypes from 'prop-types';

function Cita({cita, index, eliminarCita}) {
    const { mascota, propietario, fecha, hora, sintomas } = cita

    return (
        <div className="cita">
            <p>Mascota: <span>{mascota}</span></p>
            <p>Dueño: <span>{propietario}</span></p>
            <p>Fecha: <span>{fecha}</span></p>
            <p>Hora: <span>{hora}</span></p>
            <p>Sintomas: <span>{sintomas}</span></p>
            <button
                type="button"
                className="button eliminar u-full-width"
                onClick={() => eliminarCita(index)}
            >
                Eliminar X
            </button>
        </div>
    );
}

Cita.propTypes = {
    cita: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    eliminarCita: PropTypes.func.isRequired,
};


export default Cita;