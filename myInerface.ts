interface User  {readonly _id : number,email: string,userId: number,socialId? : string,startTrail : () => string,startTrail1() : string,coupon(couponname:string,value:number) : number}
interface User {githubToken : string}
interface Admin extends User {role : "admin" | "ta" | "learner"}
const ritik:Admin = {_id : 65,role:"admin",email:"f@f.l",userId:221,githubToken:"d",startTrail:()=>{return "fcfh"},startTrail1:()=>{return "fcfh"},coupon:(name:"",off:10)=>{return 10}};