import React from 'react'

const Section3 = () => {
    return (
        <>
            <div className="container mt-5">
                <h2 style={{ fontFamily: "Playwrite AU SA, serif", borderBottom: "2px solid #94E214", display: 'inline-block' }} className='mt-0 mt-lg-5 mb-0 mb-lg-5'>Skills</h2>
                <div className="container mt-0 mt-lg-5 mb-0 mb-lg-5">
                    <div className="row text-center">
                        <div className="col-lg-2 col-md-3 col-sm-6 d-none d-lg-block">
                            <img className='img-fluid' src={"html.gif"} width={150} alt="" />
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-6 d-none d-lg-block">
                            <img className='img-fluid' src={"CSS3.gif"} width={150} alt="" />
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-6 d-none d-lg-block">
                            <img className='img-fluid' src={"bootstrap.webp"} width={150} alt="" />
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-6">
                            <img className='img-fluid' src={"JS.gif"} width={150} alt="" />
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-6">
                            <img className='img-fluid' src={"REACT.gif"} width={150} alt="" />
                        </div>
                        <div className="col-lg-2 col-sm-6 d-none d-lg-block">
                            <img className='img-fluid' src={"redux.svg"} width={150} alt="" />
                        </div>
                    </div>


                    <div className="row text-center mt-0 mt-lg-5">
                        <div className="col-lg-2 col-sm-6 d-none d-lg-block">
                            <img className='img-fluid' src={"firebase.gif"} width={150} alt="" />
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-6">
                            <img className='img-fluid' src={"NODE.gif"} width={150} alt="" />
                        </div>
                        <div className="col-lg-2 col-sm-6 text-center text-lg-start">
                            <img className='img-fluid' src={"mongos.gif"} width={150} alt="" />
                        </div>
                        <div className="col-lg-2 col-sm-6 d-none d-lg-block">
                            <img className='img-fluid' src={"GIT.gif"} width={200} alt="" />
                        </div>
                        <div className="col-lg-2 col-sm-6 text-center text-lg-end d-none d-lg-block">
                            <img className='img-fluid' src={"download.png"} width={150} alt="" />
                        </div>
                        <div className="col-lg-2 col-sm-6 text-center text-lg-start d-none d-lg-block">
                            <img className='img-fluid' src={"figma-logo-animation-unscreen.gif"} width={150} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section3