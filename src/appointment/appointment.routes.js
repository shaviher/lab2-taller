import { Router } from "express";
import { listarCitas, saveAppointment, cancelAppointment, updateAppointment } from "./appointment.controller.js";
import { createAppointmentValidator, idValidatorAppointment, validarCamposAppointment } from "../middlewares/appointment-validators.js";

const router = Router();

router.post("/createAppointment", createAppointmentValidator, saveAppointment);

router.get("/:uid", listarCitas);

router.patch("/cancelAppointment/:uid", idValidatorAppointment, cancelAppointment);

router.put("/updateAppointment/:uid", validarCamposAppointment,updateAppointment)

export default router;