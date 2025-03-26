import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import SignIn from './pages/SignIn';
import Home from './pages/Home'; 
import SnackList from './pages/SnackList';
import SnackDetails from './pages/SnackDetails.jsx';
import SignUp from './pages/signUp';
import AdminSnackList from './pages/AdminSnackList.jsx';
import AdminSnackDetails from './pages/AdminSnackDetails.jsx';
import AddNewSnack from './pages/AddNewSnack.jsx';
import AdminRoute from './components/AdminRoute.jsx';

export default function App() {
   return (
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signIn" element={<SignIn />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/snackList" element={<SnackList />} />
            <Route path="/snackDetails/:snacksId" element={<SnackDetails />} />
            <Route path="/adminSnackList" element={<AdminSnackList />} />
            <Route path="/adminSnackDetails/:snacksId" element={<AdminSnackDetails />} />
            <Route path="/addNewSnack" element={<AddNewSnack />} />
            <Route path="/adminSnackList" element={<AdminRoute><AdminSnackList /></AdminRoute>} />
          </Routes>
          <Footer />
        </div>
      </Router>
   );
}



 


