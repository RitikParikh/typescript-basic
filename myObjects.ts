// const User = {
//     name: "RItik",
//     email:"R@o.l",
//     isActive:true
// };


// function createUser({name:string, isPaid: boolean}){}

// // createUser({name:"Ritik",isPaid:false,email:"e@r@gmail.com"})
// let obj = {name:"Ritik",isPaid:false,email:"e@r@gmail.com"};
// createUser(obj)

// function createFunction():{name:string,price:number}{
//     return {name:"Ritik",price:100}
// }



// type User = {name: string,email:string,isActive:boolean};


// function createUser(user:User):User{return { name : "" , email : "" , isActive : true }}
// createUser ( { name : "" , email : "" , isActive : true } )

type User = {
    readonly _id: string
    name : string
    email : string
    isActive : boolean
    creditCardDeatils? : number
}       
let myUser : User = {
    _id: "134",
    name:"R",
    email:"h@h.g",
    isActive:false
}

type cardNumber = {cardnumber : string}
type cardDate = {cardDate : string}
type cardDetails = cardNumber & cardDate & {cvv : number}

myUser.email= "Ritik@g.g";
// myUser._id= "Ritik@g.g";
myUser.creditCardDeatils= 465;

export {}