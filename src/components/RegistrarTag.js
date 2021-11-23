function RegistrarTagComponent() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="card-title">Registrar Tag</h4>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Nombre</label>
                                            <input type="text" className="form-control" placeholder="Nombre" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Descripción</label>
                                            <input type="text" className="form-control" placeholder="Descripción" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Tipo</label>
                                            <select className="form-control">
                                                <option>Seleccione</option>
                                                <option>Tipo 1</option>
                                                <option>Tipo 2</option>
                                                <option>Tipo 3</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="card-footer">
                            <button type="submit" className="btn btn-fill btn-primary">Registrar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegistrarTagComponent;