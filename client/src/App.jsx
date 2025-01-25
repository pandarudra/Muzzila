import {BrowserRouter, Route, Routes} from 'react-router-dom';
import LoginForm from "./components/Assets/LoginForm/LoginForm";
import Sidebar from "./pages/Profiles/Sidebar";

function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path="/login" element={<LoginForm />} />
      <Route path="/profiles" element={<Sidebar />} />

     </Routes>
     </BrowserRouter>
    </div>
  
  );
}

export default App;

