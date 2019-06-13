function convert() {
    let t = document.getElementById("temp").value
    let o = (t-273.15)
    document.getElementById("out").innerHTML = o.toFixed(2) + " grados Celsius"
}

function convert1() {
    let t = document.getElementById("temp1").value
    let o = (parseInt(t)) +273.15
    document.getElementById("out1").innerHTML = o.toFixed(2) + " grados Kelvin"
}

