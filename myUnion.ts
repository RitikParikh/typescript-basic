let score: number | string = 33;

score = 44;
score = "55";

type User = {
    name: string;
    id: number;
}

type Admin = {
    username: string;
    id: number;
}

let ritik: User | Admin = {name:"RItik", id:334}

ritik  = {username:"RItik", id:33}

function getValue(myVal:number | string): string | boolean {
    if(myVal >  5) return true;
    return "200 OK"
}

function getDbId(myVal:number | string){
    if(typeof myVal ==="string"){
        myVal.toLowerCase();
    }
    return "200 OK"
}

//array
const data:number[] =[1,2,3,];
const data2:string[] =["1","4"];
const data3:string[] | number[] =["1","4"];
const data4:(string| number)[] =["1","4",1];
let seatAllotment:"aisle" | "middle" | "window";

seatAllotment = "aisle";
// seatAllotment = "crew";