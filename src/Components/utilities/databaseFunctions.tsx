import {QueryError} from "mysql2";
import React, {useEffect, useState} from "react";
import "@/styles/styles.css"
import Stocks from "@/Components/pages/Stocks";

const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: "localhost",
    user: "Logiciel",
    password: "Tatool123",
    database: "Tatool"
});

export function databaseConnexion() {
    connection.connect((err: QueryError) => {
        if (err) {
            console.error('Erreur de connexion à la base de données :', err);
            return;
        }
        console.log('Connecté à la base de données MySQL');
    });
}


export function selectProducts() {
    const [viewList, setViewList] = useState(false);
    const [productsData, setProductsData] = useState([]);

    useEffect(() => {
        connection.query('SELECT * FROM products', (err: QueryError | null, results: any) => {
            if (err) {
                console.error('Erreur lors de la requête SQL :', err);
                return;
            }
            setProductsData(results);
        });
    }, []);

    function changeView() {
        setViewList(!viewList);
    }

    return (
        <div>
            <div className="changeViewBox">
                <button className="changeViewButton" onClick={changeView}>Change View</button>
            </div>
            {viewList ? (
                <div>
                    {productsData.map((row, index) => (
                        <div className="productCard">
                            <img className="productPic" src={`src/img/products/productID${JSON.stringify(row["productID"])}.png`} alt="productPic"/>
                            <div className="productInfosDiv">
                                <div className="productInfos">
                                    Nom : {JSON.stringify(row["productName"])} |
                                    Type : {JSON.stringify(row["productType"])} |
                                    Stock : {JSON.stringify(row["productAmount"])} unitées</div>
                            </div>
                            <div className="plusBox">
                                <img src="src/img/plusSign.svg" alt="+"/>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div>
                    <div className="allCards">
                        {productsData.map((row, index) => (
                            <div className="card2">
                                <img className="productPic2" src={`src/img/products/productID${JSON.stringify(row["productID"])}.png`} alt="productPic"/>
                                <div className="productInfosDiv2">
                                    <div className="productInfos2">
                                        <p>Nom : {JSON.stringify(row["productName"])}</p>
                                        <p>Type : {JSON.stringify(row["productType"])}</p>
                                        <p>Stock : {JSON.stringify(row["productAmount"])} unitées</p>
                                    </div>
                                </div>
                                <div className="plusBox2">
                                    <img src="src/img/plusSign.svg" alt="+"/>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
