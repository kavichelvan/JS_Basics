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