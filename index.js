function setup(){
    canvas = createCanvas(400,400)
    canvas.center()
    camera = createCapture(VIDEO)
    camera.hide();
    frame = loadImage('frame.png')
}
function draw(){
    image(camera,50,50,300,300)
    image(frame,0,0,400,400)
}
function take_snapshot(){
    save("snap");
}