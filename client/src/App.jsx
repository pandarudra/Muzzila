import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login/Login";
import { Loading } from "./components/Loader/Loading";
import { Landing } from "./pages/Landing/Landing";

export function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="*"
          element={
            <div className="w-full h-screen flex items-center justify-center">
              <h1>404</h1>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
