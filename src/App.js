import Layout from './components/Layout/Layout';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PatientsPage from './pages/PatientsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/patients" element={<PatientsPage />} />
      </Routes>
    </Router>
 );
}

export default App;
