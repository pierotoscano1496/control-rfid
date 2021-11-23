import { useState } from "react";
import value from '../models/values';

function LeerTagComponent(props) {
    const [buttonName, setButtonName] = useState('Conectar');

    const leerTag = async () => {
        setButtonName('Conectando...');
        const post = await fetch(`${value.mainUrlIoTServer}leer-tag`).then(res => res.json());
        alert(post.tag);
        setButtonName('Conectar');
    }

    return (
        <div className="cards">
            <div className="card-body">
                <h1>Leer Tag</h1>
                <button className="btn btn-primary" onClick={() => leerTag()}>{buttonName}</button>
                <p>{props.mensajeEstado}</p>
            </div>
        </div>
    )
}

export default LeerTagComponent;