import {Router} from 'express'
const path =require('path')

const router=Router()

router.get('/',(req,res)=>{
    
    res.redirect('index.html')
})

module.exports ={router};