import TablesDAO from "../dao/tablesDAO.js"

export default class TablesCrtl{
    static async apiGetTables(req, res, next){
        let filter = {}
        if(req.query.size){
            filter.size = req.query.size
        }
        console.log(`Running get Tables`)
        const {tablesList, totalTables} = await TablesDAO.getTables({
            filter
        })
        console.log(`Returning tables: ${JSON.stringify(tablesList)}`)
        let response = {
            tables: tablesList,
            total_tables:totalTables
        }

        res.json(response)
    }
}