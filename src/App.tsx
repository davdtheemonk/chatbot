import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Landing } from "./Pages/Landing";
import { LpSection } from "./Components/LpSection";
import { LpAbout } from "./Components/LpAbout";
import { LpHowItWorks } from "./Components/LpHowItWorks";
import { SignUp } from "./Pages/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Landing />}>
          <Route path="/" element={<LpSection />} />
          <Route path="/about-us" element={<LpAbout />} />
          <Route path="/how-it-works" element={<LpHowItWorks />} />
        </Route>
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
