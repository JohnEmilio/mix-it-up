import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Main from './components/Main'
import Header from './components/Header'
import Drinks from "./components/Drinks"

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/user" element={<Drinks/>} />
      </Routes>
    </Router>
  );
}

export default App;
