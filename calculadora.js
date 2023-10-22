function insert(num) {
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}

function clean() {
    document.getElementById('resultado').innerHTML = "";
}

function back() {
    var resultado = document.getElementById("resultado");
    resultado.textContent = resultado.textContent.slice(0, -1);
}

function calcular() {
    var resultado = document.getElementById('resultado').innerHTML;

    try {
        var resultadoCalculado = evalCalc(resultado);
        document.getElementById('resultado').innerHTML = resultadoCalculado;
    } catch (error) {
        document.getElementById('resultado').innerHTML = "Erro";
    }
}


function evalCalc(expression) {
    try {
        // Substituir "x" por "*"
        expression = expression.replace(/x/g, '*');
        expression = expression.replace(/÷/g, '/');

        return Function('return (' + expression + ')')();
    } catch (error) {
        return "Erro";
    }
}