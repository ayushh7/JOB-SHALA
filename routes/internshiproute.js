const express=require('express');
const router=express.Router();

router.get('/', (req, res) => {
    res.render('internships/internships')
})

module.exports=router;