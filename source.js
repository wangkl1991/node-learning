// new 
function create(Con, ...args) {
    this.obj = {};
    Object.setPrototypeOf(this.obj, Con.prototype);
    let result = Con.apply(this.obj, args);
    return result instanceof Object ? result : this.obj;
}

//ISArray
Array.myIsArray = function(obj) {
    return Object.prototype.toString.call(Object(obj)) === '[object Array]';
}

//object.create()

// js deep copy
let newObj = JSON.parse(JSON.stringify(obj));