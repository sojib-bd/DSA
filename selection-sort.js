// Sorting an array from smallest to highest.
let myArray = [5,8,9,2,6,3,10];
//Function for find the smallest number
function findSmallest(array){
    let smallest = array[0];
    let smallest_index = 0;
    for(let i=1;i<array.length;i++){
        if(array[i]< smallest){
            smallest = array[i];
            smallest_index = i;
        }
    }
    return smallest_index;
}

// sorting function 
function sortArray(array){
    let newArr = [];
    let copyArr = [...array]; //copy the original array before mutating
    while(copyArr.length > 0) {
    let smallest = findSmallest(copyArr);
    newArr.push(...copyArr.splice(smallest,1));// splice will create nested array which why use the spread operator.
   }
    return newArr
}
console.log(sortArray(myArray));
