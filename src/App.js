import { BrowserRouter, Routes, Route } from "react-router-dom";
import Initial from "./Initial"
import Cadastro from "./Cadastro";
import Habitos from "./Habitos";
import Hoje from "./Hoje"
export default function App(){
    return(
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Initial />}/>
        <Route path="/cadastro" element={<Cadastro />}/>
        <Route path="/habitos" element={<Habitos />}/>
        <Route path="/hoje" element={<Hoje />}/>
        </Routes>
        </BrowserRouter>
    )
}