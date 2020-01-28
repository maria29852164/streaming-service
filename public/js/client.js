




io().on('stream', function (image) {
    let video = document.getElementById('play')
    //video.src+=image
    video.src = image
    //let logger=document.getElementById('logger')
    //logger.text(image)
    // console.log('show')
    //connection en mbits
    console.log(navigator.connection.downlink)

})

