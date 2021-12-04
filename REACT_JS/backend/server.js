import express from "express"
import cors from "cors"
import users from "./api/users.route.js"
import tables from "./api/tables.route.js"
import reservations from "./api/reservations.route.js"
import httpCommon from "../../frontend/src/http-common.js"


const app = express();

app.use(cors());
app.use(express.json());
const header ="/api"

app.use(header,users)
app.use("/api",tables)
app.use(header,reservations)
app.use("*", (req,res) => res.status(404).json({ error: "404 not found"}))

export default app

