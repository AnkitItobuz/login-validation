import express from "express";
import createAccount from "../controllers/registration.js";
import getUser from "../controllers/getUser.js";


const router = express.Router();

// define api routes

router.post("/createAccount", createAccount);
router.get("/getUser", getUser);


export default router;
