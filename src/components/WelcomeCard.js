import { Link } from "react-router-dom";
import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import img1 from 'assets/welcome/img1.png';
import img2 from 'assets/welcome/img2.png';
import img3 from 'assets/welcome/img3.png';



export default function WelcomeCard({ nombre }) {
    return (
        <Card>
            <CardHeader color="blueGray" contentPosition="left">
                <h2 className="text-white text-2xl uppercase ">{nombre}</h2>
            </CardHeader>
            <CardBody>

                <div className='  md:flex gap-2' >

                    <div className='flex flex-col justify-center  items-center' >
                        <div className='h-56' >
                            <img
                                className='w-72'
                                src={img1} />
                        </div>
                        <h1 className='text-center font-bold' >1</h1>
                        <p className='text-center font-medium' >Crear una plantilla.</p>
                        <p className='text-center mt-5' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, esse!</p>

                        <div className='text-center mt-5' >
                            <Link
                                className=' border text-black border-primary py-2 px-3 rounded-2xl hover:bg-primary hover:opacity-75 hover:text-white'
                                to="/createTemplate">Crear platilla</Link>
                        </div>

                    </div>
                    <div className='flex flex-col justify-center items-center  mt-2 md:mt-0 ' >
                        <div className='h-56' >
                            <img
                                className='w-52 h-52'
                                src={img2} />
                        </div>
                        <h1 className='text-center font-bold' >2</h1>
                        <p className='text-center font-medium' >Inicia tu auditoria</p>
                        <p className='text-center mt-5' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, esse!</p>
                        <div className='text-center mt-5' >
                            <Link
                                className=' border text-black border-primary py-2 px-3 rounded-2xl hover:bg-primary hover:opacity-75 hover:text-white'
                                to="/audits">Plantillas</Link>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center'  >
                        <div className='h-56' >
                            <img
                                className='w-72 mt-2 '
                                src={img3} />
                        </div>
                        <h1 className='text-center font-bold' >3</h1>
                        <p className='text-center font-medium' >Ver detalles </p>
                        <p className='text-center mt-5' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, esse!</p>
                        <div className='text-center mt-5' >
                            <a
                                className=' border text-black border-primary py-2 px-3 rounded-2xl hover:bg-primary hover:opacity-75 hover:text-white'
                                href="#">Crear platilla</a>
                        </div>
                    </div>

                </div>

            </CardBody>
        </Card>
    );
}
