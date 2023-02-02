const greetingMachine = (name,greeting) => {
    return greeting(name)
}

const hi = (name) => {
    return `Hi ${name}!`
}
const yo = (name) => {
    return `Yo, ${name}, what's up?`
}
const nice = (name) => {
    return `Nice yo meet ya, ${name}!`
}

console.log(greetingMachine("Parker", yo))
console.log(greetingMachine("Lukas", yo))
console.log(greetingMachine(greetingMachine("Lukas", yo), yo))

console.log(typeof greetingMachine)
console.log(typeof yo)
console.log(typeof greetingMachine("Carl", yo))

let people = {
    titles: ["Mr.", "Mrs.", "Dr.", "President", "Supreme Leader"],
    firstNames: ["Lukas", "Cameron", "Parker", "Kyle", "Carl"],
    lastNames : ["Nessi", "Grider", "Sheehan", "Borcik", "Redd"]
}


// This is bonkers
// keys can be function
// keys can be anything
let greetings = {
    hi: (title, firstName, lastName) => {
        return `Hi, ${title} ${firstName} ${lastName}!`
    },
    yo: (title, firstName, lastName) => {
        return `Yo, ${title} ${firstName} ${lastName}, what's up?` 
    },
    nice: (title, firstName, lastName) => {
        return `Nice yo meet ya, ${title} ${firstName} ${lastName}!`
    }
}

//console.log(greetings.hi("Parker"))

const getRandom = arr =>  {
    let randInt = Math.floor(Math.random() * arr.length)
    return arr[randInt]
}

const getRandomKey = obj =>{
    // how many keys in object
    let count = 0
    for(let key in obj){
        count++
    }


    // create random integer based on keys counted and calls object at key number
    let randInt = Math.ceil(Math.random() * count)
    let currKey = 1
    for(let key in obj){
        if(currKey === randInt){
            return obj[key]
        }
        currKey++
    }
}

const greetingMachineTwo = (personObj,functionObj) =>{
    const {titles, firstNames, lastNames} = personObj
    // grab random title from people.titles
    let title = getRandom(titles)
    // grab random firstName from people.titles
    let firstName = getRandom(firstNames)
    // grab random lastName from people.titles
    let lastName = getRandom(lastNames)
    // grab random greeting from greetings
    let greeting = getRandomKey(functionObj)

    return greeting(title,firstName,lastName)
}

console.log(greetingMachineTwo(people,greetings))

