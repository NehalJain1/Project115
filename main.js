function preload() {

}
function setup() {
    canvas = createCanvas(400,400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400,400);
    video.hide();
    poseNet = ml5.poseNet(video,model_loaded);
    poseNet.on("pose",gotpose);
}
function draw() {
    image(video,0,0,400,400);
}
function Take_snapshot() {
    save("Clown_filter.png");
}
function model_loaded() {
    console.log("PoseNet is initialised");
}
function gotpose(results) {
    if(results.length > 0){
console.log(results);
console.log("left eye x - ",results[0].pose.leftEye.x);
console.log("left eye y - ",results[0].pose.leftEye.y);
console.log("right eye x - ",results[0].pose.rightEye.x);
console.log("right eye y - ",results[0].pose.rightEye.y);
    }
}
  