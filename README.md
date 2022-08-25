# MongoDB Commands
![MongoDB_Logo svg](https://user-images.githubusercontent.com/61549744/186645973-512d242c-f053-470b-989a-725567c1530f.png)
In this GitHub repository , I will post comprehensive list of all the MongoDB commands you will ever need as a MongoDB beginner. This list covers almost all the most used commands in MongoDB.


## 1. Database Commands
### View all databases
show dbs

### Create a new or switch databases 
use iqrarDb

### View current Database
db

### Delete Database 
db.dropDatabase()

## 2. Collection Commands
### Show Collections
show collections

### Create a collection named 'student'
db.createCollection('student')


### Drop a collection named 'student'
db.comments.drop()

## 3. Row(Document) Commands
### Show all Rows in a Collection 
db.comments.find()

### Show all Rows in a Collection (Prettified)
db.comments.find().pretty()

### Find the first row matching the object
db.comments.findOne({name: 'Iqrar'})

## 4. Search in a MongoDb Database
db.comments.find({name:'iqrar'})

## 5. Update a row
db.student.updateOne({ name: 'iqrar' }, { $set: { 'name': 'Malik', 'age': 22 } })

## 6. Delete Row 
db.comments.remove({name: 'iqrar'})

## 7. Less than/Greater than/ Less than or Eq/Greater than or Eq
db.student.find({age: {$lt: 20}}) // for age less than 20
db.student.find({"age": { $lte:30}  })

db.student.find({age: {$gt: 20}}) // for age greater than 20
db.student.find({age: {$lte: 20}})  // for less than or equals to 20
db.student.find({age: {$gte: 20}}) // for age greater than 20 or equals to 20

### or Operator
db.student.find({$or:[{"name": "fahad"},{"age":{$lt:30}}]})


### And Operator
db.student.find({$and:[{"name": "fahad"},{"age":{$lte:30}}]})

![Screenshot from 2022-08-25 16-42-00](https://user-images.githubusercontent.com/61549744/186655655-88fb7545-b0c1-4687-bd48-03e4b083f68c.png)


![Screenshot from 2022-08-25 16-40-52](https://user-images.githubusercontent.com/61549744/186655663-c9862a02-ba1f-48b4-8dfb-5563998cec56.png)


## Aggregation in MongDb

![Screenshot from 2022-08-25 16-52-31](https://user-images.githubusercontent.com/61549744/186657350-bbe0fe42-2612-4c1b-bdf9-3ab00c7cb160.png)

### Sorting order

![Screenshot from 2022-08-25 16-55-13](https://user-images.githubusercontent.com/61549744/186658453-78eec681-0f82-479b-a17a-3216f902a619.png)


![Screenshot from 2022-08-25 16-55-51](https://user-images.githubusercontent.com/61549744/186658509-0b7eb4ca-1964-416b-87ef-2749b30cacbc.png)



![Screenshot from 2022-08-25 16-57-15](https://user-images.githubusercontent.com/61549744/186658526-df3e4452-2f2b-4d80-b3c2-4af9ce9f7d55.png)

var pipeline=[
    
    { $sort: {'name':1}},
    {$limit:2}
    
];
db.student.aggregate(pipeline);

## select only specific feilds
db.student.find({},{"University":1,_id:0})  // 1 to show field and 0 to hide that field







