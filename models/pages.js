const mongoose=require('mongoose');

const pageSchema = mongoose.Schema({
    title: { type: String, required: true },
    slug:{ type: String, required: true },
  content: { type: String, required: true },
  
  
  id: { type: String },
  createddate:{type:Date,required:true},
  updateddate:{type:Date,required:true}
});

module.exports= mongoose.model("Pages", pageSchema);