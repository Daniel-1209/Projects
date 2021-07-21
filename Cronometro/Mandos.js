
var cronometro;
var con=0;
var t= false;
var q;
var mat= document.getElementsByClassName("l");

function vuelta(){
    con++;
    q= con*3;
    l3=  mat[0+q];
    l2=  mat[1+q];
    l1=  mat[2+q];
    

   
    if(mils<10){
        l1.innerHTML=".0" + mils;
        
    }else{
        l1.innerHTML="."+ mils;
    }
    
    if(seg<10){
        l2.innerHTML=":0" +  + seg;
    }else{
        l2.innerHTML= ":"+seg;
    }

    if(min<10){
        l3.innerHTML= "Vuelta "+con +"      " +  "0" + + min;
    }else{
        l3.innerHTML=  "Vuelta "+con +"     " +con+ " "+ + min;
    }

   
    
}


mils=0;
seg=0;
min=0;
    
function para(){
    clearInterval(cronometro);
    ms= document.getElementById("ms");
    s= document.getElementById("seg");
    m= document.getElementById("min");
    ms.innerHTML= "00";
    s.innerHTML= "00";
    m.innerHTML= "00";
    mils=0;
    seg=0;
    min=0;
    con=0;
    t=true;

    for(i=0; mat.length; i++){
        mat[i].innerHTML="";
    }
    ini();
}

function ini(elemento){
    

    if( elemento.value== "Inicio"){

    clearInterval(cronometro);
    ms= document.getElementById("ms");
    s= document.getElementById("seg");
    m= document.getElementById("min");
    
    elemento.value="Pausa";

    

    cronometro= setInterval(function(){
        mils++;
        if( mils==100){
            mils=0;
            seg++;
        }
        if(mils<10){
            ms.innerHTML= "0" + mils;
        }else{
            ms.innerHTML= mils;
        }
        

        if( seg==60){
            seg=0;
            min++;
        }
        if( seg<10){
            s.innerHTML= "0" + seg;
        }else{
            s.innerHTML= seg;
        }
       

        if( min==99){
            min=0;
            
        }
        if(min<10){
            m.innerHTML= "0" + min;
        }else{
            m.innerHTML= min;
        }

    },10);

    }else{
        elemento.value="Inicio";
        clearInterval(cronometro);


    }


}
