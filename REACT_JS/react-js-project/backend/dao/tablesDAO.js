let tables

export default class TablesDAO {
    static async injectDB(conn) {
        if(tables){
            return
        }
        try{
            tables = await conn.db(process.env.ATLAS_DB).collection("tables")
            console.log(`connection established to tables collections`)
        }catch(e){
            console.error(`Unable to establish connection in tablesDOA: ${e}`)
        }
    }

    static async getTables({ 
        filters = null,
        
        } = {}){
          let query
          //find by size
          if (filters) {
            if("size" in filters){
              query = {$text: { $search: filters["size"]}}
            // }else if("cuisine" in filters){
            //   query = {"cuisine": ($eq: filters["cuisine"])}
            // }
          }
        }
      
        //find
        let cursor
      
        try{
          cursor = await tables 
            .find(query)
        }catch(e){
          console.error(`unable to issue find command, ${e}`)
          return {tablesList: [], totalTables: 0}
      
          
        }
        //const displayCursor = cursor.limit(100).skip(100*2)
        const displayCursor = cursor
      
        try{
          const tablesList = await displayCursor.toArray()
         // const userList_1 = await
          cursor.toArray()
          const totalTables = await tables.countDocuments(query)
      
      
          return {tablesList, totalTables}
        }catch(e){
          console.error(`unable to convert cursor to arrya or problem counting users, ${e}`)
      
          return {tablesList:[], totalTables:0}
        }
    }
}