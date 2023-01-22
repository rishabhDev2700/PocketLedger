import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomeScreen } from "./pages/HomeScreen";
import { Menu } from "./pages/Menu";
import { TransactionScreen } from "./pages/TransactionScreen";
import { UnAuthorised } from "./pages/UnAuthorised";
import { useState, createContext } from "react";
export const AuthContext = createContext({ get: false, set: null });
function App() {
  const [userStatus, setUserStatus] = useState(false);
  return (
    <AuthContext.Provider value={{ get: userStatus, set: setUserStatus }}>
      <Router>
        <Routes>
          <Route path='/' element={<HomeScreen />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/transactions' element={<TransactionScreen />} />
          <Route path='*' element={<UnAuthorised />} />
        </Routes>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
