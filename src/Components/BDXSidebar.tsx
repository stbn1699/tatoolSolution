// @ts-ignore
import "@/styles/styles.css"
import {Link} from "react-router-dom"
import {Sidebar, Menu, MenuItem, sidebarClasses} from 'react-pro-sidebar';
import React from "react";

interface BDXHomeProps {
    activeBtn: number;
}

const BDXSidebar: React.FC<BDXHomeProps> = ({activeBtn}) => {

    const btnMenu = activeBtn === 1 ?
        (<li className="ps-menuitem-root css-pvsiam"><a className="button-3 ps-menu-button">Menu</a></li>)
        : (<MenuItem component={<Link to="/Menu" />}>Menu</MenuItem>);
    const btnNouveauProduit = activeBtn === 2 ?
        (<li className="ps-menuitem-root css-pvsiam"><a className="button-3 ps-menu-button">Nouveau Produit</a></li>)
        :  (<MenuItem component={<Link to="/NouveauProduit" />}>Nouveau Produit</MenuItem>);
    const btnStocks = activeBtn === 3 ?
        (<li className="ps-menuitem-root css-pvsiam"><a className="button-3 ps-menu-button">Stocks</a></li>)
        : (<MenuItem component={<Link to="/Stocks" />}>Stocks</MenuItem>);
    const btnParametres = activeBtn === 4 ?
        (<li className="ps-menuitem-root css-pvsiam"><a className="button-3 ps-menu-button">Parametres</a></li>)
        : (<MenuItem component={<Link to="/Parametres" />}>Paramètres</MenuItem>);

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
                    {btnMenu}
                    {btnNouveauProduit}
                    {btnStocks}
                    {btnParametres}
                    <MenuItem component={<Link to="/" />}>retour</MenuItem>
                </Menu>
            </Sidebar>
        </>
    )

}

export default BDXSidebar
