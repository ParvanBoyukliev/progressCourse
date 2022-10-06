function Car(name, speed){
    // Caching the instance
    let instance = this;

    // Set properties
    this.name = name || 'Moskvich';
    this.speed = speed || 60;

    // rewritten constructor:
    Car = function(){
        return instance;
    };
}

let toyota = new Car('Toyota', 130);
console.log(toyota);