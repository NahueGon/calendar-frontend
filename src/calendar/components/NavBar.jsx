
export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark border-bottom border-body" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <i className="fas fa-calendar-alt"></i>
                    &nbsp;
                    Nahuel
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                    </ul>
                        <button className="btn btn-outline-danger">
                            <i className="fas fa-sign-out-alt"></i>
                            &nbsp;
                            <span>Salir</span>
                        </button>
                </div>
            </div>
        </nav>
    )
}
