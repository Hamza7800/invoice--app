import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <h1 className="App">
      <Navbar />
      <Outlet />
    </h1>
  );
}

export default App;
