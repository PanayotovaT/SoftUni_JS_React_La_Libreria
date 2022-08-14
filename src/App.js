import './App.css';
import {Routes, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Login from './components/Login/Login';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
