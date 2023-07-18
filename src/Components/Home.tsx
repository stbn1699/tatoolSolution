// @ts-ignore
import ButtonCustom from "/src/Components/utilities/ButtonCustom";
import "@/styles/styles.css"
import {useId, useState} from 'react'
import {Link, useNavigate} from "react-router-dom"
import ConnexionForm from "@/Components/utilities/ConnexionForm";


function Home() {

    const username = useId()
    const passwrd = useId()

    return (
        <div className="welcomeScreen whitesmoke">
            <h1 className="welcomeTitle">Bienvenue !</h1>
            <h3 className="welcomeSubtitle">Connectez-vous</h3>
            <ConnexionForm/>
        </div>
    )

}

export default Home
