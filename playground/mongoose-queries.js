const {mongoose}=require('./../server/db/mongoose');
const {Todo}=require('./../server/models/todo');
const {Users}=require('./../server/models/users');
const {ObjectID}=require('mongodb');
var id='5b60a73e5fc1b0b026211c32';

// if(!ObjectID.isValid(id)){
// console.log('Invalid id');
// };

// Todo.find({
// 	_id:id
// }).then((todos)=>{
// 	console.log('todos',todos);
// });

// Todo.findOne({
// 	_id:id
// }).then((todo)=>{
// 	console.log('todo',todo);
// });

// Todo.findById(id).then((todos)=>{
// 	console.log('todos',todos);
// }).catch((e)=>console.log(e));

Users.findById({
 _id:id
}).then((user)=>{
	if(!user)
		return console.log("unable to find");
	console.log(JSON.stringify(user,undefined,2));
},(e)=>{
	console.log(e);
}).catch((e)=>console.log(e));