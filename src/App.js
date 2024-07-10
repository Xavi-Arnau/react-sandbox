import { BrowserRouter, Route, Routes } from "react-router-dom";
import SomeFetches from "./screens/SomeFetches";
import Header from "./components/Header";
import CartProductsProvider from "./contexts/CartProductsContext";
import AuthProvider from "./contexts/AuthContext";
import Login from "./screens/Login";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./screens/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CartProductsProvider>
          <Header />
          <div className="w-10/12 mx-auto mt-10">
            <Routes>
              <Route path="/" element={<SomeFetches />} />
              <Route path="/login" element={<Login />} />
              <Route element={<PrivateRoute />}>
                <Route path="/dashboard" element={<Dashboard />} />
              </Route>
            </Routes>
          </div>
        </CartProductsProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
