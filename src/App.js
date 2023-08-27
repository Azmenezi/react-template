import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import UserContext from "./context/UserContext";
import { checkToken } from "./api/auth/storage";

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    setUser(checkToken());
  }, []);
  return (
    <UserContext.Provider value={[user, setUser]}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
