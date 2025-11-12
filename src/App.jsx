
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Rooms from './Pages/Rooms.jsx';
import Services from './Pages/Services.jsx';
import Gallery from './Pages/Gallery.jsx';
import Contact from './Pages/Contact.jsx';
import Footer from './Component/Footer.jsx';

function App() {
  return (
    <Router>
      <Routes>
        {/*  Main Page — includes Navbar inside Home */}
        <Route
          path="/"
          element={
            <>
              <Home />   
               <About />
              <Rooms />
              <Services />
              <Gallery />
             <Footer/> 
            </>
          }
        />

        {/*  Contact Page — Separate Page */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;


