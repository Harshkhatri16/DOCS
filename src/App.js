import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './componets/Navbar';
import Home from './componets/HomePage';
import Courses from './componets/Courses';
import Syllabus from './componets/Syllabus';

function App() {
  return (
    <>
    <Router>
        <Navbar/>
      <Routes>
          <Route path='/' Component={Home}></Route>
          <Route path='/Courses'Component={Courses}></Route>
           <Route path='/syllabus'Component={Syllabus}></Route>

          {/* <Route path='/Products' Component={Products}></Route>
          <Route path='/Cart' Component={Cart}></Route> */}
      </Routes>
         
    </Router>
  </>
  );
}

export default App;
