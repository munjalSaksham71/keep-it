import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import ArchiveScreen from './screens/ArchiveScreen';
import TrashScreen from './screens/TrashScreen';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={ <PrivateRoute> <HomeScreen /> </PrivateRoute>} />
        <Route path="/archive" element={ <PrivateRoute> <ArchiveScreen /> </PrivateRoute>} />
        <Route path="/trash" element={ <PrivateRoute> <TrashScreen /> </PrivateRoute>} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/signup" element={<SignupScreen />} />
      </Routes>
    </div>
  );
}

export default App;
