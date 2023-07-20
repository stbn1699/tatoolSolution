// @ts-ignore
import ButtonCustom from "/src/Components/utilities/ButtonCustom";
import "@/styles/styles.css"
import React, {useId, useState} from 'react'
import {BrowserRouter, Link, Route, Routes, useNavigate} from "react-router-dom"
import ConnexionForm from "@/Components/utilities/ConnexionForm";
import Home from "@/Components/Home";
import {Sidebar, Menu, MenuItem, SubMenu, sidebarClasses} from 'react-pro-sidebar';


function BDXHome() {

    const navigate = useNavigate()
    const goBack = () => {
        navigate(-1)
    }

    return (
        <>
            <Sidebar className="sidebarBorderFix" rootStyles={{
                [`.${sidebarClasses.container}`]: {
                    backgroundColor: '#2e2e2e',
                    borderRadius: '1.4rem',
                    height: '26rem',
                    width: '15rem',
                    margin: '2rem',
                    boxShadow: '-4px -4px 9px #373737, 4px 4px 9px #1F1F1F',
                    paddingTop: '5rem'
                },
            }}>
                <Menu menuItemStyles={{
                        button: {
                            display: 'flex',
                            alignContent: 'center',
                            width: '13rem',
                            height: '3rem',
                            margin: '1rem auto',
                            background: '#2a2936',
                            boxShadow: '-4px -4px 9px #373737, 4px 4px 9px #1F1F1F',
                            borderRadius: '50px',
                            color: '#FF8E0A',
                            border: 'none',
                            fontFamily: '\'Patua One\', serif',
                            fontsize: '1.3rem',
                            transitionDuration: '0.2s',
                            ":hover": {
                                transitionDuration: '0.2s',
                                background: '#333248',
                                color: '#a05601'
                            },
                            ":active": {
                                transitionDuration: '0.01s',
                                boxShadow: '-4px -4px 9px #373737, 4px 4px 9px #1F1F1F, 0 0 9px #1F1F1F inset',
                            }
                        },
                    }}>
                    <MenuItem component={<Link to="/Wip" />}>work in progress</MenuItem>
                    <MenuItem component={<Link to="/Wip" />}>work in progress</MenuItem>
                    <MenuItem component={<Link to="/Wip" />}>work in progress</MenuItem>
                    <MenuItem component={<Link to="/Wip" />}>work in progress</MenuItem>
                    <MenuItem component={<Link to="/" />}>retour</MenuItem>
                </Menu>
            </Sidebar>
        </>
    )

}

export default BDXHome
