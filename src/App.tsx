import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Landing } from "./Pages/Landing";
import { LpSection } from "./Components/LpSection";
import { LpAbout } from "./Components/LpAbout";
import { LpHowItWorks } from "./Components/LpHowItWorks";
import { SignUp } from "./Pages/SignUp";
import { Toaster } from "react-hot-toast";
import { Controller } from "./Components/Controller";
import { Home } from "./Pages/Home";
import { Login } from "./Pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" />
      <Routes>
        <Route element={<Landing />}>
          <Route path="/" element={<LpSection />} />
          <Route path="/about-us" element={<LpAbout />} />
          <Route path="/how-it-works" element={<LpHowItWorks />} />
        </Route>
        <Route element={<Controller />}>
          <Route path="/app" element={<Home />} />
        </Route>
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
