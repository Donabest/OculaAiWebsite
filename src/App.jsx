import AppLayout from "./Layouts/AppLayout";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Features from "./pages/Features";
import Design from "./particles/Design";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Resources from "./pages/Resources";
import Solution from "./pages/Solution";
import Company from "./pages/Company";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="/Home" />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Features" element={<Features />} />
          <Route path="/Pricing" element={<Pricing />} />
          <Route path="/Resources" element={<Resources />} />
          <Route path="/Solution" element={<Solution />} />
          <Route path="/Company" element={<Company />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
