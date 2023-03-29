import React from "react"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage_38 from "./pages/HomePage_38";
import BlogsStaticPage_38 from './pages/BlogsStaticPage_38'
import BlogsLocalJsonPage from "./pages/BlogsLocalJsonPage_38";
import BlogsNodeServerPage_38 from "./pages/BlogsNodeServerPage_38";
import BlogsSupabasePage_38 from "./pages/BlogsSupabasePage_38";
import Navbar from "./components/NavbarResp_38";
function App_38() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage_38/>}/>
        <Route path='card_38' element={<BlogsStaticPage_38/>}/>
        <Route path='local_38' element={<BlogsLocalJsonPage/>}/>
        <Route path='node_38' element={<BlogsNodeServerPage_38/>}/>
        <Route path='supabase_38' element={<BlogsSupabasePage_38/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App_38;
