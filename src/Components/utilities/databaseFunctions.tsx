import {QueryError} from "mysql2";
import React, {useEffect, useState} from "react";
import "@/styles/styles.css"
const mysql = require('mysql2');
const fs = require('fs')
import CF from "@/Components/utilities/ConnexionForm";

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
    let productAmount : string;

    function productAmountCalculator({row}: {row: any}) {
        console.log(CF.entrepot)
        if(CF.entrepot === 1){
            console.log("test1")
            return JSON.stringify(row["productAmount01"])
        }else if(CF.entrepot === 2){
            console.log("test2")
            return JSON.stringify(row["productAmount02"])
        }
    }

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
                                    Stock : {JSON.stringify(productAmountCalculator({row: row}))} unit.</div>
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
                                        <p>Stock : {JSON.stringify(productAmountCalculator({row: row}))} unit.</p>
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

interface SubmitNewProductParams {
    image: string;
    nom: any;
    stockLyon: any;
    stockBordeaux: any;
    type: any;
}
export function newProduct({image, nom, stockLyon, stockBordeaux, type}: SubmitNewProductParams){

    const [highestProduct, setHighestProduct] = useState([]);


    const submitNewProduct = ({image, nom, stockLyon, stockBordeaux, type}: { image: string, nom: any, stockLyon : any, stockBordeaux : any, type: any }) => {
        connection.query('INSERT INTO products (productName, productAmount01, productAmount02, productType) VALUES (?,?,?, ?)', [nom, stockLyon, stockBordeaux, type], (err: QueryError | null) => {
            if (err) {
                console.error('Erreur lors de la requête SQL :', err);
                return;
            }
        });

        connection.query('SELECT * FROM products WHERE productID = (SELECT MAX(productID) FROM products);', (err: QueryError | null, results: any) => {
            if (err) {
                console.error('Erreur lors de la requête SQL :', err);
                return;
            }
            setHighestProduct(results);

            let newPath = 'src/img/products/productID' + {highestProduct} + '.png'

            fs.rename(image, newPath, function (err: NodeJS.ErrnoException) {
                if (err) throw err
                console.log('Successfully renamed - AKA moved!')
            })
        });
    }

    return(
        <button className="newproductButton" onClick={() => submitNewProduct({
            image: image,
            nom: nom,
            stockLyon: stockLyon,
            stockBordeaux: stockBordeaux,
            type: type
        },)}>
            Ajouter
        </button>
    )
}