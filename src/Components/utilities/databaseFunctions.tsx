import {QueryError} from "mysql2";

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


export function selectTest() {
    databaseConnexion()

    connection.query('SELECT * FROM test', (err: QueryError, results: any) => {
        if (err) {
            console.error('Erreur lors de la requête SQL :', err);
            return;
        }

        console.log(JSON.stringify(results, null, 2));
    });
}