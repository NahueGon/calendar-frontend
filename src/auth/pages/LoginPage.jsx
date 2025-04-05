import { useEffect } from 'react'
import Swal from "sweetalert2";
import { useForm, useAuthStore } from '../../hooks'
import './LoginPage.css'

const loginFormFields = {
    loginEmail: '',
    loginPassword: '',
}

const registerFormFields = {
    registerName: '',
    registerEmail: '',
    registerPassword: '',
    registerPassword2: '',
}

export const LoginPage = () => {

    const { startLogin, startRegister, errorMessage } = useAuthStore();

    const { loginEmail, loginPassword, onInputChange: onLoginInputChange } = useForm( loginFormFields );
    const { registerName, registerEmail, registerPassword, registerPassword2, onInputChange: onRegisterInputChange } = useForm( registerFormFields );

    const loginSubmit = ( event ) => {
        event.preventDefault();
        startLogin({ email: loginEmail, password: loginPassword });
    }

    const registerSubmit = ( event ) => {
        event.preventDefault();
        if ( registerPassword !== registerPassword2 ) {
            Swal.fire('Error en registro', 'Contraseñas no son iguales', 'error');
        }
        startRegister({ name: registerName, email: registerEmail, password: registerPassword });
    }

    useEffect(() => {
        if ( errorMessage !== undefined ) {
            Swal.fire('Error en la autenticacion', errorMessage, 'error');
        }

    }, [ errorMessage ])
    

    return (
        <div className="container vh-100 d-flex flex-column flex-md-row justify-content-center align-items-center">
            <div className="col-md-5 col-12 shadow d-flex flex-column align-items-center justify-content-center p-3 p-sm-5 formSing">
                <h3>Ingreso</h3>    
                <form onSubmit={ loginSubmit } className='mt-2'>
                    <div className="form-floating mb-2">
                        <input 
                            type="text"
                            className="form-control"
                            name='loginEmail'
                            value={ loginEmail }
                            onChange={ onLoginInputChange }
                            placeholder="Correo"
                            autoComplete='username'
                        />
                        <label>Correo</label>
                    </div>
                    <div className="form-floating mb-2">
                        <input
                            type="password"
                            className="form-control"
                            name='loginPassword'
                            value={ loginPassword }
                            onChange={ onLoginInputChange }
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
                <form onSubmit={ registerSubmit } className='mt-2'>
                    <div className="form-floating mb-2">
                        <input
                            type="text"
                            id='floatingInput'
                            name='registerName'
                            value={ registerName }
                            onChange={ onRegisterInputChange }
                            className="form-control"
                            placeholder="Nombre"
                            
                        />
                        <label>Nombre</label>
                    </div>
                    <div className="form-floating mb-2">
                        <input
                            type="email"
                            className="form-control"
                            name='registerEmail'
                            value={ registerEmail }
                            onChange={ onRegisterInputChange }
                            placeholder="Correo"
                            autoComplete='username'
                        />
                        <label>Correo</label>
                    </div>
                    <div className="form-floating mb-2">
                        <input
                            type="password"
                            className="form-control"
                            name='registerPassword'
                            value={ registerPassword }
                            onChange={ onRegisterInputChange }
                            placeholder="Contraseña" 
                            autoComplete='new-password'
                        />
                        <label>Contraseña</label>
                    </div>

                    <div className="form-floating mb-2">
                        <input
                            type="password"
                            className="form-control"
                            name='registerPassword2'
                            value={ registerPassword2 }
                            onChange={ onRegisterInputChange }
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
