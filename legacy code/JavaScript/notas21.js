function calcular(nota1, nota2) {

    nota1 = Number.parseFloat(document.getElementById('nota1').value)
    nota2 = Number.parseFloat(document.getElementById('nota2').value)

    var result = nota1 + nota2

    if (result === 20) {
        document.getElementById('res').innerHTML = `Parabéns, você gabaritou as 2 provas, continue assim!`
    } else if (result > 10) {
        document.getElementById('res').innerHTML = `Você está com a média acima de 10, continue assim!`
    } else if (result >= 6) {
        document.getElementById('res').innerHTML = `Parabéns, a sua média é ${result} e você não está de recuperação`
    } else if (result < 6) {
        document.getElementById('res').innerHTML = `A sua média é ${result}, está abaixo da média, estude mais `
    } else {
        document.getElementById('res').innerHTML = `Insira um numero`
    }
}