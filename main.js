Webcam.set({
    width:360,
    height:250,
    image_format : 'png',
    png_quality:90
});
camera = document.getElementById("#camera");

function take_snapshot()
{
    Webcame.snap(function(data_url){
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
        data_url="https://teachablemachine.withgoogle.com/models/XyVs0AyKj/";
    });
}

function save()
{
    link = document.getElementById("Link");
    image = document.getElementById("selfie_image").src;
    link.href = image;
    link.click();
}
function take_snapshot()
{
    webcam.snap(function(data_url) {
        document.getElementById("result").innerHTML = '<img id+"captured_image" src="'+data_url+'"/>';
    });
}
console.log('ml5 version:' , ml5.version);
classifier = ml5.imageClassifier('',modelLoaded);

function modelLoaded() {
    console.log('Model Loaded!!');
}

function speak() {
    var synth = window.speechSynthesis;
    spaek_data_1 = "The first prediction is " + prediction_1;
    speak_data_2 = "And the second prediction is " + prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    utterThis.rate = 0.5;
    synth.speak(utterThis);
}
function modelLoaded(){
    console.log('Model Loaded!');
}
function check() 
{
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}
function gotResult(error, result) {
 if (error) {
     console.error(error);
 }else{
     console.log(results);
     document.getElementById("result_emotion_name").innerHTML = result[0].label;
     document.getElementById("result_emotion_name").innerHTML = result[1].label;
     prediction_1 = result[0].label;
     prediction_2 = result[1].label;
     speak();
     if(result[0].label== "happy")
     {
        document.getElementById("update_emotion").innerHTML = "&#128522;";   
     }
     if(result[0].label== "sad")
     {
        document.getElementById("update_emotion").innerHTML = "&#128532;";   
     }
     if(result[0].label== "angry")
     {
        document.getElementById("update_emotion").innerHTML = "&#128548;";   
     }
     if(result[0].label== "happy")
     {
        document.getElementById("update_emotion").innerHTML = "&#128522;";   
     }
     if(result[0].label== "sad")
     {
        document.getElementById("update_emotion").innerHTML = "&#128532;";   
     }
     if(result[0].label== "angry")
     {
        document.getElementById("update_emotion").innerHTML = "&#128548;";   
     }
    }
}
     


     
