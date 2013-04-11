var mongo = require('mongodb');
 
var Server = mongo.Server,
    Db = mongo.Db
 
var server = new Server('localhost', 27017, {auto_reconnect: true});
db = new Db('technologies', server);
 
db.open(function(err, db) {
    if(!err) {
        console.log("Connected to 'technologies' database");
        db.collection('technologies', {safe:true}, function(err, collection) {
            if (err) {
                console.log("The 'technologies' collection doesn't exist. Creating it with sample data...");
                
            }
            populateDB();
        });
    }
});


var populateDB = function() {

  var technologies = [
    {
      name : "testacular",
      evaluation : "2",
      year : "2010",
      tendency : "down"
    },
    {
      name : "bootstrap",
      evaluation : "2",
      year : "2010",
      tendency : "up"
    },
    {
      name : "ZendFramework1",
      evaluation : "3",
      year : "2005",
      tendency : "down"
    },
    {
      name : "mysql",
      evaluation : "0",
      year : "1999",
      tendency : "stable"
    },
    {
      name : "mongodb",
      evaluation : "1",
      year : "2005",
      tendency : "down"
    }
  ];    
 
    db.collection('technologies', function(err, collection) {
        collection.insert(wines, {safe:true}, function(err, result) {});
    });
 
};
