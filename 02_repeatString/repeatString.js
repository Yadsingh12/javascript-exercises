const repeatString = function(name, times) {
    let str="";
    if(times<0) return "ERROR";
    for(i=0; i<times; i++) {
        str = str + name;
    }
    return str;
};

// Do not edit below this line
module.exports = repeatString;
