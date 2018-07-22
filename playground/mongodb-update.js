//const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
	if (err)
		return console.log('unable to connect to mongodb server');
	console.log('Connected to mongodb server');

db.collection('Todos').findOneAndUpdate({_id: new ObjectID('5b523da25ba1c3321473e212')},{ $set: {completed:true}},{returnOriginal:false }).then((result)=>{
	console.log(result);
})

db.collection('Users').findOneAndUpdate({_id: new ObjectID('5b51b00f41407f43d8deb7b8')},{ $set: {name:'Kanu'},$inc:{Age:1}},{returnOriginal:false }).then((result)=>{
	console.log(result);
})

	//db.close();
});