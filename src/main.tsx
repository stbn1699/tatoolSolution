import React from 'react'
import ReactDOM from 'react-dom/client'
import './samples/node-api'
import BDXHome from "@/Components/BDXHome";
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


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}> </Route>
                <Route path="/BDXHome" element={<BDXHome/>}> </Route>
                <Route path="/WIP" element={<WIP/>}> </Route>
            </Routes>
        </BrowserRouter>
    );
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <App/>
)

postMessage({payload: 'removeLoading'}, '*')
