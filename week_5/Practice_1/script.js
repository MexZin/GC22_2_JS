function paintImg(trNumber, tdNumber){
    imgs = document.getElementById('content');
    console.log(imgs);
    // r = Math.ceil(Math.random()*5);
    // console.log(r);

    tl = "<table class='mytable'>";
    
    for(j=0; j<trNumber; j++){
        tl +="<tr>";
        for(i=0; i<tdNumber; i++){
            r = Math.ceil(Math.random()*5);
            tl +="<td>";
            tl += "<img src=img/" + r + ".PNG>"
            tl +="</td>";
        } 
        tl +="</tr>";
    }

    tl += "</table>";
    console.log(tl);
    imgs.innerHTML = tl;
}