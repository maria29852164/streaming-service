import{http,port} from './src/serve'
const sockets=require('socket.io')(http)






http.listen(port,()=>console.log(`server at running in the port ${port}`))

sockets.on('connection',function(socket){
    socket.on('stream',function(image){
        socket.broadcast.emit('stream',image)
    })
})

