Webcam.set({
    width:350,
    height:300,
    image_quality:'png',
    png_quality:100
});
camera = document.getElementById("camera");

Webcam.attach("#camera");

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version', ml5.version);
classifier = ml5.imageclassifier("https://teachablemachine.withgoogle.com/models/Dzxv7IVWJ/model.json", moadelLoaded);

function moadelLoaded(){
    console.log("Model Loaded");
}