let cronometro;
let con = 0;
let t = false;
let q;
let mat = document.getElementsByClassName("l");

const vuelta = () => {
    con++;
    q = con*3;
    let l3 =  mat[0+q];
    let l2 =  mat[1+q];
    let l1 =  mat[2+q];
   
    if (mils < 10) {
        l1.innerHTML = ".0" + mils;
    } else {
        l1.innerHTML = "." + mils;
    }
    
    if (seg < 10) {
        l2.innerHTML = ":0" +  + seg;
    } else {
        l2.innerHTML = ":" + seg;
    }

    if (min < 10) {
        l3.innerHTML = "Vuelta " + con + "      " + "0" + + min;
    } else {
        l3.innerHTML = "Vuelta "+ con +"     " + con + " " + + min;
    }
}

let mils = 0;
let seg = 0;
let min = 0;
    
const para = () => {
    clearInterval(cronometro);
    let ms = document.getElementById("ms");
    let s = document.getElementById("seg");
    let m = document.getElementById("min");
    ms.innerHTML = "00";
    s.innerHTML = "00";
    m.innerHTML = "00";
    mils = 0;
    seg = 0;
    min = 0;
    con = 0;
    t = true;

    for (let i = 0; mat.length; i++) {
        mat[i].innerHTML = "";
    }
    ini();
}

const ini = () => {

    if ( elemento.value === 'Inicio') {
        clearInterval(cronometro);
        ms = document.getElementById("ms");
        s = document.getElementById("seg");
        m = document.getElementById("min");
        elemento.value="Pausa";

        cronometro= setInterval(() => {
            mils++;
            if (mils === 100){
                mils = 0;
                seg++;
            }

            if (mils < 10) {
                ms.innerHTML = "0" + mils;
            } else {
                ms.innerHTML = mils;
            }
            
            if (seg === 60) {
                seg = 0;
                min++;
            }
            if (seg < 10) {
                s.innerHTML = "0" + seg;
            } else {
                s.innerHTML = seg;
            }
        
            if (min === 99) {
                min = 0;
            }

            if (min < 10) {
                m.innerHTML = "0" + min;
            } else {
                m.innerHTML = min;
            }

        },10);

    } else {
        elemento.value = "Inicio";
        clearInterval(cronometro);
    }

}
