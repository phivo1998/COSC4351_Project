import mongodb from "mongodb"

const ObjectId = mongodb.ObjectId

let reservations


export default class ReservationsDAO{
    static async injectDB(conn){
        if(reservations){
            return
        }
        try{
            reservations = await conn.db(process.env.ATLAS_DB).collection("Reservations")
            console.log(`connection established to Reservations collection`)
        }catch(e){
            console.error(`Unable to establish connection hands in ReservationsDAO: ${e}`)
        }

    }

    static async getReservation(date) {
        try{

            const reserve = await reservations.findOne({date:date})
            if (reserve != null) {
                return true;
            } else {
                return false;
            }
            console.log(reserve);
        }
        catch(e) {
            console.error(`Unable to establish connection hands in ReservationsDAO: ${e}`)
        }
    }

    static async getReservations({ 
        filters = null,
        
        } = {}){
          let query 
          //filter through list of reservations
          if (filters) {
            if("phoneNumber" in filters){
              query = {$text: { $search: filters["phoneNumber"]}}
            }
            if("email" in filters){
                query = {email: filters["email"]}
              }
            // }else if("cuisine" in filters){
            //   query = {"cuisine": ($eq: filters["cuisine"])}
            // }
          }
        
        //find
        let cursor
      
        try{
          cursor = await reservations 
          .find(query)
        }catch(e){
          console.error(`unable to issue find command, ${e}`)
          return {reservationsList: [], totalReservations: 0}
      
          
        }
        //const displayCursor = cursor.limit(100).skip(100*2)
        const displayCursor = cursor
        
      
        try{
          const reservationsList = await displayCursor.toArray()
          console.log(`Reservations returned: ${JSON.stringify(reservationsList)}`)
         // const userList_1 = await
          const totalReservations = await reservations.countDocuments(query)
        
      
          return {reservationsList, totalReservations}
        }catch(e){
          console.error(`unable to convert cursor to arrya or problem counting users, ${e}`)
      
          return {reservationsList:[], totalReservations:0}
        }
    }

    static async addReservation(first_name, last_name, phoneNumber,
        email,
        date,
        guestNum){

        try{
            //collection input key values
            const reservationDoc = {
                first_name: first_name,
                last_name: last_name,
                phoneNumber: phoneNumber,
                email: email,
                date: new Date(date),
                guestNum: guestNum
            }

            return await reservations.insertOne(reservationDoc)
        }catch(e){
            console.error(`Unable to post reservation: ${e}`)
            return {error: e}
        }
    }

    static async updateReservation(reservationId, userId, test, date){
        try{
            const updateReservationDoc = await reservations.updateOne(
                {userId: userId, _id: ObjectId(reservationId)},
                {$set: {test:test, date:date}}
            )
            return updateReservationDoc
        }catch(e){
            console. error(`Unable to update reservation: ${e}`)
            return {error :e}
        }
    }

    static async deleteReservation(reservationId, userId){
        try{
            const deleteReservation = await reservations.deleteOne({
                _id: ObjectId(reservationId),
            })
            return deleteReservation
        }catch(e){
            console.error(`Unable to delete reservation: ${e}`)
            return {error: e}
        }
    }
}