import mysql from "mysql";

export const db = mysql.createPool({
    host: "monorail.proxy.rlwy.net",
    user: "root",
    password: "TtSTOnumhALIdFrJsHXuzpkgkWBofXUt",
    database: "railway",
    connectionLimit: 10,
    connectTimeout: 20000, // Tempo limite da conexão em milissegundos (aumente conforme necessário)
});
