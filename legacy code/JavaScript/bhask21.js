function teste() {
    var a = parseFloat(document.getElementById("a").value);
    var b = parseFloat(document.getElementById("b").value);
    var c = parseFloat(document.getElementById("c").value);

    var delta = b * b - (4 * a * c);

    if (delta < 0) {
        document.getElementById('res').innerHTML = "No real roots (Delta < 0)";
        document.getElementById('x1').innerHTML = "";
        document.getElementById('x2').innerHTML = "";
    } else if (delta > 0) {
        var x1 = (-b + Math.sqrt(delta)) / (2 * a);
        var x2 = (-b - Math.sqrt(delta)) / (2 * a);
        document.getElementById('res').innerHTML = "There are two roots:";
        document.getElementById('x1').innerHTML = `x1 = ${x1}`;
        document.getElementById('x2').innerHTML = `x2 = ${x2}`;
    } else {
        var x = -b / (2 * a);
        document.getElementById('res').innerHTML = `There is one root: x = ${x}`;
        document.getElementById('x1').innerHTML = "";
        document.getElementById('x2').innerHTML = "";
    }
}