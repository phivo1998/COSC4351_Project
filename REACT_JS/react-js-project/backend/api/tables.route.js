import express from "express"
import TablesCrtl from "./tables.controller.js"
const router = express.Router()

//router.route("/").get((req,res) => res.send("hellow world"))

router.route("/tables").get(TablesCrtl.apiGetTables)

export default router