import Button from '@material-tailwind/react/Button'
import Card from '@material-tailwind/react/Card'
import CardBody from '@material-tailwind/react/CardBody'
import CardHeader from '@material-tailwind/react/CardHeader'
import Input from '@material-tailwind/react/Input'
import Icon from '@material-tailwind/react/Icon';
import React from 'react'
import '../components/onda.css'
import { Question } from 'components/audit/Question'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { moreQuestions } from 'actions/audit'

export const CreateTemplate = () => {

    const dispatch = useDispatch()

    const { countQuestions } = useSelector(state => state.audi)

    const [questions, setquestions] = useState([1])

    const handleMoreQuestion = (e) => {
        e.preventDefault()
        setquestions([
            ...questions,
            questions[questions.length - 1] + 1
        ])
        dispatch(moreQuestions(questions))
    }



    return (
        <div className='xl:col-start-1 xl:col-end-6 px-4 mt-9 mb-14' >

            <Card>
                <CardHeader color="blueGray" contentPosition="left">
                    <h2 className="text-white text-2xl uppercase ">Inicia creando tu plantilla</h2>
                </CardHeader>
                <CardBody>

                    <form>
                        <h6 className="text-indigo-500 text-sm mt-3 mb-6 font-light uppercase">
                            Informacion de la plantilla
                        </h6>
                        <div className="flex flex-wrap mt-10">
                            <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                                <Input
                                    type="email"
                                    color="blue"
                                    placeholder="Nombre de la plantilla"
                                />
                            </div>
                            <div className="w-full lg:w-6/12 pl-4 mb-10 font-light">
                                <Input
                                    type="text"
                                    color="blue"
                                    placeholder="Nombre del restaurante"
                                />
                            </div>
                            <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                                <Input
                                    type="email"
                                    color="blue"
                                    placeholder="Realizado por"
                                />
                            </div>
                            <div className="w-full lg:w-6/12 pl-4 mb-10 font-light">
                                <Input
                                    type="text"
                                    color="blue"
                                    placeholder="Gerente"
                                />
                            </div>
                            <div className='w-full flex justify-end' >
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

                            </div>
                        </div>

                        <h6 className="text-indigo-500 text-sm my-6 font-light uppercase">
                            Agregar sesión de auditoría
                        </h6>
                        <div className="w-full lg:w-12/12 mb-10 font-light">
                            <Input
                                type="text"
                                placeholder="Nombre Sesión "
                            />
                        </div>




                        {
                            countQuestions.map(countQuestion => (
                                <div className='w-full grid  grid-cols-12' key={countQuestion} >
                                    <div className='col-span-11' >
                                        <Question
                                        />
                                    </div>
                                    <div className='col-span-1 flex justify-between items-end mr-3' >
                                        <button onClick={handleMoreQuestion} className='outline-none focus:outline-none' >
                                            <Icon name="more" size="2xl" />
                                        </button>
                                        {/* <button onClick={handleMoreQuestion} className='outline-none focus:outline-none' >
                                            <Icon name="delete" size="2xl" />
                                        </button> */}
                                    </div>
                                </div>
                            ))
                        }


                        <div className='w-full mt-9 flex justify-start' >
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

                        </div>

                    </form>

                </CardBody>
            </Card>
        </div>
    )
}
