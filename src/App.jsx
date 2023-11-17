import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Homepage from "./components/Homepage/Homepage";

function App() {

  return (
    <BrowserRouter>
      <Header />
      
      <Routes>
        <Route path={'/'} element={<Homepage />}/>
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
