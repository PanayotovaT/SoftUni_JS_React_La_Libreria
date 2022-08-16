import './App.css';
import {Routes, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Footer from './components/Footer/Footer';
import Register from './components/Register/Register';
import Home from './components/Home/Home';
import Details from './components/Details/Details';
import Catalogue from './components/Catalogue/Catalogue';
import Create from './components/Create/Create';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/create" element={<Create />} />
        <Route path="/details/:bookId" element={<Details />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
