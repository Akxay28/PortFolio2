import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'; // Import Routes
import Layout from './Views/Pages/Layout';
import Home from './Views/Pages/Home/Home';

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
