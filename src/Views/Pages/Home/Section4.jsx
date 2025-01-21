import React from 'react'

const Section4 = () => {
    return (
        <>
            <div className="container mt-5">
                <h2 style={{ fontFamily: "Playwrite AU SA, serif", borderBottom: "2px solid #94E214", display: 'inline-block' }} className='mt-0 mt-lg-5 '>My Experience</h2>
                <div className="row  mt-5">
                    <div className="col-lg-6 border mt-5">
                        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                            <div className='customButtons'>
                                <button class="carousel-control-prev  " type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon " aria-hidden="true"></span>
                                    {/* <span class="visually-hidden">Previous</span> */}
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    {/* <span class="visually-hidden">Next</span> */}
                                </button>
                            </div>
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>

                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <div className="container  ">
                                        <div className="row">
                                            <div className="col-lg-12 py-5">
                                                <h3 style={{ borderBottom: "2px solid #94E214", display: 'inline-block' }} className='mb-3'>Red & White Multimedia Education - Faculty</h3>
                                                <p>Location : Ahmedabad ( Apr 2024 - Present ) </p>
                                                <p>
                                                    As an experienced Full Stack Developer, I teach and mentor students at Red and White Multimedia Education in mastering both front-end and back-end development. With a strong foundation in web technologies and a passion for teaching, I help learners build comprehensive, scalable applications.
                                                </p>
                                                {/* <p> 🔹 Key Areas of Expertise:</p> */}
                                                <p>
                                                    I am committed to empowering students with hands-on experience and real-world coding skills that enable them to build dynamic, full-featured web applications. My goal is to bridge the gap between theory and practical application, preparing students for successful careers in the tech industry.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="carousel-item">
                                    <div className="container  ">
                                        <div className="row">
                                            <div className="col-lg-12 py-5">
                                                <h3 style={{ borderBottom: "2px solid #94E214", display: 'inline-block' }} className='mb-3'>U-Connect Global Services - Record Retrieval</h3>
                                                <p>Location : Ahmedabad ( Jan 2023 - Jan 2024 · 1 yr 1 mos ) </p>
                                                <p>
                                                    • Contact offices to request copies of all types of records. <br />
                                                    • Familiar with the attorney rules as well as suphoena. <br />
                                                    • Provide accurate and timely updates on the record retrieval status to the client. <br />
                                                    • Prepared mailings and fax information and documentation. <br />
                                                    • Interacted and communicated easily with department. <br />
                                                    • Managed quality communication, customer support and product representation for each client.
                                                    • Ensured compliance with all legal and regulatory requirements during the record retrieval process, maintaining confidentiality and integrity of client information.
                                                    <br />
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="carousel-item">
                                    <div className="container  ">
                                        <div className="row">
                                            <div className="col-lg-12 py-5">
                                                <h3 style={{ borderBottom: "2px solid #94E214", display: 'inline-block' }} className='mb-3'>CEC - Clinical Excel Computech - RCM Specalist</h3>
                                                <p>Location : Ahmedabad ( Mar 2022 - Jan 2023 · 11 mos ) </p>
                                                <p>
                                                    Trainee
                                                    • Training courses about USA Dental Billing Process, USA
                                                    Healthcare Market and Geographical Knowledge <br />
                                                    <br />
                                                    <b style={{ borderBottom: "2px solid #94E214", display: 'inline-block' }} className='mb-3'> RCM Specialist Level- 1 </b><br />
                                                    • Eligibility and Verification <br />
                                                    • Benefits Updating and pasting in DENTRIX, Eagle Soft and other software. <br />
                                                    • Eligiblity and Verification of Dental Benefits.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-6 text-center py-5 d-none d-lg-block">
                        <div className="container flower mt-5 ">
                            <div class="circle"></div>
                            <div class="circle"></div>
                            <div class="circle"></div>
                            <div class="circle"></div>
                            <div class="circle"></div>
                            <div class="circle"></div>
                            <div class="circle"></div>
                            <div class="circle"></div>
                            <div class="circle"></div>
                            <div class="circle"></div>
                            <div class="circle"></div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Section4