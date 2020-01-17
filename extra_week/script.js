numbers = [12, 34, 56, 67, 87];

function test1(){
    console.log(numbers);
}

function test2(){
    console.log(numbers[2]);
    numbers[2] = 17;
}

function test3(){
    console.log(numbers[3]);
    numbers[3] = Math.random();
}

function test4(){
    numbers.push(12);
    console.log(numbers);
}

function test5(){

}


// test1();
// test2();
// test1();
// test3();
// test1();
// test4();
// test5();


m = [2, 3, 5, 6, 7, 1, 0];

function tSplice(){
    console.log(m);
    for(var i=0; i<=4; i++){
        m.splice(3, 0, Math.random());
    }
    console.log(m);
}

// tSplice();

N = [];
function insertIntoN(Num, a, b){
    for(var i=0; i<Num; i++){
        N.push(Math.floor(Math.random()*(b-a+1)+a));
    }
    console.log(N);
}

//insertIntoN(30, 35, 43);

// function countNumbers(){
//     var count = 0;
//     for(var i=0; i < N.length; i++){
//         if(N[i] == 40) count ++
       
//     }
//     console.log(count);
// }

// countNumbers();

function countNumbers(){
    count = N.filter(x => x==40).length;
    console.log(count);
}

//countNumbers();

function drawDesck(){
    tb = "<table class='desck'>";
    for(var r = 0; r<8; r++){
        tb += "<tr>";
        var call=0;
        for(var c = 0; c<8; c++){
            call++;
            if(call%2==1)
            tb
        }
    }
}