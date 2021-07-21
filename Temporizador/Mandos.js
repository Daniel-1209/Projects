var h=0;
var m=0;
var s=0;
var vec= document.getElementsByClassName("display");
var temp;

function ini(elemnto){

    if(elemnto.value== "Iniciar"){
        
        h= vec[0].value;
        m= vec[1].value;
        s= vec[2].value;
        if(h==""){
            h=0;
        }
        if(m==""){
            m=0;
        }
        if(s==""){
            s=0;
        }

        to=parseInt(h*3600) + parseInt(m*60) + parseInt(s);

        if( to<=0){
            can();
            return;
        }else if(m>=60){
            can();
            alert("Minutos Incorrectos");
            return;
        }else if(s>=60){
            can();
            alert("Segundos Incorrectos");
            return;
        }

        elemnto.value= "Pausa";

        temp = setInterval( function(){
           
            to--;
            a= Math.floor( to/3600) ;
            b= Math.floor( to/60) - parseInt(a*60);
            c= parseInt(to)- parseInt(b*60)- a*60*60;
            vec[0].value= a;
            vec[1].value= b;
            vec[2].value= c;

            if(a==0 && b==0 && c==0){
                can();
                elemnto.value= "Iniciar";
                alert("El TIEMPO A TERMINADO");
                return;
            } 
            

        }, 1000);


    }else{
        elemnto.value= "Iniciar";
        clearInterval(temp);

    }



}

function can(){
   
    clearInterval(temp);
    
    for(i=0; i<vec.length;i++){
        vec[i].value= "";
    }


}