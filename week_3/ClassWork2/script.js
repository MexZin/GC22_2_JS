function m1(id){
    n = document.getElementById("div1").value;
    result = document.getElementById(id);
    result.style.fontSize = "2em";
    result.innerHTML = Math.ceil(n);
    result.innerHTML += "<br><br>";
}