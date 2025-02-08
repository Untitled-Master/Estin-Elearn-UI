import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import CoursesGrid from "./components/Courses/Grid/Grid"
import Footer from "./components/Navbar/Footer/Footer";


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <CoursesGrid />
      <hr />
      <Footer />
    </>
  );
}

export default App;
