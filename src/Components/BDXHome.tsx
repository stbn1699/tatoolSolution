// @ts-ignore
import ButtonCustom from "/src/Components/utilities/ButtonCustom";
import "@/styles/styles.css"
import React, {useId, useState} from 'react'
import {BrowserRouter, Link, Route, Routes, useNavigate} from "react-router-dom"
import ConnexionForm from "@/Components/utilities/ConnexionForm";
import Home from "@/Components/Home";
import Connexion from "@/Components/Connexion";
import SideMenu from "@/Components/utilities/SideMenu";


function BDXHome() {

    const username = useId()
    const passwrd = useId()

    return (
        <>
            <SideMenu rights="bdx"></SideMenu>
            <BrowserRouter>
                <Routes>

                </Routes>
            </BrowserRouter>
        </>
    )

}

export default BDXHome
