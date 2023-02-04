var obj = {
    name: 'shihan',
    id: 2078919,
    website: 4,
    age: 30
}
var keys = Object.keys(obj);
var values = Object.values(obj);
console.log(keys, values);

for (var i = 0; i < keys.length; i++) {
    console.log(keys[i], values[i]);
}

// for in loop
for (var propertyName in obj) {
    var propertyValue = obj[propertyName]
    console.log(propertyName, propertyValue);
}