function same_fun(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false
    }
    for(i = 0; i < arr1.length; i++){
        let correct = arr2.indexOf(arr1[i] ** 2)
        if(correct === -1){
            arr2.splice(correct,1)
        }
   }
   return true
}
//same_fun([1,2,3],[1,9,4]);



function type_2(arr1, arr2){

if(arr1.length !== arr2.length){
    console.log("The array has different lenght")
}

let frequencyCounter1 = {}
let frequencyCounter2 = {}
for(let val of arr1){
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
      
}
for(let val of arr2){
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;

}
console.log(frequencyCounter1);
console.log(frequencyCounter2);
for(let key in frequencyCounter1){
    console.log(key)
    if(!(key ** 2 in frequencyCounter2)){
        return false
    }else if((frequencyCounter2[key ** 2]  !== frequencyCounter1[key])){
        return false
    }
}
    return true

}
arr1=[1,2,3,1]
arr2=[1,4,9]
type_2(arr1,arr2)
