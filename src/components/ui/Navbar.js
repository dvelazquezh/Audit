import React, { useState } from "react";
import Modal from './Modal'


export  const Navbar = () => {

    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <>
            <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-gray-100 mb-3">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <a
                            className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-gray-700"
                            href="#"
                        >
                           Nombre App
                        </a>
                        <button
                            className="text-gray-700 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <i className="fas fa-bars"></i>
                        </button>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center" +
                            (navbarOpen ? " flex" : " hidden")
                        }
                        id="example-navbar-danger"
                    >
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                            <li className="nav-item">
                             
                                    <Modal
                                        nombre = 'Ingresar'
                                        icono='fas fa-sign-in-alt text-lg leading-lg text-gray-700 opacity-75'
                                        clase='  active:bg-pink-600 font-bold uppercase text-sm px-2 py-1 rounded  hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 '
                                        titulo='Ingresa a tu cuenta'
                                        dialogo='There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.'
                                    />
                             
                            </li>
                            <li className="nav-item">
                                    {/* <i className="far fa-user-circle text-lg leading-lg text-gray-700 opacity-75"></i><span className="ml-2">Registrarse</span> */}
                                    <Modal
                                        nombre = 'Registro'
                                        icono='fas fa-sign-in-alt text-lg leading-lg text-gray-700 opacity-75'
                                        clase=' active:bg-pink-600 font-bold uppercase text-sm px-2 py-1 rounded  hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 '
                                        titulo='Crea a tu cuenta'
                                        dialogo=' If you are going to use a passage of Lorem Ipsum, you need to be sure there.'
                                    />
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}