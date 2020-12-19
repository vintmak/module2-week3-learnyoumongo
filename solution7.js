var url = "mongodb://localhost:27017/"+process.argv[2]

// To connect to the database...
var mongo = require('mongodb').MongoClient
mongo.connect(url, function(err, client) {
	var db = client.db(process.argv[2]);
	var collection = db.collection(process.argv[3]);
	var id = process.argv[4];

	collection.remove({
		_id:id
	}, function(err){
		if (err) throw err;
		db.close();
	})
		// db gives access to the database

})
