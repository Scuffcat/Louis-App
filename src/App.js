import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage"
import MainPage from "./MainPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/main" component={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;