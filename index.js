
let fn = (num) => {
    console.log(num);
}

let repeat = (n, f) => {
    for(let i = 0; i< n; i ++){
        f(i);
    }

}


repeat(10, fn);
