import { Point } from './Point.js'

class Circle {
    constructor (point, radio) {

        if (point instanceof Point) {
            this.point = point
            this.radio = radio
        }
    }

    toString() {
        return "point: " + this.point.x + " , " + this.point.y + " Radio: " + this.radio
    }
}

export { Circle, Point }