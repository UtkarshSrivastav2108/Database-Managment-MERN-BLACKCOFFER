import React from 'react'

function Sidenav() {
    return (
        <>
            <aside className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3   bg-gradient-dark" id="sidenav-main">
                <div className="sidenav-header">
                    <i className="fas fa-times p-3 cursor-pointer text-white opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
                    <a className="navbar-brand m-0" href="/" target="_blank">

                        <span className="ms-1 font-weight-bold text-white">Data Managment</span>
                    </a>
                </div>
                <hr className="horizontal light mt-0 mb-2" />
                <div className="collapse navbar-collapse  w-auto  max-height-vh-100" id="sidenav-collapse-main">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link text-white active bg-gradient-primary" href="/">
                                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                    <i className="material-icons opacity-10">dashboard</i>
                                </div>
                                <span className="nav-link-text ms-1">Dashboard</span>
                            </a>
                        </li>



                        <li className="nav-item">
                            <a className="nav-link text-white active bg-gradient-primary" href="/data">
                                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                    <i className="material-icons opacity-10">dashboard</i>
                                </div>
                                <span className="nav-link-text ms-1">All Data</span>
                            </a>
                        </li>
                    </ul>
                </div>

            </aside>
        </>
    )
}

export default Sidenav
