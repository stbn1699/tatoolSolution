import "@/styles/main.css"
import {Link, useNavigate} from "react-router-dom";

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
    if (path === "goback"){
        return (
            <div className="ButtonCustom" onClick={goBack}>
                <div className="title">Retour</div>
            </div>
        )
    }else{
        return (
            <div className={`ButtonCustom`}>
                <Link to={`/${path}`}>
                    <div className={`buttonBackground-${buttontype}`}>
                        <div className={`button-${buttontype}`}>${title}</div>
                    </div>
                </Link>
            </div>
        )
    }
}

export default ButtonCustom