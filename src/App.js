import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './componets/Navbar';
import Home from './componets/HomePage';
import Courses from './componets/Courses';
import Syllabus from './componets/Syllabus';

function App() {
  return (
    <Router> {/* Replace with your actual repo name */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Courses" element={<Courses />} />
        <Route path="/syllabus" element={<Syllabus />} />
      </Routes>
    </Router>
  );
}

export default App;
