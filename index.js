const cats = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendCat(){
    cats.push('Ralph');
}

function destructivelyPrependCat(){
    cats.unshift('Bob');
}

function destructivelyRemoveLastCat(){
    cats.splice(-1);
}

function destructivelyRemoveFirstCat(){
    cats.shift(0);
}

function appendCat(){
    return [...cats,'Broom'];
}

function prependCat(){
    return ['Arnold',...cats];
}

function removeLastCat(){
    return cats.slice(0,2);
}

function removeFirstCat(){
    return cats.slice(1);
}