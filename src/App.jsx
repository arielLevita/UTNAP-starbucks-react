import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Homepage from "./routes/Homepage/Homepage";
import Menu from "./routes/Menu/Menu";
import Cafe from "./routes/Cafe/Cafe";
import Admin from "./routes/Admin/Admin";
import HandleNotFound from "./routes/HandleNotFound/HandleNotFound";
import ExperienciaPage from "./routes/ExperienciaPage/ExperienciaPage";
import './App.css';

function App() {

  return (
    <BrowserRouter>
      <Header />
      
      <Routes>
        <Route path={'/'} element={<Homepage />}/>
        <Route path={'/menu'} element={<Menu />}/>
        <Route path={'/cafe'} element={<Cafe />}/>
        <Route path={'/experienciapage'} element={<ExperienciaPage />}/>
        <Route path={'/admin'} element={<Admin />}/>
        <Route path={'*'} element={<HandleNotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
