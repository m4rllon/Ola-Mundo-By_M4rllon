import SobreMim from "./pages/sobre-mim";
import Home from "./pages/home";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Menu from "./components/menu";
import Footer from "./components/footer";
import PatternPage from "./components/pattern-page/intes";
import Post from "./pages/post";
import NotFound from "./pages/not-found";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu/>

      <Routes>
        <Route path="/" element={<PatternPage/>}>
          <Route index element={<Home/>}/>
          {/*  atributo 'index': Isso é o mesmo que dizer que o caminho desta rota é igual ao da rota pai, ou seja, nesse caso é a mesma coisa que um atributo path="/". */}
          <Route path="/sobremim" element={<SobreMim/>}/>
        </Route>

        <Route path="/post/:id" element={<Post/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>

      <Footer/>
    </BrowserRouter>
  );
}

export default AppRoutes;
