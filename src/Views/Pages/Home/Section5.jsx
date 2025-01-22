import React from 'react'

const Section5 = () => {
    return (
        <>
            <div className="container mt-5">
                <h2 style={{ fontFamily: "Playwrite AU SA, serif", borderBottom: "2px solid #94E214", display: 'inline-block' }} className='mt-0 mt-lg-5 '>Contact</h2>
                <div className="row mt-5">
                    <div className="col-lg-6 ">
                        {/* <img src={"userWithLaptop.webp"} className='img-fluid animation' alt="" /> */}
                        <div className="container">
                            <div className="container">
                                <img src={"userWithLaptop.png"} className='img-fluid animation' alt="" />
                            </div>
                        </div>

                        {/* <div class="col-md-4 ">
                                        <div className="container  rounded  ">
                                            <img src={"akimg.JPG"} class="img-fluid rounded-start" alt="..." />
                                        </div>
                                    </div>
                                    <div class="col-md-7">
                                        <div class="card-body text-center">
                                            <p class="card-title text-dark fs-3  text-center" style={{ borderBottom: "2px solid #94E214", display: 'inline-block' }}>Λk⚡️H ΛY</p>
                                            <p class="card-text mt-3 fs-4 text-dark"><i class="fa-solid fs-4 me-3 fa-mobile-screen-button"></i>+91 6351357299 </p>
                                            <p class="card-text d-inline-block fs-5   text-truncate text-dark" ><i class="fa-solid fa-at"></i>Palaskshay3091@gmail.com</p>
                                        </div>
                                    </div> */}
                    </div>
                    <div className="col-lg-6  ">
                        <div className="container">
                            <div className="row py-4">
                                <figcaption class="blockquote-footer d-flex text-white align-items-center">
                                    <h1 title="Source Title" className='inline-block ms-3'>
                                        <em style={{ fontFamily: "Playwrite AU SA, serif", borderBottom: "2px solid #94E214" }}>Let's Get In <span style={{ color: "#94E214", borderBottom: "2px solid white" }}>Touch...</span></em>
                                    </h1>
                                </figcaption>
                                <div className="col-lg-12">
                                    <div class="form-floating mb-3 text-dark">
                                        <input type="text" class="form-control" id="floatingInput" placeholder="Enter your name" />
                                        <label for="floatingInput"> Name</label>
                                    </div>
                                    <div class="form-floating mb-3 text-dark">
                                        <input type="text" class="form-control" id="floatingInput" placeholder="Enter Contact Number" />
                                        <label for="floatingInput"> Contact Number</label>
                                    </div>
                                    <div class="form-floating mb-3 text-dark">
                                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                        <label for="floatingInput  ">Email address</label>
                                    </div>
                                    <div class="form-floating text-dark">
                                        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: '100px' }}></textarea>
                                        <label for="floatingTextarea2">Comments</label>
                                    </div>

                                    <button type="button" class="btn mt-3" style={{ backgroundColor: "#94E214", color: "black" }}>Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Section5