
import './App.css';
import Navbar from './comporents/Navbar';
import About from './comporents/About'
import Textform from './comporents/textform';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";


function App() {
  return (
    <>
      <Router>
        <Navbar title="textutils" aboutText="about" />
        <div className="container my-3">
          {/* <Switch> */}
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Textform />} />
          </Routes>
          {/* </Switch> */}
        </div>
      </Router>
    </>
  );
}


export default App;
