function convert() {
    let t = document.getElementById("dis").value
    let o = (t)/1.609
    document.getElementById("out").innerHTML = o.toFixed(2) + " millas"
}

function convert1(){
    let t = document.getElementById("dis1").value
    let o = (t)*1.609
    document.getElementById("out1").innerHTML = o.toFixed(2) + " kilometros"
}

