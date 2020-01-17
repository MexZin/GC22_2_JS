// var name = "Daviti";
// var admin = name;

// alert(admin);

// function ricxvi(){
//     data = prompt("Sheiyvanet rixcvi");
//     if(data>0){
//         alert("1");
//     }else if(data<0){
//         alert("-1");
//     }
//     else{
//         alert("0");
//     }
// }

// ricxvi();

// function luwi(){
// d = document.getElementById("div");
//     for(i=2; i<=20; i += 2){
//         d = document.getElementById("div");
//         d.innerHTML += i;
//         d.innerHTML += "<br>";
//     }
// }

// luwi();


// function wh(){
//     i = 0; 
//     while(i < 3){
//     alert("ricxvi " + i + " !");
//     i++;
//     }
// }
// wh();

pass = "123456";

function lab204(){
    console.log(pass);
    while(true){
        data = prompt("Enter password:");
        if(data==pass){
            break;
        }
    }
}

//lab204();


// function lab205(n){
//     d = document.getElementById("div");
//     d.innerHTML = n;
//     t = "Yes";
//     for(i = 2; i <= n-1; i++){
//         if(n%i == 0){
//             t = "No";
//             break;
//         }
//     }
//     console.log(t);
// }

// lab205(27);

function lab301(s){
    w1 = "reklama";
    console.log(s.indexOf(w1));
    if(s.indexOf(w1) != -1){
        console.log("yes");
    }else{
        console.log("No");
    }
    
}

lab301("es reklama aris chemi striqoni");
