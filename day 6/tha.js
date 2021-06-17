// Q1
function is_array(gg){
    return gg.constructor === Array
}
console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));
console.log("--------------------------------------------")

// Q2
array_Clone = (gg)=>{
    return JSON.parse(JSON.stringify(gg));
}
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));
console.log("--------------------------------------------")

// Q3
first = (gg,n = 0)=>{
    if (n == 0){
        return gg[0]
    }
    if (n<0){
        return[]
    }
    return gg.slice(0,n)
}
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));
console.log("--------------------------------------------")

// Q4
myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.join(','))
console.log(myColor.join('+'))
console.log("--------------------------------------------")

// Q5
let gg = {};
var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
for(let i = 0;i<arr1.length;i++){
    if(!(arr1[i] in gg)){
        gg[arr1[i]] = 1
    }
    else{
        gg[arr1[i]] += 1
    }
}
let key = 0
let max = 1
for(keyy in gg){
    if(gg[keyy]>max){
        max = gg[keyy]
        key = keyy
    }
}
console.log({[key] : max})


