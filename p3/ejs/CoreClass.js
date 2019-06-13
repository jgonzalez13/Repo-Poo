Core = class {
    constructor () {
        this.arr = new Array(3)
    }

    aMethod (){
        return {
            x: 1,
            y: 2
        }
    } 
}

core = new (
    class  {
        constructor(v = 1)  {
            this._v = v
        }

        get v () {
            return this._v
        }

        set v (v) {
            this._v = v
        }
    }
)(3)
