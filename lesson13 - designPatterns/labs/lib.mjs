export {square, diagonal}

let sqrt = Math.sqrt;

function square(x){
    return x * x;
}

function diagonal(x, y){
    return sqrt(square(x) + square(y))
}