const express=require('express');
const router=express.Router();

router.get('/internships', (req, res) => {
    res.render('internships/internships')
})

module.exports=router;