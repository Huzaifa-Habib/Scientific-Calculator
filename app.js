
    var screen = document.querySelector('#screen');



function valueButton (v) {
    var calculatedResult=document.getElementById("screen")
    calculatedResult.value += v
    
}

function toClear() {
    var calculatedResult = document.getElementById("screen");
    calculatedResult.value="" ;
}

function toGetResult () {
    var numbers  = document.getElementById("screen").value;
    var total = eval(numbers)
    document.getElementById("screen").value=total
  

}

function back () {
    var text=document.getElementById("screen").value
    document.getElementById("screen").value=text.substring(0,text.length-1)


}

function calc_sin() {
    var text=document.getElementById("screen").value
     document.getElementById("screen").value=Math.sin(text) ;
     
 
}

function calc_cos() {
    var text=document.getElementById("screen").value
    document.getElementById("screen").value=Math.cos(text);
 
}



function calc_tan() {
    var text=document.getElementById("screen").value
    document.getElementById("screen").value=Math.tan(text);
 
}

function calc_log() {
    var text=document.getElementById("screen").value
    document.getElementById("screen").value=Math.log10(text);
 
}

function calc_power() {
    screen.value=Math.pow(screen.value,2);

 
}

function calc_root() {
    screen.value=Math.sqrt(screen.value,2);

 
}

function calc_pie() {
    screen.value = Math.PI;
    

 
}

function calc_expo() {
    var e = 2.71828182846;
    screen.value=e
}

function calc_exp() {
    screen.value=Math.exp(screen.value)
    

 
}

function calc_cube() {
    screen.value=Math.pow(screen.value,3);

}

function calc_cuberoot() {
    screen.value=Math.sqrt(screen.value,3);

}





