import './App.css';
import PizzaList from "./components/PizzaList";
import Order from "./components/Order";
import Popular from "./components/Popular";
import Orders from "./components/Orders";

function App() {
  return (
    <div className="app">
      <div>
        <Popular />
        <Orders />
      </div>
      <PizzaList />
      <Order />
    </div>
  );
}

export default App;
