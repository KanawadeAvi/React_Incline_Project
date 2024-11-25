
import './App.css';
import Navbar from './components/Navbar';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/Footer';
import { Documentation } from './components/Documentation';
import About from './components/About';
import Error from './components/Error';
import Bootstrap from './components/Bootstrap';
import Theam from './components/Theam';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Images from './components/Images';
import Crouser from './components/Crouser';
import Video from './components/Video';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />         
        <Route path="/document" element={<Documentation />} /> 
        <Route path="/about" element={<About />} /> 
        <Route path="/404" element={<Error />} /> 
        <Route path="/bootstrap" element={<Bootstrap />} /> 
        <Route path="/theam" element={<Theam />} /> 
        <Route path="/signin" element={<Signin />} /> 
        <Route path="/signup" element={<Signup />} /> 
        <Route path="/images" element={<Images />} /> 
        <Route path="/crouser" element={<Crouser />} /> 
        <Route path="/video" element={<Video />} /> 
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
