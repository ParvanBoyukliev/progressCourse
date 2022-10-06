// Ways to create an object:
// Object literal:
const objLiteral = {};

// by Object.create method:
const objNormal = Object.create({});
console.log(objNormal);
const objNull = Object.create(null);
objNull.name = 'NULL';
console.log(objNull);

// by Object.asign Method
const objAssignMethod = Object.assign({}, {}); 
// (target, source/...source)
console.log(objAssignMethod);

// by Object Constructor
const objObjConstructor = new Object();
objObjConstructor.name = 'Object Constructor'
console.log(objObjConstructor);

// Factory Pattern Example
// Players are functions, but their instances are OBJECTS
// aux constructors

function AudioPlayer(name){
    this.name = name;
    this.play = function() {
        console.log(`${this.name} is playing on the Audio Player!`)
    }
};

// let song = new AudioPlayer;
// console.log(typeof(song));
// console.log(AudioPlayer);
// song();

function VideoPlayer(name){
    this.name = name;
    this.play = () => {
        console.log(`${this.name} is in Video Format!`);
    }
}

function mediaPlayerMaker(name) {
    if(name.match(/\.(?:mp3|ogg|wav|flack)$/i)){
        return new AudioPlayer(name);
    } else if(name.match(/\.(?:mp4|mov|avi|divx)$/i)) {
        return new VideoPlayer(name);
    }
}

// the instances:
let ironMaiden = mediaPlayerMaker('theNumberOfTheBeast.mp3');
let wheelOfTime = mediaPlayerMaker('spineOfTheWorld.wav');
let samDunn = mediaPlayerMaker('metalAHeadbanger\'sJourney.avi');

// Invocation:
ironMaiden.play();

// Encapsulation through FACTORY;
const accountFactory = function(balance){
    //private members
    let _balance = balance;

    //public
    const obj = {
        getBalance: () => _balance,
        setBalance: function(b){
            return _balance = b;
        }
    }

    return obj
}

const objOne = accountFactory(12345);

objOne._balance = 0;
console.log(objOne);
console.log(objOne.getBalance());
console.log(objOne._balance);
console.log(objOne.balance);

objOne.setBalance(67890);
console.log(objOne.getBalance());

// The Factory as mechanism to enforce encapsulation 
// - Getter And Setter Example

const accountFactory = function(balance){
    let _balance = balance;

    // Public
    const object = {
        get balance(){
            // console.log(typeof(balance));
            return _balance
        },
        set balance(b){
            _balance = b
        }
    }

    return object;
}

const obj1 = accountFactory(11111);
console.log(obj1.balance);
obj1.balance = 0;
console.log(obj1.balance);

// Singleton Pattern 
// Caching the singular instance
// We need to make a function that creates an object and prevents further object by being created
// A hobbled object factory function

function Car(name, speed){
    // Check for instances:
    if(typeof Car.instance === 'object'){
        return Car.instance;
    }

    this.name = name || 'Car';
    this.speed = speed || 180;

    // cache the instance
    Car.instance = this;
}

// let random = new Car();
// console.log(random);
let ford = new Car('Ford', 300);
console.log(ford);
let dodge = new Car('Dodge', 250);
console.log(dodge);

// Instance in a closure: Rewritten Constructor

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

// Module pattern;
const myModule = (function(){
    //private
    const config = {
        encoding: 'UTF8',
        maxLength: '2048'
    };

    const logDateTime = function(){
        return new Date();
    }

    // API
    const showConfig = function(){
        for(key in config){
            console.log(`${key}: ${config[key]}`);
        }
    }

    const changeConfig = function(key, value){
        config[key] = value;
        console.log(`Config changed at: ${logDateTime()}`);
    }

    return {
        showConfig,
        changeConfig
    }
})();

myModule.showConfig();
myModule.changeConfig('maxLength', '1024');
myModule.showConfig();