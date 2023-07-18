import "@/styles/main.css"
import {Link, useNavigate} from "react-router-dom";
import {app} from "electron";

interface ButtonCustomProps {
    buttontype: number;
    title: string;
    path: string;
}

const ButtonCustom: React.FC<ButtonCustomProps> = ({buttontype, title, path}) => {


    const navigate = useNavigate()
    const goBack = () => {
        navigate(-1)
    }
    const goExit = () => {
        window.close()
    }
    if (path === "goback"){
        return (
            <div className="ButtonCustom" onClick={goBack}>
                <div className="title">Retour</div>
            </div>
        )
    }else if(path === "exit"){
        return (
            <div className={`ButtonCustom`} onClick={goExit}>
                <div className={`buttonBackground-${buttontype}`}>
                    <button className={`button-${buttontype}`}>{title}</button>
                </div>
            </div>
        )
    }else{
        return (
            <div className={`ButtonCustom`}>
                <Link to={`/${path}`}>
                    <div className={`buttonBackground-${buttontype}`}>
                        <button className={`button-${buttontype}`}>{title}</button>
                    </div>
                </Link>
            </div>
        )
    }
}

export default ButtonCustom