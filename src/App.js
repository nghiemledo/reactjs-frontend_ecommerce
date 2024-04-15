import { Route, Routes } from "react-router-dom";
import "../src/assets/css/style.css";
import PublicLayout from "./pages/PublicLayout";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <div>
        <Routes>
          <Route path="/" element={<PublicLayout />}>
            <Route path="/" element={<HomePage />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
