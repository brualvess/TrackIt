import { BrowserRouter, Routes, Route } from "react-router-dom";
import Initial from "./Initial"
import Cadastro from "./Cadastro";
import Habitos from "./Habitos";
export default function App(){
    return(
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Initial />}/>
        <Route path="/cadastro" element={<Cadastro />}/>
        <Route path="/habitos" element={<Habitos />}/>
        </Routes>
        </BrowserRouter>
    )
}