import React from 'react'
import ReactDOM from 'react-dom/client'
import './samples/node-api'
import TatoolSidebar from "@/Components/TatoolSidebar";
import Home from './Components/Home'
import {
    createBrowserRouter,
    RouterProvider,
    BrowserRouter,
    Routes,
    Route,
    HashRouter
} from "react-router-dom";
import WIP from "@/Components/utilities/WIP";
import Menu from "@/Components/pages/Menu";
import Stocks from "@/Components/pages/Stocks";
import NouveauProduit from "@/Components/pages/NouveauProduit";
import Parametres from "@/Components/pages/Parametres";
import ModifierProduit from "@/Components/pages/ModifierProduit";


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}> </Route>
                <Route path="/TatoolSidebar" element={<TatoolSidebar activeBtn={0}/>}> </Route>
                <Route path="/WIP" element={<WIP/>}> </Route>
                <Route path="/Menu" element={<Menu/>}> </Route>
                <Route path="/Stocks" element={<Stocks/>}> </Route>
                <Route path="/NouveauProduit" element={<NouveauProduit/>}> </Route>
                <Route path="/Parametres" element={<Parametres/>}> </Route>
                <Route path="/ModifierProduit" element={<ModifierProduit/>}> </Route>
            </Routes>
        </BrowserRouter>
    );
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <App/>
)

postMessage({payload: 'removeLoading'}, '*')
