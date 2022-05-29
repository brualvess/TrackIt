import { BrowserRouter, Routes, Route } from "react-router-dom";
import Initial from "./Initial"
import Cadastro from "./Cadastro";
import Habitos from "./Habitos";
import Hoje from "./Hoje"
import UserContext from "./UserContext";
import { useState } from 'react';
import Historico from "./Historico";
export default function App() {
    const [usuario, setUsuario]=useState({image:"", name:"",email:"", token:""})
    return (
        <UserContext.Provider value={{usuario, setUsuario}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Initial />} />
                    <Route path="/cadastro" element={<Cadastro />} />
                    <Route path="/habitos" element={<Habitos />} />
                    <Route path="/hoje" element={<Hoje />} />
                    <Route path="/historico" element={<Historico />} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    )
}