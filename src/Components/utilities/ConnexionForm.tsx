import "@/styles/main.css"
import {Link, useNavigate} from "react-router-dom";
import {app} from "electron";
// @ts-ignore
import ButtonCustom from "/src/Components/utilities/ButtonCustom";
import {useState} from "react";
import BDXSidebar from "@/Components/BDXSidebar";

const ConnexionForm = () => {


    const navigate = useNavigate()

    const connexion = () => {
        navigate("/BDXSidebar")
        if(username === "bordeaux" && password === "souvenir"){
        }
    }

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <>

            <div className="dflex connexionInputBox">
                <div className="pc25 whitesmoke allignCenter">Username</div>
                <input className="pc70 connexionInput" value={username} onChange={e => setUsername(e.target.value)}
                       type="text" name="username" required/>
            </div>

            <div className="dflex connexionInputBox">
                <div className="pc25 whitesmoke allignCenter">Password</div>
                <input className="pc70 connexionInput" value={password} onChange={e => setPassword(e.target.value)}
                       type="password" name="password" required/>
            </div>

            <div className="dflex connexionButtons">
                <div className="allignCenter pc50">
                    <ButtonCustom title="Quitter" buttontype="2" path="exit"></ButtonCustom>
                </div>
                <div className="allignCenter pc50">
                    <button className="buttonBackground-2 button-2" onClick={connexion}>Se Connecter</button>
                </div>
            </div>

        </>
    );
}

export default ConnexionForm