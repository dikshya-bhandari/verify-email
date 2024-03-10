// generate token (id card)
//verify token (id card verify)

//generate token
//json web token (jwt) 
//npm i jsonwebtoken 

import jwt from 'jsonwebtoken';
let infoObj={
    id:'1234',
};
let secretKey='dw12';
let expiryInfo={
    expiresIn:"365d"
}//expiryInfo must in same format


let token=jwt.sign(infoObj, secretKey,expiryInfo);
console.log(token);

let myToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyMzQiLCJpYXQiOjE3MDk3MTgzNTQsImV4cCI6MTc0MTI1NDM1NH0.V52k9RFqOCxYyS6diZS6rcqvuAYsfJa9_ZZBL4xg2DY";

try {
let infoObj1= jwt.verify(myToken,'dw12');
console.log(infoObj1);
} catch (error) {
    console.log(error.message);
}





