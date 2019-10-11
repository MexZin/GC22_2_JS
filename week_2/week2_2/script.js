function textInDiv(id, text){
    div = document.getElementById(id);
    div.innerText = text;
}

function boldInDiv(id, text){
    div = document.getElementById(id);
    div.innerHTML = "<b>"+text+"</b>";
    div.style.borderBottom = "10px solid green";
}