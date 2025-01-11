import React, { useState } from 'react'
import './Header.css';

const Header = () => {

    const [isActive, setisActive] = useState(true);
    const handleToggle = () => {
        setisActive(!isActive)
    }

    return (
        <>
            <nav class="navbar navbar-expand-lg  navbar-transparent mb-5   ">
                <div class="container  pt-0 pt-lg-3  py-5   ">
                    <a class="navbar-brand  " href="#">

                    </a>
                    <div class="navbar-toggler rounded rounded-pill border border-white overflow-hidden" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class={isActive ? "fa-solid fa-arrow-down fa-bounce text-light" : " fa-solid fa-arrow-up fa-bounce text-light"} onClick={handleToggle}  ></span>
                    </div>
                    <div class="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto  mb-2 mb-lg-0">
                            <li class="nav-item   ms-0 ms-lg-5 me-0 me-lg-5">
                                <a class="nav-link text-light text-uppercase border-bottom fs-bolder fs-6  ms-0 ms-lg-5 me-0 me-lg-5" aria-current="page" href="#">Main Page</a>
                            </li>
                            <li class="nav-item    ms-0 ms-lg-5 me-0 me-lg-5">
                                <a class="nav-link text-light text-uppercase  border-bottom fs-bolder fs-6  ms-0 ms-lg-5 me-0 me-lg-5" aria-current="page" href="#">PortFolio</a>
                            </li>
                            <li class="nav-item ms-0 ms-lg-5 me-0 me-lg-5 border-bottom border-dark">
                                <a class="nav-link text-light text-uppercase  border-bottom fs-bolder fs-6 ms-0 ms-lg-5 me-0 me-lg-5  " aria-current="page" href="#">Contacts</a>
                            </li>
                            <li class="nav-item  ms-0 ms-lg-5 me-0 me-lg-5 ">
                                <a class="nav-link text-light text-uppercase  border-bottom fs-bolder fs-6  ms-0 ms-lg-5 me-0 me-lg-5   " aria-current="page" href="#" >
                                    About Me
                                </a>
                            </li>
                        </ul>
                        <form class="d-flex">
                            <button class="btn btn-outline-light " type="submit">Hire me</button>
                        </form>
                    </div>
                </div>
            </nav >
        </>
    );
};

export default Header