import React from 'react'
import Button from '../Button/Button'
import '../Card/Card.css'

const Card = ({ img }) => {
    return (
        <>
            <div className="col-lg-4 col-md-6 col-sm-12 myWorkmain py-5">
                <div className="card custom-card hover:transform hover:scale-105 transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl border-none overflow-hidden ">
                    <div className="container  workImage rounded-lg p-0 m-0  overflow-hidden group">
                        <img
                            src={img}
                            className='img-fluid w-full  object-cover transition-transform duration-500 group-hover:scale-110'
                            alt="Project Image"
                        />
                    </div>
                    <div className="card-body  bg-gray-900  workImgBody d-flex justify-content-center align-items-center">
                        <a href="#" className="project-link inline-block text-neon-green hover:text-white font-semibold  overflow-hidden">
                            <span className=" z-10">
                                <Button value={"check project"} />
                            </span>
                            <span className="absolute bottom-0 left-0 w-full  bg-neon-green transition-all duration-300 opacity-0 group-hover:opacity-100"></span>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card