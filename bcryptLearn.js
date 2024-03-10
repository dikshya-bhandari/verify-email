//"nitan" => "$2b$10$sWuXNyEeajvh2TdLviXbeetX0SexYJGSGfY78iaFX8aGfpgAz0o8y "
//hashing
//encryption is possible
//decryption is not possible
//hash code of same string is different
import bcrypt from "bcrypt";

//***************generate hash code */
// let hashCode= await bcrypt.hash('nitan',10);
// console.log(hashCode);

//compare hash code
let isValidPassword = await bcrypt.compare(
  "nitan",//password
  "$2b$10$sWuXNyEeajvh2TdLviXbeetX0SexYJGSGfY78iaFX8aGfpgAz0o8y" //hashPassword
);
console.log(isValidPassword);
// the output will be true if hashPassword is made from the password
