import GameList from "./components/GameList";
import CheckOut from "./components/CheckOut";
import Error from "./components/Error";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import { Switch, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <>
    <Menu/>
      <Switch>
        <Route exact path="/" component={GameList} />
        <Route path="/checkout" component={CheckOut} />
        <Route path="/cart" component={Cart} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
