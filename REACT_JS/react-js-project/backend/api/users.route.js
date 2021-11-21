import express from "express"
import UsersCrtl from "./users.controller.js"
const router = express.Router()

//router.route("/").get((req,res) => res.send("hellow world"))

router.route("/users").get(UsersCrtl.apiGetUsers)

export default router