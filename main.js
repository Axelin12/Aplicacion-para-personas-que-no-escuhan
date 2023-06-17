//"https://teachablemachine.withgoogle.com/models/g7JKOQDmJ/"
function Sonidos(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/g7JKOQDmJ/model.json",modelReady);
}
function modelReady(){
    console.log("Modelo Listo");
    classifier.classify(gotResults);
}
function gotResults(error, results){
    if (error) {
        console.error(error);
    }else {
        console.log(results);

        random_number_r = Math.floor(Math.random() *255)+ 1;
        random_number_g = Math.floor(Math.random() *255)+ 1;
        random_number_b = Math.floor(Math.random() *255)+ 1;
        document.getElementById("resultado_etiqueta").innerHTML='Escucho: '+results[0].label
        document.getElementById("resultado_confiabilidad").innerHTML='Precision: '+(results[0]. confidence*100).toFixed(2)+" %";
        document.getElementById("resultado_etiqueta").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("resultado_confiabilidad").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        img=document.getElementById("alien1");
        img1=document.getElementById("alien2");
        img2=document.getElementById("alien3"); 
        img3=document.getElementById("alien4");
        if(results[0].label == "APLAUSOS") {
            img.src= 'aliens-01.gif';
            img1.src= 'aliens-02.png';
            img2.src= 'aliens-03.png';
            img3.src= 'aliens-04.png';

        } else if (results[0].label=="LEGO FLORERO"){
            img.src='aliens-01.png';
            img1.src='aliens-02.gif';
            img2.src='aliens-03.png';
            img3.src='aliens-04.png';
     
        } else if (results[0].label=="CANCION"){
            img.src='aliens-01.png';
            img1.src='aliens-02.png';
            img2.src='aliens-03.gif';
            img3.src='aliens-04.png';
        } else{
            img.src='aliens-01.png';
            img1.src='aliens-02.png';
            img2.src='aliens-03.png';
            img3.src='aliens-04.gif';

    }
    
}
}