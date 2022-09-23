const express=require('express');
const router=express.Router()
const {getAllUser,getOneUser,addUser, updateUser,deleteUser}=require('../Controller/usercontroller');
router.get('/',getAllUser);
router.get('/:id',getOneUser);
router.post('/',addUser);
router.put('/:id',updateUser);
router.delete('/',deleteUser);
module.exports=router;
