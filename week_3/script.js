function numberTestOne(id){
    el = document.getElementById(id);
    el.innerHTML = Number.MAX_VALUE;
    el.innerHTML += "<br><br>";
    el.innerHTML += Number.MIN_VALUE;
    el.style.fontSize = "2em";
}

function numberTestTwo(id){
    n = document.getElementById("number").value;
    result = document.getElementById(id);
    result.style.fontSize = "2em";
    result.innerHTML = Math.floor(n);
    result.innerHTML += "<br><br>";
}

function numberTestThree(){
    return Math.random();
    
}