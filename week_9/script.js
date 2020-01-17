// d = new Date();
// document.write(d);
// document.write("<br>");
// document.write(d.getTime());
// document.write("<br>");
// document.write(d.getTime()/(365*24*3600*1000));
// document.write("<br>");
// document.write(d.getFullYear());
// document.write("<br>");
// document.write(d.getMonth()+1);
// document.write("<br>");
// document.write(d.getDay());
// document.write("<br>");
// document.write(d.getHours());
// document.write("<br>");
// document.write(d.getMinutes());
// document.write("<br>");
// document.write(d.getUTCHours());
// document.write("<br>");


function testTime(){
    alert("Hello My Friend!!!");
}

//setTimeout(testTime, 5000);
//setInterval(testTime, 2000);

// m = new Date();
// document.write(m.getFullYear());
// document.write("   ");
// monthNames = ["იანვარი", "თებერვალი", "მარტი", "აპრილი", "მაისი", "ივნისი",
//   "ივლისი", "აგვისტო", "სექტებმერი", "ოქტომბერი", "ნოემბერი", "დეკემბერი"];
// document.write(monthNames[m.getMonth()]);
// document.write("    ");
// document.write(m.getDate());
// document.write("    ");
// dayNames = [ "კვირა", "ორშაბათი", "სამშაბათი", "ოთხშაბათი", "ხუთშაბათი", "პარასკევი", "შაბათი"];
// document.write(dayNames[m.getDay()]);
// document.write("    ");
// document.write(m.getHours());
// document.write(":");
// document.write(m.getMinutes());
// document.write(":");
// document.write(m.getSeconds());

function elWatch(){
    date = new Date;
    hour = date.getHours();
    min = date.getMinutes();
    sec = date.getSeconds();
    d = document.getElementById("div");
    d.innerHTML =  hour;
    d.innerHTML +=  ":";
    d.innerHTML +=  min;
    d.innerHTML +=  ":";
    if(sec<10){
        d.innerHTML +=  '0'+sec;
    }else{
        d.innerHTML +=  sec;
    }
}

//setInterval(elWatch, 1000);
//elWatch();

function countTime(){
    t = new Date('2016-01-01 00:00:00');
    document.write(t);
    current = new Date();
    document.write("<hr>");
    document.write(current);
    document.write("<hr>");
    timeDiff = current-t;
    document.write(current-t);
    document.write("<hr>");

    document.write("<hr>");
    document.write(timeDiff/(24*3600*1000));


}

//countTime();


left = 0;
function getRight(){
    ball = document.getElementById("ball");
    left += 10;
    ball.style.left = left+"px";
    if(left>300){
        clearInterval(k);
    }
}

function clickRight(){
    k = setInterval(getRight, 1000);
}

getRight();
clickRight();