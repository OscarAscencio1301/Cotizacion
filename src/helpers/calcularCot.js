export const calculoSemestre = (semestre) => {
    let precio;
    switch (semestre) {
        case 'primero':
            precio = 1800;
            break;
        case 'segundo':
            precio = 2200;
            break;
        case 'tercero':
            precio = 2400;
            break;
        case 'cuarto':
            precio = 2700;
            break;
        case 'quinto':
            precio = 3100;
            break;
        case 'sexto':
            precio = 3400;
            break;

        default:
            break;
    }
    return precio
}

export const calculoIngles = (ingles) => {
    
    return (ingles === 'agregar') ? 700 : 0
}


export const calculoDeporte = (deporte) => {
    let precio;
    switch (deporte) {
        case 'futbol':
            precio = 300;
            break;
        case 'basquetbol':
            precio = 500;
            break;
        case 'besibol':
            precio = 200;
            break;
        case 'lucha':
            precio = 600;
            break;
        default:
            break;
    }
    return precio
}


export const calculoPromedio = (promedio) => {
    
    return (promedio === 'Excelnte') ? -500 : 0
}

