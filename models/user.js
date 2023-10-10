const mongoose=require('mongoose');

const userSchema = mongoose.Schema({
  firstname: { type: String, required: true },
  lastname:{ type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  
  id: { type: String },
  createddate:{type:Date,required:true},
  updateddate:{type:Date,required:true}
});

module.exports= mongoose.model("User", userSchema);