import React from 'react'

const Section2 = () => {
    return (
        <>
            <div className="container mt-0 mt-lg-5">
                <div className="row py-5">
                    <div className=''>
                        <h2 style={{ fontFamily: "Playwrite AU SA, serif", borderBottom: "2px solid #94E214", display: 'inline-block' }} className='mt-0 mt-lg-5 mb-0 mb-lg-5'>MY SERVICES</h2>
                    </div>
                    {/* <div className='myServices'>
                        <p className="display-5  py-3 border-bottom  text-center text-light">MY SERVICES</p>
                    </div> */}
                    <p className="text-light fs-4 mt-5" style={{ fontFamily: "Playwrite AU SA, serif" }}>
                        As a full-stack developer, I specialize in building scalable and responsive web applications. Whether you need a dynamic front-end interface or a robust back-end API, I offer comprehensive solutions tailored to your needs. My skill set includes:
                    </p>
                </div>
                <div className="row   ">
                    <div className="col-lg-8 border rounded py-5 d-flex align-items-center justify-content-center ">
                        <div className="container ">
                            <i class="fa-solid fa-palette fs-2 text-primary"></i>

                            <span className="fs-3 text-light ms-3 border-bottom"><span style={{ color: "#94E214" }}>Frontend Development</span></span>
                            <ul className="text-light ms-5 fs-5  mt-3"  >
                                <li >Creating responsive, user-friendly interfaces with <span style={{ color: "#94E214" }}>HTML5</span>, <span style={{ color: "#94E214" }}>CSS3</span>,<span style={{ color: "#94E214" }}> JavaScript</span> , and frameworks like <span style={{ color: "#94E214" }}> React JS</span> , <span style={{ color: "#94E214" }}>Redux</span>,  <span style={{ color: "#94E214" }}>TanStack Query</span> for front-end development and building interactive and dynamic user experiences using React.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="vr  d-grid mx-auto  text-light"></div>
                <i class="text-center text-light fa-regular fa-circle d-grid  mx-auto"
                // style={{ color: "#94E214" }} 
                ></i>
                <div className="row   ">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-8 border rounded py-5 d-flex align-items-center justify-content-center">
                        <div className="container ">
                            <img src="Backend.gif" width={100} alt="" />
                            {/* <i class="fa-solid fa-server fs-2 text-secondary"></i> */}
                            <span className="fs-3 text-light ms-3 border-bottom"><span style={{ color: "#94E214" }}>Backend Development</span></span>
                            <ul className="text-light ms-5 fs-5  mt-3" >
                                <li>Designing secure and efficient back-end systems with <span style={{ color: "#94E214" }}>Node JS </span>  and <span style={{ color: "#94E214" }}>Express JS </span>  and other popular technologies including  API development.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="vr  d-grid mx-auto  text-light"></div>
                <i class="text-center  text-light fa-regular fa-circle d-grid  mx-auto"
                // style={{ color: "#94E214" }}
                ></i>


                <div className="row  ">
                    <div className="col-lg-8 border rounded py-5 d-flex align-items-center justify-content-center">
                        <div className="container ">
                            <i class="fa-solid fa-database fs-2  text-light"></i>
                            <span className="fs-3 text-light ms-3 border-bottom"><span style={{ color: "#94E214" }}>Database Development</span></span>
                            <ul className="text-light ms-5 fs-5  mt-3" >
                                <li> Building and managing databases using <span style={{ color: "#94E214" }}>MongoDB </span> and , <span style={{ color: "#94E214" }}>MySQL </span> ensuring optimized data storage and retrieval.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="vr  d-grid mx-auto  text-light"></div>
                <i class="text-center  text-light   fa-regular fa-circle d-grid  mx-auto"
                // style={{ color: "#94E214" }}
                ></i>

                <div className="row   ">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-8 border rounded py-5 d-flex align-items-center justify-content-center">
                        <div className="container ">
                            <i class="fa-solid fa-fire fs-2 text-warning"></i>
                            <span className="fs-3 text-light ms-3 border-bottom"><span style={{ color: "#94E214" }}>Firebase</span></span>
                            <ul className="text-light ms-5 fs-5  mt-3" >
                                <li>Applying best practices for code performance, load speed, and ensuring application security with secure <span style={{ color: "#94E214" }}>Authentication </span> and <span style={{ color: "#94E214" }}>Authorization </span> mechanisms.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Section2