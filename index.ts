let myVar = 23 // Implicit assignment	

let anotherVar: string // Explicit assignment

let redundant: string = 'Hello world' // Not needed, avoid

/* Custom types */
// Used to declare data types
type Style = 'bold' | 'italic' | 'underline' // Style could be any of this values
type ComplexData = {
	address: string
	city?: string
}
// Note the use of ? for optional properties

const dataType: ComplexData = {
	address: 'Wallaby St. 42'
}

// We can set a type to readonly (or a specific field)
type JustReading = {
	readonly surname: 'Alerce'
	readonly address: 'Alameda St 22'
}

// Mapped types
// This is a mapped type, is used to convert one type into another
type JustReadingAgain = Readonly<{
	id: number
	name: string
}>

// Also We can convert an existent type
type ConvertedToReadonly = Readonly<ComplexData>

// There are other built-in mapped types
// Options flag
type OptionsFlag<Type> = {
	[Property in keyof Type]: boolean
}

type FeatureFlags = {
	darkMode: () => void
	newProfile: () => void
}

type FeatureOptions = OptionsFlag<FeatureFlags>
// In this case OptionsFlag take the properties from FeatureFlags and transform it in boolean
/* Equivalent expression
type FeatureFlags = {
	darkMode: () => boolean;
	newProfile: () => boolean;
}
*/

// There is a way to add or remove the readonly modifier
type LockedType = {
	readonly description: string
	readonly isActive: boolean
}

type CreateMutable<Type> = {
	-readonly  [Property in keyof Type]: Type[Property]
}

type UnlockedType = CreateMutable<LockedType>
/* Equivalent
type UnlockedType = {
  description: string;
  isActive: boolean;
}
*/

type CreateLocked<Type> = {
	+readonly [Property in keyof Type]: Type[Property]
}

type AnotherLockedType = CreateLocked<UnlockedType>
/* Equivalent
type AnotherLockedType = {
  readonly description: string;
  readonly isActive: boolean;
}
*/

// It works with optional parameters too
type NonOptionals = {
	name: string
	hasCar: boolean
}

type CreateOptionals<Type> = {
	[Property in keyof Type]+?: Type[Property]
}

type OptionalsType = CreateOptionals<NonOptionals>
/* Equivalent
type OptionalsType = {
  name?: string;
  hasCar?: boolean;
}
*/

type CreateNonOptionals<Type> = {
	[Property in keyof Type]-?: Type[Property]
}

type NonOptionalsType = CreateNonOptionals<OptionalsType>
/* Equivalent
type NonOptionalsType = {
  name: string;
  hasCar: boolean;
}
*/

/* Interfaces */
// They are a way to define entities, to use with a derived class
// It could contain methods, properties and events to describe data shapes
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

type Vehicle = {
	name: string
	wheels: number
	color: Color
	[key: string]: any // This is optional
}

// Now I can add more fields
const vehicle1: Vehicle = {
	name: 'Car',
	wheels: 4,
	color: 'blue',
	brand: 'bmw'
}

// Or not...
const vehicle2: Vehicle = {
	name: 'Cycle',
	wheels: 2,
	color: 'white'
}

/* Arrays */
// Adding [] at the end of a type/interface, specifies it as an array/list
const myArr: Vehicle[] = [{ name: 'Sports car', wheels: 4, color: "red" }, { name: 'Rosetta', wheels: 3, color: 'blue', brand: 'vmw' }]

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

// Functions can be included in types
type someComponentProps = {
	showmodal: boolean
	changeModalMessage(message: string): void
}
// This is very useful when using React with TS
// const anotherArr: Vehicle[] = [{ name: 'Skate', wheels: 4 }] // missing 'color' in type

// We can use flags in functions to!
// For example, a function to do somthing with an array but without modifying the original
const iAmBlueDabadeeDabada = (anArray: readonly Vehicle[]): Vehicle[] => {
	// anArray.push(/* Some vehicle... */) // This should modify the original array
	return anArray.map((item) => {
		return {...item, color: 'blue'}
	})
}

// Using type intersection it could ensure that the output type is what we want
type RedVehicle = Vehicle & {color: 'red'}
/* Equivalent
type RedVehicle = {
	name: string
	wheels: number
	color: 'red'
}
*/
const someAnthem = (anArray: readonly Vehicle[]): RedVehicle[] => {
	return anArray.map((item) => {
		return {...item, color: 'red'}
	})
}
