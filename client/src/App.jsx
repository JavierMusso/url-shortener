import { Routes, Route } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import Redirect from "./components/Redirect/Redirect";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/:id" element={<Redirect />} />
      </Routes>
    </div>
  );
}

export default App;
