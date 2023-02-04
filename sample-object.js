var obj = {
    name: 'shihan',
    id: 2078919,
    website: 4,
    age: 30
}
/**
 *  Get Object Key + Value
 */
console.log(obj);

// Get Object Keys
console.log(Object.keys(obj));

// Get Object Values
console.log(Object.values(obj));

// Get Object Value with . notaion
console.log(obj.name);

// Get Object Value with key name
console.log(obj['website']);

// Get Object Value [3rd Method]
var x = obj['age'];
console.log(x);

/**
 *  Set Object Key + Value
 */

// You can set object value like array
obj['age'] = 35;
console.log(obj);