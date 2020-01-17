function br(n, m){
    bro = document.getElementById("div");
    for(i=n; i<=m; i++){
        bro.innerHTML += i;
        bro.innerHTML += "<br>";
    }
}

br(25, 45);