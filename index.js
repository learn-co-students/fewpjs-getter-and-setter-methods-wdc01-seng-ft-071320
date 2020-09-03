// Add your Circle class here
class Circle {
    constructor(radius){
        this.radius = radius
    }

    get diameter() {
        return ( 2 * this.radius)
    }

    get circumference(){
        return (this.diameter * Math.PI)
    }

    get area(){
        return (Math.PI * this.radius ** 2)
    }

    set diameter(number){
        this.radius = number/2
    }
    
    set circumference(circum){
        this.radius = circum/(2*Math.PI)
    }

    set area(area){
        this.radius = Math.sqrt(area/Math.PI)
    }
}