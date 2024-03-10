[
    { name: "nitan", age: 29, isMarried: false },
    { name: "sandip", age: 25, isMarried: false },
    { name: "nitan", age: 26, isMarried: true },
    { name: "rishav", age: 20, isMarried: false },
    { name: "nitan", age: 29, isMarried: true },
    { name: "chhimi", age: 15, isMarried: true },
    { name: "narendra", age: 27, isMarried: false },
    { name: "shidhant", age: 16, isMarried: false },
    { name: "kriston", age: 22, isMarried: false },
  ];
  
  // in search value matter, type does not matter
  .find({})
  .find({name:"nitan"})
  .find({name:"nitan", age:29})
  .find({age:29})
  .find({age:"29"})
  .find({age:22, isMarried:"false"})

  .find({age:25})
  .find({age:{$gt:25}}) //greater than
  .find({age:{$gte:25}}) //greater than equal
  .find({age:{$lte:25}})
  .find({age:{$ne:25}})
  //find age  between 20 to 30
  .find({age:{$gte:20,$lte:30}})

  //finding those whose name is nitan, ram, hari
//.find({name:{$in:["nitan", "sandip", "chimi"]}}) in=>include
//25 30 35
.find({age:{$in:[25 , 30, 35]}})

//or, and
//or
.find({$or:[{name:"nitan"},{name:"kriston"}]})
.find({$or:[{name:"nitan", age:29},{name:"kriston"}]})
.find({$or:[{name:"nitan", age:29},{age:29}]});

//regex = unexact searching

//for  regex searching
[
    {name:"ni1t",age:29, isMarried:false},
     {name:"sand2inip",age:25, isMarried:false},
     {name:"ni",age:26, isMarried:true},
     {name:"ris3hav",age:20, isMarried:false},
     {name:"nitan",age:29, isMarried:true},
     {name:"chhimi",age:15, isMarried:true},
     {name:"narendran",age:27, isMarried:false},
     {name:"Nitan",age:16, isMarried:false},
     {name:"nitanthapa",age:22, isMarried:false},
 ]

 .find({name:/nitan/})
 .find({name:/nitan/i}) //insensitive
 .find({name:/ni/})
 .find({name:/^ni/})
 .find({name:/ni$/})

 //searching, sorting, pagination

 //sorting
 [
  {name:"ac",age:29, isMarried:false},
  {name:"b",age:40, isMarried:false},
  {name:"ab",age:50, isMarried:false},
  {name:"ab",age:60, isMarried:false},
  {name:"c",age:40, isMarried:false},
]

//irrespective of javascript sort, mongoose sort works on number sort
//.find({}).sort("name")
//.find({}).sort("-name")  //-name means descending
//find({}).sort("name age") // age means ascending
//find({}).sort("name -age")  //-age means descending
[
  {name:"ab", age:60, isMarried:false},
  {name:"ab", age:50, isMarried:false},
  {name:"ac", age:29, isMarried:false},
  {name:"b", age:40, isMarried:false},
  {name:"c", age:40, isMarried:false}
]

//pagination
//skip
[
  {name:"nitan",age:29, isMarried:false},
  {name:"sandip",age:25, isMarried:false},
  {name:"nitan",age:26, isMarried:true},
  {name:"rishav",age:20, isMarried:false},
  {name:"nitan",age:29, isMarried:true},
  {name:"chhimi",age:15, isMarried:true},
  {name:"narendra",age:27, isMarried:false},
  {name:"shidhant",age:16, isMarried:false},
  {name:"kriston",age:22, isMarried:false},
]

.find({}).skip("4")  //it skips 4 no of data 
.find({}).limit("3")
find({}).limit("5").skip("2") //find({}).skip("2").limit("5")
//our order is=> find,sort,select,skip,limit

//output
[
  {name:"nitan",age:26, isMarried:true},
  {name:"rishav",age:20, isMarried:false},
  {name:"nitan",age:29, isMarried:true},
  {name:"chhimi",age:15, isMarried:true},
  {name:"narendra",age:27, isMarried:false},
]


