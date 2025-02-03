import React from 'react'

const Section2 = () => {

    return (
        <>
            <div className="container ">
                <div className="row ">
                    <div className=''>
                        <span className='h2' data-aos="fade-right"></span>
                        <h2 style={{ fontFamily: "Playwrite AU SA, serif", borderBottom: "2px solid #94E214", display: 'inline-block' }} data-aos="fade-right" className='mt-0 mt-lg-5 mb-0 mb-lg-5 '><span className='about'>About</span><span className='me'> Me</span></h2>
                        <span className='dashh2'></span>
                    </div>

                    {/* <div className='myServices'>
                        <p className="display-5  py-3 border-bottom  text-center text-light">MY SERVICES</p>
                    </div> */}

                    <p className="text-light fs-4 mt-5" style={{ fontFamily: "Playwrite AU SA, serif" }} data-aos="fade-up">
                        <span className='p'></span>
                        As a full-stack developer, I specialize in building scalable and responsive web applications. Whether you need a dynamic front-end interface or a robust back-end API, I offer comprehensive solutions tailored to your needs. My skill set includes:
                        <span className='dashp'></span>
                    </p>

                </div>
                <div className="row" data-aos="fade-up">
                    <span className='cardtag'></span>
                    <div className="col-lg-8 border rounded py-5 d-flex align-items-center justify-content-center ">
                        <div className="container ">
                            {/* <i class="fa-solid fa-palette fs-2 text-primary"></i> */}
                            <img src="frontende.webp" width={100} alt="" />

                            <span className="fs-3 text-light ms-3 border-bottom"><span style={{ color: "#94E214" }}>Frontend Development</span></span>
                            <ul className="text-light ms-5 fs-5  mt-3 list-unstyled"  >

                                <li>
                                    I specialize in creating responsive, user-centric web interfaces using the latest web technologies such as
                                    <span style={{ color: "#94E214" }}>HTML5</span>, <span style={{ color: "#94E214" }}>CSS3</span>, <span style={{ color: "#94E214" }}>JavaScript</span>, and frameworks like
                                    <span style={{ color: "#94E214" }}>Bootstrap</span> for rapid UI development. My focus is on building visually engaging, fast-loading, and mobile-friendly websites that deliver seamless experiences across all devices.


                                    With extensive experience in frameworks like <span style={{ color: "#94E214" }}> React.js</span>, I craft dynamic and interactive user interfaces that are not only intuitive but also highly performant. I leverage React's component-based architecture to build reusable and maintainable code, ensuring scalability and consistency throughout the development process.

                                    In addition, I use <span style={{ color: "#94E214" }}>Redux</span> for efficient state management, making sure data flows smoothly across the application. I integrate<span style={{ color: "#94E214" }}>TanStack Query</span> for data fetching and synchronization, allowing me to build responsive applications that handle real-time data with ease.

                                    By combining these powerful technologies, I focus on creating highly interactive and responsive user experiences that are both aesthetically pleasing and functional, meeting the needs of modern web applications.
                                </li>
                            </ul>
                        </div>
                    </div>


                </div>
                <div class="vr  d-grid mx-auto  text-light"></div>
                <i class="text-center text-light fa-regular fa-circle d-grid  mx-auto"
                // style={{ color: "#94E214" }} 
                ></i>
                <div className="row" data-aos="fade-up">


                    <div className="col-lg-4"></div>
                    <div className="col-lg-8 border rounded py-5 d-flex align-items-center justify-content-center">
                        <div className="container ">
                            <img src="Backend.gif" width={100} alt="" />
                            {/* <i class="fa-solid fa-server fs-2 text-secondary"></i> */}
                            <span className="fs-3 text-light ms-3 border-bottom"><span style={{ color: "#94E214" }}>Backend Development</span></span>
                            <ul className="text-light ms-5 fs-5  mt-3 list-unstyled" >
                                {/* <li>Designing secure and efficient back-end systems with <span style={{ color: "#94E214" }}>Node JS </span>  and <span style={{ color: "#94E214" }}>Express JS </span>  and other popular technologies including  API development.</li> */}

                                <li>
                                    I specialize in designing secure, scalable, and efficient back-end systems using <span style={{ color: "#94E214" }}>Node.js</span>  and <span style={{ color: "#94E214" }}>Express.js</span>, along with other popular technologies. I focus on creating robust API architectures that ensure fast, reliable, and secure communication between the front-end and back-end of web applications. With a strong emphasis on security best practices, I implement authentication and authorization using <span style={{ color: "#94E214" }}>JWT (JSON Web Tokens)</span>, ensuring safe user access control. Additionally, I handle file uploads seamlessly using <span style={{ color: "#94E214" }}>Multer</span>, enabling smooth integration of file management in applications. For email functionality, I integrate <span style={{ color: "#94E214" }}>Nodemailer</span> to send reliable transactional emails, such as registration confirmations and password resets. I also prioritize data validation and protection from common vulnerabilities, ensuring secure and efficient data handling throughout. My experience extends to building RESTful APIs, integrating third-party services, and optimizing back-end performance for real-time applications.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="vr  d-grid mx-auto  text-light"></div>
                <i class="text-center  text-light fa-regular fa-circle d-grid  mx-auto"
                // style={{ color: "#94E214" }}
                ></i>


                <div className="row" data-aos="fade-up">
                    <div className="col-lg-8 border rounded py-5 d-flex align-items-center justify-content-center">
                        <div className="container ">
                            <img src="database.gif" width={100} alt="" />
                            <span className="fs-3 text-light ms-3 border-bottom"><span style={{ color: "#94E214" }}>Database Development</span></span>
                            <ul className="text-light ms-5 fs-5 mt-3 list-unstyled">
                                <li>
                                    Building and managing databases with <span style={{ color: "#94E214" }}>MongoDB</span> for scalable NoSQL solutions and <span style={{ color: "#94E214" }}>MySQL</span> for relational data management, ensuring optimized data storage, efficient retrieval, and robust performance. Additionally, I integrate <span style={{ color: "#94E214" }}>Firebase</span> for cloud-based database management, leveraging its real-time capabilities for seamless data synchronization and scalability in dynamic applications.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>



            </div >

        </>
    )
}

export default Section2