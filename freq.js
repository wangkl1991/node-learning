function debounce(func, ms = 1000) {
    let timer;
    return function(...args) {
        if(timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            func.apply(this, args)
        }, ms)
    }
}

const task = () => { console.log('run task')};
const debounceTask = debounce(task, 1000)
// window.addEventListener('scroll', debounceTask);


function throttle(func, ms = 1000) {
    let canRun = true;
    return function(...args) {
        if(!canRun) return 
        canRun = false;
        setTimeout(() => {
            func.apply(this, args);
            canRun = true;
        }, ms)
    }
}

const task1 = () => {console.log('run one time')};
const throttleTask = throttle(task1, 1000);
// window.addEventListener('scroll', throttleTask);

//curry
function curry(func) {
    return function curried(...args) {
        console.log('a' + args.length );
        console.log('f' + func.length);
        if(args.length >= func.length) {
            return func.apply(this, args)
        }
        return function (...args2) {
            console.log("kl" + args2);
            return curried.apply(this, args.concat(args2))
        }
    }
}

//
function sum (a, b, c) {
    return a + b + c;
}

const curriedSum = curry(sum);
//console.log(curriedSum(1,2,3));
console.log(curriedSum(1)(2,3));

// console.log(curriedSum(1)(2)(3));
