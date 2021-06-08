
import './App.css';
import Gallery from './components/gallery';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Admin from './components/pages/Admin';
import MainGallery from './components/pages/MainGallery';
import Booking from './components/booking/Booking';
import BookingList from './components/fetchData/BookingList';
import Data from './components/fetchData/Data';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <MainGallery/>
          </Route>
          <Route exact path="/booking">
          <Booking />
          </Route>
          <Admin>
            <Switch>
            <Route exact path="/bookingList">
          <BookingList/>
          </Route>
          <Route exact path="/create">
          <Gallery />
          </Route>
            </Switch>
            <Route exact path="/admin">
           <Data/>
          </Route>
          </Admin>
        </Switch>

      </div>
    
    </Router>
  );
}

export default App;
