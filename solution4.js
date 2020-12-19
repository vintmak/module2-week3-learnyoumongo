var url = "mongodb://localhost:27017/learnyoumongo"

// To connect to the database...
var mongo = require('mongodb').MongoClient
mongo.connect(url, function(err, client) {
	var db = client.db('learnyoumongo');
	// db gives access to the database
	var collection = db.collection('parrots')
	collection.find({
		age: {$gt:parseInt(process.argv[2])}
	}
	,{
		projection:
		{
			name:1,
			age:1,
			_id:false
		}
	}).toArray(function(err, documents) {
		console.log(documents);
		client.close();
	})
})
