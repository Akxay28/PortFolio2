import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'; // Import Routes
import './App.css';
import Home from './Views/Pages/Home/Home';
import Layout from './Views/Pages/Layout';

function App() {


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
