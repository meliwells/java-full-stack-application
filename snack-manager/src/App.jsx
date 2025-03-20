import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import SignIn from './pages/SignIn';
import Home from './pages/Home'; 
import SnackList from './pages/SnackList';

export default function App() {
   return (
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signIn" element={<SignIn />} />
            <Route path="/snackList" element={<SnackList />} />
            
          </Routes>
          <Footer />
        </div>
      </Router>
   );
}



 


