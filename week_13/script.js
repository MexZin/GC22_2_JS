var abc = document.getElementById("abc");
//var input = document.getElementsByClassName("in");
var input = document.querySelectorAll(".in");
console.log(input);
var allow = false;


function generateABC(){
    var a_z = "az";
    console.log(a_z.charCodeAt(1))
    
    for(var i = a_z.charCodeAt(0); i<=a_z.charCodeAt(1); i++){
        console.log(String.fromCharCode(i));
        var button = document.createElement("button");
        button.innerText = String.fromCharCode(i);
        button.classList.add('abcChar');
        button.addEventListener("click", function(event){
            console.log(event.target);
            if(allow){
            input[1].value += event.target.innerText;
            }
        });
                    
        abc.appendChild(button);
    }
    console.log(button);
}
generateABC();

document.getElementById("allow").addEventListener("click", function(event){
    if(allow){
        allow = false;
        event.target.value = "akrdzaluri";
    }else{
        allow = true;
        event.target.value = "nebadartulia";
    }
})

document.getElementById("del").addEventListener("click", function(){
    var delText = input[1].value;
    // delText = delText.split("");
    // delText.pop();
    // input[1].value = delText.join("");
    // console.log(delText);
    input[1].value = delText.substring(0, delText.length - 1);
})