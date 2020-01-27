import express from 'express'
import path from 'path'
import {router} from './routes/router.js'

const app =express()

const io =require('socket.io')
const dir=path.join(__dirname,'public')
let port=process.env.PORT || 3000


app.use(express.urlencoded({extended:true}))
app.use(router)


app.use(express.static(dir))
app.listen(port,()=>console.log(`server at running in the port ${port}`))

const server=require('http').Server(app)




