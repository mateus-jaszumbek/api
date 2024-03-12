import express from "express";
import { getUsers, addUser, deleteUser, updateUser } from "../controllers/user.js";
import { db } from "../db.js";

const router = express.Router();

router.get("/", getUsers(db)); 
router.put("/:id", updateUser(db));
router.delete("/:id", deleteUser(db));

export default router;
