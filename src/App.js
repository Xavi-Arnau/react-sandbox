import { BrowserRouter, Route, Routes } from "react-router-dom";
import SomeFetches from "./screens/SomeFetches";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="w-10/12 mx-auto mt-10">
        <Routes>
          <Route path="/" element={<SomeFetches />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
