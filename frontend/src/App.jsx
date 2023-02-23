import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contacts from "./pages/contacts/Contacts";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
