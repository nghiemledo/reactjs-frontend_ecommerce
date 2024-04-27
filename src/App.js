import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import AppProvider, { AppContext } from "./states/AppContext";
import "../src/assets/css/style.css";
import PublicLayout from "./pages/PublicLayout";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import { BeatLoader } from "react-spinners";
import Signup from "./components/Authentication/Signup";
import Login from "./components/Authentication/Login";
import NotFoundPage from "./pages/NotFoundPage";
import CartPage from "./pages/CartPage";
import CategoryPage2 from "./pages/CategoryPage2";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 700);
  }, []);
  return (
    <div className="App">
      {loading ? (
        <div className="loading-container">
          <BeatLoader
            height={35}
            width={4}
            radius={2}
            margin={2}
            loading={loading}
            color="#4b9df9"
          />
        </div>
      ) : (
        <div>
          <AppProvider>
            <Routes>
              <Route path="/" element={<PublicLayout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/category" element={<CategoryPage2 />} />
                <Route path="/register" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cart" element={<CartPage />} />
              </Route>
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </AppProvider>
        </div>
      )}
    </div>
  );
}

export default App;
