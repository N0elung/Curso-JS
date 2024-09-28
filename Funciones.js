finanzas = 1000;
function tocarPeluche(coste=100) {
    console.log(`>Tocar el peluche cuesta ${coste}$`)
    finanzas = finanzas - coste
    return finanzas
}

tocarPeluche();