import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home"
import Signin from "./pages/Signin"
import Login from "./pages/Login"
function App() {
  return (
    <div>

      <Navbar />
      {/* <Home /> */}
      {/* <Signin /> */}
      <Login />
    </div>
  );
}

export default App;
