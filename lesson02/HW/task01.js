let person = {
    firstName: 'Pancho',
    lastName: 'Sansa',
    age: 36,
    married: true
};

// let keyList = Object.keys(person);
// let valueList = Object.values(person);
// let entriesList = Object.entries(person);

// console.log(keyList);
// console.log(valueList);
// console.log(entriesList);

function isObject(object){
    let type = typeof(object);
    if(type === 'function') {
        return false;
    } else if(type === 'object') {
        return true;
    }
};

console.log(isObject(person));