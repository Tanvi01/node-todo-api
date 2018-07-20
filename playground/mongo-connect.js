const MongoClient=require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
	if (err)
		return console.log('unable to connect to mongodb server');
	console.log('Connected to mongodb server');

	db.collection('Todos').insertOne({
		text:'Something bla',
		completed:false
	},(err,result)=>{
		if(err)
			return console.log('Unable to insert todo',err);
		console.log(JSON.stringify(result.ops,undefined,2));
	});

db.collection('Users').insertOne({
		name:'Tanvi',
		Age:20
	},(err,result)=>{
		if(err)
			return console.log('Unable to insert todo',err);
		
		console.log(JSON.stringify(result.ops,undefined,2));
	});


	db.close();
});