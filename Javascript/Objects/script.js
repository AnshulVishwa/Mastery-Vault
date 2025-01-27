let obj = {
    name : "Anshul",
    age : 20
}

let key = "name"
console.log(obj.key) // Error
console.log(obj[key]) // Correct manner

// Why?
// Actually when we use dot notation in object the name is 
// very necessary i.e. the variable key does not exists
// in the object but when you use [key] it evaluates
// the value of variable and then pass the value to object