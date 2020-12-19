var url = "mongodb://localhost:27017/"+process.argv[2]

// To connect to the database...
var mongo = require('mongodb').MongoClient
mongo.connect(url, function(err, client) {
	var db = client.db(process.argv[2]);
		// db gives access to the database
		var collection = db.collection('users')
		collection.update({
			name:"Tina"}, {
			$set: {
				age:40
			}
		}, function (err,data){
			if (err) throw err;
			console.log(data)
			db.close();
		}
		)
	})
	// other operations

