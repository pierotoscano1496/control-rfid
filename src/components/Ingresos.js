import { useEffect, useState } from 'react';
import { getDateISOString, getDateString, getTimeString } from '../models/formatter';
import { DateRangePickerComponent } from '@syncfusion/ej2-react-calendars';
import values from '../models/values';

function IngresosComponent() {
    const [fechaInicio, setFechaInicio] = useState(new Date());
    const [fechaFin, setFechaFin] = useState(new Date());
    const [ingresos, setIngresos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const listIngresos = await fetch(`${values.mainUrlRest}ingresos/hoy`).then(resp => resp.json());
            setIngresos(listIngresos);
        };
        fetchData();
    }, []);

    const buscarIngresos = async () => {
        const fechaInicioISO = getDateISOString(fechaInicio);
        const fechaFinISO = getDateISOString(fechaFin);
        const listIngresosFecha = await fetch(`${values.mainUrlRest}ingresos/${fechaInicioISO}/${fechaFinISO}`).then(resp => resp.json()).then(data => data);
        setIngresos(listIngresosFecha);
    };

    const selectionRange = {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
    };

    const updateDateRange = (args) => {
        /* setFechaInicio(args.startDate);
        setFechaFin(args.endDate); */
        console.log(args);
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="card-title">Ingresos</h4>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="form-group row">
                                    <label className="col-sm-2 col-form-label">Fecha</label>
                                    <div className="col-sm-10">
                                        <DateRangePickerComponent id="daterange" onChange={(args) => console.log(args)} />
                                    </div>
                                </div>
                                <button type='button' onClick={buscarIngresos} className="btn btn-primary">Buscar</button>
                            </form>

                            <div className="table-responsive">
                                <table className="table">
                                    <thead className=" text-primary">
                                        <tr>
                                            <th>
                                                Fecha
                                            </th>
                                            <th>
                                                Hora
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            ingresos.map(ingreso => (
                                                <IngresoRowComponent key={ingreso.cod} ingreso={ingreso} />
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
    const fecha = new Date(props.ingreso.fecha);
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