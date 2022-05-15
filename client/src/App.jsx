import { Routes, Route } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import Redirect from "./components/Redirect/Redirect";
import styles from "./styles.module.css";

function App() {
  return (
    <div className={styles.App}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/:id" element={<Redirect />} />
      </Routes>
    </div>
  );
}

export default App;
