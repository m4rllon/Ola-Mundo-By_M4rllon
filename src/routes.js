import SobreMim from "./pages/sobre-mim";
import Home from "./pages/home";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Menu from "./components/menu";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/sobremim" element={<SobreMim/>}/>
        <Route path="*" element={<div>Página não encontrada</div>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
