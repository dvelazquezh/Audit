import React from 'react'
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
import Button from '@material-tailwind/react/Button'
import Card from '@material-tailwind/react/Card'
import CardBody from '@material-tailwind/react/CardBody'
import CardHeader from '@material-tailwind/react/CardHeader'
import Input from '@material-tailwind/react/Input'
import Icon from '@material-tailwind/react/Icon'
import Dropdown from '@material-tailwind/react/Dropdown'
import DropdownItem from '@material-tailwind/react/DropdownItem'
import '../../components/onda.css'
import { useSelector } from 'react-redux'
import CardTable from 'components/TableCard';
import { StartAudit } from './StartAudit';
const short = require('short-uuid');

export const Audit = () => {

    const { plantilla: plantillas,seleccionAuditoría } = useSelector(state => state.audi)
  
 
     const auditoria = plantillas.filter( plantilla => plantilla.id == seleccionAuditoría )
  

    if (seleccionAuditoría) {
        return (
            <>
                <StartAudit
                    auditoria = {auditoria}
                />
            </>
        )
    }

    return (
        <div className='xl:col-start-1 xl:col-end-6 px-4 mt-9 mb-14' >
            <div className='flex' >
                <Card>
                    <CardHeader color="blueGray" contentPosition="left">
                        <h2 className="text-white text-2xl uppercase ">Plantillas</h2>
                    </CardHeader>
                    <CardBody>
                        {
                            plantillas.length == 0 && (
                                <div className='text-center mt-5' >
                                    <p className='mb-5' >
                                        Aun no tienes plantillas agregadas inicia agregando una
                                    </p>
                                    <Link
                                        className=' border text-black border-primary py-2 px-3 rounded-2xl hover:bg-primary hover:opacity-75 hover:text-white'
                                        to="/createTemplate">Crear plantilla</Link>
                                </div>
                            )
                        }

                        {
                            plantillas.length !== 0 &&
                            <div className="overflow-x-auto my-5">
                                <table className="items-center w-full bg-transparent border-collapse">
                                    <thead>
                                        <tr>
                                            <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                                Plantilla
                                            </th>
                                            <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                                Restaurante
                                            </th>
                                            <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                                Creador
                                            </th>
                                            <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                                Encargado
                                            </th>
                                            <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                                Acciones
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {
                                            plantillas.map((plantilla) => (
                                                <CardTable
                                                    key={plantilla.id}
                                                    data={plantilla}
                                                />
                                            ))
                                        }

                                    </tbody>
                                </table>
                            </div>
                        }
                        {
                            plantillas.length > 0 &&
                            <div className='mt-10' >
                                <Link
                                    className=' border text-black border-primary py-2 px-3 rounded-2xl hover:bg-primary hover:opacity-75 hover:text-white'
                                    to="/createTemplate">Crear una nueva plantilla</Link>
                            </div>

                        }

                    </CardBody>
                </Card>
            </div>
        </div>
    )
}

