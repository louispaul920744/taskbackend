const page=require('../models/pages');

 const pageadd= async (req, res) => {
    const {  title,
    slug,
  content } = req.body;
    try {
   
  
      
  
      const result = await page.create({
        title,slug,content,
    createddate:new Date(),
    updateddate:new Date()

      });
  
     
      res.status(201).json({ message:"Added sucessfully" });
    } catch (error) {
      res.status(500).json({ message: "Something went wrong" });
      console.log(error);
    }
  };
  const getallpage=async(req,res)=>{
    try
    {
const result=await page.find();
res.status(201).json({ data:result });
    }
    catch (error) {
        res.status(500).json({ message: "Something went wrong" });
        console.log(error);
      }
  }
  const deletepage=async(req,res)=>{
    try
    {
const result=await page.deleteOne(req.id)
res.status(201).json({ message:"deleted sucesfully" });
    }
    catch (error) {
        res.status(500).json({ message: "Something went wrong" });
        console.log(error);
      }
  }
  const updatepage= async (req, res) => {
    const {  title,
        slug,
      content } = req.body;
    
    try {
      // const oldUser = await UserModal.findOne({ email });
  
      // if (oldUser) {
      //   return res.status(400).json({ message: "User already exists" });
      // }
  
      
  
      const result = await page.updateOne({ _id: req.params.id}, {
        title,slug,content,
    
    updateddate:new Date()
    }, );
  
     
      res.status(201).json({ message:"updated sucessfully" });
    } catch (error) {
      res.status(500).json({ message: "Something went wrong" });
      console.log(error);
    }
  };
  const getonepage=async(req,res)=>{
    try
    {
const result=await page.find({_id:req.params.id});
res.status(201).json({ data:result });
    }
    catch (error) {
        res.status(500).json({ message: "Something went wrong" });
        console.log(error);
      }
  }
  module.exports={pageadd,getallpage,deletepage,updatepage,getonepage}