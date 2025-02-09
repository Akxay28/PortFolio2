import React, { useEffect } from 'react';
import { use } from 'react';


const Section1 = () => {
    useEffect(() => {
        var app = document.getElementById("app");
        var typewriter = new Typewriter(app, {
            loop: true,
            delay: 75
        });



        typewriter
            .typeString("H E L L O <br> :) ") // Type out the text
            .pauseFor(1000) // Pause after typing
            .deleteAll()    // Clear the text
            .typeString("WELCOME TO MY PORTFOLIO...") // Type out the text
            .pauseFor(1000)
            .deleteAll()
            .typeString("MY NAME IS AKSHAY PAUL") // Type out the text
            .pauseFor(1000)
            .deleteAll()
            .typeString("I'm a FULL STACK DEVELOPER...") // Type out the text
            .pauseFor(1000)
            .deleteAll()
            .start(); // Start the typewriter animation
    }, []);

    return (
        <div className="container w-100" id='home' >
            <span className='body' data-aos="fade-up-left"></span>
            <div className="row">
                <div className="col-lg-6 h-100 py-0 py-sm-5 ">
                    <div className="container ">
                        {/* <span className='h1' data-aos="zoom-in-up"></span> */}
                        <div id="app" data-aos="zoom-in-up" ></div>
                        {/* <div className="row">
                            <figcaption class="blockquote-footer d-flex text-white align-items-center">
                            <h1 title="Source Title" className='inline-block ms-3'>
                            <em style={{ fontFamily: "Playwrite AU SA, serif", borderBottom: "2px solid #94E214" }}>Let's Get In <span style={{ color: "#94E214", borderBottom: "2px solid white" }}>Touch...</span></em>
                            </h1>
                            </figcaption>
                            <div id='footerBlockQuote'>
                            <h4 style={{ fontFamily: "Playwrite AU SA, serif" }} className="text-white lh-base">I'm a Full Stack Developer with a passion for developing and designing beautiful and functional websites. I'm always looking for new opportunities to learn and grow.</h4>
                            
                            </div>
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
                            </div> */}
                        {/* <span className='dashh1' data-aos="fade-up-left"></span> */}
                    </div>
                </div>
                <div className="col-lg-6 py-5 ">
                    <div className="container roundedImg   img-fluid  mt-5 " data-aos="zoom-in-left"></div>
                </div>
            </div>
        </div >
    );
}

export default Section1;
