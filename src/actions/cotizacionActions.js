import { types } from "../types/types";

export const cotizarAlumno = (cotizacion) => ({
    type: types.añadirCOtizacion,
    payload: cotizacion
})