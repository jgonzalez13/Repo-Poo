const aleatorio = () => {
    for (let i = 1; i <= 10; i++) {
     document.write('<p>' + Math.trunc(Math.random() * 10 + 1) + '</p>')
    }
}
