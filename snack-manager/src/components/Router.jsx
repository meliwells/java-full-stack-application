
import { Routes, Route } from 'react-router-dom';
import SignIn from './components/SignIn';
import SnackList from './components/SnackList';
import App from '../App.jsx'




<Routes>
    <Route path="/signIn" element={<SignIn />} />
    <Route path="/snackList" element={<SnackList />} />
</Routes>