import "./App.css";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Login from "./components/Login";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import MoviesRoutes from "./routes/MoviesRoutes";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/movies/*" element={<MoviesRoutes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}     

export default App;
