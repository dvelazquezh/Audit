import Card from '@material-tailwind/react/Card'
import CardBody from '@material-tailwind/react/CardBody'
import CardHeader from '@material-tailwind/react/CardHeader'
import { Question } from 'components/audit/Question'
import React from 'react'

export const StartAudit = ({ auditoria }) => {

    const { plantilla, restaurante, realizadoPor, gerente, nombreSesion, inputFiels } = auditoria[0]

    return (
        <div className='xl:col-start-1 xl:col-end-6 px-4 mt-9 mb-14' >
            <Card>
                <CardHeader color="blueGray" contentPosition="left">
                    <h2 className="text-white text-2xl uppercase ">{plantilla}</h2>
                </CardHeader>
                <CardBody>

                    <div className='ml-3' >
                        <h1 className='uppercase' >{nombreSesion}</h1>
                    </div>

                  {
                      inputFiels.map( inputFiels => (
                          <Question
                            key={inputFiels.id}
                            questions = {inputFiels}
                          />
                      ) )
                  }

                </CardBody>
            </Card>
        </div>

    )
}
