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
db.student.find({age: {$gt: 20}}) // for age greater than 20
db.student.find({age: {$lte: 20}})  // for less than or equals to 20
db.student.find({age: {$gte: 20}}) // for age greater than 20 or equals to 20

 








