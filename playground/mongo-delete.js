//const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
	if (err)
		return console.log('unable to connect to mongodb server');
	console.log('Connected to mongodb server');
// db.collection('Todos').deleteMany({text:'Something to do'}).then((result)=>{
// 	console.log(result);
//})

// db.collection('Todos').deleteOne({text:'Something bla'}).then((result)=>{
// 	console.log(result);
// })
	
	
db.collection('Todos').findOneAndDelete({text:'Something bla'}).then((result)=>{
	console.log(result);
})
	//db.close();
});