
import './App.css';
import Gallery from './components/gallery';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Admin from './components/pages/Admin';
import MainGallery from './components/pages/MainGallery';
import Booking from './components/booking/Booking';
import BookingList from './components/fetchData/BookingList';
import Data from './components/fetchData/Data';
import NavBar from './components/navBar';
import AdminLogin from './components/AdminLogin';
import { FooterContainer } from './container/FooterContainer';


function App() {
  return (
    <Router>
      <NavBar/>
      
      <div className="App">
        <Switch>
          <Route exact path="/">
            <MainGallery/>
          </Route>
          <Route exact path="/booking">
          <Booking />
          </Route>
          <Route exact path="/login">
          <AdminLogin/>
          </Route>
          <Admin>
            <Switch>
            <Route exact path="/bookingList">
          <BookingList/>
          </Route>
          <Route exact path="/create">
          <Gallery />
          </Route>
          <Data/>
            </Switch>
            
           
        
          </Admin>
        </Switch>

      </div>
      {/* <FooterContainer/> */}
    </Router>
  );
}

export default App;
