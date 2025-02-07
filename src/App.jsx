import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'; // Import Routes
import './App.css';
import Home from './Views/Pages/Home/Home';
import Layout from './Views/Pages/Layout';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Marquee from './Views/Pages/Components/Marquee';

function App() {

  useGSAP(() => {
    gsap.from('.about', {
      y: 100,
      opacity: 100,
      duration: 1,
      delay: 0.5,
      stagger: 0.1,
      ease: "elastic",
      repeat: -1,
      yoyo: true,

    })

    gsap.from('.me', {
      y: -50,
      opacity: 0,
      duration: 1,
      delay: 0.1,
      stagger: -0.1,
      ease: "elastic",
      repeat: -1,
      yoyo: true,
    })
  }, [])

  return (
    <>

      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Layout>
      </Router>

    </>
  )
}

export default App
