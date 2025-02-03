import React from 'react';
import Stack from '../ReactBits/Stack';



const Section3 = () => {

    const images = [
        { id: 13, img: "GIT.gif" },
        { id: 12, img: "figma-logo-animation-unscreen.gif" },
        { id: 11, img: "download.png" },
        { id: 10, img: "express.gif" },
        { id: 9, img: "mongos.gif" },
        { id: 8, img: "NODE.gif" },
        { id: 7, img: "firebase.gif" },
        { id: 6, img: "redux.svg" },
        { id: 5, img: "REACT.gif" },
        { id: 4, img: "JS.gif" },
        { id: 3, img: "bootstrap.webp" },
        { id: 2, img: "CSS3.gif" },
        { id: 1, img: "html.gif" },
    ];

    return (
        <>
            <div className="container mt-5" data-aos="fade-up">
                <span className='h2'></span>

                <h2 style={{ fontFamily: "Playwrite AU SA, serif", borderBottom: "2px solid #94E214", display: 'inline-block' }} className='mt-0 mt-lg-5 mb-0 mb-lg-5' data-aos="fade-right">
                    <span className='about'>My </span>
                    <span className='me'>Skills</span>
                </h2>
                <span className='dashh2'></span>

                <div className="container">
                    <div className="row text-center d-grid text-center mx-auto">

                        <div className="col-lg-6 d-grid mx-auto text-center">
                            <Stack
                                randomRotation={true}
                                sensitivity={180}
                                sendToBackOnClick={false}
                                cardDimensions={{ width: 500, height: 300 }}
                                cardsData={images}
                            />
                        </div>
                    </div>
                </div>

            </div >
        </>
    )
}

export default Section3