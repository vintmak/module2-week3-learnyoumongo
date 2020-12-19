var url = "mongodb://localhost:27017/learnyoumongo"

// To connect to the database...
var mongo = require('mongodb').MongoClient
	mongo.connect(url, function(err, client) {
		var db = client.db('learnyoumongo');
	// db gives access to the database
	var collection = db.collection('parrots')
	collection.count({
		age:{$gt:parseInt(process.argv[2])
		}
	}, function(err,count){
		if (err) throw err
			console.log(count);
		db.client();
	})
})
