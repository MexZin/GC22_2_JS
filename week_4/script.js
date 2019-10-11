function testAlert(){
    alert("Hello GAU");
}

function testPrompt(){
    div = document.getElementById("result1");
    data = prompt("Your name");
    //console.log(data);
    if(data==null){
        data = "This is error";
    }
    else{
        data = "hello, " + data;
    }
    div.innerHTML = data;
}
function testConfirm(){
    confirm("Are you a man?");
    console.log(data);
}

function testString1(){
    text = "Misha is a boy he is a good boy!!";
    text1 = "vaxo is a boy";
    console.log(text);
    console.log(text.length);
    console.log(text.indexOf("is"));
    console.log(text.lastIndexOf("is"));
    console.log(text.slice(3, 5));
    console.log(text.substr(3, 5));
    //text.replace("boy", "man");
    console.log(text.replace(new RegExp("boy", 'g'), "man"));
    textFull = text+text1;
    console.log(textFull);
}

function testChar(){
    text = "Misha is a boy!!";
    console.log(text[3]);
    console.log(text.charCodeAt(4));
    console.log(text.charCodeAt(4).toString(2));
    
} 

// function findANumber(){
//     text = document.getElementById("textId").value;
//     console.log(text);
//     // count = 0;
//     // for(i=0; i<text.length; i++){
//     //     if(text[i]=='a', 'A'){
//     //         count++;
//     //     }
//     // }
//     count = text.toLowerCase().match(/a/g).length;
//     document.getElementById("result3").innerText = count;
// }

// function randomText(){
//     div = document.getElementById("result4");
//     div.innerHTML;
// }

function makeid() {
    text = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    for(i=0; i<10; i++){
        word = text.charAt(Math.floor(Math.random()*text.length));
        document.getElementById("result4").innerHTML += word;
    }
}
