let dynamicValue: String = "abc"


let x: string= "Typescript is great";

let y: string = "Learn blabvla";
let a: number = 5;
let b: number = 36.5

let isAdmin: boolean = true


let abc: null;


//

let student: string[] = ["abc", "xyz"]; 
let student1: Array<string> = ["abc, xzjd"]

let studentID: number[] = [101, 102, 104]

interface IStudent{
    studentId: number,
    studentName: string,

    getResult:(studentID: number) => number
}


class Student {
    studentID: number;
    studentName: string;

}

let city: [number, string] = [1, "ljkubljana"]


let e : number = 10, d = 20

if(e > d ){
    console.log(e)
}else if(d>e){
    console.log(d)
}else{
    console.log("enak")
}



for (let i =0; i<3; i++){
    console.log(i)
}