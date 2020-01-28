   

  
    //canvas para recibir la imagen
    let canvas=document.getElementById('preview')
    let video=document.getElementById('video')
  

    
    let div=document.getElementById('logger')
    //dimenciones
    let context=canvas.getContext('2d')
    
    canvas.width=800
    canvas.heigth=600
    context.width=canvas.width
    context.heigth=canvas.heigth
    

    function logger(msg){
        console.log(msg)
    }
    function loadCam(stream){
        
        var url = window.URL || window.webkitURL;
      
    
        try {
           video.srcObject = stream;
        } catch (error) {
           video.src = url.createObjectURL(stream);
        } finally{ 
           video.play();
        }  
       
       
        //this.video.src=window.URL.createObjectURL(stream)
        //video.src= new window.MediaRecorder(stream);
        //video.play()
       
        logger('camera is connected')

    }
    function failCam(){
        logger('camera is not connected')
    }
    function viewVideo(video,context){
        //video se recibe como imagen
        context.drawImage(video,0,0,context.width,context.heigth)
        io().emit('stream',canvas.toDataURL('image/webp'))
        
    }

    document.addEventListener("DOMContentLoaded", function(event) {
        navigator.getUserMedia=(navigator.getUserMedia 
          || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msgGetUserMedia)

          if(navigator.getUserMedia){
              navigator.getUserMedia({video:true,audio:true},loadCam,failCam)
          }
          setInterval(()=>{
              viewVideo(video,context)

          },70)
    })
    
   



