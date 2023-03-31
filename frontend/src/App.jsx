import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contacts from "./pages/contacts/Contacts";
import CreateContact from "./pages/CreateContact/CreateContact";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import { useTheme } from "./hooks/useTheme";
import "./App.scss";

function App() {
  const { theme } = useTheme();
  return (
    <>
      <Router>
        <div className="App" data-theme={theme}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/create-contact" element={<CreateContact />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
