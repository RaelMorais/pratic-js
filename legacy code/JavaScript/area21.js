function area() {
    altura = document.getElementById("altura")
    lado = document.getElementById("lado")
    resultado = document.getElementById("resultado")
    x = altura.value
    y = lado.value
    z = x * y
    resultado.value = z
}

if (result == 1) {
    document.getElementById('res').innerHTML = `Parabéns, você gabaritou as 2 provas, continue assim!`
}
