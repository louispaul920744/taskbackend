const express=require('express');
const router=express.Router();
const useradd=require('../controller/user')
router.post('/adduser',useradd.useradd)
router.get('/getall',useradd.getalluser);
router.delete('/delete/:id',useradd.deleteuser);
router.post('/update/:id',useradd.updateuser);
router.get('/getoneuser/:id',useradd.getoneuser)
module.exports=router;