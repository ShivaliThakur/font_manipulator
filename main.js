rightWristX= 0;
leftWristX= 0;
diffRightAndLeft= 0;

function setup(){
    canvas= createCanvas(800,800);
    background('white');
    canvas.position(500,100)
    video= createCapture(VIDEO);
    video.size(350,350);
    posenet= ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('model loaded');
}



function gotPoses(results){
    console.log(results);
    rightWristX= results[0].pose.rightWrist.x;
    leftWristX= results[0].pose.leftWrist.x;
    diffRightAndLeft= Math.floor(leftWristX - rightWristX);
    console.log(diffRightAndLeft);
}

function draw(){
    background('white');
    textSize(diffRightAndLeft);
    fill('cyan');
text('Shivali', 100, 400);
document.getElementById('font_size').innerHTML= "Font Size: " + diffRightAndLeft + 'px';
}