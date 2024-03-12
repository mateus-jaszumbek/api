import express from "express";
import userRoutes from "./routes/users.js";
import cors from "cors";
import mysql from "mysql";

const app = express();

const db = mysql.createPool({
    connectionLimit: 10,
    host: "monorail.proxy.rlwy.net",
    user: "root",
    password: "TtSTOnumhALIdFrJsHXuzpkgkWBofXUt",
    database: "railway",
    port: 39282,
});


app.use("/", userRoutes);

app.listen(39282, () => {
    console.log("Server is running on port 39282");
});
