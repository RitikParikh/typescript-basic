function addTwo(num:number){
    return num + 2;
}
function addTwoString(num:number) : number {
    return num + 2;
}
function getUpper(val: string){
    return val.toUpperCase();
}

function signUpYUser(name: string,email:string,isPaid:boolean){}

let  loginUser = (name: string,email:string,isPaid:boolean = false) => {}

function getValue(myVal:number): string | boolean {
    if(myVal >  5) return true;
    return "200 OK"
}

let getHello  = (s:string): string => {
    return "";
}

const heros = ["thor","spiderman","ironman"];
// const heros = [1,2,3];

heros.map((hero):string =>{return `hero is ${hero}`})

addTwo(5);
getUpper("Ritik");
signUpYUser("Ritik","ritikparikh98@gmail.com",true);
loginUser("Ritik","ritikparikh98@gmail.com");
addTwoString(5);

function consoleError(errmsg: string): void{console.log(errmsg);}

function handleError(errmsg: string): never{throw new Error(errmsg);}

export {}