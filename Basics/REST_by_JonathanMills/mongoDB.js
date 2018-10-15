var MongoClient = require('mongodb').MongoClient;

var dbName = "restDB";

var url = "mongodb://localhost:27017/"+dbName;
console.log(url);

/*
//Create a database named "restDB":
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created! "+dbName);
  db.close();
});
*/
/*
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    
    var dbo = db.db("restDB"); //common for all
    
    //creating collection
    dbo.createCollection("books", function(err, res) {
      if (err) throw err;
      console.log("Collection created! in "+dbName);
      db.close();
    });
  });
  */
/*
  //inserting data
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("restDB");
  var myobj = { bookName: "Industrial automation", bookAuthor: "Nagoor Kani", unitSold: 500 };
  dbo.collection("books").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted in "+dbName);
    db.close();
  });
});
*/

//finding data
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("restDB");
  //dbo.collection("customers").findOne({}, function(err, result) {
  dbo.collection("books").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
