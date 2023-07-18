// @ts-ignore
import ButtonCustom from "/src/Components/utilities/ButtonCustom";
import "@/styles/styles.css"
import {useState} from 'react'
import {Link, useNavigate} from "react-router-dom"


function Home() {

    return (
        <div className="welcomeScreen">
            <h1 className="welcomeTitle">Bienvenue !</h1>
            <ButtonCustom title="Se Connecter" buttontype="1" path="connexion"/>
        </div>
    )

}

export default Home
