var mongoose=require('mongoose');
const validator=require('validator');
const jwt=require('jsonwebtoken');
var _=require('lodash');
var UserSchema=mongoose.Schema('Users',{
	email:{
		required:true,
		type:String,
		trim:true,
		minlength:1,
		unique:true,
		validate:{
              validator:validator.isEmail,
              message:" {value} is not a valid email"
			
		}
	},
	password:{
		required:true,
		minlength:4,
		type:String
	},
	tokens:[{
		access:{
			required:true,
			type:String
		},
		token:{
               required:true,
               type:String
		}
	}]
});

UserSchema.methods.toJSON=function(){
	var user=this;
	var userObject=user.toObject();
	return _.pick(userObject,['_id','email']);
};
var Users=mongoose.model('Users',UserSchema);

UserSchema.methods.generateAuthToken = function(){
	var user=this;
	var access='auth';
	var token=jwt.sign({_id:user._id.toHexString(),access},'123abc').toString();
	user.tokens.push({access,token});

	 return user.save().then(()=>{
	 	return token;
	 });
};
	

module.exports={Users};