// Basic types

let id: number = 5
let company: string = "Traversy Media"
let isPublished: boolean = true
let x: any = "Hello"

// Array

let ids: number[] = [1,2,3]
let arr: any[] = [1, true, "hello"]

// Tuple

let person: [number, string, boolean] = [1, "Blaz", true]
// Tuple Array

let employee: [number, string][]

employee = [
    [1, "blaz"],
    [2, "laura"]
]
 
// Union

let pid: string | number = 5

// Enum

enum Direction {
    up, down, left, right
}
console.log(Direction.down)

// Objects

type User ={
    id: number
    name: string
}

const user: User = {
    id: 1,
    name: "blaz"
}

// Type Assertion

let cid: any = 1
let customerId = cid as number 

// Functions

function addNum(x: number, y: number): number {
    return x+y
}

// Void

function log(message: string|number):void{
    console.log(message)
}


// Interfaces

interface IUser {
    id: number
    name: string
    age?: number
    readonly height: number

}

const user1: IUser = {
    height: 178,
    id: 2,
    name: "blas"
}

// Interfaces Function
interface MathFunct{
    (x: number, y: number): number
}

const add: MathFunct = (x: number, y: number): number => x+y

// Classes
 
class Person {
    id: number
    name: string
    
    constructor(id: number, name: string){
        this.id = id
        this.name = name
    }
}

const blaz =  new Person(1, "Blaz")
const joze = new Person(5, "josko")
console.log(blaz, joze)


// Implementing Interface in classes
interface IPerson {
    id: number
    name: string
    register(): string
} 

class Oseba implements IPerson {
    id: number
    name: string
    
    constructor(id: number, name: string){
        this.id = id
        this.name = name
    }
    
    register(){
        return `${this.name} is now registered`
    }
}

// Extending classes
class Employee extends Person{
    position: string

    constructor(id: number, name:string, position: string){
        super(id, name)
        this.position = position
    }

}

// Generics

function getArray<T>(items: T[]):T[]{
    return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3,4])
let strArray = getArray<string>(["one", "two", "three"])

