import {BrowserRouter , Route, Routes} from 'react-router-dom';
import  { Login } from "./pages/Login/Login";
import Sidebar from './pages/Profiles/Sidebar';

export function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Sidebar />} />
     </Routes>
     </BrowserRouter>
    </div>
  
  );
}

export default App;
