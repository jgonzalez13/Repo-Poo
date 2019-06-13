function convert() {
    let t = document.getElementById("temp").value
    let o = (t * 1.8) + 32
    document.getElementById("out").innerHTML = o.toFixed(2) + " degrees C"
}