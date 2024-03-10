/* 
*********CRUD***********
create => post
read => get
update => patch
delete => delete
CRUD is always related to database
Frontend request backend
Backend gives response frontend
*/

/* 
url=localhost:8000
method=post
*/

/* 
always place dynamic route at the end
we can send data from postman by three way body, params, query
what ever sent in url will come in string
one request must have one response
*/

////url
/* 
localhost:8000/a/b?name=nitan&age=29&address=gagalphedi
url = route + query
route =localhost:8000/a/b
route = baseUrl+ route params
baseUrl = localhost:8000
query =name=nitan&age=29&address=gagalphedi
*/

/* 
middleware
   middleware are the function which has req, res,next
   next is used to trigger another middleware
   we have two form of middleware
            - error middleware (err,req,res, next)=>{}
                to trigger error middleware we have to call next(value)
            - normal middleware(req,res, next)=>{}
                to trigger normal middleware we have to call next() 

  middleware is divided into parts
     route middleware
     application middleware
 */

/* 
model convention
   first letter of model name must be capital and singular
   variable name and model name must be same  
   
route convention
   at index it is good to use plural routes
     
 */

/*
   Product (name,price,quantity)
   schema
   model
   service 
   controller
   route
   index
   
   */

/* 
   review(userId, product,message,rating)
    schema
    model
    service
    controller
    router
    index

   */

/* 
    .post(m0(false),m1, m3,m4("ram"))
    m0,m1,m3,m4 => all are middleware function because it has req,res,next
    let m0=(value)=>{
        return (req,res,next)=>{
            if(value){
                next()
            }else{}
        }
    }

    let m1=(req,res,next)=>{
        clg
    }
  **********middleware case ********
    without function call(use if you dont want to pass value) (req,res,next)=>{}
    with function call (use if you want to pass value) ()=>{return((req,res,next)=>{})}
    
    */
/* 
    success code
    success (2XX)
    c 201
    r 200
    u 201
    d 200 

    failure(4XX)
    400
    */

/* 
    {
    "name": "c",
    "password":"Password@123",
    "phoneNumber": 1111111111,
    "roll": 2,
    "isMarried": false,
    "spouseName": "lkjl",
    "email": "abc@gmai",
    "gender": "male",
    "dob": "2019-2-2",
    "location": {
        "country": "nepal",
        "exactLocation": "gagalphedi"
    },
    "favTeacher": [
        "a",
        "b",
        "c",
        "nitan"
    ],



    "favSubject": [
        {
            "bookName": "javascript",
            "bookAuthor": "nitan"
        },
        {
            "bookName": "b",
            "bookAuthor": "b"
        }
    ],



}
    */

/*create 
     validation
read

*/

/* 
In mongodb
array is called as collection(defining collection is called making model)
object is called as document(defining document is called making Schema)
it means data are save in the form of collection of document

*/

/* 
get file throw link
*/
