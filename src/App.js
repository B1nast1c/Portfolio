import logo from "./logo.svg";
import "./App.css";
import Home from "./Views/Home";
import Index from "./Views/Index";
import Acerca from "./Views/Acerca";
import Trabajos from "./Views/Trabajos";
import Mensaje from "./Views/Mensaje";

function App() {
  return (
    <div className="App">
      <Home></Home>
      <Index></Index>
      <Acerca></Acerca>
      <Trabajos></Trabajos>
      <Mensaje></Mensaje>
    </div>
  );
}

export default App;
