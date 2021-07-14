import React from 'react'
import Dropdown from '@material-tailwind/react/Dropdown'
import DropdownItem from '@material-tailwind/react/DropdownItem'
import Input from '@material-tailwind/react/Input'


export const Question = () => {

    return (
        <div className="flex flex-wrap mt-10">
            <div className='w-full grid grid-cols-10' >
                <div className='neumo col-span-9 w-full px-3 py-3 grid grid-cols-12 ' >
                    <div className='col-span-8' >
                        <Input
                            type="text"
                            placeholder="Pregunta "
                        />
                    </div>
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
                                onClick={(e) => e.preventDefault(console.log("456"))}
                            >
                                <div className='flex justify-between gap-4' >
                                    <div className='border border-red-500 text-red-500 rounded-lg px-2 py-1 ' >Mal</div>
                                    <div className='border border-orange-500 text-orange-500 rounded-lg px-2 py-1 ' >Regular</div>
                                    <div className='border border-green-500 text-green-500 rounded-lg px-2 py-1 ' >Bien</div>
                                </div>
                            </DropdownItem>
                            <DropdownItem
                                onClick={(e) => e.preventDefault(console.log("123"))}
                            >
                                <div className='flex justify-between' >
                                    <div className='text-red-500' >Si</div>
                                    <div className='text-orange-500' >No</div>
                                    <div className='text-green-500' >N/A</div>
                                </div>
                            </DropdownItem>
                        </Dropdown>
                    </div>
                </div>
                {/* <div className='col-span-1 flex justify-evenly items-end mr-3' >
                    <button onClick={handleMoreQuestion} className='outline-none focus:outline-none' >
                        <Icon name="more" size="2xl" />
                    </button>
                    <button onClick={handleMoreQuestion} className='outline-none focus:outline-none' >
                        <Icon name="delete" size="2xl" />
                    </button>
                </div> */}
            </div>
        </div>

    )
}
