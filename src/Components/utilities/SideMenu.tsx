import "@/styles/main.css"
import {Link, useNavigate} from "react-router-dom";
import {app} from "electron";
// @ts-ignore
import ButtonCustom from "/src/Components/utilities/ButtonCustom";
import connexion from "@/Components/Connexion";
import {useState} from "react";

interface SideMenuProps {
    rights: string;
}

const SideMenu: React.FC<SideMenuProps> = ({rights}) => {

    const navigate = useNavigate()

    return (
        <>

        </>
    );
}

export default SideMenu