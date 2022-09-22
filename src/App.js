import './App.css';
import CreateEventPage from './components/CreateEventPage';
import EventPage from './components/EventPage';
import LandingPage from './components/LandingPage';
import {  
  BrowserRouter as Router, 
  Routes,
  Route,
} from "react-router-dom";
import NotFoundPage from './components/NotFoundPage';

function App() {
  return (
 
    <Router>
    <Routes>
          <Route path="/" element={<LandingPage />}  />
          <Route path="/create" element={<CreateEventPage />}  />
          <Route path="/event" element={<EventPage />}  />
          <Route path="*" element={<NotFoundPage />}  />
        </Routes>
    </Router>
  );
}

export default App;
