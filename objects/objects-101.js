let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

console.log(`${myBook.title} by ${myBook.author}`)

myBook.title = 'Animal Farm'

console.log(`${myBook.title} by ${myBook.author}`)

// Challenge area

// name

let me = {
    name: 'Peter Arnold',
    age: 22,
    location: 'Leipzig'
}

console.log(`${me.name} is ${me.age} and lives in ${me.location}.`)

me.age = me.age + 1

console.log(`${me.name} is ${me.age} and lives in ${me.location}.`)