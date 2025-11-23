// import Header from "./components/Header";
import "./index.css";
import HomePage from "./components/HomePage";
import { Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp";
import MainHeader from "./components/MainHeader";
import AboutPage from "./components/About";
import Login from "./components/Login";
import axios from "axios";
import Analytics from "./components/Analytics";

axios.defaults.withCredentials = true;

function App() {
 
  return (
    <div>
      {/* <Header /> */}
       <MainHeader />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path="/analytics" element={<Analytics />} />
        </Routes>
    </div>
  );
}

export default App;

