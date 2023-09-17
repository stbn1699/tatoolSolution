// @ts-ignore
import "@/styles/styles.css"
import CF from "@/Components/utilities/ConnexionForm";
import {QueryError} from "mysql2";
import React from "react";




function Home() {
    return (
        <div className="welcomeScreen whitesmoke">
            <h1 className="welcomeTitle">Bienvenue !</h1>
            <h3 className="welcomeSubtitle">Connectez-vous</h3>
            <CF.ConnexionForm/>
        </div>
    )

}

export default Home
