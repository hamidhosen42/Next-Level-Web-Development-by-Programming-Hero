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









