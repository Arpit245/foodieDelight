import './App.css';
import Admin from './components/pages/Admin';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Navbar from './components/layout/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFound from './components/pages/NotFound';
import AddRestaurant from './components/pages/AddRestaurant';
import EditRestaurant from './components/pages/EditRestaurant';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Admin />} />
          <Route path="/add" element={<AddRestaurant />} />
          <Route path="/restaurants/edit/:id" element={<EditRestaurant />} /> {/* Use :id to match dynamic segments */}
          <Route path="*" element={<NotFound />} /> {/* Catch-all route for 404 - Not Found */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
