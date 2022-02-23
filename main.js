var a;
var Foryou = document.getElementById("Foryou");
var Micon = document.getElementById("Micon");
var image = document.getElementById("image");

function music(){
    if(Foryou.paused){
        Foryou.play();
        Foryou.loop = true;
    }
    else{Foryou.pause();
        return a=1;}

}

function show_hide(){
    if(a==1){
        document.getElementById("image").style.display="none";
        return a=0;
    }
    else{
        document.getElementById("image").style.display="block";
        return a=1;

    }
    
}
