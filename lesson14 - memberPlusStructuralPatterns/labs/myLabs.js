// Public Members
let event = {
    name: 'Iron Maiden Concert',
    date: '22.07.2022',
    time: '19:30',
    place: 'Vasil Levski Stadium'
}

console.log(`Event: ${event.name}`);

// Private Members
let privateEvent = {
    //public:
    name: 'Iron Maiden Concert',
    date: '22.07.2022',
    time: '19:30',
    place: 'Vasil Levski Stadium',
    timestamp: (function(){
        // private
        let timeStamp = new Date();
        return timeStamp;
    })()
}

setTimeout(() => {
    console.log('Event timestamp: ' + privateEvent.timestamp + 
                '\n' + 'reported on ' + Date());
}, 3000)

// NB: 'this' properties are public

let Event = function () {
    // public
    this.name = 'Mariinsky Theatre Orchestra with Gergiev';
    this.date = '22.05.2017';
    this.time = '19.30';
    this.place = 'Bulgaria Hall';
}

var event = new Event;
console.log(event);

