function setup(){
    canvas = createCanvas(400,400)
    canvas.position(110,250)
    video = createCapture(VIDEO)
    video.hide()
    tintColor=""
}

function draw(){
    image(video,0,0,400,400)
    tint(tintColor)
}

function applyFilter(){
    tintColor= document.getElementById("inputColor").value
}

function take_snapshot(){
    save("micah.jpg")
}