const express=require('express');
const router=express.Router();
const pages=require('../controller/pages')
router.post('/addpage',pages.pageadd)
router.get('/getall',pages.getallpage);
router.delete('/delete',pages.deletepage);
router.post('/update/:id',pages.updatepage);
router.get('/getonepage/:id',pages.getonepage)
module.exports=router;