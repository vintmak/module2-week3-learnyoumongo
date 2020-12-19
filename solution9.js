var url = "mongodb://localhost:27017/learnyoumongo"

// To connect to the database...
var mongo = require('mongodb').MongoClient
	mongo.connect(url, function(err, client) {
		var db = client.db('learnyoumongo');
	// db gives access to the database
	var collection = db.collection('prices');
	    collection.aggregate([
      { $match: { size: process.argv[2] }}
    , { $group: {
        _id: 'total' // This can be an arbitrary string in this case
      , total: {
          // $sum is the operator used here
          $avg: '$price'
        }
      }}
    ]).toArray(function(err, results) {
      // handle error
      console.log(Number(results[0].total).toFixed(2));
      client.close();
    })
})
