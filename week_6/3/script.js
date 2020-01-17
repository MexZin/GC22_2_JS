function bratuxa(m, n){
    bro = document.getElementById("div");
    if(m < n)
    {
        for(i=m; i<=n; i++)
        {
            bro.innerHTML += i;
            bro.innerHTML += "<br>";
        }
    }
    else
    {
        for(i=m; i>=n; i--)
        {
            bro.innerHTML += i;
            bro.innerHTML += "<br>";
        }
    }

}

bratuxa(35, 25);