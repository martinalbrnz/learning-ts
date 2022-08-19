let myVar = 23 // Implicit assignment	

let anotherVar: string // Explicit assignment

let redundant: string = 'Hello world' // Not needed, avoid

/* Custom types */
type Style = 'bold' | 'italic' | 'underline' // Style could be any of this values

/* Interfaces */
interface Animal {
	name: string,
	legs: number,
	canFly: boolean
}

const animal1: Animal = {
	name: 'Cat',
	legs: 4,
	canFly: false
}

const animal2: Animal = {
	name: 'Bird',
	legs: 2,
	canFly: true
}

// A more flexible interface
type Color = 'red' | 'blue' | 'white' | 'black'

interface Vehicle {
	name: string,
	wheels: number,
	color: Color,
	[key: string]: any // This is optional
}

// Now I can add more fields
const vehicle1: Vehicle = {
	name: 'Car',
	wheels: 4,
	color: 'blue',
	brand: 'bmw'
}

const vehicle2: Vehicle = {
	name: 'Cycle',
	wheels: 2,
	color: 'white'
}

/* Functions */
// Uses numeric params but returns a string
function divide(x: number, y: number): string {
	return (x / y).toString()
}
// console.log(divide('hello', 'world')) // error
// console.log(divide(8, 2)) // 4

// you can return void if the function have no return
const voidfunc = (name: string): void => {
	console.log('My name is ', name)
}

// Functions can be included in interfaces
interface someComponentProps {
	showmodal: boolean,
	changeModalMessage(message: string): void
}
// This is very useful when using React with TS

/* Arrays */
const myArr: Vehicle[] = [{ name: 'Sports car', wheels: 4, color: "red" }, { name: 'Rosetta', wheels: 3, color: 'blue', brand: 'vmw' }]
// const anotherArr: Vehicle[] = [{ name: 'Skate', wheels: 4 }] // missing 'color' in type