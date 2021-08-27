import { types } from "../types/types";

const valoresIniciales = {
    info: {},
    costo: 0
}

export const cotizacionReducers = (state = valoresIniciales, action) => {
    switch (action.type) {
        case types.añadirCOtizacion:
            return {
                ...state,
                info: action.payload.info,
                costo: action.payload.costo
            }
            
          
    
        default:
            return state;
    }
}