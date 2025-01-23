import {BrowserRouter as Router, Route, Routes, BrowserRouter} from 'react-router-dom';
import LoginForm from "./components/Assets/LoginForm/LoginForm";

function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path="/login" element={<LoginForm />} />
      
     </Routes>
     </BrowserRouter>
    </div>
  
  );
}

export default App;
