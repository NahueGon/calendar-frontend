import './LoginPage.css'

export const LoginPage = () => {
    return (
        <div className="container vh-100 d-flex flex-column flex-md-row justify-content-center align-items-center">
            <div className="col-md-5 col-12 shadow d-flex flex-column align-items-center justify-content-center p-3 p-sm-5 formSing">
                <h3>Ingreso</h3>    
                <form className='mt-2'>
                    <div className="form-floating mb-2">
                        <input 
                            type="text"
                            className="form-control"
                            
                            placeholder="Correo"
                            autoComplete='username'
                        />
                        <label>Correo</label>
                    </div>
                    <div className="form-floating mb-2">
                        <input
                            type="password"
                            className="form-control"
                            
                            placeholder="Contraseña"
                            autoComplete='current-password'
                        />
                        <label>Contraseña</label>
                    </div>
                    <div className="d-grid">
                        <input 
                            type="submit"
                            className="btn btn-primary"
                            value="Iniciar Sesion" 
                        />
                    </div>
                </form>
            </div>

            <div className="col-md-5 col-12 shadow bg-primary d-flex flex-column align-items-center justify-content-center p-3 p-md-5 rounded">
                <h3 className='text-white' >Registro</h3>
                <form className='mt-2'>
                    <div className="form-floating mb-2">
                        <input
                            type="text"
                            id='floatingInput'
                            className="form-control"
                            placeholder="Nombre"
                            
                        />
                        <label>Nombre</label>
                    </div>
                    <div className="form-floating mb-2">
                        <input
                            type="email"
                            className="form-control"
                            
                            placeholder="Correo"
                            autoComplete='username'
                        />
                        <label>Correo</label>
                    </div>
                    <div className="form-floating mb-2">
                        <input
                            type="password"
                            className="form-control"
                            
                            placeholder="Contraseña" 
                            autoComplete='new-password'
                        />
                        <label>Contraseña</label>
                    </div>

                    <div className="form-floating mb-2">
                        <input
                            type="password"
                            className="form-control"
                            
                            placeholder="Repita la contraseña"
                            autoComplete='new-password'
                        />
                        <label>Repita la contraseña</label>
                    </div>

                    <div className="d-grid">
                        <input 
                            type="submit" 
                            className="btn btn-light" 
                            value="Crear Cuenta" />
                    </div>
                </form>
            </div>
        </div>
    )
}
