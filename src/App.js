import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import "./App.css";
import Posts from "./components/Posts/Posts";
import PhotoGallery from "./components/PhotoGallery/PhotoGallery";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Main />
      <Posts />
      <PhotoGallery />
      <Footer />
    </div>
  );
}

export default App;
