import "@/styles/main.css"
import {Link, useNavigate} from "react-router-dom";
import {app} from "electron";
import ButtonCustom from "@/Components/utilities/ButtonCustom";

const WIP = () => {

    const navigate = useNavigate()
    const goBack = () => {
        navigate(-1)
    }
    return (
        <ButtonCustom buttontype={1} title="retour" path="goback"></ButtonCustom>
    )
}

export default WIP