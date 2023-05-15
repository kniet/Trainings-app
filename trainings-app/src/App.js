import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import { useState } from "react";
import { UserContext } from "./context/Context";

const App = () => {
  const [isAdmin, setIsAdmin] = useState(0);

  return (
    <UserContext.Provider value={[isAdmin, setIsAdmin]}>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/homePage" element={<HomePage />} />
      </Routes>
      </UserContext.Provider>
  );
};

export default App;
