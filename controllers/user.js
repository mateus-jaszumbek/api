import { db } from "../db.js";

export const getUsers = (db) => async (_, res) => {
    try {
        const q = "SELECT * FROM railway";
        const data = await queryAsync(db, q);
        return res.status(200).json(data);
    } catch (error) {
        console.error("Error fetching users:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};

export const addUser = async (req, res) => {
    try {
        const q =
            "INSERT INTO railway(`nome`, `email`,`fone`,`datanasc`) VALUES(?, ?, ?, ?)";
        const values = [
            req.body.nome,
            req.body.email,
            req.body.fone,
            req.body.datanasc,
        ];

        await queryAsync(q, values);
        return res.status(200).json("Usuario criado com sucesso");
    } catch (error) {
        console.error("Error adding user:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};

export const updateUser = async (req, res) => {
    try {
        const q =
            "UPDATE railway SET `nome` = ?, `email` = ?, `fone` = ?, `datanasc` = ? WHERE `id` = ?";
        const values = [
            req.body.nome,
            req.body.email,
            req.body.fone,
            req.body.datanasc,
        ];

        await queryAsync(q, [...values, req.params.id]);
        return res.status(200).json("Usuario atualizado com sucesso");
    } catch (error) {
        console.error("Error updating user:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};

export const deleteUser = async (req, res) => {
    try {
        const q = "DELETE FROM railway WHERE `id` = ?";
        await queryAsync(q, [req.params.id]);
        return res.status(200).json("Usuario deletado com sucesso");
    } catch (error) {
        console.error("Error deleting user:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};

const queryAsync = (q, values = []) => {
    return new Promise((resolve, reject) => {
        db.query(q, values, (err, data) => {
            if (err) reject(err);
            resolve(data);
        });
    });
};
