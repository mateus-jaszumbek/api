import mysql from "mysql";

export const db = mysql.createConnection({
	connectionLimit: 10,
	host: "monorail.proxy.rlwy.net",
	user: "root",
	password: "TtSTOnumhALIdFrJsHXuzpkgkWBofXUt",
	database: "railway",
});