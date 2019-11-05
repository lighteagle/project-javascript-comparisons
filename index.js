// Compare two data
const nameA = 'Alpha'
const nameB = 'Beta'
const nameCompared = nameA === nameB

console.log(nameA)
console.log(nameB)
console.log(nameCompared)

const ageA = 18
const ageB = 25

if (ageA > ageB) {
  console.log(' A older than B')
} else if (ageA < ageB) {
  console.log('A younger than B')
} else {
  console.log('A and B have same age')
}

// Operator Terniary
ageA > ageB ?
  console.log(' A older than B') :
  ageA < ageB ?
  console.log('A younger than B') :
  console.log('A and B have same age')


const personA = {
  name: 'Alpha',
  age: 20
}

const personB = {
  name: 'Betty',
  age: 30
}

switch (personA.age > personB.age) {
  case true:
    console.log(`${personA.name} is older than ${personB.name}`)
    break

  case false:
    console.log(`${personA.name} is younger than ${personB.name}`)
    break
  default:
    console.log(`${personA.name} and ${personB.name} have same age`)
}