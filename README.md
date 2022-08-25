# MongoDB Commands
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










