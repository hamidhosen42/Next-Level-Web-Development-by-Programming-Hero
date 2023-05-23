```
// Explore $match aggregate operator
// $match stage – filters those documents we need to work with, those that fit our needs
db.practice.aggregate([
    { $match: { gender: "Male", age: { $gt: 50 } } },
    { $project: { gender: "Male" } }
]).project({ age: 1 })
```

```
// Explore $addFields stage
db.practice.aggregate([
    // Add field stage
    { $addFields: { salary: 0 } },
    { $project: { salary: 1 } },
])

```

```
db.practice.aggregate([
    // Add field stage
    {
        $addFields: {
            salary: {
                $toInt: {
                    $floor: {
                        $multiply: [{ "$rand": {} }, 100]
                    }
                }
            }

        }
    },
    // { $project: { salary: 1 } },
    { $out: "salarywithpractice"}
])

```

```
// 8-4: Explore $group
db.practice.aggregate([
    // Add field stage
    {
        $addFields: {
            salary: {
                $toInt: {
                    $floor: {
                        $multiply: [{ "$rand": {} }, 100]
                    }
                }
            }

        }
    },
    { $merge: "practice" }
])

db.practice.aggregate([
    // Add field stage
    {
        $group: {
            _id: {
                age: "$age",
                gender: "$gender"

            }
        }
    }
])

// reference -- >
// use case 1. operator $push $sum case2. Reference to a field

```

```
//8-5: Explore $group more , accumulator, $sort , $limit
db.practice.aggregate([
    {
        $match: {
            age: {
                $gt: 18
            }
        }
    },
    // group state
    {
        $group: {
            _id: "$salary",
            person: { $sum: 1 }
        },
    },
    // project state
    {
        $project: {
            _id: 0,
            salary: "$_id",
            person: 1
        },
    },
    //sort stage
    {
        $sort: { _id: -1 }
    },
    {
        $limit: 3
    }
])

```

```
// 8-6:Explore Accumulator Operator using aggregation

db.practice.aggregate([
    {
        $match: {
            age: {
                $gt: 18
            }
        }
    },
    {
        $match: {
            gender: 'Male'
        }
    },
    // group state
    {
        $group: {
            _id: "$salary",
            person: { $sum: 1 }
        },
    },
    // project state
    {
        $project: {
            _id: 0,
            salary: "$_id",
            person: 1
        },
    },
    //sort stage
    {
        $sort: { _id: -1 }
    },
    {
        $limit: 3
    }
])

db.practice.aggregate([
    // group state
    {
        $group: {
            _id: null,
            count: { $sum: "$salary" },
            maxSalary: { $max: "$salary" },
            minSalary: { $min: "$salary" },
            avgSalary:{$avg:"$salary"},
        },
    },
    //project state
    {
        $project: {
            countt:1,
            maxSalary:1,
            minSalary:1,
            avgSalary:1,
            salaryRange:{$subtract: ["$maxSalary","$minSalary"]}
        }
    }
])

```

```
// 8-7: Explore $unwind
// $unwind Deconstructs an array field from the input documents to output a document for each element. Each output document is the input document with the value of the array field replaced by the element.
db.practice.aggregate([
    // unwind stage 
    {
        $unwind: "$education"
    }, {
        $group: { _id: "$education", count: { $sum: 1 } },
    },
    {
        $group: { _id: null, count: { $sum: 1 } },
    }
])


```

```
// 8-8: Explore powerful Multi Stage Pipeline

db.practice.aggregate([
    { $match: { _id: ObjectId("6406ad63fc13ae5a40000068") } },
    {
        $facet: {
            // sub pipline
            "friendsCount": [
                // stage
                { $project: { friendsCount: { $size: "$friends" } } }
            ],
            // sub pipline
            "interestsCount": [
                // stage
                { $project: { interestsCount: { $size: "$interests" } } }
            ],
            // sub pipline
            "skillsCount": [
                // stage
                { $project: { skillsCount: { $size: "$skills" } } }
            ],
        }
    }])
```

```
db.students.aggregate([
    { $unwind: "$scores" },
    { $match: { "scores.type": "exam" } }
]);

```

```
db.students.aggregate([
    { $match: { "scores.type": "exam" } },
    { $sort: { "scores.0.score": -1 } },
    {
        $project: {
            scores: {
                $slice: ["$scores", 1]
            }
        }
    },
    {$limit: 100}

]);
```

```
db.students.aggregate([
    { $unwind: "$scores" },
    { $match: { "scores.type": "exam" } },
    {$addFields: {
        "examFinalScore":{
            $round: ["$scores.score",2]
        }
    }},
    {$project: {
        name:1,examFinalScore:1
    }}
]);

```

```
db.students.aggregate([
    { $unwind: "$scores" },
    { $match: { "scores.type": "exam" } },
    {
        $addFields: {
            "examFinalScore": {
                $round: ["$scores.score", 2]
            }
        }
    },
    {
        $project: {
            name: 1, examFinalScore: 1
        }
    },
    {
        $addFields: {
            "grade": {
                $switch: {
                    branches: [
                        {
                            case: { $lt: ["$examFinalScore", 40] },
                            then: "F"
                        },
                        {
                            case: { $lt: ["$examFinalScore", 50] },
                            then: "D"
                        },
                        {
                            case: { $lt: ["$examFinalScore", 60] },
                            then: "C"
                        },
                        {
                            case: { $lt: ["$examFinalScore", 70] },
                            then: "B"
                        },
                        {
                            case: { $lt: ["$examFinalScore", 90] },
                            then: "A"
                        },
                        {
                            case: { $gte: ["$examFinalScore", 90] },
                            then: "A+"
                        }
                    ],
                    default: ""
                }
            }
        }
    },
    { $sort: { examFinalScore: -1 } },
    {$match: {grade:"A+"}},
    {$out: "A_plus_pawa_polapans"}
]);


```

```
db.students.aggregate([
    { $unwind: "$scores" },
    { $match: { "scores.type": "exam" } },
    {
        $addFields: {
            "examFinalScore": {
                $round: ["$scores.score", 2]
            }
        }
    },
    {
        $project: {
            name: 1, examFinalScore: 1
        }
    },
    {
        $addFields: {
            "grade": {
                $switch: {
                    branches: [
                        {
                            case: { $lt: ["$examFinalScore", 40] },
                            then: "F"
                        },
                        {
                            case: { $lt: ["$examFinalScore", 50] },
                            then: "D"
                        },
                        {
                            case: { $lt: ["$examFinalScore", 60] },
                            then: "C"
                        },
                        {
                            case: { $lt: ["$examFinalScore", 70] },
                            then: "B"
                        },
                        {
                            case: { $lt: ["$examFinalScore", 90] },
                            then: "A"
                        },
                        {
                            case: { $gte: ["$examFinalScore", 90] },
                            then: "A+"
                        }
                    ],
                    default: ""
                }
            }
        }
    },
    { $sort: { examFinalScore: -1 } },
    { $match: { grade: "A+" } },
    {
        $group: {
            _id: null,
            average: { $avg: {$round:"$examFinalScore"} }
        }
    }
]);

```

```
db.students.aggregate([
    { $unwind: "$scores" },
    { $match: { "scores.type": "exam" } },
    {
        $addFields: {
            "examFinalScore": {
                $round: ["$scores.score", 2]
            }
        }
    },
    {
        $project: {
            name: 1, examFinalScore: 1
        }
    },
    {
        $addFields: {
            "grade": {
                $switch: {
                    branches: [
                        {
                            case: { $lt: ["$examFinalScore", 40] },
                            then: "F"
                        },
                        {
                            case: { $lt: ["$examFinalScore", 50] },
                            then: "D"
                        },
                        {
                            case: { $lt: ["$examFinalScore", 60] },
                            then: "C"
                        },
                        {
                            case: { $lt: ["$examFinalScore", 70] },
                            then: "B"
                        },
                        {
                            case: { $lt: ["$examFinalScore", 90] },
                            then: "A"
                        },
                        {
                            case: { $gte: ["$examFinalScore", 90] },
                            then: "A+"
                        }
                    ],
                    default: ""
                }
            }
        }
    },
    { $sort: { examFinalScore: -1 } },
    {
        $setWindowFields: {
            sortBy: { examFinalScore: -1 },
            output: {
                position: { $rank: {} }
            }
        }
    }, {
        $setWindowFields: {
            sortBy: { examFinalScore: -1 },
            output: {
                position: { $rank: {} }
            }
        }
    },
], {
    allowDiskUse: true
});

```

```
db.students.aggregate([
    { $match: { "scores.type": "exam" } },
    { $project: { "scores": 1 } },
    {
        $addFields: {
            "scores": {
                $filter: {
                    input: "$scores",
                    as: "score",
                    cond: { $eq: ["$$score.type", "exam"] }
                }
            }
        }
    },
    { $unwind: "$scores" },
    { $sort: { "scores.score": -1 } },
    {
        $group: {
            _id: "$_id",
            scores: {
                $push: {
                    type: "$scores.type",
                    score: { $round: ["$scores.score", 2] }
                }
            }
        }
    },
    { $project: { "_id": 1, "scores": 1 } },
    { $match: { "scores.type": "exam", "scores.score": { $gte: 95 } } },
    { $sort: { "scores.score": -1 } }
]);

```

```
db.userDetails.aggregate([
    {$match: {email:"nahidhassanbulbul@gmail.com"}},
    {$lookup: {
           from: "userDetails",
           localField: "email",
           foreignField: "refferBy",
           as: "reffer by me"
         }}
])
```
