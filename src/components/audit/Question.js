import React, { useState } from 'react'

export const Question = ({ questions }) => {

    const { id, question, type } = questions

    const [description, setdescription] = useState(false)
    const [tipo, settipo] = useState('')
    const [contents, setcontents] = useState('')

    const handleChange = (e) => {
        setcontents({
            [e.target.name]: e.target.value
        })
    }

    console.log(contents)

    return (
        <div className='my-7 ml-2' >
            <p>{question}</p>
            <div className='flex gap-2' >
                {
                    type === 1 ?
                        <div className='flex justify-between gap-4 my-5' >
                            {
                                tipo === 'mal' ?
                                    <div onClick={() => settipo('mal')} className='border bg-red-500 border-red-500 text-white rounded-lg px-2 py-1 cursor-pointer ' >Mal</div>
                                    :
                                    <div onClick={() => settipo('mal')} className='border border-red-500 text-red-500 rounded-lg px-2 py-1 cursor-pointer ' >Mal</div>
                            }
                            {
                                tipo === 'Regular' ?
                                    <div onClick={() => settipo('Regular')} className='border bg-orange-500 border-orange-500 text-white rounded-lg px-2 py-1 cursor-pointer ' >Regular</div>
                                    :
                                    <div onClick={() => settipo('Regular')} className='border border-orange-500 text-orange-500 rounded-lg px-2 py-1 cursor-pointer ' >Regular</div>
                            }
                            {
                                tipo === 'Bien' ?
                                    <div onClick={() => settipo('Bien')} className='border border-green-500 bg-green-500 text-white rounded-lg px-2 py-1 cursor-pointer ' >Bien</div>
                                    :
                                    <div onClick={() => settipo('Bien')} className='border border-green-500 text-green-500 rounded-lg px-2 py-1 cursor-pointer ' >Bien</div>
                            }
                        </div>
                        :
                        <div className='flex justify-between  gap-4 my-5' >
                            {
                                tipo === 'Si' ?
                                    <div onClick={() => settipo('Si')} className='border border-green-500 bg-green-500 rounded-lg px-2 py-1 text-white cursor-pointer ' >Si</div>
                                    :
                                    <div onClick={() => settipo('Si')} className='border border-green-500 rounded-lg px-2 py-1 text-green-500 cursor-pointer ' >Si</div>
                            }
                            {
                                tipo === 'No' ?
                                    <div onClick={() => settipo('No')} className='border border-red-500  bg-red-500 rounded-lg px-2 py-1 text-white cursor-pointer ' >No</div>
                                    :
                                    <div onClick={() => settipo('No')} className='border border-red-500 rounded-lg px-2 py-1 text-red-500 cursor-pointer ' >No</div>
                            }
                            {
                                tipo === 'N/A' ?
                                    <div onClick={() => settipo('N/A')} className='border border-gray-500 bg-gray-500 rounded-lg px-2 py-1 text-white cursor-pointer ' >N/A</div>
                                    :
                                    <div onClick={() => settipo('N/A')} className='border border-gray-500 rounded-lg px-2 py-1 text-gray-500 cursor-pointer ' >N/A</div>
                            }
                        </div>
                }
            </div>
            {
                description &&

                <textarea onChange={handleChange} name='description' className="w-full mt-2 px-3 py-2 text-gray-700 border rounded-lg focus:outline-none" rows="4"></textarea>
            }

            <div>
                <button
                    onClick={() => setdescription(true)}
                    className=' focus:outline-none'>
                    <i className="far fa-comment fa-2x"></i>
                </button>
            </div>

            <hr className='my-8' />

        </div>

    )
}
