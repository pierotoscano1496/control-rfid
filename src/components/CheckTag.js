import { useState } from 'react';
import values from '../models/values';

function CheckTagComponent() {
    const [mensaje, setMensaje] = useState('');
    const [buttonDisabled, setButtonDisabled] = useState(false);

    const checkTag = async () => {
        setMensaje('Espere un momento...');
        setButtonDisabled(true);
        const response = await fetch(`${values.mainUrlIoTServer}check-access`)
            .then(res => res.json().then(data => ({ status: res.status, data })))
            .catch(err => console.log('Error while requesting access'));
        if (response) {
            switch (response.status) {
                case 200:
                    setMensaje(response.data.access ? 'Acceso permitido' : 'Acceso denegado');
                    break;
                case 408:
                    setMensaje('Tiempo de espera agotado');
                    break;
                default:
                    setMensaje('Error desconocido');
                    break;
            }
        } else {
            setMensaje('Error desconocido');
        }
        setButtonDisabled(false);
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="card-title">Validar Tag</h4>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <p>{mensaje}</p>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer">
                            <button disabled={buttonDisabled} type="submit" className="btn btn-fill btn-primary" onClick={() => checkTag()}>Validar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CheckTagComponent;