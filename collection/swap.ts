
function swap(aIndex,bIndex,myArray){
    myArray[aIndex] = myArray[aIndex] + myArray[bIndex]
    myArray[bIndex] = myArray[aIndex] -  myArray[bIndex]
    myArray[aIndex] = myArray[aIndex] -  myArray[bIndex]
}


export default swap
   

