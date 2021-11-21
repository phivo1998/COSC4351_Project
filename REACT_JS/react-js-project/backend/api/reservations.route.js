import express from "express"
import ReservationsCrtl from "./reservations.controller.js"

const router = express.Router()

router.route("/reservations")
.get(ReservationsCrtl.apiGetReservations)
.post(ReservationsCrtl.apiPostReservation)
.put(ReservationsCrtl.apiUpdateReservation)
.delete(ReservationsCrtl.apiDeleteReservation)

export default router