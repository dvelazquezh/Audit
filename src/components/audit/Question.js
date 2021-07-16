import React, { useState } from 'react'

export const Question = ({ questions }) => {

    const { id, question, type } = questions
    console.log(id, question, type);

    const [description, setdescription] = useState(false)
    const [type1, settype1] = useState('')

    return (
        <div className='my-7 ml-2' >
            <p>{question}</p>
            <div className='flex gap-2' >
                {
                    type === 1 ?
                        <div className='flex justify-between gap-4 my-5' >
                            <div className='border border-red-500 text-red-500 rounded-lg px-2 py-1 cursor-pointer ' >Mal</div>
                            <div className='border border-orange-500 text-orange-500 rounded-lg px-2 py-1 cursor-pointer ' >Regular</div>
                            <div className='border border-green-500 text-green-500 rounded-lg px-2 py-1 cursor-pointer ' >Bien</div>
                        </div>
                        :
                        <div className='flex justify-between  gap-4 my-5' >
                            <div className='text-red-500 cursor-pointer ' >Si</div>
                            <div className='text-orange-500 cursor-pointer ' >No</div>
                            <div className='text-green-500 cursor-pointer ' >N/A</div>
                        </div>
                }
            </div>
            {
                description &&

                <textarea className="w-full mt-2 px-3 py-2 text-gray-700 border rounded-lg focus:outline-none" rows="4"></textarea>
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
