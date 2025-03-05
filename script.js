function converter() {
    let valor = parseFloat(document.getElementById('valor').value);
    let tipo = document.getElementById('tipo').value;
    let resultado = 0;

    if (isNaN(valor)) {
        document.getElementById('resultado').innerText = "Por favor, insira um valor válido.";
        return;
    }

    switch (tipo) {
        case "km-miles": resultado = valor * 0.621371; break;
        case "miles-km": resultado = valor / 0.621371; break;
        case "kg-lb": resultado = valor * 2.20462; break;
        case "lb-kg": resultado = valor / 2.20462; break;
        case "c-f": resultado = (valor * 9/5) + 32; break;
        case "f-c": resultado = (valor - 32) * 5/9; break;
        case "m-ft": resultado = valor * 3.28084; break;
        case "ft-m": resultado = valor / 3.28084; break;
        case "l-gal": resultado = valor * 0.264172; break; // Litros para Galões
        case "gal-l": resultado = valor / 0.264172; break; // Galões para Litros
        default: resultado = "Erro na conversão";
    }

    document.getElementById('resultado').innerText = "Resultado: " + resultado.toFixed(2);
}
