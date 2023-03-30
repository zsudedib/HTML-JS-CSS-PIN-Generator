const btns = document.getElementsByClassName("btns");
const lengthInput = document.getElementById("length-input");

const uppercsBtn = btns[0];
const lowercsBtn = btns[1];
const specialBtn = btns[2];
const numbersBtn = btns[3];

var uppercsOn = false;
var lowercsOn = false;
var specialOn = false;
var numbersOn = false;

const submit = document.getElementById("submit");
const    pin = document.getElementById("pin");

var min = 4;
var max = 20;

var lower = ' ';
var upper = ' ';
var num = ' ';
var special = ' ';
choice = [];


addBtnStyle = function(s){
    s.style.background = "#000000";
    s.style.color = "#fff";
}
removeBtnStyle = function(s){
    s.style.background = "#00000000";
    s.style.color = "#00000080";
}


uppercsBtn.onclick = function(){
    if (uppercsOn == false){
        uppercsOn = true;
        upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        addBtnStyle(this);
    }else{
        uppercsOn = false;
        upper = ' ';
        removeBtnStyle(this);
    }
    console.log(uppercsOn);
}

lowercsBtn.onclick = function(){
    if (lowercsOn == false){
        lowercsOn = true;
        lower = 'abcdefghijklmnopqrstuvwxyz';
        addBtnStyle(this);
    }else{
        lowercsOn = false;
        lower = ' ';
        removeBtnStyle(this);
    }
    console.log(lowercsOn);
}

specialBtn.onclick = function(){
    if (specialOn == false){
        specialOn = true;
        special = "!!#$$%&'()_*+-._:;?@[]^_`_{|}~_";
        addBtnStyle(this);
    }else{
        specialOn = false;
        special = ' ';
        removeBtnStyle(this);
    }
    console.log(specialOn);
}

numbersBtn.onclick = function(){
    if (numbersOn == false){
        numbersOn = true;
        num = "0123456789";
        addBtnStyle(this);
    }else{
        numbersOn = false;
        num = ' ';
        removeBtnStyle(this);
    }
    console.log(numbersOn);
}

var random = function(i){
    return Math.floor(Math.random() * i) // i being the range starting from 0. if i is 5, the range is 0 to 4
}



submit.onclick = function(){

    if(uppercsOn == false &&
        lowercsOn == false &&
        specialOn == false &&
        numbersOn == false){
            pin.innerHTML = 'Your PIN is empty!';
    }else{
                pin.innerHTML = '';

        while (pin.innerHTML.length < lengthInput.value){
            
            choice = [upper[random(upper.length)],
            lower[random(lower.length)],
            num[random(num.length)],
            special[random(special.length)]]
        
            pin.innerHTML+=choice[random(choice.length)].replace(' ','');
        }
    }


}