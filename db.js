import mysql from "mysql";

export const db = mysql.createPool({
    host: "monorail.proxy.rlwy.net",
    user: "root",
    password: "TtSTOnumhALIdFrJsHXuzpkgkWBofXUt",
    database: "railway",
    connectionLimit: 10,
    connectTimeout: 20000, // Tempo limite da conex�o em milissegundos (aumente conforme necess�rio)
});
