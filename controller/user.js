const user=require('../models/user');
const bcrypt=require('bcrypt');
 const useradd= async (req, res) => {
    
    const { email, password, firstname, lastname, } = req.body;
    try {
      // const oldUser = await UserModal.findOne({ email });
  
      // if (oldUser) {
      //   return res.status(400).json({ message: "User already exists" });
      // }
  
      //const hashedPassword = await bcrypt.hash(password, 12);
  console.log(req.body.email);
      const result = await user.create({
        email,
        password,
    firstname,
    lastname,
    createddate:new Date(),
    updateddate:new Date()

      });
  
     
      res.status(201).json({ message:"Added sucessfully" });
    } catch (error) {
      res.status(500).json({ message: "Something went wrong" });
      console.log(error);
    }
  };
  const getalluser=async(req,res)=>{
    try
    {
const result=await user.find();
res.status(201).json({ data:result });
    }
    catch (error) {
        res.status(500).json({ message: "Something went wrong" });
        console.log(error);
      }
  }
  const deleteuser=async(req,res)=>{
    try
    {
const result=await user.deleteOne(req.params.id)
res.status(201).json({ message:"deleted sucesfully" });
    }
    catch (error) {
        res.status(500).json({ message: "Something went wrong" });
        console.log(error);
      }
  }
  const updateuser= async (req, res) => {
    
    try {
      // const oldUser = await UserModal.findOne({ email });
  
      // if (oldUser) {
      //   return res.status(400).json({ message: "User already exists" });
      // }
  
      const hashedPassword = await bcrypt.hash(req.body.password, 12);
  
      const result = await user.updateOne({ _id: req.params.id}, {
        email: req.body.email,
        firstname: req.body.firstname,
        lastname:req.body.lastname,
        password: hashedPassword,
        updateddate:new Date()
    }, );
  
     
      res.status(201).json({ message:"updated sucessfully" });
    } catch (error) {
      res.status(500).json({ message: "Something went wrong" });
      console.log(error);
    }
  };
  const getoneuser=async(req,res)=>{
    try
    {
const result=await user.find({_id:req.params.id});
res.status(201).json({ data:result });
    }
    catch (error) {
        res.status(500).json({ message: "Something went wrong" });
        console.log(error);
      }
  }
  module.exports={useradd,getalluser,deleteuser,updateuser,getoneuser}