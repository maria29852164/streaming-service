import {Router} from 'express'

import {showVideo} from '../controller/controller'

const router=Router()


router.get('/',(req,res)=>{
    
    res.redirect('index.html')
})
router.get('/video',showVideo)




module.exports ={router};