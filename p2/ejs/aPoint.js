let aPoint = {
    x: 3,
    y: 4,
    distanciaAyB: function  (b) {
        let r = Math.sqrt((b.x - this.x)**2 + (b.y - this.y)**2)
        return r;
    }
    
}

let bPoint = {
    x: -3,
    y: -4,
    distanciaAyB: function  (a) {
        let r = Math.sqrt((this.x - a.x)**2 + (this.y - a.y)**2)
        return r;
    }
}


console.log(aPoint.distanciaAyB(bPoint))
console.log(bPoint.distanciaAyB(aPoint))