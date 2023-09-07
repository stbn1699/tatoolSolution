import {QueryError} from "mysql2";
import React, {useEffect, useState} from "react";
import "@/styles/styles.css"

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


export function selectProducts({viewListProp}: { viewListProp: boolean }) {

    let cardStyle = <div></div>
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

    if(viewListProp){
        cardStyle =
            <div>
                {productsData.map((row, index) => (
                    <div className="productCard">
                        <img className="productPic" src={`src/img/products/productID${JSON.stringify(row["productID"])}.png`} alt="productPic"/>
                        <div className="productInfosDiv">
                            <div className="productInfos">Nom : {JSON.stringify(row["productName"])} | Type : {JSON.stringify(row["productType"])} | Stock : {JSON.stringify(row["productAmount"])} unitées</div>
                        </div>
                        <div className="plusBox">
                            <img src="src/img/plusSign.svg" alt="+"/>
                        </div>
                    </div>
                ))}
            </div>
    }else{
        cardStyle = <div>lolilol</div>
    }

    return cardStyle
}