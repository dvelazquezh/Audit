import React from 'react'
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
import { useState } from 'react'
import { useForm } from 'hooks/useForm'
import { useDispatch } from 'react-redux'
import { saveTemplate } from 'actions/audit'
import { useHistory } from "react-router-dom";
const short = require('short-uuid');

export const CreateTemplate = () => {

    const history = useHistory();

    const dispatch = useDispatch()

    const [values, handleInputChange, reset] = useForm({
        id: short.uuid(),
        plantilla: '',
        restaurante: '',
        realizadoPor: '',
        gerente: '',
        tipo: "",
        nombreSesion: '',
        correo: ''
    })



    const [error, seterror] = useState({})
    const { plantilla, restaurante, realizadoPor, gerente, nombreSesion, correo } = values

    const [inputFiels, setinputFiels] = useState([
        { id: short.uuid(), question: '', type: '', resPersonalizada: false, res: [] },
    ])
    const auditTemplate = { ...values, inputFiels }

    const { res } = inputFiels[0]


    const handleChangeInput = (e, id) => {
        const newInputFields = inputFiels.map(i => {
            if (id === i.id) {
                i[e.target.name] = e.target.value
            }
            return i
        })
        setinputFiels(newInputFields)
    }

    const handleChangeCustomResponse = (r, id) => {
        const newInputFields = inputFiels.map(i => {
            if (id === i.id) {
                i.res = { ...i.res, r }
            }
            return i
        })
        setinputFiels(newInputFields)
    }

    const handleChangeSelet = (type, id) => {
        const newInputFields = inputFiels.map(i => {
            if (id === i.id) {
                i.type = type
            }
            return i
        })
        setinputFiels(newInputFields)
    }

    const handleAddFields = (e) => {
        e.preventDefault()
        setinputFiels([...inputFiels, { id: short.uuid(), question: '', type: '' }])
    }

    const handleAddCustomResponse = (e, id) => {

        const newInputFields = inputFiels.map(i => {
            if (id === i.id) {
                i.res = [...i.res, { r: '' }]
                console.log(i.res);
            }
            return i
        })
        // setinputFiels(newInputFields)
    }


    const handleRemoveFields = (id) => {
        const values = [...inputFiels]
        values.splice(values.findIndex(value => value.id === id), 1)
        setinputFiels(values)
    }


    const handleSumit = (e) => {
        e.preventDefault()
        if (plantilla.trim() === '' || restaurante.trim() === '' || realizadoPor.trim() === '' || gerente.trim() === '' || nombreSesion.trim() === '') {
            return Swal.fire('Error', 'Todos los espacios se deben de llenar', 'error')
        }
        dispatch(saveTemplate(auditTemplate))
        Swal.fire('Agregado', 'Se agrego la plantilla', 'success')
        reset()
        history.push('/audits');

    }

    return (
        <div className='xl:col-start-1 xl:col-end-6 px-4 mt-9 mb-14' >
            <div className='flex' >
                <Card>
                    <CardHeader color="blueGray" contentPosition="left">
                        <h2 className="text-white text-2xl uppercase ">Inicia creando tu plantilla</h2>
                    </CardHeader>
                    <CardBody>



                        {/* ------------------ */}

                        {/* {
                        inputFiels.map(inputFiel => (
                            <div key={inputFiel.id} >
                                <input onChange={e => handleChangeInput(e, inputFiel.id)} type="text" name='question' placeholder='nombre' />
                                <button onClick={() => handleRemoveFields(inputFiel.id)} >-</button>
                                <input onChange={e => handleChangeInput(e, inputFiel.id)} type="text" name='type' placeholder='apellido' />
                                <button onClick={(e) => handleAddFields(e, inputFiel.id)} >+</button>
                            </div>
                        ))
                    } */}


                        {/* --------------------- */}



                        <form onSubmit={handleSumit} >
                            <h6 className="text-indigo-500 text-sm mt-3 mb-6 font-light uppercase">
                                Informacion de la plantilla
                            </h6>
                            <div className="flex flex-wrap mt-10">
                                <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                                    <Input
                                        value={plantilla}
                                        onChange={handleInputChange}
                                        name='plantilla'
                                        type="text"
                                        color="blue"
                                        placeholder="Nombre de la plantilla"
                                    />
                                </div>
                                <div className="w-full lg:w-6/12 pl-4 mb-10 font-light">
                                    <Input
                                        value={restaurante}
                                        onChange={handleInputChange}
                                        name='restaurante'
                                        type="text"
                                        color="blue"
                                        placeholder="Nombre del restaurante"
                                    />
                                </div>
                                <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                                    <Input
                                        value={realizadoPor}
                                        onChange={handleInputChange}
                                        name='realizadoPor'
                                        type="text"
                                        color="blue"
                                        placeholder="Realizado por"
                                    />
                                </div>
                                <div className="w-full lg:w-6/12 pl-4 mb-10 font-light">
                                    <Input
                                        value={gerente}
                                        onChange={handleInputChange}
                                        name='gerente'
                                        type="text"
                                        color="blue"
                                        placeholder="Gerente"
                                    />
                                </div>
                                <div className="w-full lg:w-6/12 mb-10 font-light">
                                    <Input
                                        value={correo}
                                        onChange={handleInputChange}
                                        name='correo'
                                        type="email"
                                        color="blue"
                                        placeholder="Ingrese correo para enviar información al finalizar"
                                    />
                                </div>
                                {/* <div className='w-full flex justify-end' >
                                <Button
                                    color="lightBlue"
                                    buttonType="outline"
                                    size="lg"
                                    rounded={false}

                                    iconOnly={false}
                                    ripple="dark"
                                >
                                    Agregar
                                </Button>

                            </div> */}

                                <div className="inline-block pl-4 w-6/12 text-gray-700 ">
                                    <select onChange={handleInputChange} name='tipo' className="w-full h-10 pl-3 pr-6 text-gray-500 font-light border rounded-lg outline-none focus:outline-none-outline">
                                        <option value=''>Selecciona tipo de plantilla</option>
                                        <option value='Cuestionario'>Cuestionario</option>
                                        <option value='Auditoría digital'>Auditoría digital</option>
                                        <option value='Lista'>Lista</option>
                                        <option value='Encuesta'>Encuesta</option>
                                    </select>

                                </div>
                            </div>

                            <h6 className="text-indigo-500 text-sm my-6 font-light uppercase">
                                Agregar sesión de auditoría
                            </h6>
                            <div className='flex' >
                                <div className="w-full lg:w-8/12 mb-10 font-light">
                                    <Input
                                        value={nombreSesion}
                                        onChange={handleInputChange}
                                        name='nombreSesion'
                                        type="text"
                                        placeholder="Nombre Sesión"
                                    />
                                </div>
                                <div className="w-full lg:w-4/12 ml-2 mb-10 font-light">
                                    <Input
                                        value={nombreSesion}
                                        onChange={handleInputChange}
                                        name='nombreSesion'
                                        type="number"
                                        mim='0'
                                        max='100'
                                        placeholder="Puntaje máximo"
                                    />
                                </div>
                            </div>


                            {
                                inputFiels.map(inputFiel => (
                                    <div key={inputFiel.id} className="flex flex-wrap mt-10">
                                        <div className='w-full grid grid-cols-10' >
                                            <div className='neumo col-span-9 w-full px-3 py-3 grid grid-cols-12 ' >
                                                <div className='col-span-8' >
                                                    <Input
                                                        type="text"
                                                        name='question'
                                                        onChange={e => handleChangeInput(e, inputFiel.id)}
                                                        placeholder="Pregunta"
                                                    />
                                                </div>

                                                {/* {<h1>{console.log(inputFiel.type)}</h1>} */}

                                                {!inputFiel.type ?
                                                    <div className='col-span-4' >
                                                        <Dropdown
                                                            placement="bottom-start"
                                                            buttonText="Tipo de Pregunta"
                                                            buttonType="link"
                                                            size="lg"
                                                            rounded={false}
                                                            block={true}
                                                            ripple="dark"
                                                        >
                                                            <DropdownItem
                                                                onClick={() => handleChangeSelet(1, inputFiel.id)}
                                                            >
                                                                <div className='flex justify-between gap-4' >
                                                                    <div className='border border-red-500 text-red-500 rounded-lg px-2 py-1 ' >Mal</div>
                                                                    <div className='border border-orange-500 text-orange-500 rounded-lg px-2 py-1 ' >Regular</div>
                                                                    <div className='border border-green-500 text-green-500 rounded-lg px-2 py-1 ' >Bien</div>
                                                                </div>
                                                            </DropdownItem>
                                                            <DropdownItem
                                                                onClick={() => handleChangeSelet(2, inputFiel.id)}
                                                            >
                                                                <div className='flex justify-between' >
                                                                    <div className='text-red-500' >Si</div>
                                                                    <div className='text-orange-500' >No</div>
                                                                    <div className='text-green-500' >N/A</div>
                                                                </div>
                                                            </DropdownItem>
                                                            <DropdownItem
                                                                onClick={() => handleChangeSelet(3, inputFiel.id)}
                                                            >
                                                                <div className='flex justify-between' >
                                                                    <p className="border border-primary rounded-lg  text-primary px-3 py-2" >
                                                                        Agregar respuestas personalizadas
                                                                    </p>
                                                                </div>
                                                            </DropdownItem>
                                                        </Dropdown>
                                                    </div>
                                                    :
                                                    inputFiel.type == 1 ?
                                                        (
                                                            <div className='flex ml-5 justify-between gap-4' >
                                                                <div className='border border-red-500 text-red-500 rounded-lg px-2 py-1 ' >Mal</div>
                                                                <div className='border border-orange-500 text-orange-500 rounded-lg px-2 py-1 ' >Regular</div>
                                                                <div className='border border-green-500 text-green-500 rounded-lg px-2 py-1 ' >Bien</div>
                                                            </div>
                                                        ) :
                                                        inputFiel.type == 2 ?
                                                            (<div className='flex w-48 ml-5  justify-center items-center gap-4' >
                                                                <div className='text-red-500' >Si</div>
                                                                <div className='text-orange-500' >No</div>
                                                                <div className='text-green-500' >N/A</div>
                                                            </div>) :
                                                            null
                                                }



                                                {
                                                    inputFiel.type == 3 &&

                                                    <div className='col-span-10 ' >
                                                        <Input
                                                            type="text"
                                                            name='customResponses'
                                                            onChange={(e) => handleChangeCustomResponse(e.target.value, inputFiel.id)}
                                                            placeholder="Escribe tu respuesta personalizada"
                                                        />
                                                        <a onClick={(e) => handleAddCustomResponse(e, inputFiel.id)} className='outline-none cursor-pointer focus:outline-none mr-2' >
                                                            <i className="fas fa-plus"></i>
                                                        </a>
                                                    </div>
                                                }
                                            </div>
                                            <div className='col-span-1 flex justify-evenly items-end mr-3' >
                                                <button onClick={(e) => handleAddFields(e, inputFiel.id)} className='outline-none focus:outline-none mr-2' >
                                                    <Icon name="more" size="2xl" />
                                                </button>
                                                <button onClick={() => handleRemoveFields(inputFiel.id)} className='outline-none focus:outline-none' >
                                                    <Icon name="delete" size="2xl" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }


                            <div className='w-full mt-9 flex justify-start' >
                                <Button
                                    type='submit'
                                    color="lightBlue"
                                    buttonType="outline"
                                    size="lg"
                                    rounded={false}
                                    iconOnly={false}
                                    ripple="dark"
                                >
                                    Agregar
                                </Button>

                            </div>


                        </form>

                    </CardBody>
                </Card>




            </div>
        </div>
    )
}







{/* <div className = 'flex'>
                                                        <Input
                                                            type="text"
                                                            name='question'
                                                            onChange={e => handleChangeInput(e, inputFiel.id)}
                                                            placeholder="Escriba opciones de respuestas"
                                                        />
                                                        <Button
                                                            type='submit'
                                                            color="lightBlue"
                                                            buttonType="outline"
                                                            size="sm"
                                                            rounded={false}
                                                            iconOnly={false}
                                                            ripple="dark"
                                                        >
                                                            Agregar
                                                        </Button>
                                                    </div> */}