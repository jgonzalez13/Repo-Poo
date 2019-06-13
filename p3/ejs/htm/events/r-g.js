function convert() {
    let t = document.getElementById("temp").value
    let o = (t*180)/3.14159265359
    document.getElementById("out").innerHTML = o.toFixed(2) + " Grados"
}

function convert1() {
    let t = document.getElementById("temp1").value
    let o = (t*3.14159265359)/180
    document.getElementById("out1").innerHTML = o.toFixed(2) + " Radianes"
}