import ReservationsDAO from "../dao/reservationsDAO.js"

export default class ReservationsCrtl{
    static async apiGetReservations(req, res, next){
        let filter = {}
        if(req.query.phoneNum){
            filter.phonenum = req.query.phoneNum
        }
        console.log(`Getting Reservations`)
        const {reservationsList, totalReservations} = await ReservationsDAO.getReservations({
            filter
        })

        let response = {
            reservations: reservationsList,
            totalReservations: totalReservations
        }

        res.json(response)
    }

    static async apiPostReservation(req, res, next){
        try{
            const first_name = req.body.first_name
            const last_name = req.body.last_name
            const phoneNum = req.body.phoneNum
            const email = req.body.email
            const date = req.body.date
            const guestNum = req.body.guestNum
            

            const ReservationResponse =await ReservationsDAO.addReservation(
                first_name,
                last_name,
                phoneNum,
                email,
                date,
                guestNum
            )
            res.json({status: "success"})
        }
        catch(e){
            res.status(500).json({error: e.message})
        }
    }

    static async apiUpdateReservation(req, res, next){
        try{

            const first_name = req.body.first_name
            const last_name = req.body.last_name
            const phoneNum = req.body.phoneNum
            const email = req.body.email
            const date = req.body.date
            const guestNum = req.body.guestNum

            const reservationId = req.body.reservation_id
            const reservationDate = req.body.reservation_date
            

            const reservationResponse = await ReservationsDAO.updateReservation(
                reservationId,
                reservationDate,
                userInfo,
                date
            )

            var {error} = reservationResponse
            if(error){
                res.status(400).json({error})
            }

            if(reviewResponse ===0){
                throw new Error(
                    "unable to update review - reservation may not exist"
                )

            }
            res.json({status: "success"})
        }catch(e){
            res.status(500).json({error: e.message})
        }
    }

    static async apiDeleteReservation(req, res, next){
        try{
            const reservationId = req.query._id
            
            console.log(reservationId)
            const reservationResponse = await ReservationsDAO.deleteReservation(
                reservationId,
                
            )
            res.json({status: "success"})
        }catch(e){
            res.status(500).json({error: e.message})
        }
    }
}

// "first_name":"Test",
//     "last_name":"Test",
//     "phoneNum": "123-456-7890",
//     "email":"test123@email.com",
//     "guestNum":0,
//     "date":"2021-17-13"