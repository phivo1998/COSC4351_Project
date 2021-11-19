import express from "express"
import cors from "cors"
import users from "./api/users.route.js"
import tables from "./api/tables.route.js"
import reservations from "./api/reservations.route.js"


const app = express();

app.use(cors());
app.use(express.json());
const header ="/api/v_2"

app.use(header,users)
app.use("/api/v_2",tables)
app.use(header,reservations)
app.use("*", (req,res) => res.status(404).json({ error: "404 not found"}))

export default app