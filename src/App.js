import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext';

import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Footer from './components/Footer/Footer';
import Register from './components/Register/Register';
import Home from './components/Home/Home';
import Details from './components/Details/Details';
import Catalogue from './components/Catalogue/Catalogue';
import Create from './components/Create/Create';
import UpdateBook from './components/UpdateBook/UpdateBook';
import './App.css';
import Logout from './components/Logout/Logout';

function App() {
  return (
    <AuthProvider>

      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/create" element={<Create />} />
          <Route path="/details/:bookId" element={<Details />} />
          <Route path="/update/:bookId" element={<UpdateBook />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
