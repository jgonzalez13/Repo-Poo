function convert() {
    let t = document.getElementById("mon").value
    let o = (t*1.12)
    document.getElementById("out").innerHTML = o.toFixed(2) + " Dolares"
}

function convert1() {
    let t = document.getElementById("mon").value
    let o = (t/1.12)
    document.getElementById("out1").innerHTML = o.toFixed(2) + " Euros"
}