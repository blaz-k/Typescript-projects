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
