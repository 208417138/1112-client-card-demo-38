import React from "react"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage_38 from "./pages/HomePage_38";
import BlogsStaticPage_38 from './pages/BlogsStaticPage_38'
import BlogsLocalJsonPage from "./pages/BlogsLocalJsonPage_38";
import BlogsNodeServerPage_38 from "./pages/BlogsNodeServerPage_38";
import BlogsSupabasePage_38 from "./pages/BlogsSupabasePage_38";
import ProductsStaticPage_xx from './pages/midprep_xx/ProductsStaticPage_xx';
import SupaMenuPage from './pages/SupaMenuPage';

import ProductsNodeServerPage_xx from './pages/midprep_xx/ProductsNodeServerPage_xx';

import ProductsNodeServerContextPage_xx from './pages/midprep_xx/ProductsNodeServerContextPage_xx';

import MenuStaticPage_xx from './pages/mid_xx/MenuStaticPage_xx';

import MenuLocalJsonPage_xx from './pages/mid_xx/MenuLocalJsonPage_xx';

import MenuNodeServerPage_xx from './pages/mid_xx/MenuNodeServerPage_xx';

import MenuNodeServerContextPage_xx from './pages/mid_xx/MenuNodeServerContextPage_xx';
import Navbar from "./components/NavbarMegaResp_xx";
import CrownStaticPage_38 from "./pages/local/CrownStaticPage_38";
import CrownSupabase_38 from "./pages/supabase/CrownSupabase_38";
import ShopSupabase_38 from "./pages/supabase/ShopSupabase_38";
function App_38() {
  return (
    <BrowserRouter>
    {/* <Navbar/> */}
      <Routes>
        <Route path='/' element={<HomePage_38/>}/>
        <Route path='card_38' element={<BlogsStaticPage_38/>}/>
        <Route path='local_38' element={<BlogsLocalJsonPage/>}/>
        <Route path='node_38' element={<BlogsNodeServerPage_38/>}/>
        <Route path='supabase_38' element={<BlogsSupabasePage_38/>}/>
        <Route path='/midp_static_xx' element={<ProductsStaticPage_xx />} />
        <Route path='/midp_node_xx' element={<ProductsNodeServerPage_xx />} />
        <Route
          path='/midp_node_context_xx'
          element={<ProductsNodeServerContextPage_xx />}
        />
        <Route path='supa_menu_38' element={<SupaMenuPage/>}/>
        <Route path='static_crown2_38' element={<CrownStaticPage_38/>}/>
        <Route path='supa_crown2_38' element={<CrownSupabase_38/>}/>
        <Route path='supa_shop2_38' element={<ShopSupabase_38/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App_38;
