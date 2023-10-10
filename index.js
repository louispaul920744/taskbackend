const express =require('express') 
const cors=require('cors');
const morgan=require('morgan');
const mongoose=require('mongoose');
const user=require('./router/user')
const page=require('./router/pages')
const app = express();

app.use(morgan("dev"));
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use('/user',user)
app.use('/page',page)
const uri = "mongodb+srv://lpaul4440:Reactlouis@tourapp.9nrhixd.mongodb.net/task?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
mongoose .connect(uri, { useNewUrlParser: true,
  useUnifiedTopology: true, }) .then(() => console.log("MongoDB connected")) .catch((err) => console.log(err));
  const port =  5000;
app.listen(port,()=>{
  console.log("listening");
});