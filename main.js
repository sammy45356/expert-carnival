https://teachablemachine.withgoogle.com/models/10s8wuM9A/



function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/FyOzzuw02/model.json', modelReady);

}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        random_number_r=Math.floor(Math.random()* 255)+1;
        random_number_g=Math.floor(Math.random()* 255)+1;
        random_number_b=Math.floor(Math.random()* 255)+1;
        document.getElementById("result_label").innerHTML='I can most likely hear -  '+ results[0].label;
        document.getElementById("result_confidence").innerHTML='The not very accurate accuracy is -  '+ (results[0].confidence*100).toFixed(3)+"%";
        document.getElementById("result_label").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_confidence").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        
        
        
        
        img=document.getElementById('bark');
        img1=document.getElementById('moo');
        img2=document.getElementById('roar');
        img3=document.getElementById('background noise');
         
        if (results[0].label =="bark"){
            img.src='dog.png';
        }
        else if (results[0].label =="moo"){
            img.src='moo.png';
        }
        else if (results[0].label =="roar"){
            img.src='lion.jpg';
        }
       

    }
}