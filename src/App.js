import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import NavMenu from "./Components/NavMenu/NavMenu";
import PlaceOrder from "./Components/PlaceOrder/PlaceOrder";
import AuthProvider from "./Context/AuthProvider";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import AddNewEvent from "./Components/AddNewEvent/AddNewEvent";
import MyBooking from "./Components/MyBooking/MyBooking";
import AllBooking from "./Components/AllBooking/AllBooking";
import NotFound from "./Components/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <NavMenu></NavMenu>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/placeorder/:eventid">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <PrivateRoute path="/addnewevent">
              <AddNewEvent></AddNewEvent>
            </PrivateRoute>
            <PrivateRoute path="/mybooking/:mail">
              <MyBooking></MyBooking>
            </PrivateRoute>
            <PrivateRoute path="/manageallbooking">
              <AllBooking></AllBooking>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </BrowserRouter>
        <Footer></Footer>
      </AuthProvider>
    </div>
  );
}

export default App;
