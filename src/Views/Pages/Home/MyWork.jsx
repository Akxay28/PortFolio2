import React from 'react'

const MyWork = () => {
    return (
        <>
            <div className="container mt-5">
                <span className='h2'></span>
                <h2 style={{ fontFamily: "Playwrite AU SA, serif", borderBottom: "2px solid #94E214", display: 'inline-block' }} className='mt-0 mt-lg-5 mb-0 mb-lg-5' data-aos="fade-right">
                    <span className='about'>My </span>
                    <span className='me'>Work</span>
                </h2>
                <span className='dashh2'></span>
                <div className="row mt-5 mt-sm-5">
                    <div className="col-lg-3 mt-0">
                        <div className="container workImage">
                            <img src={"yagnesh-01-Copy.png"} className='img-fluid' alt="" />
                        </div>
                    </div>
                    <div className="col-lg-3 mt-0">
                        <div className="container workImage">
                            <img src={"asion-Copy.png"} className='img-fluid' alt="" />
                        </div>
                    </div>
                    <div className="col-lg-3 mt-0">
                        <div className="container workImage">
                            <img src={"PIZZA-Copy.png"} className='img-fluid' alt="" />
                        </div>
                    </div>
                    <div className="col-lg-3 mt-0">
                        <div className="container workImage">
                            <img src={"cake-Copy.png"} className='img-fluid' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyWork