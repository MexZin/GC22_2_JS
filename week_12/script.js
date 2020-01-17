m = [2, 8, 6, 11];

function printM(){
    console.log(m);
}

printM();

function changeM(index=1, item=77){
    m[index] = item;
}

changeM(2, 800);
printM();

function changeRandomM(){
    index = Math.floor(Math.random()*m.length);
    console.log(index);
    m[index] = 17;
}

changeRandomM();
printM();

function insertRandom(){
    m.push(Math.random());
}
insertRandom();
printM();

function insertRandomNumbers(number){
    for(var i=0; i<number; i++){
        m.push(Math.random());
    }
}
insertRandomNumbers(3);
printM();

function insertBegin(){
    m.unshift(Math.random());
}

insertBegin();
printM();

function deleteFirst(){
    m.shift();
}
deleteFirst();
printM();

function deleteThree(number){
    for(var i=0; i<number; i++){
        m.shift();
    }
}

// deleteThree(3);
// printM();

function deleteBolo(){
    m.pop();
}
// deleteBolo();
// printM();

function deleteElement(){
    m.splice(3, 2);
}
deleteElement();
printM();

function deleteRandomElement(){
    index = Math.floor(Math.random()*m.length);
    m.splice(index, 1);
}
deleteRandomElement();
printM();

function insertElement(){
    m.splice(2, 0, -5);
}
insertElement();
printM();

function insertRandom(num){
    for(var i=0; i<num; i++){
        m.splice(2, 0, Math.random());
    }
}
insertRandom(10);
printM();