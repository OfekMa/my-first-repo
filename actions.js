// const { request, response } = require('express');
// const express = require('express');
// const mongoose = require('mongoose');
// const router = express.Router();
// const User = require('../models/user');

// // router.post('/createAccount',(request,response)=>{
// //     const full_Name = request.body.full_Name;
// //     const user_Name = request.body.user_Name;
// //     const _Password = request.body._Password;
// //     const Mobile = request.body.Mobile;
// //     const id = mongoose.Types.ObjectId();
// //     ///
// //     const _user = new User({
// //         _id: id,
// //         userName:user_Name,
// //         Password:_Password,
// //         fullName:full_Name,
// //         mobile:Mobile

// //     });
//     // _user.save()
//     // .then(results =>{
//     //     return response.status(200).json({
//     //         message:results
//     //     })
//     // })
//     // .catch(error =>{
//     //     return response.status(500).json({
//     //         message:error
//     //     })
//     // })


// // });

// router.get('/sayHello', (request,response)=>{
//     return response.status(200).json({
//         message:'hello from api server'
//     });
// })

const { response } = require('express');
const express = require('express');
const router = express.Router();
let usres = [
    {
        name:'Bill Gates',
        company:'Microsoft'},
        {
            name:'Steve Jobs',
            company:'Apple'
        },
        {
            name:'Steve Wazniak',
            company:'Apple'
        },
        {
            name:'Larry Page',
            company:'Google'
        }

];
router.post('/register', (request,response)=>{
    const {email,password}=request.body;
    usres.push({email:email,password:password});
})

const data1 = users.find(x => x.company == 'Apple');


return response.status(200).json({
    message:data2
})


module.exports = router;