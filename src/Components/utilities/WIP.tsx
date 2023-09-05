import "@/styles/main.css"
import {useNavigate} from "react-router-dom";
import ButtonCustom from "@/Components/utilities/ButtonCustom";

const WIP = () => {

    const navigate = useNavigate()
    const goBack = () => {
        navigate(-1)
    }
    return (
        <>
            Work in progress
        </>
    )
}

export default WIP