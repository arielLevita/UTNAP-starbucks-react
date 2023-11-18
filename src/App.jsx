import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Homepage from "./components/Homepage/Homepage";
import Menu from "./components/Menu/Menu";
import Cafe from "./components/Cafe/Cafe";
import Admin from "./components/Admin/Admin";
import HandleNotFound from "./components/HandleNotFound/HandleNotFound";

function App() {

  return (
    <BrowserRouter>
      <Header />
      
      <Routes>
        <Route path={'/'} element={<Homepage />}/>
        <Route path={'/menu'} element={<Menu />}/>
        <Route path={'/cafe'} element={<Cafe />}/>
        <Route path={'/admin'} element={<Admin />}/>
        <Route path={'*'} element={<HandleNotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
