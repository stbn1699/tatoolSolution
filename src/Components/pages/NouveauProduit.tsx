import BDXSidebar from "@/Components/TatoolSidebar";
import {newProduct} from "@/Components/utilities/databaseFunctions";
import "@/styles/styles.css"
import React, { useState } from 'react';



function NouveauProduit() {

    const [image, setImage] = useState<File>(null); // Type 'File' pour l'image
    const [nom, setNom] = useState<string>(''); // Type 'string' pour le nom
    const [stockLyon, setStockLyon] = useState<number | string>(''); // Type 'number' pour le stock
    const [stockBordeaux, setStockBordeaux] = useState<number | string>(''); // Type 'number' pour le stock
    const [type, setType] = useState<string>(''); // Type 'string' pour le type

    return(
        <>
            <div style={{display: 'flex'}}>
                <div className="sidebarWidth">
                    <BDXSidebar activeBtn={2}/>
                </div>
                <div className="contentWidth">
                    <div className="newproductCard">
                        <div className="newproductContent">
                            <div>
                                <div className="newproductField">
                                    <div className="newproductInputText">image produit : </div>
                                    <input id="image" type="file" accept="image/png" onChange={(e) => setImage(e.target.files ? e.target.files[0] : null)}/>
                                </div>
                                <div className="newproductField">
                                    <div className="newproductInputText">nom produit : </div>
                                    <input id="nom" type="text" value={nom} onChange={(e) => setNom(e.target.value)}/>
                                </div>
                                <div className="newproductField">
                                    <div className="newproductInputText">Stock Lyon : </div>
                                    <input id="Stock" type="number" value={stockLyon} onChange={(e) => setStockLyon(e.target.value)}/>
                                </div>
                                <div className="newproductField">
                                    <div className="newproductInputText">Stock Bordeaux : </div>
                                    <input id="Stock" type="number" value={stockBordeaux} onChange={(e) => setStockBordeaux(e.target.value)}/>
                                </div>
                                <div className="newproductField">
                                    <div className="newproductInputText">type : </div>
                                    <select id="type" value={type} onChange={(e) => setType(e.target.value)}>
                                        <option value="" disabled hidden>-- Choisissez Un Type --</option>
                                        <option value="Outil">Outil</option>
                                        <option value="Machine">Machine</option>
                                        <option value="Matiere">Matiere</option>
                                        <option value="Quincaillerie">Quincaillerie</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div>
                            {newProduct({image, nom, stockLyon, stockBordeaux, type})}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NouveauProduit