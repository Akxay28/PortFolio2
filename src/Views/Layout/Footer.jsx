import React from 'react'

const Footer = () => {
    return (
        <>
            <div className="container mt-0 mt-lg-5" data-aos="fade-up">

                <div className="row py-5">
                    <span className='display-4 text-center mb-5 py-5'>I am not hard to find let's create something truly <span style={{ fontFamily: "Playwrite IN, serif", borderBottom: "2px solid white", color: "#94E214" }}>spectacular !</span></span>
                    <div className="col">
                        <i class="fa-brands similarFont fs-1 fa-github"></i>
                    </div>
                    <div className="col">
                        <i class="fa-brands similarFont fs-1 fa-linkedin"></i>
                    </div>
                    <div className="col">
                        <i class="fa-brands similarFont fs-1 fa-instagram"></i>
                    </div>
                    <div className="col">
                        <i class="fa-brands similarFont fs-1 fa-whatsapp"></i>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer