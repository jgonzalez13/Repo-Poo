const out = () => {
    let t = document.getElementById("x").value
    document.getElementById('out').innerHTML = 'Caracteres: ' + t.length + 
        ' Palabras: ' + t.split(' ').length + 
        ' Sentencias: ' + sentencias(t) + 
        ' Parrafos: ' + Parrafos(t)
}


const sentencias = (t) => {
    let count = 0
    t.split('').forEach(element =>  element == '.' || element == ',' || element == ';' || element == '!' ?  count++ : null );
    return count
}

const Parrafos = (t) => t.split('\n').length
