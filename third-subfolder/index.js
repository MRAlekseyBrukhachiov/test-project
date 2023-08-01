function myFn(a, b) {
    const c = 5;
    console.log(a+b+c)
}

const newPost = (post, addedAt = Date()) => ({
    ...post, 
    addedAt
})

const firstPost = {
    id: 1,
    author: 'Aleksey'
}

const fnWithError = () => {
    throw Error('Some error')
}

try {
    fnWithError()
} catch (error) {
    console.error(error)
    console.log(error.message)
}

console.log('Continue...')

const myArray = [1, 2, 3]
console.log(myArray)

const newArray = myArray.map(el => el * 3)

const userProfile = {
    name: 'Aleksey',
    commentsQty: 23,
    hasSignedAgreement: false
}

const { name, commentsQty } = userProfile

const fruits = ['Apple', 'Banana', 'Cherry']
const [fruitOne, fruitTwo] = fruits

const userInfo = ({ name, commentsQty }) => {
    if (!commentsQty) {
        return `User ${name} has no comments`
    }
    return `User ${name} has ${commentsQty} comments`
}

class Comment {
    constructor(text) {
        this.text = text
        this.votesQty = 0
    }

    upvote() {
        this.votesQty += 1
    }

    static mergeComments(first, second) {
        return `${first} ${second}`
    }
}

Comment.prototype.constructor === Comment // true
console.log(Comment.prototype)

const firstComment = new Comment('First Comment')

class NumbersArray extends Array {
    sum() {
        return this.reduce((el, acc) => acc += el, 0)
    }
}

const myArray2 = new NumbersArray(2, 5, 7)
console.log(myArray2)
console.log(myArray2.sum())

Comment.prototype === firstComment.__proto__ // true
console.log(Comment.prototype === firstComment.__proto__)

//console.log(fruitOne)
//console.log(fruitTwo)
//console.log(userInfo(userProfile))

fetch('https://jsonplaceholder.typicode.com/todos')
.then(response => response.json())
.then(json => console.log(json))
.catch(error => console.log(error.message))

const getData = (url) => 
    new Promise((resolve, reject) => {
        fetch(url)
            .then(response => response.json())
            .then(json => resolve(json))
            .catch(error => reject(error))
})
getData('https://jsonplaceholder.typicode.com/todos/55')
    .then(data => console.log(data))
    .catch(error => console.log(error.message))

const getData2 = async (url) => { // getData with async/await syntax
    const res = await fetch(url)
    const json = await res.json()
    return json
}
const url = 'https://jsonplaceholder.typicode.com/todos/55'
try {
    const data = await getData2(url)
    console.log(data)
} catch (error) {
    console.log(error.message)
}

const asyncFn = async () => {
    return 'Success!'
}

const asyncFn2 = async () => {
    throw new Error('There was an error!')
}

asyncFn2()
    .then(value => console.log(value))
    .catch(error => console.log(error.message))

asyncFn().then(value => console.log(value))

const timerPromise = () =>
    new Promise((resolve, reject) => 
        setTimeout(() => resolve(), 2000))

const asyncFn3 = async () => {
    console.log('Timer starts')
    const startTime = performance.now()
    await timerPromise()
    const endTime = performance.now()
    console.log('Timer ended', endTime - startTime)
}

asyncFn3()