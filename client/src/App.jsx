import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login/Login";

export function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="*"
            element={
              <div>
                <h1>404</h1>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
