const hasUniqueChars = (word) =>{
    let arr = word.split('')
    for (let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] === arr[j]){
                return false
            }
        }
    }
    return true
}

console.log(hasUniqueChars("big time rush"))

const hasUniqueCharacters = (str) => new Set(str).size === str.length

console.log(hasUniqueCharacters("Big ups"))

arr = ["baby", "babe", "bay", "ba", "bye", "baby"]

console.log(new Set(arr))