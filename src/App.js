import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import "./App.css";
import Posts from "./components/Posts/Posts";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Main />
      <Posts />
    </div>
  );
}

export default App;
