// Equal check
// db.practice.find({age:{$eq:77}})
// { <field>: { $eq: <value> } }

// not equal check
// db.practice.find({gender:{$ne:"Female"}}).project({gender:1,name:1});
// { field: { $ne: value } }

// grater than syntext
// db.practice.find({age:{$gt:30}}).project({age:1})
// Syntax: { field: { $gt: value } }

// less than syntext
// db.practice.find({age:{$lt:30}}).project({age:1})
// Syntax: { field: { $lt: value } }


// less than equal syntext
// db.practice.find({ age: { $lte: 30 } }).project({ age: 1 }).sort({ age: -1 })
// Syntax: { field: { $lte: value } }
// db.practice.find({ age: { $gte: 18, $lt: 30 }}).project({ age: 1 }).sort({age:-1 })


// db.practice.find({gender:'Male' ,age:{$in: [18,23] } } )
// { field: { $in: [<value1>, <value2>, ... <valueN> ] } }

// db.practice.find({gender:'Male' ,age:{$nin: [18,23] } } )
// { field: { $nin: [ <value1>, <value2> ... <valueN> ] } }

// db.practice.find({ gender: 'Female', age: { $nin: [18, 30, 33, 46, 23] }, interests: { $in: ['Travelling', 'Gaming'] } }).project({ gender: 1, age: 1, interests: 1 })


// Logical operator
// db.practice.find({ $and: [{ gender: 'Female' }, { age: { $lt: 30 }},{"skills.name":'JAVASCRIPT'}] })
//     .projection({ gender: 1, age: 1,"skills.name":1 })
// { $and: [ { <expression1> }, { <expression2> } , ... , { <expressionN> } ] }

// db.practice.find({ $or: [{ gender: 'Female' }, { age: { $lt: 30 } }, { "skills.name": 'JAVASCRIPT' }] })
//     .projection({ gender: 1, age: 1, "skills.name": 1 })
// { $or: [ { <expression1> }, { <expression2> } , ... , { <expressionN> } ] }

// db.practice.find( { "skills.name": {$in:['JAVASCRIPT','PYTHON']}}).project({"skills.name":1})


// Implcit and Explicit
// db.practice.find({ age: { $ne: 18 }, age: { $gt: 15 } })
//     .projection({ age: 1 }) // implicit

// db.practice.find({
//     $and: [
//         {age: { $ne: 18 }},
//         {age: { $gt: 15 }}
//     ]
// }).projection({ age: 1 }).sort({ age: 1 }) // Explicit


// Explore $exists , $type , $size operator
// Matches documents that have the specified field. 
// db.practice.find({ age: { $exists: false } })
// db.practice.find({ skills: { $exists: true } })
// { field: { $exists: <boolean> } }

// Selects documents if a field is of the specified type.
// db.practice.find({friends:{$type: 'array'}})
// { field: { $type: <BSON type> } }
// { field: { $type: [ <BSON type1> , <BSON type2>, ... ] } }

// size
// db.practice.find( { skills: { $size: 1 } } ).project({skills:1});
// db.collection.find( { field: { $size: 2 } } );


// The $all operator selects the documents where the value of a field is an array that contains all the specified elements. To specify an $all expression, use the following prototype:
// db.practice.find({interests:"Travelling"}).project({interests:1})
// db.practice.find({"interests.0":"Travelling"}).project({interests:1})
// db.practice.find({"interests":[ "Travelling", "Writing", "Cooking" ]}).project({interests:1})
// db.practice.find({interests:{$all:[ "Travelling", "Writing", "Cooking" ]}}).project({interests:1})
// { <field>: { $all: [ <value1> , <value2> ... ] } }

// equivalent to
// db.practice.find({
//     $and: [
//         { "interests": "Travelling" },
//         { "interests": "Writing" },
//         { "interests": "Cooking" },
//     ]
// }).project({interests:1})
// { $and: [ { tags: "ssl" }, { tags: "security" } ] }

// $elemMatch
// The  $elemMatch operator matches documents that contain an array field with at least one element that matches all the specified query criteria.
// db.practice.find({skills:{$elemMatch: {name:"JAVA",level:"Intermidiate"}}}).project({skills:1})
// { <field>: { $elemMatch: { <query1>, <query2>, ... } } }

// db.practice.findOne(
//     {kak update korte chao},
//     {ki update korte chao},
//     {option}
//     )

// { $set: { <field1>: <value1>, ... } }

// db.practice.find({_id:ObjectId("6406ad63fc13ae5a40000067")})
//   .projection({})
//   .sort({_id:-1})
//   .limit(100)

// db.practice.updateOne(
//     { _id: ObjectId("6406ad63fc13ae5a40000067") },
//     {
//         $set: {
//             country: 'Bangladesh'
//         }
//     })

//{ $set: { <field1>: <value1>, ... } } 

// db.practice.updateOne(
//     { _id: ObjectId("6406ad63fc13ae5a40000067") },
//     {
//         $addToSet: {
//           interests: 'Reading'
//         }
//     })

// { $addToSet: { <field1>: <value1>, ... } }

// db.practice.updateOne(
//     { _id: ObjectId("6406ad63fc13ae5a40000067") },
//     { $addToSet: { interests: { $each: ["camera", "electronics", "accessories"] } } }
// )
// db.practice.updateOne(
//     { _id: ObjectId("6406ad63fc13ae5a40000067") },
//     { $push:{ interests: { $each: ["camera", "electronics", "accessories"] } } }
// )

// db.inventory.updateOne(
//   { _id: 2 },
//   { $addToSet: { tags: { $each: [ "camera", "electronics", "accessories" ] } } }
//  )
// $each Modifier You can use the  $addToSet operator with the $each modifier. The $each modifier allows the  $addToSet operator to add multiple values to the array field.


// The  $unset operator deletes a particular field. Consider the following syntax:

// db.practice.updateOne(
//     { _id: ObjectId("6406ad63fc13ae5a40000067") },
//     { $unset: { interests: "" } }
// )
// { $unset: { <field1>: "", ... } }