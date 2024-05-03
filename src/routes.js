import SobreMim from "./pages/sobre-mim";
import Home from "./pages/home";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Menu from "./components/menu";
import Footer from "./components/footer";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/sobremim" element={<SobreMim/>}/>
        <Route path="*" element={<div>Página não encontrada</div>}/>
      </Routes>

      <Footer/>
    </BrowserRouter>
  );
}

export default AppRoutes;
