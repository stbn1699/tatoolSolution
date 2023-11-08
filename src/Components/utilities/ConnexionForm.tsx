import "@/styles/main.css"
import {Link, useNavigate} from "react-router-dom";
// @ts-ignore
import ButtonCustom from "/src/Components/utilities/ButtonCustom";
import {useState} from "react";
import {databaseConnexion} from "@/Components/utilities/databaseFunctions";



const ConnexionForm = () => {

    //const [entrepot, setEntrepot] = useState(0)

    const navigate = useNavigate()

    const connexion = () => {
        if(username === "lyon" && password === "rappel"){
            databaseConnexion()
            navigate("/Menu")
            //setEntrepot(1)
        }else if(username === "bordeaux" && password === "souvenir"){
            navigate("/TatoolSidebar")
            databaseConnexion()
            navigate("/Menu")
            //setEntrepot(2)
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