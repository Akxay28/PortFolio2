import React from 'react'

const MyWork = () => {
    return (
        <>
            <div className="container mt-5">
                <span className='h2'></span>
                <h2 style={{ fontFamily: "Playwrite AU SA, serif", borderBottom: "2px solid #94E214", display: 'inline-block' }} className='mt-0 mt-lg-5 mb-0 mb-lg-5'>Latest Works</h2>
                <span className='dashh2'></span>
                <div className="row">
                    <div className="col-lg-3">
                        <img src={"yagnesh.png"} className='img-fluid' alt="" />
                    </div>
                    <div className="col-lg-3">
                        <img src={"asion.png"} className='img-fluid' alt="" />
                    </div>
                    <div className="col-lg-3">
                        <img src={"PIZZA.png"} className='img-fluid' alt="" />
                    </div>
                    <div className="col-lg-3">
                        <img src={"cake.png"} className='img-fluid' alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyWork