let users

export default class UsersDAO {
    static async injectDB(conn) {
        if(users){
            return
        }
        try{
            users = await conn.db(process.env.ATLAS_DB).collection("users")
            console.log(`established connections to users`)
        }catch(e){
            console.error(`Unable to establish connection in UsersDOA: ${e}`)
        }
    }

    static async getUsers({ 
        filters = null,
        
        } = {}){
          let query 
          //find usernames
          if (filters) {
            if("username" in filters){
              query = {$text: { $search: filters["username"]}}
            // }else if("cuisine" in filters){
            //   query = {"cuisine": ($eq: filters["cuisine"])}
            // }
            }
          }
        
        //find
        let cursor
      
        try{
          cursor = await users 
          .find(query)
        }catch(e){
          console.error(`unable to issue find command, ${e}`)
          return {usersList: [], totalUsers: 0}
      
          
        }
        //const displayCursor = cursor.limit(100).skip(100*2)
        const displayCursor = cursor
      
        try{
          const usersList = await displayCursor.toArray()
         // const userList_1 = await
          cursor.toArray()
          const totalUsers = await users.countDocuments(query)
      
      
          return {usersList, totalUsers}
        }catch(e){
          console.error(`unable to convert cursor to arrya or problem counting users, ${e}`)
      
          return {userList:[], totalUsers:0}
        }
    }
}