import express from "express"
import ReservationsCrtl from "./reservations.controller.js"

const router = express.Router()

router.route("/reservations")
.get(ReservationsCrtl.apiGetReservations)
.post(ReservationsCrtl.apiPostReservation)
.put(ReservationsCrtl.apiUpdateReservation)
.delete(ReservationsCrtl.apiDeleteReservation)

router.route('/reservationCheck').post(ReservationsCrtl.apiCheckReservation)
export default router