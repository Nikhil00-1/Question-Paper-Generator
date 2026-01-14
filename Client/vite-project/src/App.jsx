import { Routes, Route } from "react-router-dom";

import Landing from "./Pages/Landing";
import Generator from "./Pages/Generator";
import Questions from "./Pages/Questions";
import Features from "./Pages/Features";
import Contact from "./Pages/contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/generator" element={<Generator />} />
      <Route path="/questions" element={<Questions />} />
      <Route path="/features" element={<Features />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
