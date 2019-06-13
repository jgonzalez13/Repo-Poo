function convert() {
    let t = document.getElementById("vol").value
    let o = (t)/3.785
    document.getElementById("out").innerHTML = o.toFixed(2) + " Galones"
}

function convert1() {
    let t = document.getElementById("vol").value
    let o = (t)*3.785
    document.getElementById("out1").innerHTML = o.toFixed(2) + " Litros"
}