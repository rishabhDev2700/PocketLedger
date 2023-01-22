import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { HomeHeading } from "./components/HomeHeading";
import { HomeScreen } from "./pages/HomeScreen";
import { Menu } from "./pages/Menu";
import { TransactionScreen } from "./pages/TransactionScreen";
import { UnAuthorised } from "./pages/UnAuthorised";
import { Logout } from "./pages/Logout";
import { useState, createContext } from "react";
export const AuthContext = createContext({ get: false, set: () => { } });
function App() {
  const [userStatus, setUserStatus] = useState(false);
  console.log('User status App:'+userStatus);
  return (
    <AuthContext.Provider value={{ get: userStatus, set: setUserStatus }}>
      <Router>
        <Link to={userStatus ? '/menu' : '/'}>
          <HomeHeading>PocketLedger</HomeHeading>
        </Link>
        <Routes>
          <Route path='/' element={<HomeScreen />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/transactions' element={<TransactionScreen />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='*' element={<UnAuthorised />} />
        </Routes>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
