function teste() {
    delta = document.getElementById("delta")
    a = document.getElementById("a")
    b = document.getElementById("b")
    c = document.getElementById("c")
    x1 = document.getElementById("x1")
    x2 = document.getElementById("x2")
    a = parseFloat(a.value)
    b = parseFloat(b.value)
    c = parseFloat(c.value)
    x1 = parseFloat(x1.value)
    x2 = parseFloat(x2.value)

    d = (b * b) - (4 * a * c)
    delta.value = d
    x1 = (-b + Math.sqrt(d)) / (2 * a)
    x2 = (-b - Math.sqrt(d)) / (2 * a)
    xp.value = x1
    xs.value = x2
}