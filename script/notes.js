function calcular(nota1, nota2) {

    nota1 = Number.parseFloat(document.getElementById('nota1').value)
    nota2 = Number.parseFloat(document.getElementById('nota2').value)
    nota3 = Number.parseFloat(document.getElementById('nota3').value)

    var result = (nota1 + nota2 + nota3) /3

    if (result === 10) {
        document.getElementById('res').innerHTML = `Congratulations your are the is the your note: ${result}`
    } else if (result > 8) {
        document.getElementById('res').innerHTML = `Great your note is ${result}!`
    } else if (result >= 6) {
        document.getElementById('res').innerHTML = `Parabéns, a sua média é ${result} e você não está de recuperação`
    } else if (result < 6) {
        document.getElementById('res').innerHTML = `A sua média é ${result}, está abaixo da média, estude mais `
    } else {
        document.getElementById('res').innerHTML = `Insira um numero`
    }
}