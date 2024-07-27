function area() {
    height = document.getElementById("height")
    side = document.getElementById("side")
    result = document.getElementById("result")
    x = height.value
    y = side.value
    z = x * y
    result.value = z
}

if (result == 1) {
    document.getElementById('res').innerHTML = `Congratulations, you are boss!`
}
