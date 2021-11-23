import { useEffect, useState } from 'react';
import { getDateISOString, getDateString, getTimeString } from '../models/formatter';
import { DateRangePicker } from 'react-date-range';
import values from '../models/values';

function IngresosComponent() {
    const [fechaInicio, setFechaInicio] = useState(new Date());
    const [fechaFin, setFechaFin] = useState(new Date());
    const [ingresos, setIngresos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const listIngresos = await fetch(`${values.mainUrlRest}ingresos`).then(resp => resp.json());
            setIngresos(listIngresos);
        };
        fetchData();
    }, []);

    const buscarIngresos = async function () {
        const fechaInicioISO = getDateISOString(fechaInicio);
        const fechaFinISO = getDateISOString(fechaFin);
        const listIngresosFecha = await fetch(`${values.mainUrlRest}ingresos/${fechaInicioISO}/${fechaFinISO}`).then(resp => resp.json()).then(data => data);
        setIngresos(listIngresosFecha);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="card-title">Ingresos</h4>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Fecha</label>
                                        <DateRangePicker
                                            ranges={[
                                                {
                                                    startDate: new Date(),
                                                    endDate: new Date(),
                                                    key: 'selection'
                                                }
                                            ]}
                                            onChange={(ranges) => {
                                                setFechaInicio(ranges.selection.startDate);
                                                setFechaFin(ranges.selection.endDate);
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <button type='button' onClick={buscarIngresos} className="btn btn-primary">Buscar</button>
                                    </div>
                                </div>
                            </div>

                            <div className="table-responsive">
                                <table className="table">
                                    <thead className=" text-primary">
                                        <th>
                                            Fecha
                                        </th>
                                        <th>
                                            Hora
                                        </th>
                                    </thead>
                                    <tbody>
                                        {
                                            ingresos.map(ingreso => (
                                                <IngresoRowComponent ingreso={ingreso} />
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function IngresoRowComponent(props) {
    const fecha = props.ingreso.fecha;
    const fechaString = getDateString(fecha);
    const timeString = getTimeString(fecha);

    return (
        <tr>
            <td>{fechaString}</td>
            <td>{timeString}</td>
        </tr>
    );
}

export default IngresosComponent;