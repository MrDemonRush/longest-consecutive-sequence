module.exports = function longestConsecutiveLength(array) {
  if(array.length == 0){
    return 0;
} else if(array.length == 1){
    return 1;
}


 let count = 0;
array.sort(function(a,b){return a-b;})
const arr = [];

for(let i = 0 ; i < array.length ; i++){
  if(array[i]-array[i+1] !== -1 && array[i]!=array[i+1]){
        count = 0;
    }else if(array[i]-array[i+1] === -1){
        count++; 
        arr.push(count);
    }
} 
if(arr.length === 0){
  return 1;
}
const max = Math.max.apply(Math, arr);
return max+1; 
}
