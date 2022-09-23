const User=require('../models/User');
const getAllUser= async(req,res)=>{
    try{
const listofuser=await User.find()
if(listofuser.length===0){
    res.status(201).json({msg:'error Data !'})
}
else{
    res.status(201).json({users:listofuser})
}
    }catch(error){
res.status(401).json({msg:'failed to get all users !'})
    }
}
const getOneUser= async(req,res)=>{
    const id=req.params.id;
    try{
        const findOne=await User.findById(id);
        if(!findOne){
            return res.status(201).json({msg:'user doesn t existe !'});
        }
        else{
            res.satus(201).json({user:findOne})
        }
    }catch(error){
        res.status(401).json({msg:'operation is failed !'});
    }
}
const addUser= async(req,res)=>{
    const Infouser=req.body;
    try {
        const newuser=await User({userName: Infouser.userName,Email:Infouser.Email,age: Infouser.age});
        const oneuser=await User.findOne({Email:Infouser.Email});
        if(oneuser){
            res.status(201).json({msg:'user is already existe!'});
        }
        await newuser.save();
        res.status(201).json({msg:'user is successfully add ',user:newuser});
    } catch (error) {
       res.status(401).json({msg:' failed to add user'});
    }
}
const updateUser= async(req,res)=>{
    const Infouser=req.body;
    try {
      const update=await User.Infouser.findOneAndUpdate({Emil:Infouser.Email},{userName:Infouser.userName},{age:Infouser.age})
      res.status(201)
    .json({msg:'updated user ',user:update}); 
    } catch (error) {
        res.status(401).json({msg:'fail to update !'});
    }
}
const deleteUser= async(req,res)=>{
    const Infouser=req.body;
    try {
const deleteuser =await User.findOneAndRemove({Email:Infouser.Email});
const findlistofuser=await User.find();
res.status(201).json({msg:'user was deleted successfully',deleteuser:deleteuser,user:findlistofuser});
    } catch (error) {
        res.status(401).json({msg:'failed to delete user'});
    }
}
module.exports={getAllUser,getOneUser,addUser,updateUser,deleteUser};