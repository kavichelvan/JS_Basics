database name = testMongo
collection name = books

db.books.insert({
    bookName: "Industrial Instrumentation", bookAuthor: "Nagoor Raja", 
    unitSold: 1000
})
db.books.insert([
{   
    bookName: "Applied Electronics",
    bookAuthor: "Hari ram", 
    unitSold: 400
},
{
    bookName: "How to code",
    bookAuthor: "Kavi chelvan", 
    unitSold: 1800
}]);


show dbs
db
use db
show collections
db.books.find().pretty()
db.books.find({"unitSold":{$gte:500}}).pretty()
db.books.update({'bookName':'How to code'},{'unitSold': 8000})
db.books.find().sort({'unitSold':1}).pretty()
