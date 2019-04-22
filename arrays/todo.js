const todos = ['Todo 1', 'Todo 2', 'Todo 3', 'Todo 4', 'Todo 5']
console.log(todos)
// Delete the 3rd item
todos.splice(2, 1)
console.log(todos)

// Add a new item onto the end
todos.push('New todo 6')
console.log(todos)
// Remove the first item from the list
todos.shift()
console.log(todos)
console.log(`You have ${todos.length} todos!`)

// die innere Methode heißt callback-function
todos.forEach(function (todo, idx) {
    const num = idx + 1
    console.log(`${num}. ${todo}`)
})

for (let count = 0; count < todos.length; count++) {
    const num = count + 1
    const todo = todos[count]
    console.log(`${num}. ${todo}`)
}

