let anArray = [1,2,3,4] 

class Vector {

    constructor (data) {
        this.data = data 
    }

    initialize (x, n) {
        this.data = []
        for (let i= 0; i < n; i++) {
            this.data.push(x)
        }
        console.log(this.data)
    }

    min () {
        let t = this.data[0]
        this.data.forEach(element => {
            if (t > element) {
                t = element
            } 
        });
        console.log(t)
    }

    max () {
        let t = this.data[0]
        this.data.forEach( element => {
            if ( t < element ) {
                t = element
            } 
        });
        console.log(t)
    }

    sum (){
        let t =0
        this.data.forEach(element => t+=element)
        console.log(t)
        return t
    }

    avg () {
       console.log(this.sum() / this.data.length)
    }
    vectorize (...e) {
        this.data = []
        let r = Math.abs(( e[0] - e[1] ) /e[2] ) 
        let count = 0
        for ( let i = 0; i < e[2]; i++ ) {
            count = count + r;
            this.data.push(count)
        }
        console.log(this.data)
    }

    getData() {
        return this.data
    }
}
let p = new Vector(anArray)


p.vectorize(.3, 0.6, 300)

