import app from "./server.js"
import mongodb from "mongodb"
import dotenv from "dotenv"
import UsersDAO from "./dao/usersDAO.js"
import TablesDAO from "./dao/tablesDAO.js"
import ReservationsDAO from "./dao/reservationsDAO.js"

dotenv.config()
const MongoClient = mongodb.MongoClient

const port  = process.env.PORT || 8000



MongoClient.connect(process.env.ATLAS_URI_1,
    {
        maxPoolSize:50,
        wtimeoutMS:2500,
        useNewUrlParser:true
    })
    .catch(err=>{
        console.error(err.stack)
        process.exit(1)
    })
    .then(async client =>{
        await UsersDAO.injectDB(client)
        await TablesDAO.injectDB(client)
        await ReservationsDAO.injectDB(client)
        app.listen(port, () => {
            console.log(`listening on port ${port}`)
        })
    })