leftwristX=0;
rightwristX=0;
difference=0;
function setup(){
    video=createCapture(VIDEO);
video.size(550,510);

    canvas=createCanvas(600,600);
    canvas.position(600,250);
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotposes);
}

function draw(){
background('lightsteelblue');
textSize(difference);
fill('gray');
text("Devesh",50,100);
}
function modelLoaded() {
    console.log('poseNet has been loaded');
}

function gotposes(results){
    if(results.length>0){
console.log(results);
leftwristX=results[0].pose.leftWrist.x;
rightwristX=results[0].pose.rightWrist.x;
difference=floor(leftwristX-rightwristX);

    }
}