import { BrowserRouter, Route, Routes } from "react-router-dom";
import SomeFetches from "./screens/SomeFetches";
import Header from "./components/Header";
import CartProductsProvider from "./contexts/CartProductsContext";
import AuthProvider from "./contexts/AuthContext";
import Login from "./screens/Login";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./screens/Dashboard";
import store from "./store";
import { storeRTKQuery } from "./storeRTKQuery";
import { Provider } from "react-redux";
import Footer from "./components/Footer";
import RTKQuery from "./screens/RTKQuery";

import MultiLanguage from "./screens/MultiLanguage";
import ExpressApi from "./screens/ExpressApi";
import Animations from "./screens/Animations";
import ExpressApiMongo from "./screens/ExpressApiMongo";
import Pagination from "./screens/Pagination";
import Memo from "./screens/Memo";
import CustomHooks from "./screens/CustomHooks";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AuthProvider>
          <CartProductsProvider>
            <Header />
            <div className="w-10/12 mx-auto mt-10">
              <Routes>
                <Route path="/" element={<SomeFetches />} />

                <Route
                  path="/rtkquery"
                  element={
                    <Provider store={storeRTKQuery}>
                      <RTKQuery />
                    </Provider>
                  }
                />
                <Route path="/languages" element={<MultiLanguage />} />
                <Route path="/expressapi" element={<ExpressApi />} />
                <Route path="/expressapimongo" element={<ExpressApiMongo />} />
                <Route path="/animations" element={<Animations />} />
                <Route path="/pagination" element={<Pagination />} />
                <Route path="/memo" element={<Memo />} />
                <Route path="/customhooks" element={<CustomHooks />} />

                <Route path="/login" element={<Login />} />
                <Route element={<PrivateRoute />}>
                  <Route path="/dashboard" element={<Dashboard />} />
                </Route>
              </Routes>
            </div>
            <Footer />
          </CartProductsProvider>
        </AuthProvider>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
