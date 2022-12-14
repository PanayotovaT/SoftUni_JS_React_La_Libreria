import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext';
import { NotificationProvider } from './contexts/NotificationContext';

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
import MyProfile from './components/MyProfile/MyProfile';
import PrivateRoute from './common/PrivateRoute';
import PublicRoute from './common/PublicRoute';
import Notification from './common/Notification';
import Search from './components/Catalogue/Search/Search';

function App() {
  return (
    <AuthProvider>
      <NotificationProvider>

        <div className="App">
          <Header />
          <Notification />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalogue" element={<Catalogue />} />

            <Route element={<PrivateRoute />}>
              <Route path="/create" element={<Create />} />
              <Route path="/details/:bookId" element={<Details />} />
              <Route path="/update/:bookId" element={<UpdateBook />} />
              <Route path="/search" element={<Search />} />
              <Route path="/my-profile" element={<MyProfile />} />
              <Route path="/logout" element={<Logout />} />
            </Route>

            <Route element={<PublicRoute />}>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Route>
          </Routes>
          <Footer />
        </div>
      </NotificationProvider>
    </AuthProvider>
  );
}

export default App;
